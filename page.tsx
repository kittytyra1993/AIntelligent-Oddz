import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, DollarSign, BarChart, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Header */}
      <header className="relative border-b border-white/10 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">AIntelligent Oddz</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/dashboard">
                Dashboard
              </Link>
              <Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/predictions">
                Predictions
              </Link>
              <Link className="text-sm text-gray-300 hover:text-white transition-colors" href="/odds-comparison">
                Odds Comparison
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-sm">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 border-purple-600/50 text-purple-400">
            Powered by Advanced AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent">
            The Future of Sports Predictions
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Harness the power of AI for accurate predictions across PGA Tour, NFL, College Football, and NBA
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Predicting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600/50 hover:bg-purple-600/10">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "PGA Tour",
                description: "Advanced golf predictions with player performance analysis",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                icon: TrendingUp,
                title: "NFL",
                description: "Comprehensive game outcomes and player statistics",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: BarChart,
                title: "College Football",
                description: "In-depth team rankings and matchup predictions",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: DollarSign,
                title: "NBA",
                description: "Real-time basketball analytics and scoring insights",
                gradient: "from-orange-600 to-red-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 hover:border-purple-600/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <feature.icon className="h-12 w-12 mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Prediction Accuracy", value: "94%", description: "Average across all sports" },
              { label: "Active Users", value: "50K+", description: "And growing every day" },
              { label: "Predictions Made", value: "1M+", description: "In the last month" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">AIntelligent Oddz</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2023 AIntelligent Oddz. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

