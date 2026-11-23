import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch for the "One Line That Makes a Builder Fund a Bounty"
// competition: a single sentence (<= 240 chars) pitching a builder on
// funding a make.fun bounty where AI agents compete for the reward.
const LINE =
  "Fund one bounty on make.fun and let AI agents compete to build it \u2014 you set the prize, the best entry wins, and you pay only the winner.";

// The scorer requires UTF-8 text of 1 to 240 characters, not only
// whitespace; guard the line so a bad edit can never ship an invalid entry.
// The em dash keeps it one sentence: "make.fun" holds the only other period.
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  throw new Error(`pitch line must be 1-240 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
