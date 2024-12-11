"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function PGAPage() {
  return (
    <div className="space-y-8">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,127,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative flex-1 border-l border-white/10">
        <div className="flex h-14 items-center gap-4 border-b border-white/10 px-6 backdrop-blur-sm">
          <h1 className="text-lg font-semibold">PGA</h1>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>PGA Tour Predictions</CardTitle>
          <CardDescription>
            View upcoming tournament predictions and player analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-full">
              <Label htmlFor="tournament">Select Tournament</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a tournament" />
                </SelectTrigger>
                <SelectContent>
                  {/* Replace with actual tournament data */}
                  <SelectItem value="tournament1">The Masters</SelectItem>
                  <SelectItem value="tournament2">PGA Championship</SelectItem>
                  <SelectItem value="tournament3">US Open</SelectItem>
                  <SelectItem value="tournament4">The Open Championship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="w-full">
              <Label htmlFor="player">Select Player</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a player" />
                </SelectTrigger>
                <SelectContent>
                  {/* {PGA_PLAYER_NAMES.map((player) => (
                    <SelectItem key={player} value={player}>
                      {player}
                    </SelectItem>
                  ))} */}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="model">Select Prediction Model</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="model1">Model 1</SelectItem>
                <SelectItem value="model2">Model 2</SelectItem>
                <SelectItem value="model3">Model 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Example prediction cards */}
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                Player {i + 1} - Tournament X
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace with actual player data and predictions */}
              <p>Win Probability: 75%</p>
              <p>Predicted Finish: Top 10</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

