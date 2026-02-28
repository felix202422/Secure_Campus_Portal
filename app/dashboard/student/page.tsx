import RequireAuth from "../../../components/auth/RequireAuth"
import StatsCard from "../../../components/StatsCard"

export default function StudentPage() {
  return (
    <RequireAuth role="student">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Student Dashboard</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Attendance" value="85%" />
          <StatsCard title="GPA" value="3.8" />
          <StatsCard title="Completed Courses" value="24" />
        </div>

        <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">My Courses</h3>
          <ul className="space-y-2">
            {["Computer Networks", "Operating Systems", "Database Systems"].map((c) => (
              <li
                key={c}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RequireAuth>
  )
}