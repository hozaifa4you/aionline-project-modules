"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card className="border-border/60 bg-gradient-to-br from-card/80 to-card/40 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance sm:text-4xl">Ready to Master Healthcare AI?</h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Get instant access to all 11 projects, 16+ hours of video content, and lifetime updates.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span>Lifetime access to all materials</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span>Community support & updates</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span>Completion certificate</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span>100% money-back guarantee</span>
            </div>
          </div>

          <div className="mb-8 border-t border-border/40 pt-8">
            <p className="mb-4 text-3xl font-bold">
              <span className="line-through text-muted-foreground text-xl mr-2">$299</span>
              <span className="text-accent">$39</span>
              <span className="text-base text-muted-foreground ml-2">Limited Time</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90">
              Enroll Now - Get Lifetime Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 bg-transparent">
              View Full Curriculum
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
