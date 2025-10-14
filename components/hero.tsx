"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector("#how-to-play")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/bg_02.jpg')] opacity-25 bg-cover bg-center" />

      <div className="container mx-auto px-4 py-16 relative z-10 w-[90%]">
        <div className="text-center space-y-8 md:space-y-10">
          {/* Title - Animated with Shadow */}
          <div className="space-y-2 opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance text-[#0000FF]">
              Base Sports Arena
            </h1>
            <p className="text-4xl md:text-2xl lg:text-3xl font-medium text-[#0000FF]">
              Your arena. Your pick. Your win.
            </p>
          </div>

          {/* Description - Animated with delay - Larger Text */}
          <p className="text-3xl md:text-2xl lg:text-3xl text-foreground text-[#FFFFFF] mx-auto leading-relaxed text-pretty opacity-0 animate-fade-in-up animation-delay-200">
            Base Sports Arena is the first fully onchain sports picks platform where fans compete to predict the outcomes of weekly games and win real rewards. Pick your winners, join pools, and track results — all secured and transparent on the Base blockchain.
          </p>

          {/* CTAs - Animated with delay - Larger Size */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-scale-in animation-delay-300">
            <Button 
              asChild 
              size="lg" 
              className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <Link href="/picks" className="flex items-center gap-2">
                Start Picking
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-8 border-2 bg-background/80 hover:bg-background hover:scale-105 transition-all duration-200 group shadow-lg"
            >
              <Link href="#how-to-play" onClick={scrollToHowItWorks} className="flex items-center gap-2">
                Learn More
                <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
