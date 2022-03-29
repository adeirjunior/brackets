import Head from 'next/head'
import Filter from '../components/Filter'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/bracketsIco.png' />
        <title>Brackets</title>
      </Head>
      <Header />
      <Filter />
    </div>
  )
}

export default Home;