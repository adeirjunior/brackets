
import { filterIcons } from '../../data/filter';
import styled from 'styled-components';

const Wraper = styled.div`
  transition: all;
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

@media only screen and (min-width:  640px) {
  gap: 1.25em;
  svg{
    width: 2.75em;
    height: auto;
  }
}
@media only screen and (min-width:  960px) {
 
}
@media only screen and (min-width:  1440px) {
 
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
