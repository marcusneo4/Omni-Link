'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Settings, LogOut } from 'lucide-react'

export default function BrowseNav({ isAdmin = false }: { isAdmin?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-colors duration-300 md:px-16"
      style={{
        background: scrolled
          ? 'rgba(20,20,20,0.97)'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <Link href="/browse" className="flex items-center gap-3">
        <span
          className="text-[#E50914] leading-none select-none"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '1.9rem',
            letterSpacing: '0.06em',
          }}
        >
          MASFLIX
        </span>
      </Link>

      <nav className="flex items-center gap-4">
        {!isAdmin && (
          <Link
            href="/admin"
            className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm text-[#b3b3b3] transition-colors hover:text-white"
            title="Manage content"
          >
            <Settings size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">Manage</span>
          </Link>
        )}
        {isAdmin && (
          <Link
            href="/browse"
            className="text-sm text-[#b3b3b3] transition-colors hover:text-white"
          >
            ← Back to MASFLIX
          </Link>
        )}
        <a
          href="/api/logout"
          className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm text-[#b3b3b3] transition-colors hover:text-white"
          title="Sign out"
        >
          <LogOut size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">Sign out</span>
        </a>
      </nav>
    </header>
  )
}
