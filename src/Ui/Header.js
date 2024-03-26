import { NavLink } from "react-router-dom"
import { HiMiniBars4 } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Header = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <div className=' bg-black py-5 px-3 text-white'>

      <div className="flex justify-between">
        <h1 className='font-mono font-extrabold'>
          <NavLink to='Home'>Weblogo</NavLink>
        </h1>
        <nav>
          <ul className='flex space-x-3 font-mono my-2 max-sm:hidden'>
            <NavLink to='About'>About</NavLink>
            <NavLink to='Services'>Services</NavLink>
            <NavLink to='Contact'>Contact</NavLink>
          </ul>
        </nav>
        <div className="menubar flex sm:hidden items-center">
          {show ? <button
            onClick={handleShow}
            className="text-white">
            <ImCross />
          </button> : <button
            onClick={handleShow}
            className="text-white">
            <HiMiniBars4 />
          </button>
          }
        </div>
      </div>
      {show && <nav className="flex flex-col font-mono sm:hidden">
        <NavLink to='About'>About</NavLink>
        <NavLink to='Services'>Services</NavLink>
        <NavLink to='Contact'>Contact</NavLink>
      </nav>
      }

    </div >
  )
}

export default Header