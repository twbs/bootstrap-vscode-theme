// src/index.ts
export { makeTheme } from "./theme";
export { light, dark } from "./palette";
export { convertRolesToP3 } from "./color-p3";
export type { Roles } from "./palette";

// Re-export the built theme JSONs for convenience
import bootstrapLight from "../themes/bootstrap-light.json";
import bootstrapDark from "../themes/bootstrap-dark.json";
import bootstrapLightVibrant from "../themes/bootstrap-light-vibrant.json";
import bootstrapDarkVibrant from "../themes/bootstrap-dark-vibrant.json";

export const themes = {
  light: bootstrapLight,
  dark: bootstrapDark,
  lightVibrant: bootstrapLightVibrant,
  darkVibrant: bootstrapDarkVibrant
};
