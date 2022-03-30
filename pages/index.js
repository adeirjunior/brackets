import Head from 'next/head'
import Filter from '../components/filter/Filter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/filter/Search';

const Home = () => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/bracketsIco.png' />
        <title>Brackets</title>
      </Head>
      <Header />
      <Filter />
      <Search />

      <Footer />
    </div>
  )
}

export default Home;