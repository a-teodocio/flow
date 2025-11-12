export interface Theme {
  id: string;
  name: string;
  colors: {
    background: string;
    primary: string;
    secondary: string;
    error: string;
  };
}

// Color legend:
// Background - background color of the app
// Primary - Title, header text, color of text when user types correctly
// Secondary - color of text when user is not typing, color of esc instructions (opacity lower), color of restart button hover (darker color)
// Error - color of text when user types incorrectly, the countdown timer text

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    colors: {
      background: 'rgba(30, 41, 59, 1)',
      primary: 'rgba(251, 191, 36, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    colors: {
      background: 'rgba(26, 26, 26, 1)',
      primary: 'rgba(224, 224, 224, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
  {
    id: 'light',
    name: 'Light Mode',
    colors: {
      background: 'rgba(255, 255, 255, 1)',
      primary: 'rgba(51, 51, 51, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    colors: {
      background: 'rgba(0, 51, 102, 1)',
      primary: 'rgba(102, 204, 255, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    colors: {
      background: 'rgba(220, 38, 38, 1)',
      primary: 'rgba(255, 230, 109, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    colors: {
      background: 'rgba(45, 80, 22, 1)',
      primary: 'rgba(168, 213, 186, 1)',
      secondary: 'rgba(100, 116, 139, 1)',
      error: 'rgba(220, 38, 38, 1)',
    },
  },
];
