import Head from 'next/head';
import Filter from '../components/filter/Filter';
import Header from '../components/Header';
import Search from '../components/filter/Search';
import Cards from '../components/posts/Cards';
import Link from 'next/link';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';
import NoscriptCode from '../components/NoscriptCode';

const Home = ({ posts }) => {
  return (
    <>
      <NoscriptCode />
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
        <h2 className='text-center mb-10 text-sm font-semibold selection:text-light selection:bg-dark'>Today News</h2>
        <section className='grid place-content-center px-4 gap-8 sm:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col'>   
        {
            posts.map((post, index) => {
                return (
                    <Cards key={index} post={post} />
                )
            })
        }
        </section>
        <h2 className='text-center mt-10 text-sm font-semibold selection:text-light selection:bg-dark'><Link href="/posts" >Other News</Link></h2>
      </div>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(join('posts', filename), 'utf-8');

    const {data:frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}