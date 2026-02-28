import express from "express";
import cors from "cors";
import morgan from "morgan";
import { env } from "./config/env.js";
import dashboardRouter from "./routes/dashboard.js";

const app = express();

app.use(
  cors({
    origin:
      env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5173", "http://localhost:4173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

// Health / readiness
app.get("/health", (_req, res) => {
  res.json({ status: "ok", ts: new Date().toISOString() });
});

// API routes
app.use("/api", dashboardRouter);

// 404 catch-all
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("[server] unhandled error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
);

const server = app.listen(env.PORT, () => {
  console.log(`[server] Bus Aunty BFF running on http://localhost:${env.PORT}`);
});

export { app, server };
