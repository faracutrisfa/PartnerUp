import React from "react";
import BackgroundWhy from "../../assets/image/Background-Why.svg"
import IconNetwork from "../../assets/icon/network.svg"
import IconPartner from "../../assets/icon/partner.svg"
import IconCollaboration from "../../assets/icon/collaboration.svg"
import IconGrafik from "../../assets/icon/tingkatan.svg"
import ElementWhy from "../../assets/image/Elemen-Why.svg"

const Why = () => {
    return(
        <div id="why" className="relative">
            <img src={BackgroundWhy} alt="Background" className="w-full"/>
            <div className="font-Poppins absolute top-[128px] px-[293px] w-full">
                <h1 className="text-[32px] font-semibold text-center ">Kenapa <span className="text-purple-900">PartnerUp</span>?</h1>
                <div className="flex flex-col mt-20 w-full">
                    <div className="px-12 py-6 bg-purple-50 rounded-full gap-6 inline-flex mb-8 mr-auto">
                        <img src={IconNetwork} alt="Icon Network" />
                        <div>
                            <h1 className="text-purple-900 text-xl font-semibold">Perluas Jaringan</h1>
                            <h3 className="w-[615px] font-normal">Terhubung dengan mahasiswa dari berbagai latar belakang dan keahlian, memperkaya perjalanan berbisnis Kamu.</h3>
                        </div>
                    </div>
                    <div className="px-12 py-6 bg-purple-200 rounded-full gap-6 inline-flex mb-8 ml-auto">
                        <img src={IconPartner} alt="Icon Partner" />
                        <div>
                            <h1 className="text-purple-900 text-xl font-semibold">Temukan Partner Bisnis yang Sesuai</h1>
                            <h3 className="w-[615px] font-normal">Tentukan kriteria partner bisnis kamu dan manfaatkan fitur filter untuk mendapatkan partner sesuai kebutuhanmu.</h3>
                        </div>
                    </div>
                    <div className="px-12 py-6 bg-purple-50 rounded-full gap-6 inline-flex mb-8 mr-auto">
                        <img src={IconCollaboration} alt="Icon Collaboration" />
                        <div>
                            <h1 className="text-purple-900 text-xl font-semibold">Berkolaborasi dengan Mudah</h1>
                            <h3 className="w-[615px] font-normal">Berbagi ide, berdiskusi, dan berkolaborasi dengan mudah lewat fitur obrolan pribadi atau pun obrolan komunitas.</h3>
                        </div>
                    </div>
                    <div className="px-12 py-6 bg-purple-200 rounded-full gap-6 inline-flex ml-auto">
                        <img src={IconGrafik} alt="Icon Grafik" />
                        <div>
                            <h1 className="text-purple-900 text-xl font-semibold">Tingkatkan Pelaku UMKM</h1>
                            <h3 className="w-[615px] font-normal">Wujudkan rencana bisnis kamu dan jadilah bagian dari pelaku UMKM Kota Malang.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <img src={ElementWhy} alt="Element" className="absolute -mt-[76px] right-0" />
        </div>
    )
}

export default Why;