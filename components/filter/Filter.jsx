import Image from 'next/image';
import { filterIcons } from '../../data/filter';
import styled from 'styled-components';

const Wraper = styled.div`
  display: grid;
  user-select: none;
  gap: .25em;
  grid-template-columns: repeat(5,3em); 
  margin: 3em 2em 0; 
  place-content: center;  
`

const Filter = () => {
  return (
    <Wraper>
    {
        filterIcons.map((filterIcon, key) => {
            return (
              <button key={key}>
                <Image className='hover:opacity-80 transition-all active:scale-95 cursor-pointer' width={38} height={38} alt={filterIcon.alt} src={filterIcon.src}/>
              </button>   
            )
        })
    }
    </Wraper>
  )
}

export default Filter;
