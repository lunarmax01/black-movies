import { SiGoogledatastudio } from "react-icons/si";



function Movies_list() {
    return ( <>
                <div id="listbg" className=" w-full h-auto">
                <div className="w-full border-white/0 border-[5px]"></div>
                <marquee className='w-full h-40vh flex items-center' behavior="" direction="">
                    <div id="list" className="w-72 h-40 rounded-2xl group flex">
                        <div className="w-full h-full group-hover:bg-black/40 px-2 py-2">
                                <h1 className=" group-hover:text-[#5bff58] text-black/0 font-serif"><b className="text-black/0  group-hover:text-black font-bold">BLACK </b>MOVIES</h1>
                                <SiGoogledatastudio  className=" text-6 relative left-32 top-10 text-black/0 group-hover:text-[#5bff58] text-[25px] rotate-[180deg] scale-125 transition-all"/>
                                <h1 className="text-black/0 group-hover:text-[#5bff58] font-bold mt-9">2022-AQSH</h1>
                                <h1 className="text-black/0 group-hover:text-[#5bff58] font-bold">Detaktiv, Komediya...</h1>
                        </div>
                    </div>
                </marquee>
                <div className="w-full border-white/0 border-[5px]"></div>
                </div>
    
    </> );
}

export default Movies_list;