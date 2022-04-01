import Cards from './Cards';
import styled from 'styled-components';
import { PostsData } from '../../data/posts';

const Wrap = styled.section`
    display: grid;
    place-content: center;
    padding: 0 2em 2em;
    h2::selection{
        background-color: #1C1C1C;
        color: #F1F1F1;
    }
`

const Grid = () => {
    return (
        <>
            <Wrap>
                <h2 className='text-center mb-6 text-sm font-semibold'>Today News</h2>
            {
                PostsData.map((post, key) => {
                    return (
                            <Cards key={key} title={post.title} src={post.src} thumb={post.thumb} />
                        
                    )
                })
            }
            </Wrap>
        </>
    )
}

export default Grid;