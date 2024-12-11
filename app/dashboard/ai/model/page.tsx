"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Sparkles, Zap, Settings2, Save, RotateCcw } from 'lucide-react'

export default function AIModelPage() {
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(2048)
  const [streaming, setStreaming] = useState(true)

  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.05),transparent_50%)]" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Model Customization</h1>
            <p className="text-muted-foreground">Configure and fine-tune your AI models</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 bg-black/40 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Model Parameters</CardTitle>
              <CardDescription>Adjust the core parameters of your AI model</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Temperature</Label>
                    <span className="text-sm text-muted-foreground">{temperature}</span>
                  </div>
                  <Slider
                    value={[temperature]}
                    onValueChange={([value]) => setTemperature(value)}
                    max={1}
                    step={0.1}
                    className="[&_[role=slider]]:bg-emerald-500"
                  />
                  <p className="text-xs text-muted-foreground">
                    Controls randomness: Lower values make the model more focused and deterministic
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Max Tokens</Label>
                    <span className="text-sm text-muted-foreground">{maxTokens}</span>
                  </div>
                  <Slider
                    value={[maxTokens]}
                    onValueChange={([value]) => setMaxTokens(value)}
                    max={4096}
                    step={128}
                    className="[&_[role=slider]]:bg-emerald-500"
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum length of the generated response
                  </p>
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="space-y-0.5">
                    <Label>Response Streaming</Label>
                    <p className="text-xs text-muted-foreground">
                      Enable real-time streaming of model responses
                    </p>
                  </div>
                  <Switch
                    checked={streaming}
                    onCheckedChange={setStreaming}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-black/40 backdrop-blur-xl">
            <CardHeader>
              <CardTitle>Model Performance</CardTitle>
              <CardDescription>Real-time metrics and performance data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-2">
                {[
                  {
                    title: "Response Time",
                    value: "234ms",
                    description: "Average response time",
                    icon: Zap,
                  },
                  {
                    title: "Accuracy Score",
                    value: "94.2%",
                    description: "Prediction accuracy",
                    icon: Brain,
                  },
                  {
                    title: "Active Sessions",
                    value: "1,234",
                    description: "Current model usage",
                    icon: Settings2,
                  },
                  {
                    title: "Success Rate",
                    value: "99.9%",
                    description: "Request completion rate",
                    icon: Sparkles,
                  },
                ].map((metric) => (
                  <div
                    key={metric.title}
                    className="rounded-lg border border-border bg-muted/50 p-4 hover:bg-muted/75 transition-colors"
                  >
                    <metric.icon className="h-4 w-4 text-emerald-500 mb-2" />
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-sm font-medium">{metric.title}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
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

