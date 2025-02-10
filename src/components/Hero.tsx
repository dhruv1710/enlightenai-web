import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container py-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <div className="inline-block p-4  rounded-2xl">
            <Image
              src="/enlighten-logo.png"
              alt="enlighten Logo"
              width={96}
              height={96}
              // className="w-16 h-16"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold mb-8 tracking-tight">
          Discover a new way to learn with AI
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12">
          Featuring AI-powered animations and adaptive learning — New content generated instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="https://getwaitlist.com/waitlist/25045" className="bg-black text-white py-4 px-8 rounded-full shadow-neumorphic">
            Join Waitlist
          </a>
        </div>
        <div className="flex justify-center mt-8">
  <div className="animate-bounce">
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
</div>

        {/* Trusted By Section
        <div className="mt-24">
          <p className="text-sm text-gray-500 mb-8">Trusted by educators at</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {['harvard', 'stanford', 'mit', 'oxford', 'cambridge'].map((logo) => (
              <Image
                key={logo}
                src={`/${logo}-logo.png`}
                alt={`${logo} logo`}
                width={120}
                height={32}
                className="trusted-logo"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
