import {
  StyleFunctionProps,
  type ThemeConfig,
  theme as chakraTheme,
  extendTheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  ...chakraTheme.fonts,
  body: '"Plus Jakarta Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading:
    '"Plus Jakarta Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: 'gray.200',
    },
  }),
};

const theme = extendTheme({ config, fonts, styles });

export default theme;
