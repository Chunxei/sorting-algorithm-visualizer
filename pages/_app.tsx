import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ControlsProvider from "../store/controls/provider";
import {Head} from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ControlsProvider>
      <Component {...pageProps} />
    </ControlsProvider>
  );
}

export default MyApp
