import { ServiceCard } from "./ServiceCard";
import { SkeletonRows } from "./SkeletonRows";
import type { EnrichedService } from "../../action-engine/useActionStatus";

interface Props {
  services: EnrichedService[];
  pinnedServices: string[];
  loading: boolean;
  onTogglePin: (serviceNo: string) => void;
}

export function ServiceList({
  services,
  pinnedServices,
  loading,
  onTogglePin,
}: Props) {
  if (loading && services.length === 0) {
    return <SkeletonRows count={8} />;
  }

  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-zinc-600">
        <span className="text-4xl">🚌</span>
        <p className="text-sm">No buses match your filter</p>
      </div>
    );
  }

  // Sort: pinned first, then by service number
  const sorted = [...services].sort((a, b) => {
    const aPinned = pinnedServices.includes(a.serviceNo) ? 0 : 1;
    const bPinned = pinnedServices.includes(b.serviceNo) ? 0 : 1;
    if (aPinned !== bPinned) return aPinned - bPinned;
    return a.serviceNo.localeCompare(b.serviceNo, undefined, { numeric: true });
  });

  return (
    <div className="flex flex-col gap-2 p-4">
      {sorted.map((svc) => (
        <ServiceCard
          key={svc.serviceNo}
          service={svc}
          isPinned={pinnedServices.includes(svc.serviceNo)}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
}
