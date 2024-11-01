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
        <div className='w-[100%] h-[100vh]'>
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
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[80vh] sm:h-[65vh] sm:mt-10 xs:h-[50vh] x:h-[30vh] x:mt-16">
                    <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6">
                        <div className=" lg:w-[245px] sm:w-[200px] xs:w-[190px] flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:mt-[40px] x:w-[175px]  xs:mb-2 x:mb-1">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] x:px-4 py-2 px-2 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] x:px-4 py-2 px-2 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[20px] text-5xl font-bold  text-white mb-4 xs:mb-2">Spider-Man: <br /> Across the Spider-Verse</h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[6px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique. Molestiae, dignissimos unde ratione ab pariatur.</p>
                        <div className=" flex mt-6 xs:mt-3">
                            <button className="py-2 px-6 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><MdOutlineFileDownload className="mr-2 text-xl" />
                                Yuklab olish</button>
                            <button className="py-2 px-6 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><SiGoogledisplayandvideo360 className="mr-2 text-xl" />
                                Kino korish</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* toniy stark */}
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[80vh] sm:h-[65vh] sm:mt-10 xs:h-[50vh] x:h-[30vh] x:mt-16"> {/* start kino icons*/}
                <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6">
                        <div className=" lg:w-[245px] sm:w-[200px] xs:w-[190px] flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:mt-[40px] x:w-[175px] xs:mb-2 x:mb-1">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] py-2 px-4 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] py-2 px-4 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[30px] text-5xl font-bold  text-white mb-4 xs:mb-2">Toniy-stark: <br /></h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[10px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique. Molestiae, dignissimos unde ratione ab pariatur.</p>
                        <div className=" flex mt-6 xs:mt-3">
                            <button className="py-2 px-6 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><MdOutlineFileDownload className="mr-2 text-xl" />
                                Yuklab olish</button>
                            <button className="py-2 px-6 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><SiGoogledisplayandvideo360 className="mr-2 text-xl" />
                                Kino korish</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* wednsday */}
                <SwiperSlide id="swiperSlide" className="group w-[100%] lg:h-[100vh] md:h-[80vh] sm:h-[65vh] sm:mt-10 xs:h-[50vh] x:h-[30vh] x:mt-16 ">
                <div className="lg:w-[80%] w-[100%] h-[100vh] flex flex-col pt-[70px] px-8 py-6">
                        <div className=" lg:w-[245px] sm:w-[200px] xs:w-[190px] flex justify-between lg:mt-[150px] sm:mt-[55px] md:mt-[90px] md:mb-5 sm:mb-4 xs:mt-[40px] x:w-[175px] xs:mb-2 x:mb-1">
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] py-2 px-4 rounded-lg">animarsion</h1>
                            <h1 className="bg-white lg:text-[18px] md:text-[14px] sm:text-[12px] xs:
                            text-[12px] x:text-[10px] py-2 px-4 rounded-lg">Advanture</h1>
                        </div>
                        <div className="flex">
                            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl x:text-[30px] text-5xl font-bold  text-white mb-4 xs:mb-2">wednesday: <br /></h1>
                        </div>
                        <p className="lg:text-[19px] md:text-[14px] md:pr-12 sm:text-[13px] xs:text-[10px] x:text-[10px]  text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, maxime molestiae. Quia tempora distinctio reprehenderit eos corrupti omnis deleniti voluptas? Quasi ratione deleniti in magni sapiente quam perspiciatis enim corrupti odit blanditiis hic, quae dignissimos aliquid tempore iste similique. Molestiae, dignissimos unde ratione ab pariatur.</p>
                        <div className=" flex mt-6 xs:mt-3">
                            <button className="py-2 px-6 flex items-center bg-slate-800 text-white hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><MdOutlineFileDownload className="mr-2 text-xl" />
                                Yuklab olish</button>
                            <button className="py-2 px-6 flex items-center bg-slate-700 ml-4 text-white  hover:scale-[105%] rounded-md transition-all x:text-[12px] x:px-3 x:mb-[10px]"><SiGoogledisplayandvideo360 className="mr-2 text-xl" />
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
