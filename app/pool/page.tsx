'use client'

import { AppNavigation } from '@/components/app-navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { MOCK_LEADERBOARD, WEEKLY_POOL_STATS } from '@/lib/data/mock-user-data'
import { POOL_STATS } from '@/lib/data/nfl-week-7'
import { Trophy, Medal, Users, DollarSign, TrendingUp, Crown, Award } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function PoolPage() {
  const leaderboard = MOCK_LEADERBOARD.slice(0, 10) // Top 10
  const currentWeekStats = POOL_STATS
  const weeklyHistory = WEEKLY_POOL_STATS

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />
      default:
        return null
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30'
      case 2:
        return 'from-gray-400/20 to-gray-400/5 border-gray-400/30'
      case 3:
        return 'from-amber-600/20 to-amber-600/5 border-amber-600/30'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AppNavigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Week {currentWeekStats.week} Pool</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Compete for the top spot and win big!
          </p>
        </div>

        {/* Current Week Stats */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {currentWeekStats.totalParticipants.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Players</div>
            </div>
            <div>
              <DollarSign className="w-6 h-6 mx-auto mb-2 text-accent" />
              <div className="text-2xl md:text-3xl font-bold text-accent">
                {currentWeekStats.totalPrizePool.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Prize Pool (USDC)</div>
            </div>
            <div>
              <Trophy className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {currentWeekStats.entryFee}
              </div>
              <div className="text-sm text-muted-foreground">Entry Fee (USDC)</div>
            </div>
            <div>
              <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {currentWeekStats.firstPlacePrize.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">1st Place (USDC)</div>
            </div>
          </div>
        </Card>

        {/* Prize Distribution */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Prize Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
              <Crown className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="text-sm text-muted-foreground">1st Place</div>
                <div className="text-xl font-bold">{currentWeekStats.firstPlacePrize.toLocaleString()} USDC</div>
                <div className="text-xs text-muted-foreground">50% of pool</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-gray-400/10 to-gray-400/5 border border-gray-400/20">
              <Medal className="w-8 h-8 text-gray-400" />
              <div>
                <div className="text-sm text-muted-foreground">2nd Place</div>
                <div className="text-xl font-bold">{currentWeekStats.secondPlacePrize.toLocaleString()} USDC</div>
                <div className="text-xs text-muted-foreground">25% of pool</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-amber-600/10 to-amber-600/5 border border-amber-600/20">
              <Medal className="w-8 h-8 text-amber-600" />
              <div>
                <div className="text-sm text-muted-foreground">3rd Place</div>
                <div className="text-xl font-bold">{currentWeekStats.thirdPlacePrize.toLocaleString()} USDC</div>
                <div className="text-xs text-muted-foreground">10% of pool</div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground text-center">
            Remaining 15% goes to protocol incentives, referral fees, and operational costs • Full payout structure in{' '}
            <Link href="/" className="text-primary hover:underline">
              FAQ
            </Link>
          </div>
        </Card>

        {/* Leaderboard */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Season Leaderboard</h2>
            <Badge variant="outline">Top 10</Badge>
          </div>

          <div className="space-y-3">
            {leaderboard.map((player) => {
              const accuracy = ((player.correctPicks / player.totalPicks) * 100).toFixed(1)
              const isTopThree = player.rank <= 3
              const isCurrentUser = player.walletAddress.toLowerCase().includes('742d35')

              return (
                <Card
                  key={player.walletAddress}
                  className={cn(
                    'p-4 transition-all',
                    isTopThree && `bg-gradient-to-r ${getRankColor(player.rank)}`,
                    isCurrentUser && 'ring-2 ring-primary ring-offset-2'
                  )}
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    {/* Rank & Player */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg relative">
                        {getRankBadge(player.rank) || `#${player.rank}`}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          {player.basename ? (
                            <div className="font-semibold">{player.basename}</div>
                          ) : (
                            <div className="font-mono text-sm text-muted-foreground">
                              {player.walletAddress.slice(0, 6)}...
                              {player.walletAddress.slice(-4)}
                            </div>
                          )}
                          {isCurrentUser && (
                            <Badge variant="outline" className="text-xs">
                              You
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Rank #{player.rank} of {POOL_STATS.totalParticipants}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-xl font-bold">
                          {player.correctPicks}/{player.totalPicks}
                        </div>
                        <div className="text-xs text-muted-foreground">Picks</div>
                      </div>

                      <div className="text-center">
                        <div className="text-xl font-bold text-primary">
                          {accuracy}%
                        </div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>

                      {player.potentialWinnings > 0 && (
                        <div className="text-center">
                          <div className="text-xl font-bold text-accent">
                            {player.potentialWinnings.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">USDC</div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Weekly History */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Winners</h2>
          <div className="space-y-3">
            {weeklyHistory.reverse().map((week) => (
              <div
                key={week.week}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Week {week.week}</div>
                    <div className="text-sm text-muted-foreground">
                      {week.winner || 'In Progress'}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-accent">
                    {week.winnerPayout ? `${week.winnerPayout.toLocaleString()} USDC` : '-'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {week.participants} players
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2">Climb the Leaderboard!</h3>
          <p className="text-muted-foreground mb-6">
            Make your Week {currentWeekStats.week} picks and compete for the top spot
          </p>
          <Link href="/picks">
            <Button size="lg" className="gap-2">
              <Trophy className="w-4 h-4" />
              Make Your Picks
            </Button>
          </Link>
        </Card>
      </main>
    </div>
  )
}

