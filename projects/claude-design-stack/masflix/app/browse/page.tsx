'use client'

import { useState } from 'react'
import BrowseNav from '@/components/BrowseNav'
import HeroBanner from '@/components/HeroBanner'
import CategoryRow from '@/components/CategoryRow'
import MemoryViewer from '@/components/MemoryViewer'
import {
  memories,
  categories,
  getFeaturedMemory,
  getMemoriesByCategory,
  type Memory,
} from '@/lib/data'

const featured = getFeaturedMemory()

export default function BrowsePage() {
  const [viewingMemory, setViewingMemory] = useState<Memory | null>(null)
  const [viewerPool, setViewerPool] = useState<Memory[]>(memories)

  function openViewer(memory: Memory, pool?: Memory[]) {
    setViewingMemory(memory)
    setViewerPool(pool ?? memories)
  }

  function closeViewer() {
    setViewingMemory(null)
  }

  return (
    <main className="min-h-screen bg-[#141414]">
      <BrowseNav />

      {/* Hero */}
      <HeroBanner
        memory={featured}
        onWatch={m => openViewer(m)}
        onInfo={m => openViewer(m)}
      />

      {/* Category rows */}
      <div className="relative z-10 -mt-6 pb-16">
        {categories.map(cat => {
          const catMemories = getMemoriesByCategory(cat.id)
          if (catMemories.length === 0) return null
          return (
            <CategoryRow
              key={cat.id}
              title={cat.name}
              memories={catMemories}
              onMemoryClick={m => openViewer(m, catMemories)}
            />
          )
        })}
      </div>

      {/* Full-screen viewer */}
      {viewingMemory && (
        <MemoryViewer
          memory={viewingMemory}
          allMemories={viewerPool}
          onClose={closeViewer}
          onNavigate={m => setViewingMemory(m)}
        />
      )}
    </main>
  )
}
