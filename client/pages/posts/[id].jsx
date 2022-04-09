import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import { marked } from 'marked';
import { join } from 'path';
import matter from 'gray-matter';

const Post = ({
  frontmatter: { title, date },
  content
}) => {
    return (
      <>
        <Head>
          <title>Brackets | {title}</title>
        </Head>
        
        <div>
          <Link href="/"><button>Home</button></Link>
          <h2>Post: {title}</h2>
          <section dangerouslySetInnerHTML={
            {
              __html: marked(content)
            }
          } />
        </div>

        
      </>
      
    )
  }
  
  export default Post;

  export async function getStaticPaths() {
    const files = fs.readdirSync(join('posts'));

    const paths = files.map((filename) => ({
      params: {
        id: filename.replace('.md', '')
      }
    }))

    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({params: { id }}) {
    const markdownWithMeta = fs.readFileSync(join('posts', id + '.md'), 'utf-8');

    const {data:frontmatter, content} = matter(markdownWithMeta);

    return {
      props: {
        frontmatter,
        content
      }
    }
  }