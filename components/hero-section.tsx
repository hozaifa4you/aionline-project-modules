"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="relative border-b border-border/40 bg-gradient-to-br from-background via-background to-background/95 px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_25%,rgba(68,68,68,.05)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.05)_75%,rgba(68,68,68,.05))] bg-[length:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Announcement Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-accent/5 px-4 py-2 text-sm">
          <Zap className="h-4 w-4 text-accent" />
          <span className="text-accent">Limited Time Offer: Lifetime Access</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Master Healthcare AI
          <span className="block text-accent">From Fundamentals to Enterprise</span>
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Learn to build production-ready medical AI systems. 11 hands-on projects covering disease detection, medical
          imaging, and clinical validation—all with guidance from industry experts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Get Started Now
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isHovering ? "translate-x-1" : ""}`} />
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 hover:bg-primary/5 bg-transparent">
            View Curriculum
          </Button>
        </div>

        {/* Trust Metrics */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/40 pt-8">
          <div>
            <p className="text-2xl font-bold text-accent">11</p>
            <p className="text-sm text-muted-foreground">Hands-On Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">16+</p>
            <p className="text-sm text-muted-foreground">Hours of Content</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">Lifetime</p>
            <p className="text-sm text-muted-foreground">Access & Updates</p>
          </div>
        </div>
      </div>
    </section>
  )
}
