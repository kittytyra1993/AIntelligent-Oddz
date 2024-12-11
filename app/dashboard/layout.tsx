import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardShell } from "@/components/dashboard-shell"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col bg-black">
      {children}
      </div>
    </SidebarProvider>
  )
}

