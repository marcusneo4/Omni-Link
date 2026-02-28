import type { ArrivalSlot } from "../../../lib/apiClient";

interface Props {
  type: ArrivalSlot["busType"];
  className?: string;
}

export function BusTypeIcon({ type, className = "" }: Props) {
  // Single deck: simple rectangle bus silhouette
  if (type === "single") {
    return (
      <svg
        viewBox="0 0 24 14"
        className={`h-5 w-8 fill-current ${className}`}
        aria-label="Single deck bus"
      >
        <rect x="1" y="3" width="22" height="9" rx="2" />
        <rect x="2" y="1" width="13" height="4" rx="1" />
        <circle cx="5" cy="13" r="1.5" />
        <circle cx="19" cy="13" r="1.5" />
      </svg>
    );
  }
  // Double deck: taller silhouette
  if (type === "double") {
    return (
      <svg
        viewBox="0 0 24 18"
        className={`h-6 w-8 fill-current ${className}`}
        aria-label="Double deck bus"
      >
        <rect x="1" y="1" width="22" height="15" rx="2" />
        <line x1="1" y1="8" x2="23" y2="8" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="5" cy="17" r="1.5" />
        <circle cx="19" cy="17" r="1.5" />
      </svg>
    );
  }
  // Bendy / articulated: longer bus
  if (type === "bendy") {
    return (
      <svg
        viewBox="0 0 32 14"
        className={`h-5 w-10 fill-current ${className}`}
        aria-label="Bendy bus"
      >
        <rect x="1" y="3" width="13" height="9" rx="2" />
        <rect x="15" y="3" width="16" height="9" rx="2" />
        <rect x="13" y="5" width="4" height="5" rx="0" opacity="0.5" />
        <circle cx="5" cy="13" r="1.5" />
        <circle cx="27" cy="13" r="1.5" />
      </svg>
    );
  }
  return null;
}
