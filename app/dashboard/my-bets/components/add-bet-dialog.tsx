"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Plus, TrendingUp, DollarSign, PercentIcon, Calendar, Filter, Download, Brain } from 'lucide-react'

// Sample data
const betHistory = [
  { date: "2024-03-15", type: "Player Prop", player: "Shea Theodore", bet: "Over 1.5 Assists", odds: -176, amount: 100, result: "Won", profit: 56.82 },
  { date: "2024-03-15", type: "Player Prop", player: "Pauel Siakam", bet: "Under 0.5 PP", odds: -224, amount: 200, result: "Lost", profit: -200 },
  { date: "2024-03-14", type: "Over/Under", player: "Nick Cousins", bet: "Under 0.5 PP", odds: -176, amount: 150, result: "Won", profit: 85.23 },
]

const profitData = [
  { date: "Mar 10", profit: 150 },
  { date: "Mar 11", profit: -50 },
  { date: "Mar 12", profit: 200 },
  { date: "Mar 13", profit: 125 },
  { date: "Mar 14", profit: -75 },
  { date: "Mar 15", profit: 300 },
]

const winRateData = [
  { type: "Player Props", rate: 68 },
  { type: "Over/Under", rate: 72 },
  { type: "Moneyline", rate: 65 },
  { type: "Parlays", rate: 45 },
]

export default function MyBetsPage() {
  const [selectedSport, setSelectedSport] = useState("all")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Bets</h1>
          <p className="text-muted-foreground">Track and analyze your betting performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Bet
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Bets", value: "156", change: "+12 this week", icon: TrendingUp },
          { title: "Win Rate", value: "67.3%", change: "+2.1% vs last month", icon: PercentIcon },
          { title: "Net Profit", value: "$1,234.56", change: "+$324.75 this week", icon: DollarSign },
          { title: "ROI", value: "15.7%", change: "+3.2% vs last month", icon: TrendingUp },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Bets</TabsTrigger>
          <TabsTrigger value="history">Bet History</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Bets</CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      <SelectItem value="nba">NBA</SelectItem>
                      <SelectItem value="nfl">NFL</SelectItem>
                      <SelectItem value="nhl">NHL</SelectItem>
                      <SelectItem value="mlb">MLB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Player/Team</TableHead>
                    <TableHead>Bet</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Potential Profit</TableHead>
                    <TableHead>AI Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {betHistory.map((bet, index) => (
                    <TableRow key={index}>
                      <TableCell>{bet.date}</TableCell>
                      <TableCell>{bet.type}</TableCell>
                      <TableCell>{bet.player}</TableCell>
                      <TableCell>{bet.bet}</TableCell>
                      <TableCell>{bet.odds}</TableCell>
                      <TableCell>${bet.amount}</TableCell>
                      <TableCell>${(bet.amount * (Math.abs(bet.odds) / 100)).toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-emerald-500/20 text-emerald-500">
                          87%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Betting History</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Date Range
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Player/Team</TableHead>
                    <TableHead>Bet</TableHead>
                    <TableHead>Odds</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead>Profit/Loss</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {betHistory.map((bet, index) => (
                    <TableRow key={index}>
                      <TableCell>{bet.date}</TableCell>
                      <TableCell>{bet.type}</TableCell>
                      <TableCell>{bet.player}</TableCell>
                      <TableCell>{bet.bet}</TableCell>
                      <TableCell>{bet.odds}</TableCell>
                      <TableCell>${bet.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={bet.result === "Won" ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-500"}
                        >
                          {bet.result}
                        </Badge>
                      </TableCell>
                      <TableCell className={bet.profit > 0 ? "text-emerald-500" : "text-red-500"}>
                        ${bet.profit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profit/Loss Trend</CardTitle>
                <CardDescription>Daily profit and loss over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={profitData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke="#10b981"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Win Rate by Bet Type</CardTitle>
                <CardDescription>Performance across different betting types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={winRateData}>
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-emerald-500" />
                  <CardTitle>AI Betting Insights</CardTitle>
                </div>
                <CardDescription>Machine learning-powered analysis of your betting patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Optimal Bet Types",
                    description: "Your highest ROI comes from player prop bets (72% win rate). Consider focusing more on these markets.",
                    type: "success"
                  },
                  {
                    title: "Risk Management",
                    description: "Your average bet size has increased by 25% this month. Consider maintaining consistent bet sizes for better bankroll management.",
                    type: "warning"
                  },
                  {
                    title: "Profitable Patterns",
                    description: "You perform best with NBA player assists props (76% win rate) and NHL powerplay points unders (68% win rate).",
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
                <CardDescription>AI-generated suggestions to improve your betting performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Increase Edge",
                      description: "Consider increasing your exposure to NHL player props, where you have a demonstrated edge with a 15% ROI over 50+ bets.",
                      action: "View NHL Props"
                    },
                    {
                      title: "Reduce Variance",
                      description: "Your parlay win rate is 45% but accounts for 20% of your volume. Consider reducing parlay exposure to minimize variance.",
                      action: "Analyze Parlays"
                    },
                    {
                      title: "Timing Optimization",
                      description: "Your bets placed 3-4 hours before game time show 8% higher ROI than those placed within 1 hour of start time.",
                      action: "View Timing Analysis"
                    }
                  ].map((recommendation, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="font-semibold mb-2">{recommendation.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{recommendation.description}</p>
                      <Button variant="outline" size="sm">
                        {recommendation.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  sport: z.string(),
  betType: z.string(),
  player: z.string().optional(),
  team: z.string().optional(),
  bet: z.string(),
  odds: z.string(),
  amount: z.string(),
})

export function AddBetDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sport: "",
      betType: "",
      player: "",
      team: "",
      bet: "",
      odds: "",
      amount: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Bet</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Bet</DialogTitle>
          <DialogDescription>
            Enter the details of your bet to track its performance.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="sport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sport</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="nba">NBA</SelectItem>
                      <SelectItem value="nfl">NFL</SelectItem>
                      <SelectItem value="nhl">NHL</SelectItem>
                      <SelectItem value="mlb">MLB</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="betType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bet Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bet type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="player_prop">Player Prop</SelectItem>
                      <SelectItem value="team_prop">Team Prop</SelectItem>
                      <SelectItem value="moneyline">Moneyline</SelectItem>
                      <SelectItem value="spread">Spread</SelectItem>
                      <SelectItem value="total">Total</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="player"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Player Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter player name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Required for player props
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bet Details</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Over 1.5 Assists" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="odds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Odds</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., -110" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bet Amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter amount" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Bet</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

