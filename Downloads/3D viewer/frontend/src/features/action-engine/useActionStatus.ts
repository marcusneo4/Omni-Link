import { useMemo } from "react";
import type { ServiceData } from "../../lib/apiClient";

export type ArrivalStatus = "gone" | "leave" | "stay" | null;

export interface EnrichedService extends ServiceData {
  leaveAtDisplay: string | null;
  statusEmoji: string;
  statusLabel: string;
  minsUntilLeave: number | null;
}

const STATUS_EMOJI: Record<NonNullable<ArrivalStatus>, string> = {
  gone: "💨",
  leave: "🏃",
  stay: "☕",
};

const STATUS_LABEL: Record<NonNullable<ArrivalStatus>, string> = {
  gone: "Gone",
  leave: "Leave",
  stay: "Stay",
};

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-SG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Singapore",
  });
}

function getMinsUntilLeave(leaveAt: string | null, now: number): number | null {
  if (!leaveAt) return null;
  return Math.round((new Date(leaveAt).getTime() - now) / 60_000);
}

/**
 * @param services  - Raw service data from the API.
 * @param now       - Current timestamp in ms. Pass a value from `useNow()` so
 *                    the countdown updates every second instead of freezing at
 *                    the moment the last fetch returned.
 */
export function useEnrichedServices(
  services: ServiceData[],
  now: number
): EnrichedService[] {
  return useMemo(
    () =>
      services.map((svc) => ({
        ...svc,
        leaveAtDisplay: svc.leaveAt ? formatTime(svc.leaveAt) : null,
        statusEmoji: svc.status ? STATUS_EMOJI[svc.status] : "—",
        statusLabel: svc.status ? STATUS_LABEL[svc.status] : "—",
        minsUntilLeave: getMinsUntilLeave(svc.leaveAt, now),
      })),
    [services, now]
  );
}
