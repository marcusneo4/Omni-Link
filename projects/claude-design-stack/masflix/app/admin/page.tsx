'use client'

import { useState } from 'react'
import BrowseNav from '@/components/BrowseNav'
import { memories as initialMemories, categories, type Memory } from '@/lib/data'
import {
  Upload,
  Trash2,
  Edit3,
  Star,
  Film,
  Image as ImageIcon,
  Plus,
  MapPin,
  Calendar,
} from 'lucide-react'

export default function AdminPage() {
  const [memories, setMemories] = useState<Memory[]>(initialMemories)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [toast, setToast] = useState('')

  const filtered =
    selectedCategory === 'all'
      ? memories
      : memories.filter(m => m.categoryIds.includes(selectedCategory))

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(''), 2500)
  }

  function setFeatured(id: string) {
    setMemories(prev =>
      prev.map(m => ({ ...m, isFeatured: m.id === id }))
    )
    showToast('Featured memory updated')
  }

  function deleteMemory(id: string) {
    setMemories(prev => prev.filter(m => m.id !== id))
    showToast('Memory removed')
  }

  return (
    <div className="min-h-screen bg-[#141414]">
      <BrowseNav isAdmin />

      <div className="pt-20 px-6 pb-16 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.4rem', letterSpacing: '0.04em' }}
            >
              Manage MASFLIX
            </h1>
            <p className="mt-1 text-sm text-[#b3b3b3]">
              {memories.length} memories across {categories.length} categories
            </p>
          </div>

          {/* Upload button — placeholder, real upload wired later */}
          <button
            onClick={() => showToast('Drop a folder here when ready — wired up when you send the files')}
            className="flex items-center gap-2 rounded bg-[#E50914] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#f40612]"
          >
            <Upload size={16} />
            Add Memories
          </button>
        </div>

        {/* Upload drop zone — placeholder */}
        <div className="mb-8 flex flex-col items-center justify-center rounded border-2 border-dashed border-[#333] bg-[#1f1f1f] px-6 py-12 text-center transition-colors hover:border-[#E50914]/50">
          <Upload size={32} className="mb-3 text-[#4a4a4a]" />
          <p className="mb-1 text-sm font-medium text-[#b3b3b3]">
            Drop your photo or video folder here
          </p>
          <p className="text-xs text-[#4a4a4a]">
            Or click &ldquo;Add Memories&rdquo; above. Supported: JPG, PNG, MP4, MOV.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-white text-black'
                : 'bg-[#2a2a2a] text-[#b3b3b3] hover:bg-[#333] hover:text-white'
            }`}
          >
            All ({memories.length})
          </button>
          {categories.map(cat => {
            const count = memories.filter(m => m.categoryIds.includes(cat.id)).length
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black'
                    : 'bg-[#2a2a2a] text-[#b3b3b3] hover:bg-[#333] hover:text-white'
                }`}
              >
                {cat.name} ({count})
              </button>
            )
          })}
        </div>

        {/* Memory table */}
        <div className="overflow-x-auto rounded">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a] text-[#737373]">
                <th className="pb-3 pr-4 font-medium">Memory</th>
                <th className="pb-3 pr-4 font-medium hidden md:table-cell">Date</th>
                <th className="pb-3 pr-4 font-medium hidden lg:table-cell">Location</th>
                <th className="pb-3 pr-4 font-medium hidden lg:table-cell">Categories</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {filtered.map(memory => (
                <tr key={memory.id} className="group hover:bg-[#1f1f1f] transition-colors">
                  {/* Title + type */}
                  <td className="py-4 pr-4">
                    <div className="flex items-start gap-3">
                      {/* Thumbnail placeholder */}
                      <div
                        className={`flex-none rounded bg-gradient-to-br ${memory.gradientClass} flex items-center justify-center`}
                        style={{ width: 72, height: 42 }}
                      >
                        {memory.mediaType === 'video' ? (
                          <Film size={14} className="text-white/50" />
                        ) : (
                          <ImageIcon size={14} className="text-white/50" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">{memory.title}</span>
                          {memory.isFeatured && (
                            <Star size={12} className="text-[#E50914] fill-[#E50914]" />
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-[#737373] line-clamp-1 max-w-xs">
                          {memory.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 pr-4 hidden md:table-cell">
                    <span className="flex items-center gap-1.5 text-[#b3b3b3]">
                      <Calendar size={12} />
                      {memory.date}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="py-4 pr-4 hidden lg:table-cell">
                    <span className="flex items-center gap-1.5 text-[#b3b3b3]">
                      <MapPin size={12} />
                      {memory.location}
                    </span>
                  </td>

                  {/* Categories */}
                  <td className="py-4 pr-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {memory.categoryIds.map(cid => {
                        const cat = categories.find(c => c.id === cid)
                        return cat ? (
                          <span
                            key={cid}
                            className="rounded bg-[#2a2a2a] px-2 py-0.5 text-[11px] text-[#b3b3b3]"
                          >
                            {cat.name}
                          </span>
                        ) : null
                      })}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!memory.isFeatured && (
                        <button
                          onClick={() => setFeatured(memory.id)}
                          className="rounded p-1.5 text-[#737373] transition-colors hover:bg-[#2a2a2a] hover:text-[#E50914]"
                          title="Set as featured"
                        >
                          <Star size={15} />
                        </button>
                      )}
                      <button
                        onClick={() => showToast('Edit coming soon — add your media first')}
                        className="rounded p-1.5 text-[#737373] transition-colors hover:bg-[#2a2a2a] hover:text-white"
                        title="Edit"
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        onClick={() => deleteMemory(memory.id)}
                        className="rounded p-1.5 text-[#737373] transition-colors hover:bg-[#2a2a2a] hover:text-red-400"
                        title="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-[#4a4a4a]">
              <Plus size={32} className="mx-auto mb-3" />
              <p className="text-sm">No memories in this category yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded bg-[#1f1f1f] px-5 py-3 text-sm text-white shadow-xl ring-1 ring-white/10">
          {toast}
        </div>
      )}
    </div>
  )
}
