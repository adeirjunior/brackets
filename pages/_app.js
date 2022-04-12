import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import NoscriptCode from '../components/NoscriptCode';
import { store } from "../store";
import { Provider } from 'react-redux';
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    </Head>
    <NoscriptCode />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
    <Footer />
  </>
}

export default wrapper.withRedux(MyApp);
