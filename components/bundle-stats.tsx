"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Users, BookOpen, Zap } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    label: "Projects",
    value: "11",
    description: "Real-world applications",
  },
  {
    icon: Zap,
    label: "Video Content",
    value: "16+",
    description: "Hours of expert tutorials",
  },
  {
    icon: Trophy,
    label: "Difficulty",
    value: "Advanced",
    description: "Intermediate to Advanced",
  },
  {
    icon: Users,
    label: "Career Impact",
    value: "High",
    description: "Industry-relevant skills",
  },
]

export default function BundleStats() {
  return (
    <section className="border-b border-border/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-balance">Bundle Overview</h2>
        <p className="mb-12 text-muted-foreground">Everything you need to become a healthcare AI expert</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card
                key={idx}
                className="border-border/60 bg-card/50 hover:bg-card/80 transition-colors p-6 group cursor-pointer"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
