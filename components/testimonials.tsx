"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, MapPin, DollarSign, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Alex Martinez",
    initials: "AM",
    location: "Miami, FL",
    sport: "NFL Fan",
    earnings: "$2,450",
    duration: "3 months",
    text: "I've been into sports betting for years, but Base Sports Arena changed everything. The transparency of blockchain and instant USDC payouts are game-changers. Won my first pool in week one and haven't looked back.",
    rating: 5,
  },
  {
    name: "Jordan Lee",
    initials: "JL",
    location: "Austin, TX",
    sport: "NBA Enthusiast",
    earnings: "$1,890",
    duration: "2 months",
    text: "Finally, a platform that rewards actual sports knowledge instead of luck. The onchain verification means no disputes, no delays. Just pure competition and instant rewards.",
    rating: 5,
  },
  {
    name: "Chris Parker",
    initials: "CP",
    location: "Denver, CO",
    sport: "Multi-Sport",
    earnings: "$3,200",
    duration: "4 months",
    text: "Tracking my picks in real-time is addictive. The community is amazing, and competing with friends adds a whole new level of excitement to game day. Best sports platform I've used.",
    rating: 4,
  },
  {
    name: "Taylor Sullivan",
    initials: "TS",
    location: "Seattle, WA",
    sport: "Premier League",
    earnings: "$1,650",
    duration: "6 weeks",
    text: "As someone new to crypto, Base Sports Arena made it incredibly easy. Connected my wallet, made my picks, and won USDC in my third week. The interface is clean and intuitive.",
    rating: 5,
  },
  {
    name: "Morgan Davis",
    initials: "MD",
    location: "Chicago, IL",
    sport: "Fantasy Pro",
    earnings: "$4,100",
    duration: "5 months",
    text: "I've tried every fantasy platform out there. Base Sports Arena combines the best of DFS with blockchain transparency. Weekly pools keep things fresh, and the prizes are real.",
    rating: 5,
  },
  {
    name: "Sam Rivera",
    initials: "SR",
    location: "Phoenix, AZ",
    sport: "College Football",
    earnings: "$980",
    duration: "1 month",
    text: "Just started last month and already hooked. The fact that everything runs on Base means fast transactions and low fees. Love the competitive atmosphere and fair play.",
    rating: 4,
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">What Players Say</h2>
          <p className="text-xl text-muted-foreground">Real stories from real winners on Base</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="relative overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all hover:shadow-2xl h-full">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <CardContent className="p-6 space-y-4 relative z-10">
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-[#0000FF] text-white font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.text}"</p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Total Earnings
                      </span>
                      <span className="font-bold text-primary">{testimonial.earnings}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Playing Since
                      </span>
                      <span className="font-semibold text-foreground">{testimonial.duration}</span>
                    </div>
                  </div>

                  {/* Sport Badge */}
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {testimonial.sport}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
