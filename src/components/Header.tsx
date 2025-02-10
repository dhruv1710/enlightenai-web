import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="ml-2 font-semibold text-xl">Enlighten AI</span>
        </Link>

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          <Link href="/explore" className="text-gray-600 hover:text-black">
            Explore
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-black">
            Pricing
          </Link>
        </nav> */}

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {/* <Link href="/login" className="text-gray-600 hover:text-black">
            Log in
          </Link> */}
          <Link href="https://getwaitlist.com/waitlist/25045" className="btn-primary">
            Learn
          </Link>
        </div>
      </div>
    </header>
  )
} 