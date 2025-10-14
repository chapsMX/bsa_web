"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Alex M.",
    initials: "AM",
    text: "Super fun and easy to use! I started picking games and won in my first week.",
    rating: 5,
  },
  {
    name: "Jordan L.",
    initials: "JL",
    text: "Finally a sports app that's transparent and rewards skill. I'm hooked.",
    rating: 5,
  },
  {
    name: "Chris P.",
    initials: "CP",
    text: "I never miss a week — it's so exciting to track my picks live.",
    rating: 5,
  },
  {
    name: "Taylor S.",
    initials: "TS",
    text: "Competing with friends and winning USDC is the best part.",
    rating: 5,
  },
  {
    name: "Morgan D.",
    initials: "MD",
    text: "Base Sports Arena makes every game more thrilling.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Why users play Base Sports Arena</h2>
          <p className="text-lg text-muted-foreground">Join thousands of sports fans winning on Base</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="hover:shadow-xl transition-all border-2 border-accent/20 bg-gradient-to-br from-card to-card/50">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-xl text-center leading-relaxed font-medium">"{testimonial.text}"</p>
                      <div className="flex items-center justify-center gap-3">
                        <Avatar className="border-2 border-accent">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-lg">{testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={goToPrevious} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
