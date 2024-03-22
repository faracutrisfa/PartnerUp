import React from "react";
import MainLayout from "../components/Layout/MainLayout"
import profile1 from "../assets/image/profile-1.svg"
import profile2 from "../assets/image/profile-2.svg"
import profile3 from "../assets/image/profile-3.svg"
import profile4 from "../assets/image/profile-4.svg"
import profile5 from "../assets/image/profile-5.svg"
import NoChat from "../assets/icon/no-chat.svg"

const chat = [
    {   
        name: "Devon Lane",
        text: "Hai Elyss salam kenal, aku devon dari UM",
        image: profile1,
        time : "Baru saja"
    },
    {
        name: "Esther Howard",
        text: "Anda: Salam kenal juga esther :D",
        image: profile2,
        time : ""    
    },
    {
        name: "Ronald Richards",
        text: "Kita seuniv, kamu dari prodi apa?",
        image: profile3,
        time : "22 m"
    },
    {
        name: "Ralph Edwards",
        text: "Kamu SI 22 bukan si?",
        image: profile4,
        time : "24 m"
    },
    {
        name: "Dianne Russel",
        text: "Haiii Elyss, aku barusan lihat profil kamu ...",
        image: profile5,
        time : "30 m"
    }
];

function Chat() {
    return (
        <div className="bg-white">
            <MainLayout>
                <div className="font-Poppins">
                    <div className="flex flex-row">
                        <div className="w-[452px] h-[43px] relative">
                            <div className="w-[227px] px-2.5 py-4 left-[225px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
                                <div className="text-black text-opacity-30 text-base font-medium">Komunitas</div>
                                <div className="w-[240px] h-[0px] left-0 top-[45px] absolute border"></div>
                            </div>
                            <div className="left-[72px] top-[16px] absolute text-base font-medium">Personal</div>
                            <div className="w-[225.01px] h-[0px] left-0 top-[43px] absolute border-2 border-black"></div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-[452px]">
                            {
                                chat.map((d, index) => (
                                    <div 
                                        key={index} 
                                        className="px-12 py-5 gap-6 inline-flex relative">
                                        
                                        <img 
                                            src={d.image} 
                                            alt="profile" />
                                        <div className="-mr-6">
                                            <h1 className="font-medium">{d.name}</h1>
                                            <p className="text-sm">{d.text}</p>
                                        </div>
                                        <div className="absolute right-0">
                                            <p className="text-black text-opacity-50 text-[10px]">{d.time}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="relative">
                            <div id="latar" className="ml-3 w-[1060px] h-[500px] bg-violet-50" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-9">
                                <div className="item-center justify-center relative">
                                    <img src={NoChat} alt="Icon Chat"/>
                                </div>
                                <p className="text-black text-opacity-30 text-base font-medium">Tidak ada obrolan yang dipilih</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}

export default Chat;
