import { extendTheme } from 'native-base';

const Theme = extendTheme({
  // fontConfig: {
  //   Roboto: {
  //     100: {
  //       normal: "Roboto-Light",
  //       italic: "Roboto-LightItalic",
  //     },
  //     200: {
  //       normal: "Roboto-Light",
  //       italic: "Roboto-LightItalic",
  //     },
  //     300: {
  //       normal: "Roboto-Light",
  //       italic: "Roboto-LightItalic",
  //     },
  //     400: {
  //       normal: "Roboto-Regular",
  //       italic: "Roboto-Italic",
  //     },
  //     500: {
  //       normal: "Roboto-Medium",
  //     },
  //     600: {
  //       normal: "Roboto-Medium",
  //       italic: "Roboto-MediumItalic",
  //     },
  //   },
  // },
  // fonts: {
  //   heading: "Roboto",
  //   body: "Roboto",
  //   mono: "Roboto",
  // },
  colors: {
    primary: {
      100: '#E3F2FD',
      400: '#3793FD',
      500: '#3793FD',
    },
    lightPrimary: {
      500: '#212121',
    },
    lightInput: {
      100: '#FAFAFA',
    },
    textSecondary: {
      100: '#E4E7EC',
      500: '#616161',
    },
    secondary: {
      400: '#7CF2E4',
      500: '#7CF2E4',
    },
    primaryLight: {
      400: '#e3f2fd',
    },
    primaryDark: {
      400: '#0066c9',
    },
    green: {
      400: '#00897B',
      500: '#2E9270',
    },
    greenLight: {
      400: '#E0F2F1',
    },
    greenDark: {
      400: '#24B5A4',
    },
    white: {
      500: '#FFFFFF',
    },
    dark: {
      100: '#E5EBF1',
      500: '#0A0F23',
    },
    red: {
      400: '#BE4478',
      500: '#FA6E5A',
    },
    orange: {
      100: '#FFF6DA',
      400: '#F29100',
      500: '#FEB083',
    },
    greenHome: {
      100: '#C9F0E2',
      500: '#6CB28E',
    },
    pink: {
      500: '#D9A5B5',
    },
    blue: {
      400: '#1E6CEB',
      500: '#5379FF',
    },
    divider: {
      500: '#ACACB5',
    },
    yellow: {
      400: '#F2C94C',
      500: '#FFE57F',
    },
    purple: {
      500: '#673AB7',
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export default Theme;
