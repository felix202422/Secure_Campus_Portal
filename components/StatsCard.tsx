interface Props {
  title: string
  value: string
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  )
}