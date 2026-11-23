// Sleeve Notes for the Frog Trio — make.fun entry
// Node 22, standard library only.
// Writes one album title (line 1) plus a short back-cover blurb to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt for local runs).
// Total must stay within the competition's 400-character limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Three Frogs After Rain";

const BLURB =
  "Recorded live at the pond's edge, the trio plays like the rain just " +
  "stopped and nobody wants to go home. The piano keeps the water moving, " +
  "the bass hums low as river mud, and the drummer — all throat, no sticks " +
  "— croaks the beat home. Three frogs, one long evening, and a room that " +
  "forgot to leave.";

const text = `${TITLE}\n${BLURB}`;

// Gate guard: the sealed scorer only accepts 1–400 characters, counted in
// code points (not UTF-16 units), so fail loudly instead of writing an
// over-long entry that would score 0.
if ([...text].length > 400) {
  throw new Error(
    `entry is ${[...text].length} characters, over the 400-character limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
