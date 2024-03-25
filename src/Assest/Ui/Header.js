import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className='flex justify-between bg-black py-5 px-3 text-white'>
      <h1 className='font-mono font-extrabold'>
        <NavLink to='Main'>Weblogo</NavLink>
      </h1>
      <nav>
        <ul className='flex space-x-3 font-mono my-2'>
          <NavLink to='About'>About</NavLink>
          <NavLink to='Services'>Services</NavLink>
          <NavLink to='Contact'>Contact</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header