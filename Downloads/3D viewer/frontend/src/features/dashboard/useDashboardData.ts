import { useState, useEffect, useCallback, useRef } from "react";
import { getDashboard, getWeather } from "../../lib/apiClient";
import type { DashboardResponse, WeatherResponse } from "../../lib/apiClient";

const REFRESH_INTERVAL_MS = 30_000;

export interface DashboardDataState {
  dashboard: DashboardResponse | null;
  weather: WeatherResponse | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  isStale: boolean;
  refresh: () => void;
}

export function useDashboardData(
  stopCode: string,
  walkTimeMin: number
): DashboardDataState {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isStale, setIsStale] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const fetchAll = useCallback(async () => {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setIsStale(false);

    try {
      const [dash, wx] = await Promise.allSettled([
        getDashboard(stopCode, walkTimeMin),
        getWeather(),
      ]);

      if (controller.signal.aborted) return;

      if (dash.status === "fulfilled") {
        setDashboard(dash.value);
      } else {
        setError(dash.reason instanceof Error ? dash.reason.message : "Failed to load bus data");
      }

      if (wx.status === "fulfilled") {
        setWeather(wx.value);
      }

      setLastUpdated(new Date());
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [stopCode, walkTimeMin]);

  // Initial fetch and refresh interval
  useEffect(() => {
    void fetchAll();
    const interval = setInterval(() => {
      void fetchAll();
    }, REFRESH_INTERVAL_MS);

    return () => {
      clearInterval(interval);
      abortRef.current?.abort();
    };
  }, [fetchAll]);

  // Mark data as stale after 60s without a successful refresh
  useEffect(() => {
    if (!lastUpdated) return;
    const staleTimer = setTimeout(
      () => setIsStale(true),
      REFRESH_INTERVAL_MS * 2
    );
    return () => clearTimeout(staleTimer);
  }, [lastUpdated]);

  return { dashboard, weather, loading, error, lastUpdated, isStale, refresh: fetchAll };
}
