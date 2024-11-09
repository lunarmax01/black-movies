import { FaApple, FaGooglePlay, FaTelegram, FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';


function Footer() {
  const [drawerState, useDrawerState] = useState()

  const toggleDrawerState = () => {
    useDrawerState(!drawerState)
  }
  const [drawerState2, useDrawerState2] = useState()

  const toggleDrawerState2 = () => {
    useDrawerState2(!drawerState2)
  }
    return (<>

        <footer className="bg-[#1D1F1E] text-white pt-6 px-4 h-auto">
            <div className="w-full h-full  flex items-start justify-between">
                <div className=" w-full h-auto flex-col xl:pr-10 xl:pl-4 md:pr-8 sm:pr-6 xl:h-0">
                    <h3 onClick={toggleDrawerState} className="x:text-[18px] xs:text-2xl font-bold mb-1 flex border-b-[2px] cursor-pointer">Biz haqimizda</h3>
                    <div className={`${drawerState ? 'block' : 'hidden '} mt-2`}>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">kontaktlar</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Qo'llab -quvatlash</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Obunalar</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Hamkorlar</h1>
                    </div>
                    <h3 onClick={toggleDrawerState2} className="x:text-[18px] xs:text-2xl font-bold mb-1 flex border-b-[2px] cursor-pointer mt-4">Biz haqimizda</h3>
                    <div className={`${drawerState2 ? 'block' : 'hidden '} mb-5 mt-4`}>
                    <h1 className=" text-[#737474] hover:text-white/70 mt-1">TV</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Kino</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">seriallar</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">multfilmlar</h1>
                        <h1 className=" mt-1 text-[#737474] hover:text-white/70">Anime</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Radio</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">UZ Video</h1>
                        <h1 className=" text-[#737474] hover:text-white/70 mt-1">Sport</h1>
                        <h1 className=" mt-1 text-[#737474] hover:text-white/70 ">Axborat</h1>
                    </div>
                </div>
                

                {/* platformalarimiz va dasturlarimiz*/}
                <div className=" w-auto">
                    {/* datsurlari */}
                    <div className="xl:w-[700px] xl:h-32 xl:flex xl:justify-center lg:justify-center 2xl:justify-between lg:w-[500px] lg:flex md:w-[500px] md:flex sm:hidden sm:w-0 sm:h-0 xs:hidden xs:w-0 xs:h-0 x:hidden x:w-0 x:h-0">
                        <div className="w-[65%] md:w-[90%] xs:w-[100%] h-28 hover:*:bg-[#08180e] grid gap-y-4 gap-x-4 grid-cols-3  py-6 mt-10 md:mt-0">
                            <h1 className=" items-center transition-all bg-[#292A29] text-lg py-4 px-2 w-30 flex rounded-xl"><FaApple className="mr-1 text-2xl" />App Store</h1>

                            <h1 className=" items-center transition-all bg-[#292A29] text-md py-4 px-2 w-30 flex rounded-xl"><FaGooglePlay className="mr-1 text-2xl" />Google Play</h1>

                            <h1 className=" items-center transition-all bg-[#292A29] text-md py-4 px-2 w-30 flex rounded-xl"><SiShopify className="mr-1 text-2xl" />Gallaxy store</h1>

                        </div>
                        {/* platforma */}
                        <div className="2xl:w-[250px] 2xl:ml-2 2xl:flex 2xl:flex-col 2xl:items-center md:hidden md:w-0 md:h-0 xs:hidden xs:w-0 xs:h-0">
                            <h1 className=" text-2xl font-bold">Ijtimoiy tarmoqlar</h1>
                            <br />
                            <div className="w-24 flex items-center flex-col mt-5">
                                <div className="w-full flex justify-between mb-4 hover:*:bg-[#08180e]">
                                    <div className="w-[45px] h-[45px] bg-[#292A29] flex items-center justify-center rounded-md">
                                        <FaTelegram className=" text-[30px] text-white" />
                                    </div>
                                    <div className="w-[45px] h-[45px] bg-[#292A29] flex items-center justify-center rounded-md">
                                        <FaInstagramSquare className=" text-[30px] text-white" />
                                    </div>
                                </div>
                                <div className="w-full flex justify-between hover:*:bg-[#08180e]">
                                    <div className="w-[45px] h-[45px] bg-[#292A29] flex items-center justify-center rounded-md">
                                        <FaFacebookF className=" text-[30px] text-white" />
                                    </div>
                                    <div className="w-[45px] h-[45px] bg-[#292A29] flex items-center justify-center rounded-md">
                                        <FaTwitter className=" text-[30px] text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* version */}
            </div>
            {/*  */}
            <div className="2xl:w-[700px] xl:w-80 xl:h-36 lg:h-[150px] flex xl:justify-center lg:justify-center 2xl:justify-between 2xl:hidden 2xl:h-0 lg:flex-col md:flex-col sm:flex-col xs:flex-col x:flex-col ">
                <div className="xs:w-[70%] lg:w-[50%] sm:w-[73%] h-28 hover:*:bg-[#08180e] md:gap-y-4 md:gap-x-4 md:grid-cols-3 sm:grid sm:gap-y-4 sm:gap-x-4 sm:grid-cols-3 xs:flex-col  py-6 mt-10 xl:w-0 xl:hidden s:hidden s:w-0 s:h-0 md:mt-5 sm:mt-0 xs:mt-0  md:hidden md:w-0 md:h-0 sm:ml-0 xs:ml-0 x:ml-0 x:mt-0">
                    <h1 className=" items-center transition-all bg-[#292A29] text-md py-4 px-2 w-[150px] xs:w-[130px] xs:text-[15px] flex rounded-xl xs:mt-2"><FaApple className="mr-1 text-2xl xs:text-[20px] " />App Store</h1>

                    <h1 className=" items-center transition-all bg-[#292A29] text-md py-4 px-2 w-[150px] xs:w-[130px] xs:text-[15px] flex rounded-xl xs:mt-2 x:mt-2"><FaGooglePlay className="mr-1 text-2xl xs:text-[20px]" />Google Play</h1>

                    <h1 className=" items-center transition-all bg-[#292A29] text-md py-4 px-2 w-[150px] xs:w-[130px] xs:text-[15px] flex rounded-xl xs:mt-2 x:mt-2"><SiShopify className="mr-1 text-2xl xs:text-[20px] " />Gallaxy store</h1>

                </div>
                {/* platforma */}
                <div className="2xl:h-0 2xl:hidden xl:w-[250px] xl:flex-col lg:pl-2 xs:mt-32 lg:mt-0 md:mt-0 sm:mt-0 x:mt-28 s:pl-0 xl:pl-4 ">
                    <h1 className=" text-2xl font-bold">Ijtimoiy tarmoqlar</h1>
                    <br />
                    <div className="w-28 flex xl:justify-center mt-1 xl:relative xl:ml-[89px] lg:relative lg:right-[89px]">
                        <div className="w-full flex mb-4 lg:ml-20 hover:*:bg-[#08180e] ">
                            <div className="w-[45px] h-[45px] ml-2 bg-[#292A29] flex items-center justify-center rounded-md">
                                <FaTelegram className=" text-[30px] text-white" />
                            </div>
                            <div className="w-[45px] h-[45px] ml-2 bg-[#292A29] flex items-center justify-center rounded-md">
                                <FaInstagramSquare className=" text-[30px] text-white" />
                            </div>
                        </div>
                        <div className="w-full flex mb-6 hover:*:bg-[#08180e]">
                            <div className="w-[45px] h-[45px] ml-2 bg-[#292A29] flex items-center justify-center rounded-md">
                                <FaFacebookF className=" text-[30px] text-white" />
                            </div>
                            <div className="w-[45px] h-[45px] ml-2 bg-[#292A29] flex items-center justify-center rounded-md">
                                <FaTwitter className=" text-[30px] text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-20 py-5 px-4 lg:mt-16 flex justify-between border-t-[1px] border-[#7374744d] x:flex-col">
                <h1>© 2024 - Black-movies (version).v01</h1>
                <div className=" flex x:mt-2">
                    <h1 className=" text-[#737474] hover:text-white/70 ml-4 cursor-pointer">Русский</h1>
                    <h1 className=" text-[#737474] hover:text-white/70 ml-4 cursor-pointer">O'zbekcha</h1>
                    <h1 className=" text-[#737474] hover:text-white/70 ml-4 cursor-pointer">English</h1>
                </div>
            </div>
        </footer>

    </>);
}

export default Footer;