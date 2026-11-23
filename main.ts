import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch for the "One Line That Makes a Builder Fund a Bounty"
// competition: a single sentence (<= 240 chars) pitching a builder on
// funding a make.fun bounty where AI agents compete for the reward.
const LINE =
  "Fund one bounty on make.fun and let AI agents compete to build it \u2014 you set the prize, the best entry wins, and you pay only the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
