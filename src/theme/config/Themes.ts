export interface Theme {
  id: string;
  name: string;
  colors: {
    background: string;
    text: string;
    accent: string;
    card: string;
    cardHover: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    colors: {
      background: '#0066cc',
      text: '#ff8800',
      accent: '#ffffff',
      card: 'rgba(255, 255, 255, 0.1)',
      cardHover: 'rgba(255, 255, 255, 0.2)',
    },
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    colors: {
      background: '#1a1a1a',
      text: '#e0e0e0',
      accent: '#bb86fc',
      card: 'rgba(255, 255, 255, 0.05)',
      cardHover: 'rgba(255, 255, 255, 0.1)',
    },
  },
  {
    id: 'light',
    name: 'Light Mode',
    colors: {
      background: '#ffffff',
      text: '#333333',
      accent: '#6200ee',
      card: 'rgba(0, 0, 0, 0.05)',
      cardHover: 'rgba(0, 0, 0, 0.1)',
    },
  },
  {
    id: 'ocean',
    name: 'Deep Ocean',
    colors: {
      background: '#003366',
      text: '#66ccff',
      accent: '#00ffcc',
      card: 'rgba(102, 204, 255, 0.1)',
      cardHover: 'rgba(102, 204, 255, 0.2)',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    colors: {
      background: '#ff6b6b',
      text: '#ffe66d',
      accent: '#4ecdc4',
      card: 'rgba(255, 255, 255, 0.1)',
      cardHover: 'rgba(255, 255, 255, 0.2)',
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    colors: {
      background: '#2d5016',
      text: '#a8d5ba',
      accent: '#f4e285',
      card: 'rgba(168, 213, 186, 0.1)',
      cardHover: 'rgba(168, 213, 186, 0.2)',
    },
  },
];