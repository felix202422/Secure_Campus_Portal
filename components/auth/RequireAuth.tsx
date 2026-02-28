"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./AuthProvider"

export default function RequireAuth({
  children,
  role,
}: {
  children: React.ReactNode
  role?: "admin" | "student"
}) {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (isLoading) return
    if (!user) router.replace("/login")
    else if (role && user.role !== role) router.replace("/dashboard")
  }, [user, isLoading, role, router])

  if (isLoading) return <div className="p-6">Loading...</div>
  if (!user) return null
  if (role && user.role !== role) return null

  return <>{children}</>
}