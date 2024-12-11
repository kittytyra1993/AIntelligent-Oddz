"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ArrowUpRight, ArrowDownRight, RefreshCcw, Filter, Download } from 'lucide-react'

const oddsData = [
  { bookmaker: "FanDuel", odds: -110, time: "12:00" },
  { bookmaker: "DraftKings", odds: -108, time: "12:00" },
  { bookmaker: "BetMGM", odds: -112, time: "12:00" },
  { bookmaker: "Caesars", odds: -110, time: "12:00" },
]

const oddsHistoryData = [
  { time: "9:00", fanduel: -110, draftkings: -108, betmgm: -112, caesars: -110 },
  { time: "10:00", fanduel: -112, draftkings: -110, betmgm: -110, caesars: -108 },
  { time: "11:00", fanduel: -110, draftkings: -112, betmgm: -108, caesars: -110 },
  { time: "12:00", fanduel: -108, draftkings: -110, betmgm: -112, caesars: -112 },
]

export default function AIAnalysisPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.05),transparent_50%)]" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Betting Analysis</h1>
            <p className="text-muted-foreground">Real-time odds analysis and arbitrage opportunities</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600">
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Best Odds Found",
                value: "-108",
                change: "Better than average",
                trend: "up",
                bookmaker: "DraftKings"
              },
              {
                title: "Arbitrage Opportunities",
                value: "3",
                change: "+2 from yesterday",
                trend: "up",
                description: "Current opportunities"
              },
              {
                title: "Average Odds",
                value: "-110",
                change: "Market standard",
                trend: "none",
                description: "Across all books"
              },
              {
                title: "Odds Movement",
                value: "±2",
                change: "Last 4 hours",
                trend: "down",
                description: "Points movement"
              },
            ].map((stat, index) => (
              <Card key={index} className="border-0 bg-black/40 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.trend === "up" && <ArrowUpRight className="h-4 w-4 text-emerald-500" />}
                  {stat.trend === "down" && <ArrowDownRight className="h-4 w-4 text-red-500" />}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  {stat.bookmaker && (
                    <Badge className="mt-2 bg-emerald-500/20 text-emerald-500">
                      {stat.bookmaker}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 bg-black/40 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Odds Comparison</CardTitle>
                <CardDescription>Current odds across major sportsbooks</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={oddsData}>
                    <XAxis dataKey="bookmaker" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="odds" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 bg-black/40 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Odds Movement</CardTitle>
                <CardDescription>24-hour odds tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={oddsHistoryData}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="fanduel" stroke="#10b981" />
                    <Line type="monotone" dataKey="draftkings" stroke="#3b82f6" />
                    <Line type="monotone" dataKey="betmgm" stroke="#f59e0b" />
                    <Line type="monotone" dataKey="caesars" stroke="#ef4444" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 bg-black/40 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Machine learning-powered betting recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Arbitrage Opportunity",
                    description: "2.3% guaranteed profit found between DraftKings (-108) and BetMGM (-112)",
                    type: "success"
                  },
                  {
                    title: "Line Movement Alert",
                    description: "Significant line movement detected on FanDuel, moving from -110 to -108",
                    type: "warning"
                  },
                  {
                    title: "Value Bet Identified",
                    description: "Statistical edge found in current DraftKings line compared to our predicted fair odds",
                    type: "info"
                  }
                ].map((insight, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      insight.type === "success" ? "bg-emerald-500/20" :
                      insight.type === "warning" ? "bg-yellow-500/20" :
                      "bg-blue-500/20"
                    }`}
                  >
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

