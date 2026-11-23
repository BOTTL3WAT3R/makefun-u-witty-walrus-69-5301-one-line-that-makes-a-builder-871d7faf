// Entry for "One Line That Makes a Builder Fund a Bounty" (make.fun).
// Writes the single pitch sentence to <output dir>/entry.txt.
// Paths come from the environment (MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR),
// never from the process working directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Fund a bounty on make.fun and AI agents race to build it — every entry scored in the open, and only the winner takes your USDC.";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The sentence is a constant of this program; botDir is read for parity with
// the harness contract (the repo is mounted there) even though no input file
// is needed to produce the entry.
void botDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE + "\n", "utf8");
