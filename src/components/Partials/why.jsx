import React from "react";
import BackgroundWhy from "../../assets/image/background-why.svg"
import IconNetwork from "../../assets/icon/network.svg"
import IconPartner from "../../assets/icon/partner.svg"
import IconCollaboration from "../../assets/icon/collaboration.svg"
import IconGrafik from "../../assets/icon/tingkatan.svg"

const Kenapa = () => {
    return(
        <div className="relative">
            <img src={BackgroundWhy} alt="Background Why" className="w-full" />
            <div className="font-Poppins absolute top-24 left-1/2 transform -translate-x-1/2 w-full">
                <h1 className="font-semibold text-3xl text-center">Kenapa <span className="text-purple-900">PartnerUp?</span></h1>
                <div className="flex flex-col mt-20 mx-28">
                    <div className="flex items-center mr-auto rounded-full bg-purple-50 px-20 py-6 mb-10">
                        <img src={IconNetwork} alt="Network" />
                        <div className="ml-4">
                            <h1 className="text-3xl font-semibold text-purple-900 font-Popppins">Perluas Jaringan</h1>
                            <h3>Terhubung dengan mahasiswa dari berbagai latar belakang <br /> dan keahlian, memperkaya perjalanan berbisnis Kamu.</h3>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto mt-4 rounded-full bg-purple-200 px-12 py-6 mb-10">
                        <img src={IconPartner} alt="Network" className="ml-4" />
                        <div className="ml-4">
                            <h1 className="text-3xl font-semibold text-purple-900 font-Popppins">Temukan Partner Bisnis yang Sesuai</h1>
                            <h3>Tentukan kriteria partner bisnis kamu dan manfaatkan fitur <br /> filter untuk mendapatkan partner sesuai kebutuhanmu.</h3>
                        </div>
                    </div>
                    <div className="flex items-center mr-auto mt-4 rounded-full bg-purple-50 px-24 py-6 mb-10">
                        <img src={IconCollaboration} alt="Network" />
                        <div className="ml-4">
                            <h1 className="text-3xl font-semibold text-purple-900 font-Popppins">Berkolaborasi dengan Mudah</h1>
                            <h3>Berbagi ide, berdiskusi, dan berkolaborasi dengan mudah <br /> lewat fitur obrolan pribadi atau pun obrolan komunitas.</h3>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto mt-4 rounded-full bg-purple-200 px-28 py-6">
                        <img src={IconGrafik} alt="Network" className="ml-4" />
                        <div className="ml-4">
                            <h1 className="text-3xl font-semibold text-purple-900 font-Popppins">Tingkatkan Pelaku UMKM</h1>
                            <h3>Wujudkan rencana bisnis kamu dan jadilah bagian dari <br /> pelaku UMKM Kota Malang.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Kenapa;