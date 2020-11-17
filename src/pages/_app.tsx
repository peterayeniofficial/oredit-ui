import { createClient, Provider } from 'urql';

import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import theme from '../theme';

const client = createClient({ url: 'http://localhost:9000/graphql' });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider options={{}}>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
