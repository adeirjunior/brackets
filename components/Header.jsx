import Brackets from "../public/brackets";

const Header = () => {
  return (
    <header className='flex pt-8 px-8 select-none flex-col mx-4 justify-center items-center'>
        <Brackets className="w-48 h-auto sm:w-64"/>
        <p className="mt-2 whitespace-nowrap text-xs font-semibold sm:text-sm">important news for short time web devs</p>
    </header>
  )
}

export default Header;