import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import NoscriptCode from '../components/NoscriptCode';

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0 user-scalable=no" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel='icon' href='/bracketsIco.png' />
    </Head>
    <NoscriptCode />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp;
