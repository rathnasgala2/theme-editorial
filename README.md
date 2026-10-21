# @rathnasgala2/theme-editorial

The Editorial presentation theme for Galascribe portable publications using
`@rathnasgala2/template@^4.4.0`. It pairs warm paper and near-black ink with a
restrained oxblood accent, an editorial serif reading face, and neutral sans
interface typography.

This package is a closed, passive file set: JSON and CSS only, with no
JavaScript, runtime dependency, lifecycle script, external URL, or runtime font
request. It uses system font stacks and ships no binary assets.

## Composition

`theme.json` embeds the complete generation-4 Editorial composition:

- magazine home
- editorial article
- portrait author page
- row listings
- masthead header
- expanded footer
- landscape media
- comfortable density

The template owns structure and layout. This theme supplies the established
116 design tokens and a small skin stylesheet over published hooks.

## Files

- `package.json`: exactly `name`, `version`, `license`, `repository`, `files`.
- `theme.json`: the contract-4 identity, composition, token palettes, hook
  projection, asset digests, size budgets, and conformance digest chain.
- `tokens.css`: generated from `theme.json`; never edit it by hand.
- `components.css`: the Editorial skin over published template hooks only.
- `print.css`: print rules.
- `LICENSE`, `README.md`.

## Commands

Node 24.18.0 (see `.nvmrc`). `tooling/` is private and never packed; every
gate lives in `@rathnasgala2/theme-tooling` and is reached through
`tooling/run.mjs`.

```sh
npm --prefix ../theme-tooling run vendor:check
npm --prefix ../theme-tooling ci
GALA_THEME_TOOLING_DIR=../../theme-tooling npm --prefix tooling run tokens:generate
GALA_THEME_TOOLING_DIR=../../theme-tooling npm --prefix tooling run digest:generate
GALA_THEME_TOOLING_DIR=../../theme-tooling npm --prefix tooling run verify
```

Re-run `digest:generate` after changing any packed file. Only theme tooling is
consumed from an explicit source checkout. Its exact Schema 3.16.0 and
Template 4.4.0 dev dependencies install from the npm registry, and Schema and
Template resolve from those installed packages. `GALA_SCHEMA_DIR` and
`GALA_TEMPLATE_DIR` are development overrides, not part of this flow. None is
a runtime dependency, and these commands do not publish the package.
