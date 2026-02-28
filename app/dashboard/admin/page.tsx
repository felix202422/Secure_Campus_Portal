import RequireAuth from "../../../components/auth/RequireAuth"
import AdminAnalytics from "../../../components/charts/AdminAnalytics"
import StatsCard from "../../../components/StatsCard"

export default function AdminPage() {
  return (
    <RequireAuth role="admin">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Admin Panel</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Total Students" value="120" />
          <StatsCard title="Active Users" value="98" />
          <StatsCard title="Pending Requests" value="12" />
        </div>

        <AdminAnalytics />
      </div>
    </RequireAuth>
  )
}