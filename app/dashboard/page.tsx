'use client'

import { AppNavigation } from '@/components/app-navigation'
import { ConnectWalletGuard } from '@/components/connect-wallet-guard'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MOCK_USER_STATS, MOCK_USER_ENTRIES } from '@/lib/data/mock-user-data'
import { Trophy, TrendingUp, Target, Award, Calendar, CheckCircle2, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = MOCK_USER_STATS
  const entries = MOCK_USER_ENTRIES

  return (
    <div className="min-h-screen bg-background">
      <AppNavigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <ConnectWalletGuard>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Track your performance and earnings
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Entries */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <Badge variant="outline">{stats.totalEntries}</Badge>
              </div>
              <div className="text-2xl font-bold mb-1">{stats.totalEntries}</div>
              <div className="text-sm text-muted-foreground">Total Entries</div>
            </Card>

            {/* Accuracy */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-5 h-5 text-primary" />
                <Badge className="bg-primary">{stats.accuracy}%</Badge>
              </div>
              <div className="text-2xl font-bold mb-1 text-primary">
                {stats.totalCorrectPicks}/{stats.totalPicks}
              </div>
              <div className="text-sm text-muted-foreground">Overall Accuracy</div>
            </Card>

            {/* Winnings */}
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center justify-between mb-2">
                <Trophy className="w-5 h-5 text-accent" />
                <Badge className="bg-accent text-accent-foreground">USDC</Badge>
              </div>
              <div className="text-2xl font-bold mb-1 text-accent">
                {stats.totalWinnings.toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground">Total Winnings</div>
            </Card>

            {/* Rank */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-5 h-5 text-muted-foreground" />
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">
                #{stats.rank}
              </div>
              <div className="text-sm text-muted-foreground">
                of {stats.totalPlayers.toLocaleString()} players
              </div>
            </Card>
          </div>

          {/* Best Week Highlight */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Best Week</div>
                  <div className="text-2xl font-bold">
                    Week {stats.bestWeek.week}: {stats.bestWeek.correctPicks}/{stats.bestWeek.totalPicks}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {((stats.bestWeek.correctPicks / stats.bestWeek.totalPicks) * 100).toFixed(1)}% accuracy
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="mb-2">
                  {stats.currentStreak} week streak
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Weeks with &gt;70% accuracy
                </div>
              </div>
            </div>
          </Card>

          {/* Entry History */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Entry History</h2>
              <Link href="/picks">
                <Button>Make Week 7 Picks</Button>
              </Link>
            </div>

            <div className="space-y-4">
              {entries.map((entry) => {
                const accuracy = ((entry.correctPicks || 0) / entry.totalPicks) * 100
                const isGoodWeek = accuracy >= 70

                return (
                  <Card key={entry.id} className="p-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      {/* Week Info */}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isGoodWeek ? 'bg-accent/20' : 'bg-muted'
                        }`}>
                          <Calendar className={`w-6 h-6 ${
                            isGoodWeek ? 'text-accent' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <div className="font-bold text-lg mb-1">Week {entry.week}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(entry.submittedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">
                            {entry.correctPicks}/{entry.totalPicks}
                          </div>
                          <div className="text-xs text-muted-foreground">Correct Picks</div>
                        </div>

                        <div className="text-center">
                          <div className={`text-2xl font-bold mb-1 ${
                            isGoodWeek ? 'text-accent' : 'text-muted-foreground'
                          }`}>
                            {accuracy.toFixed(1)}%
                          </div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>

                        <div>
                          {isGoodWeek ? (
                            <Badge className="bg-accent text-accent-foreground">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Great Week!
                            </Badge>
                          ) : (
                            <Badge variant="outline">
                              <XCircle className="w-3 h-3 mr-1" />
                              {accuracy >= 60 ? 'Good' : 'Needs Work'}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Entry Fee */}
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">Entry Fee</div>
                        <div className="font-semibold">{entry.entryFee} USDC</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-2">Ready for Week 7?</h3>
            <p className="text-muted-foreground mb-6">
              Make your picks now and compete for the 8,470 USDC prize pool!
            </p>
            <Link href="/picks">
              <Button size="lg" className="gap-2">
                <Trophy className="w-4 h-4" />
                Make Your Picks
              </Button>
            </Link>
          </Card>
        </ConnectWalletGuard>
      </main>
    </div>
  )
}

