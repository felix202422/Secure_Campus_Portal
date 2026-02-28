"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useAuth } from "./auth/AuthProvider"

export default function Navbar() {
  const { logout, user } = useAuth()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  const current = mounted ? theme : "system"

  return (
    <div className="bg-white dark:bg-gray-950 shadow-sm px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <h1 className="font-semibold text-lg text-gray-700 dark:text-gray-200">
        {user?.role === "admin" ? "Admin Dashboard" : "Student Dashboard"}
      </h1>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(current === "dark" ? "light" : "dark")}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition text-sm text-gray-700 dark:text-gray-200"
        >
          {current === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-white px-4 py-2 rounded-lg"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}