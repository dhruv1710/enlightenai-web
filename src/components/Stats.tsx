export default function Stats() {
  const stats = [
    {
      value: "45%",
      label: "Improved Learning Outcomes"
    },
    {
      value: "65%",
      label: "Better Information Retention"
    },
    {
      value: "60%",
      label: "Reduced Learning Time"
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="neo-container p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
