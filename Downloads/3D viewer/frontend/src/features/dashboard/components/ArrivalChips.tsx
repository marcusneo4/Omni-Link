import { CrowdIcon } from "./CrowdIcon";
import { BusTypeIcon } from "./BusTypeIcon";
import type { ArrivalSlot } from "../../../lib/apiClient";

interface Props {
  arrivals: ArrivalSlot[];
}

function formatMins(mins: number | null): string {
  if (mins === null) return "—";
  if (mins <= 0) return "Arr";
  return `${mins} min`;
}

export function ArrivalChips({ arrivals }: Props) {
  if (arrivals.length === 0) {
    return <span className="text-xs text-zinc-600">No service</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {arrivals.map((slot, idx) => (
        <div
          key={idx}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-1.5"
        >
          <BusTypeIcon
            type={slot.busType}
            className={
              slot.busType === "double"
                ? "text-sky-400"
                : slot.busType === "bendy"
                  ? "text-violet-400"
                  : "text-zinc-400"
            }
          />
          <span
            className={`text-sm font-semibold tabular-nums ${
              idx === 0 ? "text-white" : "text-zinc-400"
            }`}
          >
            {formatMins(slot.minutesAway)}
          </span>
          <CrowdIcon level={slot.crowdLevel} />
        </div>
      ))}
    </div>
  );
}
