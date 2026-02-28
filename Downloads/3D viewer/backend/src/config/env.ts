import { z } from "zod";
import * as dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  LTA_API_KEY: z.string().min(1, "LTA_API_KEY is required"),
  OPEN_METEO_BASE_URL: z
    .string()
    .url()
    .default("https://api.open-meteo.com/v1"),
  SINGAPORE_LAT: z.coerce.number().default(1.3521),
  SINGAPORE_LON: z.coerce.number().default(103.8198),
  LTA_BASE_URL: z
    .string()
    .url()
    .default("https://datamall2.mytransport.sg/ltaodataservice"),
  CACHE_TTL_MS: z.coerce.number().default(25_000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

function loadEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    const missing = result.error.issues
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((e: any) => `  ${(e.path as PropertyKey[]).map(String).join(".")}: ${String(e.message)}`)
      .join("\n");
    console.error(`[config] Invalid environment variables:\n${missing}`);
    if (process.env.NODE_ENV !== "test") {
      process.exit(1);
    }
    // In test mode, return defaults with a dummy key
    return envSchema.parse({ ...process.env, LTA_API_KEY: "test-key" });
  }
  return result.data;
}

export const env = loadEnv();
export type Env = typeof env;
