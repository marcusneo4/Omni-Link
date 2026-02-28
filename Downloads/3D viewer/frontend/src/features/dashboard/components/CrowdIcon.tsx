import { User, Users } from "lucide-react";
import type { ArrivalSlot } from "../../../lib/apiClient";

interface Props {
  level: ArrivalSlot["crowdLevel"];
}

export function CrowdIcon({ level }: Props) {
  if (level === "seats") {
    return (
      <span title="Seats available" className="text-emerald-400">
        <User size={14} strokeWidth={2} />
      </span>
    );
  }
  if (level === "standing") {
    return (
      <span title="Standing room" className="text-amber-400 flex">
        <User size={14} strokeWidth={2} />
        <User size={14} strokeWidth={2} className="-ml-1" />
      </span>
    );
  }
  if (level === "full") {
    return (
      <span title="Full / no room" className="text-red-400">
        <Users size={14} strokeWidth={2} />
      </span>
    );
  }
  return null;
}
