import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to AIntelligent Oddz</h1>
      <p className="text-xl mb-4">Your go-to platform for AI-powered sports predictions</p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard" className="text-blue-500 hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/predictions" className="text-blue-500 hover:underline">
              Predictions
            </Link>
          </li>
          <li>
            <Link href="/odds-comparison" className="text-blue-500 hover:underline">
              Odds Comparison
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

