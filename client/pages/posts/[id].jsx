import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import { marked } from 'marked';
import { join } from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';

const PostStyle = styled.div`
position: relative;
  header {
    width: 100%;
    background-color: #1C1C1C;
    color: #F1F1F1;
    padding: 2em;

    button {
      padding: .5em 1em;
      background-color: #F1F1F1;
      color: #1C1C1C;
      border-radius: .5em;
      font-weight: 600;
      text-transform: uppercase;
      user-select: none;
    } 
    h2 {
      padding: 1.5em 0 2.5em;
      text-align: center;
      font-size: 2rem;

      &::selection {
        background-color: #F1F1F1;
        color: #1C1C1C;
      }
    }
  }
  section {
    padding: 5em 2em;
    display: flex;
    justify-content: center;

    div {
      text-align: justify;
      max-width: 1000px;
      min-width: 0;
      line-height: 1.5em;
      font-weight: 500;
      font-size: 1.2rem;
      letter-spacing: .05em;

      p::selection, h3::selection, strong::selection {
        background-color: #1C1C1C;
        color: #F1F1F1;
      }
      h3{
        font-size: 1.5rem;
        margin-bottom: .5em;
        font-weight: 600;
      }
      p{
        
        &:not(:last-child){
          margin-bottom: 1em;
        }
      }
    }

      pre {
        margin: 3em 0;
        background-color: #1C1C1C;
        border-radius: 3em;
        padding: 2em;
        cursor: pointer;
        text-align: left; 

        &:hover code {
            background-color: #F1F1F1;
            color: #1C1C1C;
        }

        code {
          color: #F1F1F1;
          user-select: none;
          white-space: pre-line;
          word-wrap: break-word;
        }
      }
    }
  }
  time {
    margin-right: 2em;
    position: absolute;
    right: 0;
    font-weight: 500;
    bottom: -2.5em;
  }

@media only screen and (max-width: 1000px) {
  pre {
    max-height: 300px;
    overflow-y: scroll;
  }
}
`

const Post = ({
  frontmatter: { title, date },
  content
}) => {
    return (
      <>
        <Head>
          <title>Brackets | {title}</title>
        </Head>
        <PostStyle>
          <header>
            <Link href="/" passHref><button>Back</button></Link>
            <h2>{title}</h2>
          </header>
          <section>
            <div dangerouslySetInnerHTML={
            {
              __html: marked(content)
            }
          } />
          </section>
          <time dateTime={date}>{date}</time>
        </PostStyle>
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