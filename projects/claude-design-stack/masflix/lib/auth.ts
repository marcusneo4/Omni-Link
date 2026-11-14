import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const COOKIE_NAME = 'masflix_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export function getPassword(): string {
  return process.env.MASFLIX_PASSWORD ?? 'masflix'
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(COOKIE_NAME)
  return cookie?.value === 'true'
}

export function isAuthenticatedFromRequest(request: NextRequest): boolean {
  return request.cookies.get(COOKIE_NAME)?.value === 'true'
}

export function createAuthCookieHeader(): string {
  return `${COOKIE_NAME}=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`
}

export function clearAuthCookieHeader(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}
