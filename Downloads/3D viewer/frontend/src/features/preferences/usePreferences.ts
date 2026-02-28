import { useEffect, useState } from "react";
import { preferencesStore, type Preferences } from "./preferencesStore";

export function usePreferences(): [
  Preferences,
  (partial: Partial<Preferences>) => void
] {
  const [prefs, setPrefs] = useState<Preferences>(() =>
    preferencesStore.get()
  );

  useEffect(() => {
    return preferencesStore.subscribe(setPrefs);
  }, []);

  return [prefs, preferencesStore.update.bind(preferencesStore)];
}
