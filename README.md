# Bootstrap VS Code Theme

A beautiful VS Code theme based on Bootstrap's color palette, featuring OKLCH color space for vibrant, accessible colors.

## Install

<!-- 1. Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bootstrap.bootstrap-vscode-theme).
2. Click on the "Install" button. -->
1. Clone this repository or download the extension
2. Install the extension in VS Code
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme). Four themes are included:
    - `Bootstrap Light`
    - `Bootstrap Dark`
    - `Bootstrap Light Vibrant` (Display P3 color space)
    - `Bootstrap Dark Vibrant` (Display P3 color space)

## Color Palette

Bootstrap's color palette is built using OKLCH color space, which provides:
- **Perceptually uniform colors** - equal changes in lightness appear equal to the human eye
- **Consistent chroma** - colors maintain their vibrancy across different lightness levels
- **Better accessibility** - easier to create color scales with proper contrast ratios

The palette includes 16 hues: blue, indigo, violet, purple, pink, red, orange, amber, yellow, lime, green, teal, cyan, brown, gray, and pewter. Each color has 13 variants (from 025 to 975) created using LAB color mixing to maintain perceptual consistency.

## Vibrant themes (Display P3)

> [!NOTE]
> Vibrant themes do not work in VS Code at this time as it does not support color formats other than Hex or RGB. You can, however, use these with [Shiki](https://shiki.style) projects or other tools that support Display P3 colors.

The **Vibrant** theme variants use CSS's `color(display-p3 r g b)` format with enhanced saturation to fully utilize Display P3's wider color gamut. Display P3 can represent ~25% more colors than standard sRGB, and these themes are optimized to take full advantage of that on compatible displays.

The conversion algorithm transforms sRGB colors to Display P3 through proper linear color space transformations, then enhances saturation (15-30%) and luminance (5% for vibrant colors) to push colors into the wider P3 gamut that isn't accessible in sRGB.

## Override

To override this (or any other) theme in your personal config file, please follow the guide in the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation. This is handy for small tweaks to the theme without having to fork and maintain your own theme.

## Contribute

1. Clone and open this [repo](https://github.com/twbs/bootstrap-vscode-theme) in VS Code
2. Run `npm install` to install the dependencies.
3. Press `F5` to open a new window with your extension loaded
4. Open `Code > Preferences > Color Theme` [`⌘k ⌘t`] and pick the "Bootstrap…" theme you want to test.
5. Make changes to the [`/src/palette.ts`](https://github.com/twbs/bootstrap-vscode-theme/blob/main/src/palette.ts) or [`/src/theme.ts`](https://github.com/twbs/bootstrap-vscode-theme/blob/main/src/theme.ts) files.
6. Run `npm run build` to update the theme. You can also run `npm run start` instead to automatically rebuild the theme while making changes and no reloading should be necessary.
7. Run `npm test` to validate your changes (this runs automatically on PRs).
8. Once you're happy, commit your changes and open a PR.

## Scripts

| Script | Description |
| --- | --- |
| `npm run build` | Builds the theme `.json` files in `./themes` directory |
| `npm test` | Runs validation tests on the theme (includes build) |
| `npm run package` | Compiles the theme `.vsix` file at the project root |
| `npm start` | Automatically runs build on file change |

## Credit

This theme is a fork of [Pierre's VS Code Theme](https://github.com/pierredotco/pierre-vscode-theme), adapted to use Bootstrap's OKLCH-based color palette. The original Pierre theme was built on top of [GitHub's VS Code Theme](https://github.com/primer/github-vscode-theme), with enhancements for more specific language tokens and Display P3 color support.
