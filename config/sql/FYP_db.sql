CREATE TABLE IF NOT EXISTS wheel (mode TEXT NOT NULL, action TEXT NOT NULL, last_update DATETIME NOT NULL);
INSERT INTO wheel VALUES('MENU', 'x', CURRENT_TIMESTAMP);