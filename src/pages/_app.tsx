import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/shared/store';
import { ThemeProvider } from '@/shared/components/providers';
import GlobalStyles from '@/styles/GlobalStyles';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Million Luxury - Propiedades de Lujo</title>
        <meta name="description" content="Descubre las mejores propiedades de lujo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Provider store={store}>
        <ThemeProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
