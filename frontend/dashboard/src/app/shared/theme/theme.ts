export interface Theme {
  mode: string;
  properties: ThemeProperties;
}

export interface ThemeProperties {
  '--primary-background-color': string;
  '--secondary-background-color': string;
  '--alternative-background-color': string;
  '--default-background-color': string;
  '--warn-color':string
  '--font-color': string;
}

export const lightTheme: Theme = {
  mode: 'light',
  properties: {
    '--primary-background-color': '#41CC8E',
    '--secondary-background-color': '#34495E',
    '--alternative-background-color': '#3684B6',
    '--default-background-color': '#FFFFFF',
    '--warn-color': '#D23232',
    '--font-color': '#0d0d0d',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  properties: {
    '--primary-background-color': '#32B87D',
    '--secondary-background-color': '#405469',
    '--alternative-background-color': '#238ba0',
    '--default-background-color': '#0d0d0d',
    '--warn-color': '#ff4d4d',
    '--font-color': '#FFFFFF',
  },
};
