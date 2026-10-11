#!/usr/bin/env node
/**
 * Thin wrapper into the unpublished shared theme tooling checkout. Resolution
 * is explicit and fails closed; the passive parent package never depends on
 * or packs this private development entry point.
 */

import { spawnSync } from 'node:child_process';
import path from 'node:path';

const override = process.env.GALA_THEME_TOOLING_DIR;
if (!override || override.trim() === '') {
  console.error(
    [
      'GALA_THEME_TOOLING_DIR is not set.',
      '',
      '@rathnasgala2/theme-tooling is not published to the npm registry,',
      'so every tooling command requires an explicit checkout path, e.g.:',
      '',
      '  GALA_THEME_TOOLING_DIR=../../theme-tooling npm --prefix tooling run verify',
    ].join('\n'),
  );
  process.exit(1);
}

const cli = path.join(path.resolve(override), 'bin', 'cli.mjs');
const result = spawnSync(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: process.env,
});
if (result.error) {
  console.error(`theme-tooling: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
