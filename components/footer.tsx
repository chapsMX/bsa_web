import Link from "next/link"
import Image from "next/image"
import { Twitter, MessageCircle, Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Trophy className="w-6 h-6 text-[#0000FF]" />
              <span className="text-foreground">Base Sports Arena</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
            An onchain platform where fans participate in predictive challenges around the outcomes of weekly sports events.
            </p>
            {/* Built on Base Logo */}
            <div className="mt-4">
              <Image
                src="/svg/baseBlack.svg"
                alt="Built on Base"
                width={120}
                height={40}
                className="dark:invert"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-to-play" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#help" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Launch App
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/audits" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Security Audits
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-sm text-muted-foreground hover:text-[#0000FF] transition-colors">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Community</h3>
            <p className="text-sm text-muted-foreground">
              Join our community and stay updated with the latest news and competitions.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/chapsmx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-[#0000FF] hover:text-white transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://farcaster.xyz/chaps"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-[#0000FF] hover:text-white transition-all"
                aria-label="Farcaster"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="https://discord.com/invite/buildonbase"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-[#0000FF] hover:text-white transition-all"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Base Sports Arena. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              18+ only. Play responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
