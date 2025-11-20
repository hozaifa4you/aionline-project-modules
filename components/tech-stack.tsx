"use client"

import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Deep Learning Frameworks",
    items: ["PyTorch", "TensorFlow/Keras", "Vision Transformers"],
  },
  {
    category: "Medical Imaging Tools",
    items: ["MONAI", "SimpleITK", "NiBabel", "Pydicom"],
  },
  {
    category: "Advanced Models",
    items: ["ResNet", "DenseNet", "EfficientNet", "YOLOv8"],
  },
  {
    category: "Compliance & Ethics",
    items: ["HIPAA", "FDA Requirements", "Explainable AI (LIME, SHAP)"],
  },
]

export default function TechStack() {
  return (
    <section className="border-b border-border/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-balance">Technologies You'll Master</h2>
          <p className="text-muted-foreground">Industry-standard tools and frameworks</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, idx) => (
            <Card key={idx} className="border-border/60 bg-card/50 p-6 hover:bg-card/80 transition-colors">
              <h3 className="mb-4 font-semibold text-accent">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                    {item}
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
