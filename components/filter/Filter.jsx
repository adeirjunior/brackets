
import { filterIcons } from '../../data/filter';
import styled from 'styled-components';

const Wraper = styled.div`
  display: grid;
  user-select: none; 
  gap: .25em; 
  grid-template-columns: repeat(5,3em); 
  margin-top: 3em; 
  place-content: center;
  justify-items: center;

  svg{
    cursor: pointer;
    transition: all .3s;

    &:active{
      opacity: .75;
      transform:scale(.92) ;
    }
  }
`

const Filter = () => {
  return (
    <Wraper>
    {
        filterIcons.map((FilterIcon, key) => {
          return (
            <FilterIcon.Src key={key} />
          )
        })
    }
    </Wraper>
  )
}

export default Filter;
