import { Pin, PinOff } from "lucide-react";
import clsx from "clsx";
import { ArrivalChips } from "./ArrivalChips";
import type { EnrichedService } from "../../action-engine/useActionStatus";

interface Props {
  service: EnrichedService;
  isPinned: boolean;
  onTogglePin: (serviceNo: string) => void;
}

const STATUS_STYLES = {
  stay: "bg-zinc-900/80 border-zinc-800 hover:border-zinc-600",
  leave: "bg-amber-950/60 border-amber-600/60 hover:border-amber-400 shadow-amber-900/40 shadow-lg",
  gone: "bg-zinc-950/80 border-zinc-900 opacity-60",
};

const STATUS_BADGE_STYLES = {
  stay: "bg-zinc-800 text-zinc-300 border border-zinc-700",
  leave: "bg-amber-500 text-black font-bold animate-pulse",
  gone: "bg-zinc-900 text-zinc-600 border border-zinc-800",
};

export function ServiceCard({ service, isPinned, onTogglePin }: Props) {
  const status = service.status ?? "stay";
  const isGone = status === "gone";

  return (
    <div
      className={clsx(
        "relative flex flex-col gap-3 rounded-xl border p-4 transition-all duration-200",
        STATUS_STYLES[status]
      )}
    >
      {/* Top row: bus number + status badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {isPinned && (
            <Pin
              size={12}
              className="text-amber-400 fill-amber-400 shrink-0"
              aria-label="Pinned"
            />
          )}
          <span
            className={clsx(
              "text-2xl font-black tracking-tight leading-none",
              isGone ? "text-zinc-600" : "text-white"
            )}
          >
            {service.serviceNo}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Status badge */}
          <span
            className={clsx(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold",
              STATUS_BADGE_STYLES[status]
            )}
          >
            <span>{service.statusEmoji}</span>
            <span>{service.statusLabel}</span>
          </span>

          {/* Pin toggle */}
          <button
            onClick={() => onTogglePin(service.serviceNo)}
            className="rounded-md p-1.5 text-zinc-500 transition-colors hover:text-zinc-200 hover:bg-zinc-800 active:scale-95"
            aria-label={isPinned ? "Unpin service" : "Pin service"}
            title={isPinned ? "Unpin" : "Pin to top"}
          >
            {isPinned ? <PinOff size={15} /> : <Pin size={15} />}
          </button>
        </div>
      </div>

      {/* Arrivals row */}
      <ArrivalChips arrivals={service.arrivals} />

      {/* Leave-at indicator */}
      {service.leaveAtDisplay && !isGone && (
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-zinc-500">Step out by</span>
          <span
            className={clsx(
              "font-semibold tabular-nums",
              status === "leave" ? "text-amber-300" : "text-zinc-300"
            )}
          >
            {service.leaveAtDisplay}
          </span>
          {service.minsUntilLeave !== null && service.minsUntilLeave > 0 && (
            <span className="text-zinc-600">
              ({service.minsUntilLeave} min)
            </span>
          )}
        </div>
      )}
    </div>
  );
}
