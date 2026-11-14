import { NextRequest, NextResponse } from 'next/server'
import { getPassword, createAuthCookieHeader } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password !== getPassword()) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.headers.set('Set-Cookie', createAuthCookieHeader())
  return response
}
