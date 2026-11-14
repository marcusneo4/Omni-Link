'use client'

import { Play, Info } from 'lucide-react'
import { Memory } from '@/lib/data'

interface Props {
  memory: Memory
  onWatch: (memory: Memory) => void
  onInfo: (memory: Memory) => void
}

export default function HeroBanner({ memory, onWatch, onInfo }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '85vh' }}
    >
      {/* Background gradient / placeholder for future real image */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${memory.gradientClass}`}
      />

      {/* Animated glow overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(229,9,20,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Media placeholder badge */}
      {memory.mediaType === 'video' && memory.duration && (
        <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded bg-black/50 px-3 py-1 text-xs text-[#b3b3b3] backdrop-blur-sm md:top-8 md:right-8">
          <Play size={10} fill="currentColor" />
          <span>{memory.duration}</span>
        </div>
      )}

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-10 pb-20 md:px-16 md:pb-24">
        {/* Year + location pill */}
        <div className="mb-3 flex items-center gap-3">
          <span className="text-sm font-medium text-[#E50914] uppercase tracking-widest">
            {memory.year}
          </span>
          <span className="text-[#b3b3b3] text-sm">·</span>
          <span className="text-sm text-[#b3b3b3]">{memory.location}</span>
        </div>

        {/* Title */}
        <h1
          className="mb-4 leading-none text-white"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            letterSpacing: '0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          {memory.title}
        </h1>

        {/* Description */}
        <p
          className="mb-7 max-w-lg text-base leading-relaxed text-white/90"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
        >
          {memory.description}
        </p>

        {/* Date */}
        <p className="mb-7 text-sm text-[#b3b3b3]">{memory.date}</p>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onWatch(memory)}
            className="flex items-center gap-2.5 rounded bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-white/80 active:scale-95"
          >
            <Play size={18} fill="currentColor" />
            {memory.mediaType === 'video' ? 'Play' : 'View'}
          </button>
          <button
            onClick={() => onInfo(memory)}
            className="flex items-center gap-2.5 rounded bg-white/20 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/30 active:scale-95"
          >
            <Info size={18} />
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}
