import type { Entry, LeaderboardEntry } from '../types'

/**
 * Mock User Data for Dashboard
 * Simulated data for a connected wallet
 */

export const MOCK_USER_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'

export const MOCK_USER_ENTRIES: Entry[] = [
  {
    id: 'entry-2024-w6-742d35-1697500000000',
    walletAddress: MOCK_USER_ADDRESS,
    week: 6,
    season: 2024,
    picks: [], // Simplified for mock
    submittedAt: '2024-10-10T18:30:00Z',
    entryFee: 10,
    status: 'scored',
    correctPicks: 11,
    totalPicks: 14,
  },
  {
    id: 'entry-2024-w5-742d35-1696900000000',
    walletAddress: MOCK_USER_ADDRESS,
    week: 5,
    season: 2024,
    picks: [],
    submittedAt: '2024-10-03T19:45:00Z',
    entryFee: 10,
    status: 'scored',
    correctPicks: 9,
    totalPicks: 15,
  },
  {
    id: 'entry-2024-w4-742d35-1696300000000',
    walletAddress: MOCK_USER_ADDRESS,
    week: 4,
    season: 2024,
    picks: [],
    submittedAt: '2024-09-26T17:20:00Z',
    entryFee: 10,
    status: 'scored',
    correctPicks: 10,
    totalPicks: 14,
  },
  {
    id: 'entry-2024-w3-742d35-1695700000000',
    walletAddress: MOCK_USER_ADDRESS,
    week: 3,
    season: 2024,
    picks: [],
    submittedAt: '2024-09-19T16:15:00Z',
    entryFee: 10,
    status: 'scored',
    correctPicks: 12,
    totalPicks: 15,
    transactionHash: '0xabc123def456...',
  },
]

export const MOCK_USER_STATS = {
  totalEntries: 4,
  totalCorrectPicks: 42,
  totalPicks: 58,
  accuracy: 72.4, // percentage
  bestWeek: {
    week: 3,
    correctPicks: 12,
    totalPicks: 15,
  },
  totalWinnings: 85.50, // USDC
  currentStreak: 2, // weeks with >70% accuracy
  rank: 42, // current season rank
  totalPlayers: 847,
}

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    walletAddress: '0x1a2b3c4d5e6f7890abcdef',
    basename: 'nflking.base.eth',
    correctPicks: 52,
    totalPicks: 58,
    potentialWinnings: 2500,
  },
  {
    rank: 2,
    walletAddress: '0xfedcba0987654321',
    basename: 'sportsfan.base.eth',
    correctPicks: 51,
    totalPicks: 58,
    potentialWinnings: 1500,
  },
  {
    rank: 3,
    walletAddress: '0x9876543210fedcba',
    correctPicks: 50,
    totalPicks: 58,
    potentialWinnings: 1000,
  },
  {
    rank: 4,
    walletAddress: '0xabcdef1234567890',
    basename: 'pickmaster.base.eth',
    correctPicks: 49,
    totalPicks: 58,
    potentialWinnings: 500,
  },
  {
    rank: 5,
    walletAddress: '0x5555aaaa9999bbbb',
    correctPicks: 48,
    totalPicks: 58,
    potentialWinnings: 250,
  },
  // Current user
  {
    rank: 42,
    walletAddress: MOCK_USER_ADDRESS,
    basename: 'chaps.base.eth',
    correctPicks: 42,
    totalPicks: 58,
    potentialWinnings: 0,
  },
  // More players
  {
    rank: 43,
    walletAddress: '0x1111222233334444',
    correctPicks: 42,
    totalPicks: 58,
    potentialWinnings: 0,
  },
  {
    rank: 44,
    walletAddress: '0x5555666677778888',
    basename: 'gridironpro.base.eth',
    correctPicks: 41,
    totalPicks: 58,
    potentialWinnings: 0,
  },
]

export const WEEKLY_POOL_STATS = [
  { week: 3, participants: 823, prizePool: 8230, winner: 'nflking.base.eth', winnerPayout: 2500 },
  { week: 4, participants: 831, prizePool: 8310, winner: 'sportsfan.base.eth', winnerPayout: 2550 },
  { week: 5, participants: 840, prizePool: 8400, winner: 'pickmaster.base.eth', winnerPayout: 2600 },
  { week: 6, participants: 845, prizePool: 8450, winner: 'gridironpro.base.eth', winnerPayout: 2625 },
  { week: 7, participants: 847, prizePool: 8470, winner: null, winnerPayout: null }, // Current week
]

