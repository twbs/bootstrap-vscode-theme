import bootstrapLight from './themes/bootstrap-light.json' with { type: 'json' };
import bootstrapDark from './themes/bootstrap-dark.json' with { type: 'json' };
import bootstrapLightVibrant from './themes/bootstrap-light-vibrant.json' with { type: 'json' };
import bootstrapDarkVibrant from './themes/bootstrap-dark-vibrant.json' with { type: 'json' };

export { bootstrapLight, bootstrapDark, bootstrapLightVibrant, bootstrapDarkVibrant };

export const themes = {
  light: bootstrapLight,
  dark: bootstrapDark,
  lightVibrant: bootstrapLightVibrant,
  darkVibrant: bootstrapDarkVibrant
};
