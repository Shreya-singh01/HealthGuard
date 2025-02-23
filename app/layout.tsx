import type React from "react"
import { Inter } from "next/font/google"

import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { HealthChat } from "@/components/chat/health-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "HealthGuard - ML-Powered Health Monitoring",
  description: "Real-time health monitoring with ML-powered anomaly detection",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen={true}>
          <div className="flex h-screen">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto bg-muted/40">{children}</main>
          </div>
          <HealthChat />
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  )
}



import './globals.css'