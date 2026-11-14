'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Memory } from '@/lib/data'
import MemoryTile from './MemoryTile'

interface Props {
  title: string
  memories: Memory[]
  onMemoryClick: (memory: Memory) => void
}

export default function CategoryRow({ title, memories, onMemoryClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  if (memories.length === 0) return null

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const amount = 540
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  function onScroll() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }

  return (
    <section className="relative mb-10">
      {/* Row header */}
      <h2
        className="mb-3 px-10 text-sm font-bold uppercase tracking-widest text-white md:px-16"
        style={{ letterSpacing: '0.12em' }}
      >
        {title}
      </h2>

      {/* Scroll container */}
      <div className="group relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-10 flex w-10 items-center justify-center bg-gradient-to-r from-[#141414] to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:w-14"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
        )}

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-10 flex w-10 items-center justify-center bg-gradient-to-l from-[#141414] to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:w-14"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        )}

        {/* Tiles */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="row-scroll flex gap-2 px-10 pb-16 pt-1 md:px-16"
        >
          {memories.map(memory => (
            <MemoryTile
              key={memory.id}
              memory={memory}
              onClick={onMemoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
