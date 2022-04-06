import Head from 'next/head';
import Filter from '../components/filter/Filter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/filter/Search';
import Grid from '../components/posts/Grid';
import NoScript from '../public/noscriptIcon';

const Home = () => {
  return (
    <>
      <noscript>
        <div id='noscript'>
        <Head>
          <link rel='stylesheet' type='text/css' href='/stylesheet/noscript.css' />
        </Head>
          <div id='noscript-body'>
            <NoScript />
            <p id='noscript-text'>
              this site needs
              <span> </span>
              <span>J</span>
              <span>a</span>
              <span>v</span>
              <span>a</span>
              <span>s</span>
              <span>c</span>
              <span>r</span>
              <span>i</span>
              <span>p</span>
              <span>t</span>
            </p>
          </div>
        </div>
      </noscript>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0 user-scalable=no" />
          <link rel='icon' href='/bracketsIco.png' />
          <title>Brackets</title>
          <meta name="description" content="Helpful news about the programming world for smart devs" />
        </Head>
        <Header />
        <Filter />
        <Search />
        <Grid />
        <Footer />
      </div>
    </>
  )
}

export default Home;