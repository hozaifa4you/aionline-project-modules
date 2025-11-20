"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Leaf Disease Detection",
    description: "CNN-based image classification with transfer learning",
    difficulty: "Intermediate",
    hours: "~1.5",
    tags: ["CNN", "Transfer Learning", "Agriculture"],
  },
  {
    number: "02",
    title: "Blood Cell Classification",
    description: "Multi-class medical imaging with HIPAA compliance",
    difficulty: "Advanced",
    hours: "~2",
    tags: ["Medical AI", "Diagnostics", "Healthcare"],
  },
  {
    number: "03",
    title: "Skin Cancer Detection",
    description: "Advanced CNN with FDA considerations & explainability",
    difficulty: "Advanced",
    hours: "~2.5",
    tags: ["Cancer AI", "Deep Learning", "Clinical"],
  },
  {
    number: "04",
    title: "Cervical Cancer Detection",
    description: "Multi-stage cancer detection with interpretability",
    difficulty: "Advanced",
    hours: "~2",
    tags: ["Oncology", "AI Ethics", "Medical"],
  },
  {
    number: "05",
    title: "Glaucoma Detection",
    description: "Retinal imaging for early disease detection",
    difficulty: "Advanced",
    hours: "~2",
    tags: ["Ophthalmology", "Vision AI", "Prevention"],
  },
  {
    number: "06",
    title: "Cataract Detection with YOLOv8",
    description: "Real-time eye disease detection model",
    difficulty: "Intermediate",
    hours: "~1.8",
    tags: ["YOLOv8", "Real-time", "Eye Care"],
  },
]

export default function ProjectShowcase() {
  return (
    <section className="border-b border-border/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-balance">Featured Projects</h2>
          <p className="text-muted-foreground">Build real-world healthcare AI solutions</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group border-border/60 bg-gradient-to-br from-card/50 to-card/30 hover:border-accent/40 hover:bg-gradient-to-br hover:from-card/70 hover:to-card/50 transition-all cursor-pointer p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                  {project.number}
                </span>
                <Badge variant="outline" className="border-border/60">
                  {project.difficulty}
                </Badge>
              </div>

              <h3 className="mb-2 text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <span className="text-xs text-muted-foreground">~{project.hours}h</span>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
