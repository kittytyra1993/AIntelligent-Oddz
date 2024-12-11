"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Calendar, ArrowUp, ArrowDown, Clock } from 'lucide-react'

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const revenueData = [
  { name: "Jan", total: 4000 },
  { name: "Feb", total: 3000 },
  { name: "Mar", total: 5000 },
  { name: "Apr", total: 4000 },
  { name: "May", total: 3000 },
  { name: "Jun", total: 5000 },
]

const accuracyData = [
  { name: "Jan", accuracy: 85 },
  { name: "Feb", accuracy: 88 },
  { name: "Mar", accuracy: 92 },
  { name: "Apr", accuracy: 90 },
  { name: "May", accuracy: 93 },
  { name: "Jun", accuracy: 95 },
]

export default function DashboardPage() {
  const [activeSport, setActiveSport] = useState("overview")

  return (
      <div className="flex h-screen bg-black text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Main Content */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Predictions",
                  value: "1,234",
                  change: "+12.3%",
                  trend: "up",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Accuracy Rate",
                  value: "94.2%",
                  change: "+5.1%",
                  trend: "up",
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  title: "Active Users",
                  value: "50K+",
                  change: "-2.4%",
                  trend: "down",
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  title: "Revenue",
                  value: "$123.4K",
                  change: "+18.2%",
                  trend: "up",
                  gradient: "from-orange-600 to-red-600"
                }
              ].map((stat, index) => (
                <Card key={index} className="relative border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-5`} />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className="flex items-center gap-1">
                        {stat.trend === 'up' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {stat.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Revenue Chart */}
            <Card className="border-white/10 bg-black/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={revenueData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip />
                    <Bar dataKey="total" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Accuracy Chart */}
            <Card className="border-white/10 bg-black/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Prediction Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={accuracyData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--secondary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Live Games */}
            <Card className="border-white/10 bg-black/50 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Live Games</CardTitle>
                  <Button variant="outline" size="sm" className="border-white/10">
                    <Clock className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      teams: ["Manchester United", "Barcelona"],
                      league: "Champions League",
                      time: "65:00",
                      score: "2 - 1",
                      odds: "1.95"
                    },
                    {
                      teams: ["Lakers", "Warriors"],
                      league: "NBA",
                      time: "Q3 8:45",
                      score: "87 - 82",
                      odds: "2.10"
                    },
                    {
                      teams: ["Chiefs", "Bills"],
                      league: "NFL",
                      time: "3rd 4:20",
                      score: "24 - 21",
                      odds: "1.75"
                    }
                  ].map((game, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-blue-600/50 text-blue-400">
                          {game.league}
                        </Badge>
                        <div>
                          <div className="font-semibold">{game.teams.join(" vs ")}</div>
                          <div className="text-sm text-gray-400">{game.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-xl font-bold">{game.score}</div>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                          {game.odds}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="col-span-2 border-white/10 bg-black/50 backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Events</CardTitle>
                    <Button variant="outline" size="sm" className="border-white/10">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-4 text-center mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-sm font-medium text-gray-400">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-4">
                    {Array.from({ length: 35 }).map((_, i) => {
                      const day = i + 1
                      const hasEvent = [4, 12, 18, 23, 28].includes(day)
                      return (
                        <Button
                          key={i}
                          variant={hasEvent ? "default" : "ghost"}
                          className={`h-12 ${
                            hasEvent
                              ? "bg-gradient-to-r from-blue-600 to-purple-600"
                              : "hover:bg-white/5"
                          }`}
                        >
                          {day}
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-black/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Prediction",
                        description: "New NFL prediction available",
                        time: "2 mins ago"
                      },
                      {
                        type: "Update",
                        description: "NBA odds updated",
                        time: "15 mins ago"
                      },
                      {
                        type: "Alert",
                        description: "PGA Tour event starting soon",
                        time: "1 hour ago"
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                        <div className="h-2 w-2 rounded-full bg-blue-600" />
                        <div className="flex-1">
                          <div className="font-medium">{activity.type}</div>
                          <div className="text-sm text-gray-400">{activity.description}</div>
                        </div>
                        <div className="text-sm text-gray-400">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
  )
}

