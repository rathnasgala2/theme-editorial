# Changelog

All notable changes to `@rathnasgala2/theme-editorial` are documented here.

## Unreleased

## 4.2.0 - 2026-10-21

- Built against template 4.4.0 and styling contract 4.1.0 (new
  `stylingContractDigest`; template 4.4.0 refuses contract-4.0.0 themes).
  `contractVersion` is `4.1.0` and `templateRange` is `^4.4.0`.
- The template's base layer styles the new footer legal links, consent
  controls and `policy` page kind; this theme sets no new rule.
- Gated by theme-tooling 0.7.0. No colour or token change.

## 4.1.0 - 2026-10-12

- Declares a `palette` block (`gala-palette-follow-v1`): 36 tokens follow the
  author's accent, background and text colours. The default palette is the
  theme's own colours; no colour value changed.
- `tokens.css` no longer declares the bound tokens; the template's palette
  sheet is their only source.
- `templateRange` is `^4.1.0`; the styling contract digest is unchanged.

## 4.0.0 - 2026-10-11

- Added the reference generation-4 Editorial theme: magazine home, editorial article, portrait
  author page, row listings, masthead header, expanded footer, landscape media, and comfortable
  density.
- Added the complete 116-token light/dark contract, passive CSS layers, print rules, closed package
  file set, and deterministic conformance digest chain for Template 4.
- Development and verification consume theme tooling from an explicit source checkout; it installs
  integrity-checked vendored Schema 3.8.0 and Template 4.0.0 archives. The release workflow publishes it to npm with trusted-publishing provenance.
