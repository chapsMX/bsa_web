'use client'

import { useState, useEffect } from 'react'
import { AppNavigation } from '@/components/app-navigation'
import { ConnectWalletGuard } from '@/components/connect-wallet-guard'
import { GameCard } from '@/components/game-card'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { NFL_WEEK_7_GAMES, POOL_STATS } from '@/lib/data/nfl-week-7'
import { sortGamesByTime } from '@/lib/utils/game-utils'
import { Trophy, ArrowRight } from 'lucide-react'
import { saveCurrentPicks, getCurrentPicks } from '@/lib/storage'

export default function PicksPage() {
  const [picks, setPicks] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  const sortedGames = sortGamesByTime(NFL_WEEK_7_GAMES)
  const totalGames = sortedGames.length
  const picksCount = Object.keys(picks).length
  const allPicksComplete = picksCount === totalGames

  // Load picks from localStorage on mount
  useEffect(() => {
    const savedPicks = getCurrentPicks()
    setPicks(savedPicks)
    setIsLoading(false)
  }, [])

  // Save picks to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveCurrentPicks(picks)
    }
  }, [picks, isLoading])

  const handleSelectTeam = (gameId: string, teamId: string) => {
    setPicks((prev) => ({
      ...prev,
      [gameId]: teamId,
    }))
  }

  const handleReview = () => {
    // Navigate to review (will implement in next task)
    console.log('Review picks:', picks)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AppNavigation />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <AppNavigation />
      <main className="container mx-auto px-4 py-8">
        <ConnectWalletGuard>
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Make Your Picks</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              NFL Week {POOL_STATS.week} - Pick the winner of each game
            </p>
          </div>

          {/* Pool Stats */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {POOL_STATS.totalParticipants.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Players</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {POOL_STATS.totalPrizePool.toLocaleString()} USDC
                </div>
                <div className="text-sm text-muted-foreground">Prize Pool</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {POOL_STATS.entryFee} USDC
                </div>
                <div className="text-sm text-muted-foreground">Entry Fee</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {totalGames}
                </div>
                <div className="text-sm text-muted-foreground">Games</div>
              </div>
            </div>
          </Card>

          {/* Pick Counter */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b mb-6 py-4 -mx-4 px-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-lg font-semibold">
                  Picks: {picksCount} / {totalGames}
                </div>
                <div className="h-2 w-48 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(picksCount / totalGames) * 100}%` }}
                  />
                </div>
              </div>
              <Button
                size="lg"
                disabled={!allPicksComplete}
                onClick={handleReview}
                className="gap-2"
              >
                Review & Submit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Games List - Single Column */}
          <div className="max-w-4xl mx-auto space-y-4">
            {sortedGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                selectedTeamId={picks[game.id]}
                onSelectTeam={(teamId) => handleSelectTeam(game.id, teamId)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          {allPicksComplete && (
            <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-4 shadow-lg">
              <div className="container mx-auto flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-semibold">All picks complete!</div>
                  <div className="text-muted-foreground">
                    Ready to submit {totalGames} picks
                  </div>
                </div>
                <Button size="lg" onClick={handleReview} className="gap-2">
                  Review & Submit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </ConnectWalletGuard>
      </main>
    </div>
  )
}

