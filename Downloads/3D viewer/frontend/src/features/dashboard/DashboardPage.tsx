import { useState, useMemo } from "react";
import { useDashboardData } from "./useDashboardData";
import { usePreferences } from "../preferences/usePreferences";
import { useEnrichedServices } from "../action-engine/useActionStatus";
import { WeatherHeader } from "./components/WeatherHeader";
import { ControlsBar } from "./components/ControlsBar";
import { ServiceList } from "./components/ServiceList";
import { preferencesStore } from "../preferences/preferencesStore";
import { useNow } from "../../hooks/useNow";

export function DashboardPage() {
  const [prefs, updatePrefs] = usePreferences();
  const [filter, setFilter] = useState("");

  const { dashboard, weather, loading, error, lastUpdated, isStale, refresh } =
    useDashboardData(prefs.activeStopCode, prefs.walkTimeMin);

  const now = useNow(1_000);
  const enriched = useEnrichedServices(dashboard?.services ?? [], now);

  const filtered = useMemo(() => {
    if (!filter.trim()) return enriched;
    const q = filter.trim().toLowerCase();
    return enriched.filter((s) => s.serviceNo.toLowerCase().includes(q));
  }, [enriched, filter]);

  function handleStopChange(code: string) {
    updatePrefs({ activeStopCode: code });
    setFilter("");
  }

  function handleWalkTimeChange(mins: number) {
    updatePrefs({ walkTimeMin: mins });
  }

  function handleTogglePin(serviceNo: string) {
    preferencesStore.togglePin(serviceNo);
  }

  return (
    <div className="flex h-full flex-col bg-black text-white overflow-hidden">
      <WeatherHeader
        weather={weather}
        lastUpdated={lastUpdated}
        isStale={isStale}
        loading={loading}
        onRefresh={refresh}
      />

      <ControlsBar
        prefs={prefs}
        filter={filter}
        onFilterChange={setFilter}
        onStopChange={handleStopChange}
        onWalkTimeChange={handleWalkTimeChange}
      />

      {/* Error banner */}
      {error && (
        <div className="mx-4 mt-3 rounded-lg border border-red-800/60 bg-red-950/60 px-4 py-3 text-sm text-red-400">
          ⚠️ {error} — retrying in 30s
        </div>
      )}

      {/* Main scrollable list */}
      <main className="flex-1 overflow-y-auto overscroll-contain">
        <ServiceList
          services={filtered}
          pinnedServices={prefs.pinnedServices}
          loading={loading}
          onTogglePin={handleTogglePin}
        />
      </main>

      {/* Footer status bar */}
      <footer className="border-t border-zinc-900 px-4 py-2 text-[10px] text-zinc-700 flex items-center justify-between">
        <span>
          {dashboard
            ? `${dashboard.services.length} service${dashboard.services.length !== 1 ? "s" : ""} • Stop ${prefs.activeStopCode}`
            : "Loading…"}
        </span>
        <span>Auto-refresh every 30s</span>
      </footer>
    </div>
  );
}
