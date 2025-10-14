"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Activity } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: Trophy,
    title: "Pick Your League",
    description:
      "Pick your favorite league — NFL, NBA, Premier League, and more — and join a pool for the current week.",
  },
  {
    icon: Target,
    title: "Pick your Winners",
    description: "For each game, pick which team you think will win. In soccer leagues, you can also choose a draw.",
  },
  {
    icon: Activity,
    title: "Track Your Picks",
    description: "Follow real-time results and see how your predictions stack up against other players.",
  },
]

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="how-to-play" className="pt-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center mb-4 space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground">How It Works</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">Join the competition and start winning in 3 simple steps:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="relative overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:scale-[1.02] h-full">
                {/* Large Background Number - Centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[350px] font-bold text-muted-foreground/10 leading-none select-none">
                    {index + 1}
                  </span>
                </div>
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  {/* Icon with Solid Blue Background */}
                  <div className="flex justify-start">
                    <div className="p-4 rounded-lg bg-[#0000FF]">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Win USDC Section */}
      <div className="mt-6 bg-[#0000FF] py-10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Win USDC on Base
          </h3>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            The participants with the most correct picks win the prize pool — paid in USDC directly to your wallet.
          </p>
        </div>
      </div>
    </section>
  )
}
