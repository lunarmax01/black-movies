import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import { MdHome, MdMovieFilter, MdVolunteerActivism, MdLiveTv  } from "react-icons/md";
import { SiSteelseries } from "react-icons/si";

import { useState } from 'react';



const Navbar = () => {
  const [drawerState, useDrawerState] = useState()

  const toggleDrawerState = () => {
    useDrawerState(!drawerState)
  }

  return (<>
    <div className='w-[100%] h-[70px] flex items-center xs:justify-around justify-between px-4 bg-slate-900 fixed top-0 left-0 z-10'>
      <Link to="/" className='text-white text-2xl x:text-xl md:text-2xl w-[150px]'><b className='text-green-500 md:w-0' >Black </b>Movies</Link>
      <ul className=' lg:w-[34%] items-center justify-center sm:w-[50%] md:block hidden md:ml-5'>
        <NavLink to="/" className="lg:py-2 lg:px-2 lg:ml-2 text-white hover:opacity-85 lg:text-[18px] sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">Bosh sahifa</NavLink>
        <NavLink to="/tv" className="lg:py-2 lg:px-2 lg:ml-2 text-white hover:opacity-85 lg:text-[18px] sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">tv</NavLink>
        <NavLink to="/Movie" className="lg:py-2 lg:px-2 lg:ml-2  text-white hover:opacity-85 lg:text-[18px] sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">Kino</NavLink>
        <NavLink to="/series" className="lg:py-2 lg:px-2 lg:ml-2  text-white hover:opacity-85 lg:text-[18px]  sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">Serial</NavLink>
        <NavLink to="/multfilm" className="lg:py-2 lg:px-2 lg:ml-2  text-white hover:opacity-85 lg:text-[18px]  sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">Multfilmlar</NavLink>
        <NavLink to="/full" className="lg:py-2 lg:px-2 lg:ml-2  text-white hover:opacity-85 lg:text-[18px]  sm:text-[18px] sm:px-4 sm:ml-2 md:text-lg md:ml-0 md:px-2 md:mt-1">Boshqalar</NavLink>
      </ul>
      {/* search */}
      <div className='flex item-center sm:w-[300px] xs:w-[200px] w-[100px] h-[60%] border-[1px] border-gray-700 rounded-md'>
        <IoIosSearch className='text-white py-2 px-2 text-4xl xs:block hidden' />
        <input type="text" className='bg-transparent border-none outline-none xs:px-0 px-2 text-white w-[100%] lg:text-[15px] md:text-[15px]' placeholder='search' />
      </div>
      <CiMenuFries className='lg:py-2 lg:px-2 lg:text-4xl lg:bg-green-500 lg:text-white lg:rounded-md sm:text-4xl md:text-[30px] md:ml-[10px] text-green-500 x:text-[22px] cursor-pointer' onClick={toggleDrawerState} />

      <div className={`${drawerState ? 'block' : 'hidden '}`}>
        <div id='drawer' className='w-[300px] h-[100vh] fixed right-0 top-0 z-10 border-l-[2px]'>
          <div className='flex flex-col w-[100%] h-full items-center px-0'>
            <div className=' w-full flex justify-between mb-8'><h2 className='text-white font-bold text-3xl'>Drawer</h2>
              <CiCircleRemove className='py-2 px-2 text-4xl text-white bg-slate-900 mt-2 rounded-md cursor-pointer' onClick={toggleDrawerState} />
            </div>
            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='/' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><MdHome className='text-[30px] mr-2'/> Bosh sahifa</h1></NavLink>
            
            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='/Cartoon' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><MdLiveTv  className='text-[30px] mr-2'/> TV</h1></NavLink>

              <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='/Movie' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><MdMovieFilter className='text-[30px] mr-2'/> Kino</h1></NavLink>

            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='/Series' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><SiSteelseries className='text-[30px] mr-2'/> Serial</h1></NavLink>

            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='/Cartoon' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><MdVolunteerActivism className='text-[30px] mr-2'/> Multfilm</h1></NavLink>

            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            <NavLink id='drewera' to='Anime' className='w-full h-10 flex bg-[#47556973] transition-all hover:bg-slate-600 hover:text-[#50ffa2] pl-3'><h1 className='flex items-center text-xl font-bold'><MdVolunteerActivism className='text-[30px] mr-2'/> Anime</h1></NavLink>
            <div className='w-full border-[1px] border-[#ffffff7c]'></div>
            
            <div className=' w-full flex justify-around relative top-[350px] hover:*:bg-[#47d57d]'>
              <button className='w-[135px] h-[40px] rounded-md bg-[#21C15D] text-white text-xl '>sign up</button>
              <button className='w-[135px] h-[40px] rounded-md bg-[#21C15D] text-white text-xl '>sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Navbar;

