"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"

const traffic = [
  { day: "Mon", users: 40 },
  { day: "Tue", users: 55 },
  { day: "Wed", users: 35 },
  { day: "Thu", users: 70 },
  { day: "Fri", users: 65 },
  { day: "Sat", users: 30 },
  { day: "Sun", users: 45 },
]

const requests = [
  { week: "W1", pending: 12 },
  { week: "W2", pending: 18 },
  { week: "W3", pending: 9 },
  { week: "W4", pending: 15 },
]

export default function AdminAnalytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Weekly Active Users</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={traffic}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Pending Requests</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={requests}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}