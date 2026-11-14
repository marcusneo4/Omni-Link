import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export default async function RootPage() {
  const authed = await isAuthenticated()
  redirect(authed ? '/browse' : '/login')
}
