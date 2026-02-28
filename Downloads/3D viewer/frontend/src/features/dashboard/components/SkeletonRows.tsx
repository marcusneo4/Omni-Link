export function SkeletonRows({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
        >
          <div className="skeleton h-8 w-12 rounded-md" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="skeleton h-3 w-24 rounded" />
            <div className="skeleton h-3 w-36 rounded" />
          </div>
          <div className="skeleton h-9 w-20 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
