import Navbar from "../navbar/navbar";
import React, { useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import Hom_kino from "./hom-kino";

function Home() {
    const slider = [
        { url: 'src/material/img/toniy-stark.webp'},
        { url: 'src/material/img/pantera.jpeg'},
        { url: 'src/material/img/venom-reklama.webp'},
    ];
    
    // useState ni set funksiyasi bilan yaxshilash
    const [hoverIndex, setHoverIndex] = useState(0);

    const left = () => {
        setHoverIndex(hoverIndex === 0 ? slider.length - 1 : hoverIndex - 1);
    };

    const right = () => {
        setHoverIndex(hoverIndex === slider.length - 1 ? 0 : hoverIndex + 1);
    };
    
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-[#181818] p-8 overflow-hidden">
                <div className="w-[98%] h-[98%] rounded-lg shadow-lg shadow-white/20 overflow-auto touch-pan-x to-fuchsia-400">
                    {/* slider reklama kino */}
                    <div className="flex w-full h-[90vh] group">
                        <div
                            style={{ backgroundImage: `url(${slider[hoverIndex].url})` }}
                            className="w-full h-full rounded-2xl bg-center bg-cover"
                        >
                            <Navbar />

                            <div className="w-[40%] h-[40%] pl-[25px] relative top-[170px] left-[130px]">
                                <h1 className="text-white text-[35px] text-center">
                                    <b className="text-[#000000]">BLACK</b> MOVIES ga xush kelbsiz
                                </h1>
                                <p className="text-white text-[15px] mt-[10px] text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolores culpa optio, 
                                    quibusdam impedit quae, magnam laborum, hic nam non animi? Corrupti assumenda perspiciatis 
                                    minima adipisci quam maxime accusantium magnam, reiciendis officia laborum aut eos atque 
                                    sint nemo ullam, eligendi, pariatur placeat? Tenetur soluta et amet ex hic fugit qui!
                                </p>
                                
                                <button className="w-[180px] h-[40px] border-[3px] border-white text-white rounded-md ml-[180px] mt-[20px] bg-black/50 hover:bg-white/50 hover:text-black hover:border-black">
                                    Royhatdan o'tish
                                </button>
                            </div>

                            <div className="hidden group-hover:bg-black absolute top-[41%] w-[45px] -translate-x-0 -translate-y-[-50%] left-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <BsChevronBarLeft onClick={left} size={30} />
                            </div>
                            <div className="hidden group-hover:bg-white absolute top-[41%] w-[45px] -translate-x-0 -translate-y-[-50%] right-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <BsChevronBarRight onClick={right} size={30} />
                            </div>
                        </div>
                    </div>

                    <div>

                        {/* Bu yerda boshqa komponentlar yoki kontent joylashtirilishi mumkin */}
                        </div>
                    <Hom_kino />
                </div>
            </div>
        </>
    );
}

export default Home;
