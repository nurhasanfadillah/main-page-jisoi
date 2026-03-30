export interface Theme {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
}

export const themes = {
  dark: {
    name: 'dark',
    colors: {
      background: '#0A1628',
      foreground: '#F1F5F9',
      primary: '#4F46E5',
      secondary: '#0891B2',
      accent: '#22D3EE',
      muted: '#64748B',
    },
  },
  light: {
    name: 'light',
    colors: {
      background: '#FFFFFF',
      foreground: '#0F172A',
      primary: '#4F46E5',
      secondary: '#0891B2',
      accent: '#22D3EE',
      muted: '#94A3B8',
    },
  },
} as const;

export type ThemeName = keyof typeof themes;
