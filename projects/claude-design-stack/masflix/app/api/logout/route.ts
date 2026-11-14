import { NextResponse } from 'next/server'
import { clearAuthCookieHeader } from '@/lib/auth'

export function GET() {
  const response = NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'))
  response.headers.set('Set-Cookie', clearAuthCookieHeader())
  return response
}
