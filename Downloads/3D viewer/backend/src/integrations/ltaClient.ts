import { env } from "../config/env.js";

export interface LtaBusArrival {
  ServiceNo: string;
  Operator: string;
  NextBus: LtaBusArrivalSlot;
  NextBus2: LtaBusArrivalSlot;
  NextBus3: LtaBusArrivalSlot;
}

export interface LtaBusArrivalSlot {
  OriginCode: string;
  DestinationCode: string;
  EstimatedArrival: string; // ISO8601 string, empty if not in service
  Monitored: number; // 0 or 1
  Latitude: string;
  Longitude: string;
  VisitNumber: string;
  Load: "SEA" | "SDA" | "LSD" | "";
  Feature: string;
  Type: "SD" | "DD" | "BD" | "";
}

interface LtaBusArrivalResponse {
  BusStopCode: string;
  Services: LtaBusArrival[];
}

export async function fetchBusArrivals(
  stopCode: string
): Promise<LtaBusArrival[]> {
  const url = `${env.LTA_BASE_URL}/BusArrivalv2?BusStopCode=${encodeURIComponent(stopCode)}`;
  const res = await fetch(url, {
    headers: { AccountKey: env.LTA_API_KEY },
    signal: AbortSignal.timeout(8_000),
  });

  if (!res.ok) {
    throw new Error(
      `LTA API error: ${res.status} ${res.statusText} for stop ${stopCode}`
    );
  }

  const data = (await res.json()) as LtaBusArrivalResponse;
  return data.Services ?? [];
}
