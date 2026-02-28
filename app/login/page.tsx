"use client"
import { useState } from "react"
import Link from "next/link"
import { useAuth } from "../../components/auth/AuthProvider"

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<"student" | "admin">("student")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      login({ email, role })
      setLoading(false)
    }, 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold active:scale-[0.99]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}