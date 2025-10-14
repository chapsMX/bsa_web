import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Target, Activity } from "lucide-react"

const steps = [
  {
    icon: Trophy,
    title: "Select Your League",
    description:
      "Choose your favorite league — NFL, NBA, Premier League, and more — and join a pool for the current week.",
  },
  {
    icon: Target,
    title: "Choose the Winners",
    description: "For each game, pick which team you think will win. In soccer leagues, you can also choose a draw.",
  },
  {
    icon: Activity,
    title: "Track Your Picks",
    description: "Follow real-time results and see how your predictions stack up against other players.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-to-play" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Get started in 3 simple steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join the competition and start winning</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-primary">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Win USDC on Base
          </h3>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            The participants with the most correct picks win the prize pool — paid in USDC directly to your wallet.
          </p>
        </div>
      </div>
    </section>
  )
}
