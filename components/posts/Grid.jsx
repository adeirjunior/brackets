import Cards from './Cards';
import styled from 'styled-components';
import { PostsData } from '../../data/posts';

const Wrap = styled.section`
    display: grid;
    place-content: center;
    padding: 0 1em;
    gap: 2em;
@media only screen and (min-width:  640px) {
  grid-template-columns: repeat(2,280px);
}
@media only screen and (min-width:  960px) {
  grid-template-columns: repeat(3,280px);
}
@media only screen and (min-width:  1440px) {
}
`

const Grid = () => {
    return (
        <>
            <h2 className='text-center mb-10 text-sm font-semibold selection:text-light selection:bg-dark'>Today News</h2>
            <Wrap>   
            {
                PostsData.map((post, key) => {
                    return (
                        <Cards key={key} id={key} title={post.title} Thumb={post.Thumb} type={post.type} />
                    )
                })
            }
            </Wrap>
            <h2 className='text-center mt-10 text-sm font-semibold selection:text-light selection:bg-dark'>Other News</h2>
        </>
    )
}

export default Grid;