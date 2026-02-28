import { RefreshCw, AlertTriangle } from "lucide-react";
import clsx from "clsx";
import { useWeatherTheme } from "../../weather/useWeatherTheme";
import type { WeatherResponse } from "../../../lib/apiClient";

interface Props {
  weather: WeatherResponse | null;
  lastUpdated: Date | null;
  isStale: boolean;
  loading: boolean;
  onRefresh: () => void;
}

function formatTime(d: Date): string {
  return d.toLocaleTimeString("en-SG", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Singapore",
  });
}

export function WeatherHeader({
  weather,
  lastUpdated,
  isStale,
  loading,
  onRefresh,
}: Props) {
  const theme = useWeatherTheme(weather?.ambiance);

  return (
    <header
      className={clsx(
        "bg-gradient-to-r border-b px-4 py-3 flex items-center justify-between gap-4",
        theme.headerBg
      )}
    >
      {/* Left: branding */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-lg shrink-0">🚌</span>
        <div className="min-w-0">
          <h1 className="text-base font-black text-white tracking-tight leading-tight truncate">
            Bus Aunty
          </h1>
          <p className="text-[10px] text-zinc-500 leading-tight hidden sm:block">
            Real-time arrival dashboard
          </p>
        </div>
      </div>

      {/* Center: weather */}
      {weather && (
        <div
          className={clsx(
            "flex items-center gap-2 text-sm font-semibold",
            theme.headerText
          )}
        >
          <span className="text-base">{theme.icon}</span>
          <span className="tabular-nums">{weather.temperatureC}°C</span>
          <span className="text-zinc-500 text-xs">
            {weather.rainProbabilityPct}% rain
          </span>
        </div>
      )}

      {/* Right: last updated + refresh */}
      <div className="flex items-center gap-2 shrink-0">
        {isStale && (
          <span
            className="flex items-center gap-1 text-xs text-amber-400"
            title="Data may be outdated"
          >
            <AlertTriangle size={12} />
            <span className="hidden sm:inline">Stale</span>
          </span>
        )}
        {lastUpdated && (
          <span className="hidden sm:block text-[10px] text-zinc-600 tabular-nums">
            {formatTime(lastUpdated)}
          </span>
        )}
        <button
          onClick={onRefresh}
          disabled={loading}
          className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white disabled:opacity-40 active:scale-95"
          aria-label="Refresh now"
          title="Refresh data"
        >
          <RefreshCw
            size={14}
            className={loading ? "animate-spin" : ""}
          />
        </button>
      </div>
    </header>
  );
}
