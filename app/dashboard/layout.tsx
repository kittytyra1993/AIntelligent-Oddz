import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
       <AppSidebar />
      <div className="flex min-h-screen flex-col bg-black">
      {children}
      </div>
   
    </SidebarProvider>
  )
}

