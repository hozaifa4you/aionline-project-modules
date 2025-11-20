"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Healthcare AI Engineer",
    text: "This bundle transformed my understanding of medical AI. The hands-on projects gave me the confidence to deploy models in a clinical setting.",
    rating: 5,
  },
  {
    name: "Alex Martinez",
    role: "ML Engineer → Healthcare Tech",
    text: "Finally, comprehensive training that covers both the technical and ethical aspects of healthcare AI. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "PhD Researcher",
    text: "The curriculum aligns perfectly with cutting-edge research. Great balance between theory and practical implementation.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="border-b border-border/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-balance">What Learners Say</h2>
          <p className="text-muted-foreground">Join hundreds of professionals advancing their careers</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-border/60 bg-card/50 p-6 hover:bg-card/80 transition-colors">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
              <div className="border-t border-border/40 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
