const STORAGE_KEY = "busAuntyPrefs_v1";

export interface BusStop {
  code: string;
  label: string;
}

export interface Preferences {
  walkTimeMin: number;
  favoriteStops: BusStop[];
  activeStopCode: string;
  pinnedServices: string[];
}

const DEFAULT_PREFERENCES: Preferences = {
  walkTimeMin: 5,
  favoriteStops: [
    { code: "96049", label: "Varsity Park" },
    { code: "96041", label: "Back Gate" },
  ],
  activeStopCode: "96049",
  pinnedServices: [],
};

function load(): Preferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };
    const parsed = JSON.parse(raw) as Partial<Preferences>;
    return { ...DEFAULT_PREFERENCES, ...parsed };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

function save(prefs: Preferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // quota exceeded or private mode — silently ignore
  }
}

// Simple observer pattern so components can subscribe to changes
type Listener = (prefs: Preferences) => void;
const listeners = new Set<Listener>();
let current = load();

export const preferencesStore = {
  get(): Preferences {
    return current;
  },

  update(partial: Partial<Preferences>): void {
    current = { ...current, ...partial };
    save(current);
    listeners.forEach((fn) => fn(current));
  },

  subscribe(fn: Listener): () => void {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  togglePin(serviceNo: string): void {
    const pinned = current.pinnedServices.includes(serviceNo)
      ? current.pinnedServices.filter((s) => s !== serviceNo)
      : [...current.pinnedServices, serviceNo];
    preferencesStore.update({ pinnedServices: pinned });
  },

  reset(): void {
    current = { ...DEFAULT_PREFERENCES };
    save(current);
    listeners.forEach((fn) => fn(current));
  },
};
