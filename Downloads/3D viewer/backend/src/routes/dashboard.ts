import { Router } from "express";
import type { Request, Response } from "express";
import { z } from "zod";
import { fetchBusArrivals } from "../integrations/ltaClient.js";
import { fetchWeather } from "../integrations/weatherClient.js";
import { normalizeServices } from "../domain/normalizeBusArrival.js";
import { TtlCache } from "../lib/cache.js";
import { env } from "../config/env.js";

const router = Router();
const cache = new TtlCache(env.CACHE_TTL_MS);

const dashboardQuerySchema = z.object({
  stopCode: z.string().min(1),
  walkTimeMin: z.coerce.number().min(0).max(60).default(5),
});

router.get("/dashboard", async (req: Request, res: Response) => {
  const parsed = dashboardQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({
      error: "Invalid query parameters",
      details: parsed.error.flatten().fieldErrors,
    });
    return;
  }

  const { stopCode, walkTimeMin } = parsed.data;
  const cacheKey = `dashboard:${stopCode}`;

  try {
    let rawServices = cache.get<Awaited<ReturnType<typeof fetchBusArrivals>>>(cacheKey);

    if (!rawServices) {
      rawServices = await fetchBusArrivals(stopCode);
      cache.set(cacheKey, rawServices);
    }

    const services = normalizeServices(rawServices, walkTimeMin);

    res.json({
      stopCode,
      fetchedAt: new Date().toISOString(),
      services,
    });
  } catch (err) {
    console.error("[/api/dashboard] error:", err);
    res.status(502).json({ error: "Failed to fetch bus arrival data" });
  }
});

const weatherCacheKey = "weather:singapore";

router.get("/weather", async (_req: Request, res: Response) => {
  try {
    let weather = cache.get<Awaited<ReturnType<typeof fetchWeather>>>(weatherCacheKey);

    if (!weather) {
      weather = await fetchWeather();
      cache.set(weatherCacheKey, weather, 5 * 60_000); // 5-min TTL for weather
    }

    res.json(weather);
  } catch (err) {
    console.error("[/api/weather] error:", err);
    res.status(502).json({ error: "Failed to fetch weather data" });
  }
});

export default router;
