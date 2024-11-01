import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import { useState } from 'react';


const Navbar = () => {
  const [drawerState, useDrawerState] = useState()

  const toggleDrawerState = () => {
    useDrawerState(!drawerState)
  }

  return (<>
    <div className='w-[100%] h-[70px] flex items-center xs:justify-around justify-between px-4 bg-slate-900 fixed top-0 left-0 z-10'>
      <Link to="/" className='text-white'><b className='text-green-500 min-[320px]:w-0 md:w-0' >Black </b>Movies</Link>
      <ul className=' min-[1200px]:w-[30%] items-center justify-center min-[320px]:w-[25%] min-[320px]:ml-3 sm:w-[50%] md:block hidden'>
        <NavLink to="/" className="min-[1200px]:py-2 min-[1200px]:px-2 min-[1200px]:ml-2 text-white hover:opacity-85 min-[1200px]:text-[18px] min-[320px]:text-[10px] min-[320px]:px-[1px] min-[320px]:ml-1 sm:text-[18px] sm:px-4 sm:ml-2 md:text-sm md:ml-0 md:px-2 md:mt-1">Home</NavLink>
        <NavLink to="/serial" className="min-[1200px]:py-2 min-[1200px]:px-2 min-[1200px]:ml-2 text-white hover:opacity-85 min-[1200px]:text-[18px] min-[320px]:text-[10px] min-[320px]:px-[1px] min-[320px]:ml-1 sm:text-[18px] sm:px-4 sm:ml-2 md:text-sm md:ml-0 md:px-2 md:mt-1">Serial</NavLink>
        <NavLink to="/kino" className="min-[1200px]:py-2 min-[1200px]:px-2 min-[1200px]:ml-2  text-white hover:opacity-85 min-[1200px]:text-[18px] min-[320px]:text-[10px] min-[320px]:px-[1px] min-[320px]:ml-1 sm:text-[18px] sm:px-4 sm:ml-2 md:text-sm md:ml-0 md:px-2 md:mt-1">Kino</NavLink>
        <NavLink to="/multik" className="min-[1200px]:py-2 min-[1200px]:px-2 min-[1200px]:ml-2  text-white hover:opacity-85 min-[1200px]:text-[18px]  min-[320px]:text-[10px] min-[320px]:px-[1px] min-[320px]:ml-1 sm:text-[18px] sm:px-4 sm:ml-2 md:text-sm md:ml-0 md:px-2 md:mt-1">Multik</NavLink>
      </ul>
      {/* search */}
      <div className='flex item-center sm:w-[300px] xs:w-[200px] w-[100px] h-[60%] border-[1px] border-gray-700 rounded-md'>
        <IoIosSearch className='text-white py-2 px-2 text-4xl xs:block hidden' />
        <input type="text" className='bg-transparent border-none outline-none xs:px-0 px-2 text-white w-[100%] min-[1200px]:text-[15px] md:text-[15px]' placeholder='search' />
      </div>
      <CiMenuFries className='min-[1200px]:py-2 min-[1200px]:px-2 min-[1200px]:text-4xl min-[1200px]:bg-green-500 min-[1200px]:text-white min-[1200px]:rounded-md min-[320px]:text-[20px] min-[320px]:bg-[black]/0 min-[320px]:text-green-500 min-[320px]:py-0 min-[320px]:px-0 sm:text-4xl md:text-[30px] md:ml-[10px] text-green-500' onClick={toggleDrawerState} />

      <div className={`${drawerState ? 'block' : 'hidden'}`}>
        <div id='drawer' className='w-[300px] h-[100vh] fixed right-0 top-0 z-10 '>
            <div className='flex w-[100%] h-[50px] justify-between items-center px-2'>
              <h2 className='text-white font-bold text-3xl'>Drawer</h2>
              <CiCircleRemove className='py-2 px-2 text-4xl text-white bg-slate-900 mt-2 rounded-md' onClick={toggleDrawerState} />
            </div>
        </div>
      </div>
    </div>
  </>)
}

export default Navbar;

