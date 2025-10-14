import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[url('/bg_02.jpg')] opacity-25 bg-cover bg-center" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance text-primary">
              Base Sports Arena
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-secondary">Your arena. Your pick. Your win.</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Base Sports Arena is the first fully onchain sports picks platform where fans compete to predict the
            outcomes of weekly games and win real rewards. Pick your winners, join pools, and track results — all
            secured and transparent on the Base blockchain.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="/app">Start Picking</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
