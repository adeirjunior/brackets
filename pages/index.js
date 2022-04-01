import Head from 'next/head'
import Filter from '../components/filter/Filter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/filter/Search';
import Grid from '../components/posts/Grid';

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximun-scale=1.0 user-scalable=no" />
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
  )
}

export default Home;