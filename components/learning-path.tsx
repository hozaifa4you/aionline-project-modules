"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const weeks = [
  {
    week: "WEEK 1-2",
    title: "Foundations",
    projects: ["Leaf Disease Detection", "Blood Cell Classification", "Mental Health Sentiment"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    week: "WEEK 3-4",
    title: "Core Medical AI",
    projects: ["Skin Cancer Detection", "Cervical Cancer Detection", "Healthcare Trends"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    week: "WEEK 5-6",
    title: "Eye & Vision AI",
    projects: ["Glaucoma Detection", "Cataract Detection"],
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    week: "WEEK 7-8",
    title: "Agriculture & Advanced Tech",
    projects: ["Crop Disease Detection", "Banana Leaf Detection (ViT)"],
    color: "from-green-500/20 to-green-500/5",
  },
]

export default function LearningPath() {
  return (
    <section className="border-b border-border/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-balance">Recommended Learning Path</h2>
          <p className="text-muted-foreground">45-55 hours to master healthcare AI</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weeks.map((item, idx) => (
            <Card
              key={idx}
              className={`border-border/60 bg-gradient-to-br ${item.color} p-6 hover:shadow-lg transition-shadow`}
            >
              <Badge variant="outline" className="mb-3 border-accent/40 text-accent">
                {item.week}
              </Badge>
              <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
              <ul className="space-y-2">
                {item.projects.map((project, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    ✓ {project}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
