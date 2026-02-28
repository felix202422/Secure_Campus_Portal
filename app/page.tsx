import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Secure Campus Portal
        </h1>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-gray-800 hover:bg-gray-900 transition text-white px-6 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}