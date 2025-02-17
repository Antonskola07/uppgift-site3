-- Migration number: 0002 	 2025-02-17T18:58:57.945Z
ALTER TABLE scores
ADD game TEXT NOT NULL
DEFAULT 'shooter';