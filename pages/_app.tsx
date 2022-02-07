import React from 'react';
import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import ControlsProvider from '../store/controls/provider';

/**
 * Wrapper around the app
 *
 * @param {AppProps} {Component, pageProps} - the usual
 * @return {JSX.Element}
 * */
function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <ControlsProvider>
      <Component {...pageProps} />
    </ControlsProvider>
  );
}

export default MyApp;
