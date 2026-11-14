'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (res.ok) {
      router.push('/browse')
    } else {
      setError('Incorrect password. Try again.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col">
      {/* Background — cinematic gradient noise */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #3d0a0a 0%, #141414 70%)',
        }}
      />

      {/* Nav */}
      <header className="relative z-10 flex items-center px-10 pt-8 md:px-16">
        <span
          className="text-[#E50914] tracking-widest select-none"
          style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.2rem', letterSpacing: '0.08em' }}
        >
          MASFLIX
        </span>
      </header>

      {/* Login card */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm rounded-sm bg-black/75 px-10 py-12 md:px-14">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">
            Sign in
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full rounded bg-[#333333] px-4 py-4 text-white placeholder:text-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-[#E50914] transition-all"
                required
              />
              {error && (
                <p className="text-sm text-[#e87c03] mt-1" role="alert">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="mt-2 w-full rounded bg-[#E50914] py-4 text-base font-bold text-white transition-colors hover:bg-[#f40612] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-8 text-sm text-[#737373]">
            This is a private site made with love.
          </p>
        </div>
      </main>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #141414, transparent)',
        }}
      />
    </div>
  )
}
