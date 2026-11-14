'use client'

import { useState } from 'react'
import { Play, Image as ImageIcon, MapPin, Calendar } from 'lucide-react'
import { Memory } from '@/lib/data'

interface Props {
  memory: Memory
  onClick: (memory: Memory) => void
  priority?: boolean
}

export default function MemoryTile({ memory, onClick, priority }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="relative flex-none cursor-pointer"
      style={{ width: '180px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(memory)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick(memory)}
      tabIndex={0}
      role="button"
      aria-label={`View ${memory.title}`}
    >
      {/* Tile */}
      <div
        className="relative overflow-hidden rounded-sm transition-transform duration-200"
        style={{
          aspectRatio: '16/9',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.6)' : 'none',
          zIndex: hovered ? 10 : 1,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {/* Gradient background — replaced by real image later */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${memory.gradientClass}`}
        />

        {/* Media type icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {memory.mediaType === 'video' ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
              <Play size={18} fill="white" className="text-white ml-0.5" />
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
              <ImageIcon size={16} className="text-white/70" />
            </div>
          )}
        </div>

        {/* Duration badge */}
        {memory.duration && (
          <div className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
            {memory.duration}
          </div>
        )}

        {/* Always-visible title bar at bottom (mobile-first; hidden by hover card on desktop) */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-4 transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        >
          <p className="text-[10px] font-semibold leading-tight text-white/90 line-clamp-1">
            {memory.title}
          </p>
        </div>

        {/* Hover overlay */}
        {hovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        )}
      </div>

      {/* Hover card — description + meta */}
      {hovered && (
        <div
          className="absolute left-0 right-0 z-20 rounded-b-sm bg-[#1f1f1f] px-3 py-3 shadow-xl"
          style={{
            top: '100%',
            marginTop: '-2px',
            transform: 'scale(1.08)',
            transformOrigin: 'top center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
          }}
        >
          {/* Title */}
          <p className="mb-1.5 text-xs font-bold leading-tight text-white line-clamp-1">
            {memory.title}
          </p>

          {/* Description */}
          <p className="mb-2.5 text-[11px] leading-relaxed text-[#b3b3b3] line-clamp-3">
            {memory.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-[10px] text-[#737373]">
            <span className="flex items-center gap-1">
              <Calendar size={9} />
              {memory.year}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={9} />
              {memory.location}
            </span>
          </div>
        </div>
      )}
    </article>
  )
}
