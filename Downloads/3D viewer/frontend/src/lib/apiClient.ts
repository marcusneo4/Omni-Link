export interface ArrivalSlot {
  estimatedArrival: string | null;
  minutesAway: number | null;
  crowdLevel: "seats" | "standing" | "full" | "unknown";
  busType: "single" | "double" | "bendy" | "unknown";
  isMonitored: boolean;
}

export interface ServiceData {
  serviceNo: string;
  operator: string;
  arrivals: ArrivalSlot[];
  leaveAt: string | null;
  status: "gone" | "leave" | "stay" | null;
}

export interface DashboardResponse {
  stopCode: string;
  fetchedAt: string;
  services: ServiceData[];
}

export interface WeatherResponse {
  temperatureC: number;
  rainProbabilityPct: number;
  ambiance: "rain" | "cloudy" | "sunny";
}

const BASE = "/api";

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API ${res.status}: ${body}`);
  }
  return res.json() as Promise<T>;
}

export async function getDashboard(
  stopCode: string,
  walkTimeMin: number
): Promise<DashboardResponse> {
  return apiFetch<DashboardResponse>(
    `/dashboard?stopCode=${encodeURIComponent(stopCode)}&walkTimeMin=${walkTimeMin}`
  );
}

export async function getWeather(): Promise<WeatherResponse> {
  return apiFetch<WeatherResponse>("/weather");
}
