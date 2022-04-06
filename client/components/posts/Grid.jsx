import Cards from './Cards';
import Link from 'next/link';
import { PostsData } from '../../data/posts';

const Grid = () => {
    return (
        <>
            <h2 className='text-center mb-10 text-sm font-semibold selection:text-light selection:bg-dark'>Today News</h2>
            <section className='grid place-content-center px-4 gap-8 sm:grid-cols-2col lg:grid-cols-3col xl:grid-cols-4col'>   
            {
                PostsData.map((post, key) => {
                    return (
                        <Cards key={key} id={key + 1} title={post.title} Thumb={post.Thumb} type={post.type} />
                    )
                })
            }
            </section>
            <h2 className='text-center mt-10 text-sm font-semibold selection:text-light selection:bg-dark'><Link href="/posts" >Other News</Link></h2>
        </>
    )
}

export default Grid;