export interface Theme {
  $schema?: string;
  name: string;
  type: 'light' | 'dark';
  colors: Record<string, string>;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Record<string, any>;
  tokenColors: Array<{
    name?: string;
    scope?: string | string[];
    settings: {
      foreground?: string;
      background?: string;
      fontStyle?: string;
    };
  }>;
  // Shiki compatibility
  settings?: Array<{
    settings: {
      foreground?: string;
      background?: string;
    };
  }>;
}

export const bootstrapLight: Theme;
export const bootstrapDark: Theme;
export const bootstrapLightVibrant: Theme;
export const bootstrapDarkVibrant: Theme;

export const themes: {
  light: Theme;
  dark: Theme;
  lightVibrant: Theme;
  darkVibrant: Theme;
};
