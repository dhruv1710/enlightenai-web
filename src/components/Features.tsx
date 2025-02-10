export default function Features() {
  const features = [
    {
      title: "AI-Generated Animations",
      description: "Story-driven prompts that break down concepts into step-by-step animated sequences."
    },
    {
      title: "L0 Adaptive Learning",
      description: "Intelligent personalization model that adapts to individual learning patterns."
    },
    {
      title: "Learning Integration",
      description: "Seamlessly enhances traditional teaching methods with powerful visual aids."
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="neo-container p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
