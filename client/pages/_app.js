import '../styles/globals.css';
import Footer from '../components/Footer';
import { ScrollerMotion } from 'scroller-motion';

function MyApp({ Component, pageProps }) {
  return <>
  <ScrollerMotion spring={{ mass: 1, stiffness: 225, damping: 30 }}>
    <Component {...pageProps} />
    <Footer />
  </ScrollerMotion>
  </>
}

export default MyApp;
