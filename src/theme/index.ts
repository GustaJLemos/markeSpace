import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      100: '#1A181B',
      200: '#3E3A40',
      300: '#5F5B62',
      400: '#9F9BA1',
      500: '#D9D8DA',
      600: '#EDECEE',
      700: '#F7F7F8',
    },
    blue: {
      default: '#364D9D',
      light: '#647AC7',
      withOpacity: 'rgba(100, 122, 199, 0.1)'
    },
    red: {
      light: '#EE7979'
    }
  },
  fonts: {
    body: 'Karla_400Regular',
    heading: 'Karla_700Bold',
  },
  fontSizes: {
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24
  },
  sizes: {
    14: 56,
    33: 148,
    34: 152,
    44: 180
  }
});