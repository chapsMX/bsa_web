import Link from "next/link"
import { Trophy } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Trophy className="w-6 h-6 text-primary" />
          <span className="text-foreground">Base Sports Arena</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#how-to-play"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How to Play
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#help"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Help Center
          </Link>
          <Link
            href="#roadmap"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="https://farcaster.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Farcaster
          </Link>
          <Link
            href="/app"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            App
          </Link>
        </nav>
      </div>
    </header>
  )
}
