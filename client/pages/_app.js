import '../styles/globals.css';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
