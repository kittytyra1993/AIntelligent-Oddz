"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Trophy, Share2, Clock, ChevronDown, ClubIcon as Football, Gamepad2, ArrowUpRight } from 'lucide-react'

interface Bet {
  id: string
  type: "Single" | "Combo"
  date: string
  time: string
  sport: string
  league: string
  teams: string[]
  market: string
  outcome: string
  odds: number
  amount: string
  currency: string
  status: "Win" | "Pending" | "Loss"
  winning?: string
  sportsbook: string
}

const bets: Bet[] = [
  {
    id: "1",
    type: "Single",
    date: "24 Feb",
    time: "Finished",
    sport: "Football",
    league: "Germany · Bundesliga",
    teams: ["SV Werder Bremen", "Borussia Dortmund"],
    market: "Both Team to S",
    outcome: "Yes",
    odds: 1.95,
    amount: "0.0123456",
    currency: "USDT",
    status: "Win",
    winning: "0.0123456",
    sportsbook: "DraftKings"
  },
  {
    id: "2",
    type: "Combo",
    date: "24 Feb",
    time: "Finished",
    sport: "Esports",
    league: "Dota 2 · ESL One DPC CIS",
    teams: ["ViKin.gg", "Team Secret"],
    market: "Full Time Result",
    outcome: "ViKin.gg",
    odds: 11.56,
    amount: "0.0123456",
    currency: "MATIC",
    status: "Win",
    winning: "0.0123456",
    sportsbook: "FanDuel"
  },
  {
    id: "3",
    type: "Single",
    date: "Today",
    time: "17:00",
    sport: "Football",
    league: "Italy · Serie A",
    teams: ["AC Milan", "Parma"],
    market: "Total Goals",
    outcome: "Over 2.5",
    odds: 1.85,
    amount: "0.0123456",
    currency: "USDT",
    status: "Pending",
    sportsbook: "BetMGM"
  }
]

export default function MyBetsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [betType, setBetType] = useState("All")
  const [sortBy, setSortBy] = useState("Event Time")

  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Gradient backgrounds */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,127,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative flex-1 border-l border-white/10">
        <div className="flex h-14 items-center gap-4 border-b border-white/10 px-6 backdrop-blur-sm">
          <h1 className="text-lg font-semibold">My Bets</h1>
        </div>

        <div className="flex h-14 items-center justify-between gap-4 border-b border-white/10 px-6 backdrop-blur-sm">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setSelectedTab("all")}
              className={cn(
                "flex items-center gap-2 border-b-2 py-4 text-sm font-medium transition-colors",
                selectedTab === "all"
                  ? "border-emerald-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              All
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-normal">
                124
              </span>
            </button>
            <button
              onClick={() => setSelectedTab("unredeemed")}
              className={cn(
                "flex items-center gap-2 border-b-2 py-4 text-sm font-medium transition-colors",
                selectedTab === "unredeemed"
                  ? "border-emerald-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              Unredeemed
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-normal">
                3
              </span>
            </button>
            <button
              onClick={() => setSelectedTab("accepted")}
              className={cn(
                "flex items-center gap-2 border-b-2 py-4 text-sm font-medium transition-colors",
                selectedTab === "accepted"
                  ? "border-emerald-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              Accepted
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-normal">
                5
              </span>
            </button>
            <button
              onClick={() => setSelectedTab("settled")}
              className={cn(
                "flex items-center gap-2 border-b-2 py-4 text-sm font-medium transition-colors",
                selectedTab === "settled"
                  ? "border-emerald-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              )}
            >
              Settled
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-normal">
                4
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Bet type:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-white/10 bg-white/5">
                    {betType}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setBetType("All")}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setBetType("Single")}>
                    Single
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setBetType("Combo")}>
                    Combo
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-white/10 bg-white/5">
                    {sortBy}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setSortBy("Event Time")}>
                    Event Time
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("Bet Amount")}>
                    Bet Amount
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("Odds")}>
                    Odds
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="p-6">
            <div className="space-y-4">
              {bets.map((bet) => (
                <Card key={bet.id} className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/[0.075]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                          <span className="text-gray-400">{bet.type}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span>{bet.date}</span>
                          <span className="text-gray-400">·</span>
                          <span>{bet.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            bet.sportsbook === "DraftKings"
                              ? "https://cdn.brandfetch.io/idLDnH1JkY/theme/dark/logo.svg"
                              : bet.sportsbook === "FanDuel"
                              ? "https://upload.wikimedia.org/wikipedia/commons/b/b5/Fanduel_logo.svg"
                              : `https://example.com/${bet.sportsbook.toLowerCase()}-logo.svg`
                          }
                          alt={`${bet.sportsbook} logo`}
                          className="h-6 w-auto"
                          loading="lazy"
                        />
                        {bet.status === "Win" && (
                          <Badge className="bg-emerald-500/20 text-emerald-400">
                            <Trophy className="mr-1 h-3 w-3" />
                            Win
                          </Badge>
                        )}
                        {bet.status === "Pending" && (
                          <Badge variant="outline" className="border-white/20">
                            <Clock className="mr-1 h-3 w-3" />
                            Pending
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      {bet.sport === "Football" ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <Football className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <Gamepad2 className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-gray-400">{bet.league}</p>
                        <p className="font-medium">{bet.teams.join(" – ")}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-8">
                      <div>
                        <p className="text-sm text-gray-400">Market</p>
                        <p className="mt-1 font-medium">{bet.market}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Outcome</p>
                        <p className="mt-1 font-medium">{bet.outcome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Odds</p>
                        <p className="mt-1 font-medium">{bet.odds}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Bet amount</p>
                        <p className="mt-1 font-medium">
                          {bet.amount} {bet.currency}
                        </p>
                      </div>
                    </div>

                    {bet.winning && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-400">Winning</p>
                        <p className="mt-1 font-medium text-emerald-400">
                          {bet.winning} {bet.currency}
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <Separator className="bg-white/5" />
                  <CardFooter className="p-4">
                    <div className="flex w-full items-center gap-2">
                      <Button
                        variant="outline"
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        MINT NFT
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      {bet.status === "Win" && (
                        <Button className="ml-auto bg-gradient-to-r from-emerald-600 to-emerald-500">
                          REDEEM
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

