"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Send, Plus, Settings2, Calculator, Globe, FileCode, MessagesSquare } from 'lucide-react'

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface Tool {
  id: string
  name: string
  icon: any
  description: string
  active: boolean
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")

  const tools: Tool[] = [
    {
      id: "python",
      name: "Python Runner",
      icon: FileCode,
      description: "Executes and generates code in a secure sandbox.",
      active: true
    },
    {
      id: "calculator",
      name: "Calculator",
      icon: Calculator,
      description: "Performs calculations",
      active: true
    },
    {
      id: "web",
      name: "Web Search",
      icon: Globe,
      description: "Searches the web",
      active: false
    }
  ]

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue("")
  }

  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.05),transparent_50%)]" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
            <p className="text-muted-foreground">Powered by advanced machine learning models</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Settings2 className="h-4 w-4" />
            Configure
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 bg-black/40 backdrop-blur-xl">
            <CardContent className="p-4 flex flex-col h-[calc(100vh-16rem)]">
              <div className="flex-1 overflow-auto space-y-4 p-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <Bot className="h-12 w-12 text-emerald-500" />
                    <h2 className="text-xl font-semibold">Welcome to AI Chat</h2>
                    <p className="text-muted-foreground max-w-sm">
                      Ask me anything about sports predictions, odds analysis, or betting strategies.
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-4 ${
                        message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className="size-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        {message.role === "assistant" ? (
                          <Bot className="size-4 text-emerald-500" />
                        ) : (
                          <MessagesSquare className="size-4 text-emerald-500" />
                        )}
                      </div>
                      <div className={`flex-1 space-y-2 ${message.role === "assistant" ? "" : "text-right"}`}>
                        <div className="rounded-lg bg-muted/50 p-4">
                          {message.content}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="bg-muted/50"
                  />
                  <Button onClick={handleSend} size="icon" className="bg-emerald-500 hover:bg-emerald-600">
                    <Send className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 bg-black/40 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Active Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      tool.active ? 'bg-emerald-500/20' : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-8 rounded-lg ${
                        tool.active ? 'bg-emerald-500/20' : 'bg-muted'
                      } flex items-center justify-center`}>
                        <tool.icon className={`size-4 ${
                          tool.active ? 'text-emerald-500' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium">{tool.name}</p>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                    <Badge variant={tool.active ? "success" : "secondary"}>
                      {tool.active ? "Active" : "Disabled"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

