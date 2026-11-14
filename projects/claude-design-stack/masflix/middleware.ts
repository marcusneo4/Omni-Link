import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/auth'

const PROTECTED = ['/browse', '/admin']
const AUTH_ONLY = ['/login']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authed = isAuthenticatedFromRequest(request)

  const isProtected = PROTECTED.some(p => pathname.startsWith(p))
  const isAuthOnly = AUTH_ONLY.some(p => pathname.startsWith(p))

  if (isProtected && !authed) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthOnly && authed) {
    return NextResponse.redirect(new URL('/browse', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/browse/:path*', '/admin/:path*', '/login'],
}
