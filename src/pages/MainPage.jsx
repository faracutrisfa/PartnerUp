import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import Search from "../assets/icon/search.svg"
import Line from "../assets/icon/line.svg"
import Community from "../assets/icon/community.svg"
import Person from "../assets/icon/person.svg"
import { Link } from "react-router-dom";

const MainPage = () => {
    return(
        <MainLayout>
            <div className="font-Poppins mx-[305px] mt-[61px]">
                <div className="text-black text-xl font-semibold">Apa yang kamu butuhkan?</div>
                <form>
                    <input 
                        type="text" 
                        id="search"
                        placeholder="Cari"
                        className="mt-[24px] w-[830px] h-[49px] pl-[50px] pr-60 py-3 text-purple-900 bg-white rounded-2xl border-2 border-purple-900 justify-start items-center gap-2 inline-flex" 
                    />
                    <img src={Search} alt="Icon Search" className="relative -mt-[38px] mx-5"/>
                </form>

                <div className="flex flex-row mt-[36px] gap-[20px]">
                    <img src={Line} alt="Line Icon" />
                    <p className="text-black text-opacity-30 text-base font-medium ">Atau</p>
                    <img src={Line} alt="Line Icon" />
                </div>

                <div className="flex flex-row gap-[20px] mx-[108px]">
                    <div className="w-[298px] mt-[36px] h-[332px] px-16 py-8 bg-white rounded-2xl border-2 border-purple-900 flex-col justify-start items-center gap-5 inline-flex">
                        <div className="w-[120px] h-[120px] relative">
                            <div className="w-[120px] h-[120px] left-0 top-0 absolute bg-white rounded-full border-2 border-purple-900" />
                            <img src={Person} alt="Icon Person" className="w-[60px] h-[60px] left-[30px] top-[30px] absolute" />
                        </div>
                        <div className="text-center text-black text-xl font-semibold">Rekomendasi<br/>Partner</div>
                        <Link 
                            to='/rekomendasiPartner'
                            className="px-16 py-3 bg-purple-200 rounded-3xl justify-center items-center gap-2.5 inline-flex  hover:bg-purple-300 ">
                            <p className="text-center text-purple-900 text-xl font-bold ">Pilih</p>
                        </Link>
                    </div>
                    
                    <div className="w-[298px] mt-[36px] h-[332px] px-16 py-8 bg-white rounded-2xl border-2 border-purple-900 flex-col justify-start items-center gap-5 inline-flex">
                        <div className="w-[120px] h-[120px] relative">
                            <div className="w-[120px] h-[120px] left-0 top-0 absolute bg-white rounded-full border-2 border-purple-900" />
                            <img src={Community} alt="Icon Community" className="w-[60px] h-[60px] left-[30px] top-[30px] absolute" />
                        </div>
                        <div className="text-center text-black text-xl font-semibold mt-[43px]">Komunitas</div>
                        <Link 
                            to='/komunitas' 
                            className="px-16 py-3 bg-purple-200 rounded-3xl justify-center items-center gap-2.5 inline-flex mt-5 hover:bg-purple-300">
                            <p className="text-center text-purple-900 text-xl font-bold">Pilih</p>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default MainPage;