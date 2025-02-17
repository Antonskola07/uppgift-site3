-- Migration number: 0003 	 2025-02-17T19:06:21.561Z
CREATE INDEX IF NOT EXISTS idx_game_score ON scores(game, score DESC);
