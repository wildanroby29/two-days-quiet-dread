// Two Days of Quiet Dread — one code-review approval line carrying quiet
// existential dread (118 chars, under the 140-char limit), for the make.fun
// bounty u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "LGTM. The retry logic is sound, the tests pass, and someday this repo will be the only proof any of us were ever here.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
