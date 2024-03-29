import React from "react";
import IconRekomendasi from "../../assets/icon/rekomendasi-partner.svg"
import IconChat from "../../assets/icon/icon-chat.svg"
import IconCommunity from "../../assets/icon/community.svg"

const How = () => {
    return(
    <div id="how" className="font-Poppins mt-20">
        <h1 className="font-semibold text-[32px] text-center">Bagaimana <span className="text-purple-900">PartnerUp</span> membantumu?</h1>
        <div className="flex flex-col md:flex-row justify-between h-[460px] mt-20 mx-[92px] gap-[52px]">
            <div className="border-4 border-purple-900 bg-purple-900 text-purple-50 flex flex-col rounded-[52px] w-[408px] h-[460px] px-[72px] pt-[52px] pb-[68px]">
                <div className="flex justify-center "><img src={IconRekomendasi} alt="Rekomendasi" className="w-2/6" /></div>
                <h1 className="font-semibold text-center text-xl my-5 ">Rekomendasi <br /> Partner</h1>
                <p className="text-center">Rekomendasi partner <br /> berdasarkan minat, <br /> kebutuhan, dan seberapa <br /> kredibilitas partner kamu.</p>
            </div>
            <div className="border-4 border-purple-100 bg-purple-100 flex flex-col rounded-[52px] w-[408px] h-[460px] px-[72px] pt-[52px] pb-[68px]">
                <div className="flex justify-center "><img src={IconChat} alt="Chat" className="w-2/6" /></div>
                <h1 className="font-semibold text-center text-xl mt-5 mb-12  text-purple-900">Obrolan</h1>
                <p className="text-center">Reach-out partner kamu <br /> dengan memulai obrolan.</p>
            </div>
            <div className="border-4 border-purple-900 flex flex-col rounded-[52px] w-[408px] h-[460px] px-[72px] pt-[52px] pb-[68px]">
                <div className="flex justify-center "><img src={IconCommunity} alt="Komunitas" className="w-2/6" /></div>
                <h1 className="font-semibold text-center text-xl mt-5 mb-11 text-purple-900">Komunitas</h1>
                <p className="text-center">Berdiskusi dan berkolaborasi <br /> dengan orang-orang yang  <br /> memiliki minat yang sama.</p>
            </div>
        </div>
    </div>
    )
}

export default How;