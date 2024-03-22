import React, { useState } from "react";
import Partner from "../../assets/icon/user.svg";
import PartnerHover from "../../assets/icon/user-hover.svg";
import Pesan from "../../assets/icon/chat.svg";
import PesanHover from "../../assets/icon/chat-hover.svg";
import Notifications from "../../assets/icon/notifications.svg";
import NotificationsHover from "../../assets/icon/notification-hover.svg";
import Premium from "../../assets/icon/premium.svg";
import PremiumHover from "../../assets/icon/premium-hover.svg";
import Profile from '../../assets/image/profle-elys.svg';
import Arrow from "../../assets/icon/arrow-down.svg";
import { Link } from "react-router-dom";

const NavbarMain = () => {
    const [partnerHovered, setPartnerHovered] = useState(true);
    const [chatHovered, setChatHovered] = useState(false);
    const [notificationHovered, setNotificationHovered] = useState(false);
    const [premiumHovered, setPremiumHovered] = useState(false);

    return (
        <div className="mx-[92px] items-center pb-10 flex flex-row font-Poppins">
            <img src="Logo.svg" alt="Logo PartnerUp" />
            <div className="flex flex-row gap-[48px] ml-[212px]">

                <Link
                    to='/main'
                    className="flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setPartnerHovered(true)}
                    onMouseLeave={() => setPartnerHovered(false)}
                >
                    <img
                        src={partnerHovered ? PartnerHover : Partner}
                        alt="Partner Icon"
                    />
                    <h1 className={` ${partnerHovered ? 'text-purple-900' : 'text-black text-opacity-40'}`}>Partner</h1>
                </Link>

                <Link
                    to='/chat'
                    className="flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setChatHovered(true)}
                    onMouseLeave={() => setChatHovered(false)}
                >
                    <img
                        src={chatHovered ? PesanHover : Pesan}
                        alt="Chat Icon"
                    />
                    <h1 className={` ${chatHovered ? 'text-purple-900' : 'text-black text-opacity-40 '}`}>Pesan</h1>
                </Link>

                <Link
                    to='/notifications'
                    className="flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setNotificationHovered(true)}
                    onMouseLeave={() => setNotificationHovered(false)}
                >
                    <img
                        src={notificationHovered ? NotificationsHover : Notifications}
                        alt="Notification Icon"
                    />
                    <h1 className={` ${notificationHovered ? 'text-purple-900' : 'text-black text-opacity-40'}`}>Notifikasi</h1>
                </Link>

                <Link
                    to='/premium'
                    className="flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setPremiumHovered(true)}
                    onMouseLeave={() => setPremiumHovered(false)}
                >
                    <img
                        src={premiumHovered ? PremiumHover : Premium}
                        alt="Premium Icon"
                    />
                    <h1 className={` ${premiumHovered ? 'text-purple-900' : 'text-black text-opacity-40'}`}>Premium</h1>
                </Link>
            </div>

            <div className="w-[302px] h-[85px] relative ml-[124px]">
                <div className="left-0 top-0 absolute justify-start items-start gap-[25px] inline-flex">
                    <img
                        className="w-20 h-20 rounded-full"
                        src={Profile} 
                        alt="Profile Picture"
                    />
                    <div className="w-[197px] h-[76px] relative">
                        <h1 className="left-0 top-0 absolute text-black text-opacity-40 text-xl font-semibold font-['Poppins']">Elys Warren</h1>
                        <p className="w-[197px] left-0 top-[28px] absolute text-black text-opacity-40 text-base font-normal font-['Poppins']">Mahasiswa di Universitas Brawijaya</p>
                    </div>
                </div>
                <img
                    src={Arrow}
                    alt="Icon Arrow"
                    className="w-5 h-5 left-[282px] top-[5px] absolute cursor-pointer"
                />
            </div>
        </div>
    );
};

export default NavbarMain;
