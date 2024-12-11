"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronRight,
  Command,
  DollarSign,
  Frame,
  GalleryVerticalEnd,
  Home,
  LifeBuoy,
  Link,
  Map,
  PieChart,
  Send,
  Rocket,
  Settings2,
  SquareTerminal,
  Trophy,
  LandPlot,
  Volleyball,
} from "lucide-react"
import { NflIcon } from "@/components/icons/nfl-icon"
import { NavMain } from "@/components/nav-main"
import { usePathname } from "next/navigation"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  SidebarRail,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

  const menuItems = [
    { name: "Overview", icon: Home, href: "/dashboard" },
    { name: "My Bets", icon: DollarSign, href: "/dashboard/my-bets" },
  ]

const data = {
  user: {
    name: "Carter Tyra",
    email: "carter@aintelligentoddz.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "AIntelligent Oddz",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  
  navMain: [
    {
      title: "Sports",
      url: "/dashboard/sports",
      icon: Trophy,
      isActive: true,
      items: [
        {
          title: "NFL",
          url: "/dashboard/sports/nfl",
          icon: NflIcon,
        },
        {
          title: "NBA",
          url: "/dashboard/sports/nba",
          icon: Volleyball,
        },
        {
          title: "College Football",
          url: "/dashboard/sports/college-football",
          icon: Volleyball,
        },
        {
          title: "PGA",
          url: "/dashboard/sports/pga",
          icon: Volleyball,
        },
      ],
    },
    {
      title: "Bets",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "My Bets",
          url: "/dashboard/my-bets",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Chat",
      url: "/dashboard/ai/chat",
      icon: Rocket,
    },
    {
      name: "Predictions",
      url: "/dashboard/ai/predictions",
      icon: PieChart,
    },
    {
      name: "Analysis",
      url: "/dashboard/ai/analysis",
      icon: Map,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
      {/* <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {pathname === item.href && <ChevronRight className="ml-auto h-4 w-4" />}
                </SidebarMenuButton>
             
            </SidebarMenuItem>
          ))}
        </SidebarMenu>   */}
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
