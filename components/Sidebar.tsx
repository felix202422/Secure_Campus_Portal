"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkStyle = (path: string) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700"
    }`

  return (
    <>
      {/* Mobile top button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "bg-gray-900 min-h-screen p-6 z-50",
          "w-64",
          "fixed lg:static",
          open ? "left-0" : "-left-72",
          "top-0 transition-all duration-300",
        ].join(" ")}
      >
        <h2 className="text-white text-xl font-bold mb-10">Campus Portal</h2>

        <nav className="space-y-2">
          <Link href="/dashboard" className={linkStyle("/dashboard")} onClick={() => setOpen(false)}>
            📊 Dashboard
          </Link>

          <Link
            href="/dashboard/student"
            className={linkStyle("/dashboard/student")}
            onClick={() => setOpen(false)}
          >
            👤 Student Panel
          </Link>

          <Link
            href="/dashboard/admin"
            className={linkStyle("/dashboard/admin")}
            onClick={() => setOpen(false)}
          >
            🛠 Admin Panel
          </Link>
        </nav>
      </aside>
    </>
  )
}