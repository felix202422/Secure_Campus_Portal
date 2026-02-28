"use client"
import { useState } from "react"
import Link from "next/link"

export default function Register() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition text-white p-3 rounded-lg font-semibold"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}