'use client'

import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Play, Image as ImageIcon } from 'lucide-react'
import { Memory } from '@/lib/data'

interface Props {
  memory: Memory
  allMemories: Memory[]
  onClose: () => void
  onNavigate: (memory: Memory) => void
}

export default function MemoryViewer({ memory, allMemories, onClose, onNavigate }: Props) {
  const currentIndex = allMemories.findIndex(m => m.id === memory.id)
  const prevMemory = currentIndex > 0 ? allMemories[currentIndex - 1] : null
  const nextMemory = currentIndex < allMemories.length - 1 ? allMemories[currentIndex + 1] : null

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && prevMemory) onNavigate(prevMemory)
    if (e.key === 'ArrowRight' && nextMemory) onNavigate(nextMemory)
  }, [onClose, prevMemory, nextMemory, onNavigate])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      role="dialog"
      aria-modal="true"
      aria-label={memory.title}
    >
      {/* Full-screen gradient background — replaced by real media */}
      <div className={`absolute inset-0 bg-gradient-to-br ${memory.gradientClass} opacity-70`} />

      {/* Media placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        {memory.mediaType === 'video' ? (
          <div className="flex flex-col items-center gap-4 text-white/30">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20">
              <Play size={36} fill="currentColor" className="ml-1" />
            </div>
            <span className="text-sm">Video placeholder · {memory.duration}</span>
            <span className="text-xs">Real media will appear here when added</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-white/30">
            <ImageIcon size={48} />
            <span className="text-sm">Photo placeholder</span>
            <span className="text-xs">Real media will appear here when added</span>
          </div>
        )}
      </div>

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)' }}
      />

      {/* Bottom gradient + info */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)' }}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Prev/Next */}
      {prevMemory && (
        <button
          onClick={() => onNavigate(prevMemory)}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80 md:left-8"
          aria-label="Previous memory"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {nextMemory && (
        <button
          onClick={() => onNavigate(nextMemory)}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/80 md:right-8"
          aria-label="Next memory"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Memory info — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-10 md:px-16">
        {/* Year + location */}
        <div className="mb-2 flex items-center gap-3">
          <span className="text-sm font-medium text-[#E50914] uppercase tracking-widest">{memory.year}</span>
          <span className="text-[#b3b3b3] text-sm">·</span>
          <span className="flex items-center gap-1 text-sm text-[#b3b3b3]">
            <MapPin size={12} />
            {memory.location}
          </span>
          <span className="text-[#b3b3b3] text-sm">·</span>
          <span className="flex items-center gap-1 text-sm text-[#b3b3b3]">
            <Calendar size={12} />
            {memory.date}
          </span>
        </div>

        {/* Title */}
        <h2
          className="mb-3 leading-none text-white"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '0.02em',
          }}
        >
          {memory.title}
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
          {memory.description}
        </p>

        {/* Counter */}
        {allMemories.length > 1 && (
          <p className="mt-4 text-xs text-[#737373]">
            {currentIndex + 1} / {allMemories.length}
          </p>
        )}
      </div>
    </div>
  )
}
