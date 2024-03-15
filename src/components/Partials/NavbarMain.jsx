import React from "react";
import Partner from "../../assets/icon/user.svg";
import Pesan from "../../assets/icon/chat.svg";
import Notifications from "../../assets/icon/notifications.svg";
import Premium from "../../assets/icon/premium.svg";
import Profile from '../../assets/image/profle-elys.svg';
import Arrow from "../../assets/icon/arrow-down.svg"

const NavbarMain = () => {
    return(
        <div className="mx-[92px] items-center pb-10 flex flex-row font-Poppins">
            <img src="Logo.svg" alt="Logo PartnerUp" />
            <div className="flex flex-row gap-[48px] ml-[212px]">
                <div className="flex flex-col items-center cursor-pointer">
                    <img src={Partner} alt="Partner Icon"/>
                    <h1 className="text-purple-900 text-base font-medium">Partner</h1>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <img src={Pesan} alt="Partner Icon" />
                    <h1 className="text-black text-opacity-40 text-base font-medium text-center">Pesan</h1>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <img src={Notifications} alt="Partner Icon" />
                    <h1 className="text-black text-opacity-40 text-base font-medium text-center">Notifikasi</h1>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <img src={Premium} alt="Partner Icon" />
                    <h1 className="text-black text-opacity-40 text-base font-medium text-center">Premium</h1>
                </div>
            </div>
            <div className="w-[302px] h-[85px] relative ml-[124px]">
                <div className="left-0 top-0 absolute justify-start items-start gap-[25px] inline-flex">
                    <img className="w-20 h-20 rounded-full" src={Profile} />
                    <div className="w-[197px] h-[76px] relative">
                        <h1 className="left-0 top-0 absolute text-black text-xl font-semibold font-['Poppins']">Elys Warren </h1>
                        <p className="w-[197px] left-0 top-[28px] absolute text-black text-base font-normal font-['Poppins']">Mahasiswa di Universitas Brawijaya</p>
                    </div>
                </div>
                <img src={Arrow} alt="Icon Arrow" className="w-5 h-5 left-[282px] top-[5px] absolute cursor-pointer" />
            </div>
        </div>
    )
}

export default NavbarMain;