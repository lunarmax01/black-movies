import { Link } from "react-router-dom";

function Hom_kino() {

        return (<>

                <div className="w-[100%] h-[auto] pt-[40px] pb-[40px] pl-[40px] pr-[40] bg-slate-50 bg-[url('src/material/img/kino_bg.jpg')] bg-fixed grid gap-4 grid-cols-4">
                        {/* 0 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md ">
                                {/* img */}
                                <Link to='/tushlar-mamlakati'><div className=" w-full h-[80%] bg-[url('src/material/img/tushlar-mamlakati.jpg')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Tushlar mamlakati uzbek tilida </h1>
                                </div>
                        </div>
                        {/* 1 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/joker'><div className=" w-full h-[80%] bg-[url('src/material/img/joker.jpg')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Joker  (barcha qisimlar) uzb tilida </h1>


                                </div>

                        </div>
                        {/* 2 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/yovuzlik-maskani'><div className=" w-full h-[80%] bg-[url('src/material/img/yovuzlik-maskani.jpg')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Yovuzlik maskani (barcha qisimlar) uzb tilida</h1>

                                </div>

                        </div>
                        {/* 3 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/temir-odam'><div className=" w-full h-[80%] bg-[url('src/material/img/toniy-starkk.jpg')] bg-cover bg-start rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Temir odam (barcha qisimlar) uzb tilida </h1>

                                </div>

                        </div>
                        {/* 4 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/conik'><div className=" w-full h-[80%] bg-[url('src/material/img/conik.jpg')] bg-no-repeat bg-center bg-cover  rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Conik (barcha qisimkar) uzb tilida </h1>

                                </div>

                        </div>
                        {/* 5 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/mortol-combat'><div className=" w-full h-[80%] bg-[url('src/material/img/mortol-combat.jpg')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Mortol combat uzb tilida </h1>

                                </div>

                        </div>
                        {/* 6 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/misr-afsonasi'><div className=" w-full h-[80%] bg-[url('src/material/img/misr-afsonalari.jpg')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Misir afsonasi uzb tilida </h1>

                                </div>

                        </div>
                        {/* 7 */}
                        <div className=" w-[250px] h-[350px] bg-[white]/20 rounded-md">
                                {/* img */}
                                <Link to='/orgimchak-uy-yoq'><div className=" w-full h-[80%] bg-[url('src/material/img/orgimchak-odam-uyga-yol-yoq.png')] bg-cover rounded-t-md"></div></Link>
                                {/* text */}
                                <div>
                                        <h1 className=" text-center text-[white]">Orgimchakk odam uyga yo'l yoq uzb tilida </h1>

                                </div>

                        </div>

                </div>

        </>);
}

export default Hom_kino;