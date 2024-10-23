import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
function Navbar() {
        function none(){
                
        }
        return (<>

                <nav className=" w-[100%] h-[8vh] bg-[black]/0 flex items-center justify-between pr-[10px] pl-[10px] rounded-t-lg">
                        {/* nikname all */}
                        <div className="w-[600px] flex items-center justify-center">
                                <div className="h-[100%] flex items-start justify-center">
                                        <h1 className=" text-[35px] text-[white] font-black "><b className=" text-[black]">🇧​​🇱​​🇦​​🇨​​🇰​ </b>​🇲​​🇴​​🇻​​🇮​​🇪​​🇸​</h1>
                                        <img src="src/material/img/images-removebg-preview.pngn" alt="" />
                                </div>
                                {/* port link name */}
                                <div className=" w-[300px] h-[100%] pr-[5px] pl-[5px] flex items-center justify-around ">
                                        <Link className=" text-[15px] text-[white] font-black  hover:text-[#C8C8C8]" to='/'>Home</Link>
                                        <Link className=" text-[15px] text-[white] font-black hover:text-[#C8C8C8]" to='/serial'>serial</Link>
                                        <Link className=" text-[15px] text-[white] font-black hover:text-[#C8C8C8]" to='/moviaes'>kino</Link>
                                        <Link className=" text-[15px] text-[white] font-black hover:text-[#C8C8C8]" to='/kids'>multfilm</Link>

                                </div>
                        </div>
                        {/* button */}
                        <div className=" w-[400px] flex items-center justify-end pr-[15px]">
                                <input type="search" className="  w-[250px] h-[32px] rounded-xl mr-[15px] pl-[15px] bg-none placeholder:text-[white] text-[white] text-[18px] outline-[white] border-[black] border-[2px] focus:border-none bg-black/20" placeholder="search" />
                                <FaAlignJustify className="text-[25px] text-[white]" />

                        </div>
{/*                         
                        <div
                         className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                                <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                                <div className="fixed inset-0 overflow-hidden">
                                        <div class="absolute inset-0 overflow-hidden">
                                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

                                                        <div className="pointer-events-auto relative w-screen max-w-md">

                                                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                                        <button onClick={none()} type="button" class=" relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                                                        <i className="fa-solid fa-xmark text-[25px]"></i>
                                                                        </button>
                                                                </div>

                                                                <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
                                                                        <div className="px-4 sm:px-6">
                                                                                <h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">Panel title</h2>
                                                                        </div>
                                                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">

                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div> */}
                </nav>



        </>);
}

export default Navbar;