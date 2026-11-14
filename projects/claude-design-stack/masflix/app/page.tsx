import { connection } from 'next/server'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'

export default async function RootPage() {
  await connection()
  const authed = await isAuthenticated()
  redirect(authed ? '/browse' : '/login')
}
