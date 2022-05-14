import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import fs from 'fs';
import { useState } from 'react';
import { join } from 'path';
import { filterIcons } from '../../data/filter';
import Cards from '../../components/posts/Cards';
import { sortByDate } from '../../utils';
import matter from 'gray-matter';
import styled from 'styled-components';

const Button = styled.button`
padding: .5em 1em;
background-color: #1C1C1C;
position: relative;
bottom: 1.75em;
left: 7em;
color: #F1F1F1;
border-radius: .5em;
font-weight: 600;
text-transform: uppercase;
user-select: none;

&:hover{
  color: #1C1C1C;
  background-color: transparent;
}

@media only screen and (max-width:1024px) {
  left: 3em;
}
@media only screen and (max-width:640px) {
  justify-content: center;
}
`;

const Posts = ({posts}) => {
  const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  const pathName = toCamelCase(useRouter().asPath.replace('/','_'));
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const postsFilter = posts.filter( post => post.frontmatter.programming_language === type );
  return (
    <>
      <Head>
        <title>Brackets | {pathName}</title>
        <meta name="description" content="Helpful news about the programming world for smart devs" />
      </Head>
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
      <Link href="/"><Button>BACK</Button></Link>
      <section className='grid place-content-center px-4 gap-8 sm:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col'> 
      {
        postsFilter[0]?.frontmatter ? 
        ( 
          postsFilter.map((post, index) => <Cards key={index} post={post} />)
        ) : 
        (
          posts.map((post, index) => <Cards key={index} post={post} />)
        )
      }
      </section>
    </>
  )
}

export async function getStaticProps() {
  
  const files = fs.readdirSync(join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(join('posts', filename), 'utf-8');

    const {data: frontmatter} = matter(markdownWithMeta);

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

export default Posts;