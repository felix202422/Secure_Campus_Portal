"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

type Role = "admin" | "student"
type User = { name: string; email: string; role: Role }

type AuthContextValue = {
  user: User | null
  isLoading: boolean
  login: (payload: { email: string; role?: Role }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const LS_KEY = "scp_user"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {}
    setIsLoading(false)
  }, [])

  const login = ({ email, role }: { email: string; role?: Role }) => {
    // demo logic: choose role or infer from email
    const inferredRole: Role = role ?? (email.toLowerCase().includes("admin") ? "admin" : "student")
    const u: User = {
      name: inferredRole === "admin" ? "Admin" : "Student",
      email,
      role: inferredRole,
    }
    localStorage.setItem(LS_KEY, JSON.stringify(u))
    setUser(u)
    router.push(inferredRole === "admin" ? "/dashboard/admin" : "/dashboard/student")
  }

  const logout = () => {
    localStorage.removeItem(LS_KEY)
    setUser(null)
    router.push("/login")
  }

  const value = useMemo(() => ({ user, isLoading, login, logout }), [user, isLoading])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}