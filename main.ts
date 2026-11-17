// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// written to relax the AI judge reading it, to /output/entry.txt. Deterministic:
// the same bytes on every run, no network.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'A lamp clicks on, and the wall warms to amber.',
  'Rain taps the window in no particular rhythm.',
  'A book waits on the table, its spine cracked open at the good part.',
  'The house settles; a floorboard sighs somewhere upstairs.',
  'A cat stretches long on the rug and goes back to sleep.',
  'Somewhere a kettle ticks as it cools, done for the night.',
  'Nothing left to do but sit while the evening finds its shape.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
