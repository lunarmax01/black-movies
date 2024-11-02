import { MdOutlineFileDownload } from "react-icons/md";
import { SiGoogledisplayandvideo360 } from "react-icons/si";


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Movies_list from "./movies-list";

const Home = () => {

    return (<>
        <div className='lg:w-[100%] h-[100vh] x:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] s:w-[100%] xl:w-[100%] 2xl:w-[100%]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper pd-4"
            >
                {/* spider man */}
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[45vh] sm:h-[65vh] sm:mt-10 xs:h-[40vh] x:h-[33vh] x:mt-16 lg:py-8 lg:px-6">
                    <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6 x:px-4 x:pt-10">
                        <div className=" lg:w-[260px] sm:w-[200px] sm:flex md:flex lg:flex s:flex xl:flex 2xl:flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:w-0 x:w-0 hidden">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex x:mt-0">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[15px] text-5xl font-bold  text-white mb-4 xs:mb-2 x:mb-2">Spider-Man: <br /> Across the Spider-Verse</h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[6px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique.</p>
                        <div className=" flex mt-6 xs:mt-5 relative bottom-5">
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><MdOutlineFileDownload className="mr-2 text-xl x:text-[16px] lg:text-[30px]" />
                                Yuklab olish</button>
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><SiGoogledisplayandvideo360 className="mr-2 text-xl x:text-[14px] lg:text-[28px]" />
                                Kino korish</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* toniy stark */}
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[45vh] sm:h-[65vh] sm:mt-10 xs:h-[40vh] x:h-[33vh] x:mt-16 lg:py-8 lg:px-6"> {/* start kino icons*/}
                <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6 x:px-4 x:pt-10">
                        <div className=" lg:w-[260px] sm:w-[200px] sm:flex md:flex lg:flex s:flex xl:flex 2xl:flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:w-0 x:w-0 hidden">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex x:mt-0">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[15px] text-5xl font-bold  text-white mb-4 xs:mb-2 x:mb-2">Toniy-stark: <br /></h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[6px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique.</p>
                        <div className=" flex mt-6 xs:mt-5 relative bottom-5">
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><MdOutlineFileDownload className="mr-2 text-xl x:text-[16px] lg:text-[30px]" />
                                Yuklab olish</button>
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><SiGoogledisplayandvideo360 className="mr-2 text-xl x:text-[14px] lg:text-[28px]" />
                                Kino korish</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* wednsday */}
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[45vh] sm:h-[65vh] sm:mt-10 xs:h-[40vh] x:h-[33vh] x:mt-16 lg:py-8 lg:px-6">
                <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6 x:px-4 x:pt-10">
                        <div className=" lg:w-[260px] sm:w-[200px] sm:flex md:flex lg:flex s:flex xl:flex 2xl:flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:w-0 x:w-0 hidden">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-10px] x:px-2 x:py-[6px] lg:py-2 lg:px-4 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex x:mt-0">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[15px] text-5xl font-bold  text-white mb-4 xs:mb-2 x:mb-2">wednesday: <br /></h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[6px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique.</p>
                        <div className=" flex mt-6 xs:mt-5 relative bottom-5">
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><MdOutlineFileDownload className="mr-2 text-xl x:text-[16px] lg:text-[30px]" />
                                Yuklab olish</button>
                            <button className="lg:py-4 lg:px-6 xs:py-2 x:py-2 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all lg:text-[18px] x:text-[10px] x:px-3 x:mt-2 "><SiGoogledisplayandvideo360 className="mr-2 text-xl x:text-[14px] lg:text-[28px]" />
                                Kino korish</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Movies_list />
        </div>
    </>)
}

export default Home;
