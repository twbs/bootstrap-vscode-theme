export { default as bootstrapLight } from './themes/bootstrap-light.json' with { type: 'json' };
export { default as bootstrapDark } from './themes/bootstrap-dark.json' with { type: 'json' };
export { default as bootstrapLightVibrant } from './themes/bootstrap-light-vibrant.json' with { type: 'json' };
export { default as bootstrapDarkVibrant } from './themes/bootstrap-dark-vibrant.json' with { type: 'json' };

export const themes = {
  light: bootstrapLight,
  dark: bootstrapDark,
  lightVibrant: bootstrapLightVibrant,
  darkVibrant: bootstrapDarkVibrant
};
