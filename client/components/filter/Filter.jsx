
import { filterIcons } from '../../data/filter';

const Filter = () => {
  return (
    <nav className='transition-all grid select-none gap-1 sm:gap-5 mt-12 place-content-center justify-items-center grid-cols-filter'>
    {
        filterIcons.map((FilterIcon, key) => {
          return (
            <FilterIcon.Src className="cursor-pointer transition-all duration-200 active:opacity-75 active:scale-90 sm:w-11 h-auto" key={key} />
          )
        })
    }
    </nav>
  )
}

export default Filter;
