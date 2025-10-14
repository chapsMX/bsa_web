import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Join the Community</h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Connect with thousands of sports fans, share strategies, and stay updated on the latest features and
            competitions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                Join Discord
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="https://farcaster.xyz" target="_blank" rel="noopener noreferrer">
                Follow on Farcaster
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
