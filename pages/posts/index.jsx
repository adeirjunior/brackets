import Link from 'next/link';
import fs from 'fs';
import { join } from 'path';
import Cards from '../../components/posts/Cards';
import { sortByDate } from '../../utils';
import matter from 'gray-matter';

const Posts = ({posts}) => {

  return (
    <>
      <Link href="/">Home</Link>
      {posts.map((post, index) => <Cards key={index} post={post} />)}
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