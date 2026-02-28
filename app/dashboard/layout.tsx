import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import RequireAuth from "../../components/auth/RequireAuth"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <RequireAuth>
      <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-6 fade-in">
            {children}
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}