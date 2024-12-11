"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, TrendingUp, Trophy, Brain, Calculator, BookOpen, ChevronRight, ClubIcon as Football, GuitarIcon as Golf, ShoppingBasketIcon as Basketball, BeerIcon as Baseball, HopIcon as Hockey, Gamepad2, ArrowUpRight, BirdIcon as Avatar, BirdIcon as Avatar, BirdIcon as Avatar } from 'lucide-react'

interface NewsArticle {
  date: string
  title: string
  sport: string
  category: string
}

interface Prediction {
  sport: string
  time: string
  status?: "In play"
  title: string
  author: {
    name: string
    image: string
    initials: string
  }
  teams: {
    home: {
      name: string
      logo: string
    }
    away: {
      name: string
      logo: string
    }
  }
  returns: {
    stake: number
    amount: number
    multiplier: number
  }
}

const newsArticles: NewsArticle[] = [
  {
    date: "Today",
    title: "Tiger Woods Announces Return at Hero World Challenge",
    sport: "PGA",
    category: "Breaking News"
  },
  {
    date: "Today",
    title: "NFL Week 13 Key Matchups: Eagles vs 49ers Preview",
    sport: "NFL",
    category: "Analysis"
  },
  {
    date: "Today",
    title: "College Football Playoff Rankings: Georgia Remains #1",
    sport: "NCAAF",
    category: "Rankings"
  },
  {
    date: "Today",
    title: "NBA MVP Race: Jokic Takes Lead in Latest Rankings",
    sport: "NBA",
    category: "Analysis"
  },
  {
    date: "Today",
    title: "NHL Power Rankings: Bruins Continue Dominance",
    sport: "NHL",
    category: "Rankings"
  }
]

const predictions: Prediction[] = [
  {
    sport: "Football",
    time: "Today · 19:30",
    title: "Clemson Football 2022 Predictions: Schedule & Win...",
    author: {
      name: "Roman Danyliuk",
      image: "/placeholder.svg?height=32&width=32",
      initials: "RD"
    },
    teams: {
      home: {
        name: "Clemson Tigers",
        logo: "/placeholder.svg?height=40&width=40"
      },
      away: {
        name: "Louisville Cardinals",
        logo: "/placeholder.svg?height=40&width=40"
      }
    },
    returns: {
      stake: 10,
      amount: 405.40,
      multiplier: 10.1
    }
  },
  {
    sport: "Football",
    time: "1 Nov · 19:30",
    title: "Matchday betting tip of the day Veres Rivne — Shakhtar...",
    author: {
      name: "Wade Warren",
      image: "/placeholder.svg?height=32&width=32",
      initials: "WW"
    },
    teams: {
      home: {
        name: "Veres Rivne",
        logo: "/placeholder.svg?height=40&width=40"
      },
      away: {
        name: "Shakhtar Donetsk",
        logo: "/placeholder.svg?height=40&width=40"
      }
    },
    returns: {
      stake: 10,
      amount: 100.10,
      multiplier: 3.1
    }
  },
  {
    sport: "E-sports",
    time: "Today · 20:00",
    status: "In play",
    title: "Navi vs Fnatic Rising Bet Builder Tip",
    author: {
      name: "Darrell Steward",
      image: "/placeholder.svg?height=32&width=32",
      initials: "DS"
    },
    teams: {
      home: {
        name: "NAVI",
        logo: "/placeholder.svg?height=40&width=40"
      },
      away: {
        name: "Fnatic Rising",
        logo: "/placeholder.svg?height=40&width=40"
      }
    },
    returns: {
      stake: 10,
      amount: 20.00,
      multiplier: 2.1
    }
  }
]

const guides = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      "Understanding AI Predictions",
      "How to Read Our Models",
      "Bankroll Management",
    ]
  },
  {
    title: "Tools for Bettors",
    icon: Calculator,
    items: [
      "Odds Calculator",
      "Probability Converter",
      "Arbitrage Finder",
    ]
  },
  {
    title: "Advanced Analytics",
    icon: Brain,
    items: [
      "Model Performance Stats",
      "Historical Analysis",
      "Trend Detection",
    ]
  }
]

export default function AIToolsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.05),transparent_50%)]" />
      
      <div className="relative space-y-8">
        {/* Sport Predictions Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-purple-500" />
              <h2 className="text-xl font-semibold">Sport Predictions</h2>
            </div>
            <Button variant="ghost" size="sm">
              View all
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4">
            {predictions.map((prediction, index) => (
              <Card key={index} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors">
                <CardContent className="p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{prediction.sport}</span>
                        <span className="text-sm text-muted-foreground">|</span>
                        <span className="text-sm text-muted-foreground">{prediction.time}</span>
                      </div>
                      {prediction.status && (
                        <Badge className="bg-red-500/20 text-red-400">
                          {prediction.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Title and Author */}
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">{prediction.title}</h3>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={prediction.author.image} alt={prediction.author.name} />
                        <AvatarFallback>{prediction.author.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{prediction.author.name}</span>
                    </div>
                  </div>

                  {/* Teams and Returns */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <img src={prediction.teams.home.logo} alt="" className="h-8 w-8" />
                        <img src={prediction.teams.away.logo} alt="" className="h-8 w-8" />
                      </div>
                      <span className="text-sm">
                        {prediction.teams.home.name} — {prediction.teams.away.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="text-muted-foreground">${prediction.returns.stake} RETURNS </span>
                        <span className="text-emerald-400">${prediction.returns.amount}</span>
                      </div>
                      <Badge variant="outline" className="bg-emerald-500/10">
                        {prediction.returns.multiplier}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* News & Articles Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-semibold">News & Articles</h2>
            </div>
            <Button variant="ghost" className="text-sm">
              View all
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4">
            {newsArticles.map((article, index) => (
              <Card key={index} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-blue-400 border-blue-400/20">
                        {article.sport}
                      </Badge>
                      <Badge variant="outline" className="text-purple-400 border-purple-400/20">
                        {article.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="mt-2 font-medium">{article.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Guides Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="bg-black/40 border-white/10">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <guide.icon className="h-5 w-5 text-purple-400" />
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {guide.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">
                      <ChevronRight className="h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

