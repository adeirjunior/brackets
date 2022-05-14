import Head from 'next/head';
import Header from '../components/Header';
import { filterIcons } from '../data/filter';
import Cards from '../components/posts/Cards';
import Link from 'next/link';
import fs from 'fs';
import { useState } from 'react';
import { join } from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

const Home = ({ posts, pathName }) => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const currentDate = new Date();
  const today = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  console.log(today);
  const todayPosts = posts.filter( post => post.frontmatter.date === today );
  const todayPostsFilter = todayPosts.filter( post => post.frontmatter.programming_language === type);
  const yesterdayPosts = posts.filter( post => post.frontmatter.date === '4/10/2022');
  const yesterdayPostsFilter = yesterdayPosts.filter( post => post.frontmatter.programming_language === type);
  console.log(todayPostsFilter)
  return (
    <>
      <Head>
        <title>Brackets</title>
        <meta name="description" content="Helpful news about the programming world for smart devs" />
      </Head>
      <div>
        <Header />
        <nav className='transition-all grid select-none gap-1 sm:gap-5 mt-12 place-content-center justify-items-center grid-cols-filter'>
        {
            filterIcons.map((FilterIcon, key) => {
              return (
                <FilterIcon.Src onClick={ () => { type === FilterIcon.type ? setType('') : setType(FilterIcon.type) } } className="cursor-pointer transition-all duration-200 active:opacity-75 active:scale-90 sm:w-11 h-auto" key={key} />
              )
            })
        }
        </nav>
        <div className="flex w-auto justify-center mb-14">
          <input value={search} onChange={ e => setSearch(e.target.value) } className="mt-12 w-60 sm:w-80 font-medium text-xs border-dark border border-solid rounded-md py-2 pl-6 pr-4 bg-light placeholder:text-dark focus:outline-none selection:bg-dark selection:text-light" type='text' placeholder="Search..." />
        </div>
        <h2 className='text-center mb-10 text-sm font-semibold selection:text-light selection:bg-dark'>Today News</h2>
        {
          todayPosts[0]?.frontmatter ? 
          ( 
            <section className='grid mb-10 place-content-center px-4 gap-8 sm:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col'>   
            {
              todayPostsFilter[0]?.frontmatter ? 
              ( 
                todayPostsFilter.map((post, index) => <Cards pathName={pathName} key={index} post={post} />)
              ) :
              (
                todayPosts.map((post, index) => <Cards pathName={pathName} key={index} post={post} />)
              )
            }
            </section>
          ) 
          : (<p className='flex justify-center mb-10 selection:text-light selection:bg-dark'>Today wasn't news here yet</p>)
        }
        <h2 className='text-center mb-10 text-sm font-semibold selection:text-light selection:bg-dark'>Yesterday</h2>
        {
          yesterdayPosts[0]?.frontmatter ? 
          (
          <section className='grid place-content-center px-4 gap-8 sm:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col'>   
          {
            yesterdayPostsFilter[0]?.frontmatter ? 
            ( 
              yesterdayPostsFilter.map((post, index) => <Cards pathName={pathName} key={index} post={post} />)
            ) : 
            (
              yesterdayPosts.map((post, index) => <Cards pathName={pathName} key={index} post={post} />)
            )
          }
          </section>
          )
          : (<p className='flex justify-center mb-10 selection:text-light selection:bg-dark'>Yesterday wasn't news here</p>)   
        }
        <div className='text-center mt-10 text-sm font-semibold selection:text-light hover:underline selection:bg-dark'><Link href="/posts" >Other News</Link></div>
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
      posts: posts.sort(sortByDate),
      pathName: 'posts'
    }
  }
}