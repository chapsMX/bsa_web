# NFL Week 7 Game Data - Instructions

## Format Required

Please provide the NFL Week 7 games in the following format:

```typescript
{
  id: 'week7-game1',              // Unique ID (e.g., week7-game1, week7-game2, etc.)
  week: 7,
  season: 2024,
  homeTeam: {
    id: 'KC',                      // Team abbreviation (e.g., KC, SF, BUF, DAL)
    name: 'Chiefs',                // Team name
    city: 'Kansas City',           // City
    abbreviation: 'KC',            // Same as id
    logo: '🏈'                     // Emoji or URL (emojis are fine for mockup)
  },
  awayTeam: {
    id: 'SF',
    name: '49ers',
    city: 'San Francisco',
    abbreviation: 'SF',
    logo: '🏈'
  },
  scheduledTime: '2024-10-20T17:00:00Z',  // ISO 8601 format (UTC)
  status: 'upcoming',                      // 'upcoming', 'live', or 'final'
  stadium: 'Arrowhead Stadium',            // Optional
  network: 'CBS'                           // Optional (e.g., CBS, FOX, NBC, ESPN)
}
```

## Minimum Data Needed

For each game, we need at least:
1. **Game ID** - Unique identifier
2. **Home Team** - id, name, city, abbreviation
3. **Away Team** - id, name, city, abbreviation  
4. **Scheduled Time** - When the game starts (ISO 8601 format)
5. **Status** - 'upcoming' for all games in Week 7

## Optional Fields

- `logo` - Can use emojis (🏈) or team URLs
- `stadium` - Venue name
- `network` - Broadcasting network
- `homeScore` / `awayScore` - Only needed if status is 'final'

## Example Game

```typescript
{
  id: 'week7-game1',
  week: 7,
  season: 2024,
  homeTeam: {
    id: 'KC',
    name: 'Chiefs',
    city: 'Kansas City',
    abbreviation: 'KC',
    logo: '🏈'
  },
  awayTeam: {
    id: 'SF',
    name: '49ers',
    city: 'San Francisco',
    abbreviation: 'SF',
    logo: '🏈'
  },
  scheduledTime: '2024-10-20T17:00:00Z',
  status: 'upcoming',
  stadium: 'Arrowhead Stadium',
  network: 'CBS'
}
```

## How to Provide the Data

You can provide the data in any of these ways:
1. JSON array of all games
2. List of matchups (I'll format it)
3. Copy/paste from any source (I'll structure it)

Just send me the matchups and times, and I'll format them into the correct structure!

## Typical NFL Week 7 Schedule

Usually includes:
- Thursday Night game (1 game)
- Sunday afternoon games (~11 games)
- Sunday Night game (1 game)
- Monday Night game (1-2 games)

**Total: ~14 games**

