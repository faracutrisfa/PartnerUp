import React from "react";
import MainLayout from "../components/Layout/MainLayout"
import Image from "../assets/icon/image-no.svg";
import Search from "../assets/icon/search-white.svg"

const Notification = () => {
    return(
        <MainLayout>
            <div className="w-[1261px] h-[163px] mb-[198px] flex-col justify-start items-start inline-flex mx-[98px] font-Poppins">
                <button className="w-[1261px] px-9 py-4 bg-white border border-black border-opacity-30 justify-start items-center gap-5 inline-flex">
                    <div className="w-[50px] h-[50px] relative">
                        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-purple-900 rounded-full" />
                        <img className="w-[25px] h-[25px] left-[12px] top-[12px] absolute" src={Search} />
                    </div>
                    <div className="w-[787px] flex-col justify-start items-start gap-3 inline-flex">
                        <p className="text-black text-base">Anda muncul dalam pencarian sebanyak 3 kali minggu ini</p>
                    </div>
                </button>
                <button className="w-[1261px] px-9 py-4 bg-white border border-black border-opacity-30 justify-start items-center gap-5 inline-flex">
                    <img className="w-[50px] h-[50px] rounded-full border border-neutral-500" src={Image} />
                    <div className="w-[787px] flex-col justify-start items-start gap-3 inline-flex">
                        <p className="text-black text-base">Berhasil bergabung: Selamat datang di komunitas <span className="text-black text-base font-semibold">Web Design and Development</span></p>
                    </div>
                </button>
            </div>
        </MainLayout>
    )
}

export default Notification;