import '../styles/globals.css';
import Footer from '../components/Footer';
import NoscriptCode from '../components/NoscriptCode';

function MyApp({ Component, pageProps }) {
  return <>
    <NoscriptCode />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp;
