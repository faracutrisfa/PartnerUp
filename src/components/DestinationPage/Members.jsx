import React from "react";
import Kutipan from "../../assets/icon/Kutipan.svg"
import CutProfile from "../../assets/image/CutProfile.svg"
import RizkaProfile from "../../assets/image/RizkaProfile.svg"
import Arrow from "../../assets/icon/Arrow.svg"
import BagasProfile from "../../assets/image/BagasProfile.svg"
import AzmiProfile from "../../assets/image/AzmiProfile.svg"
import { Link, animateScroll as scroll } from "react-scroll";

const data = [
    {
        name: "Bagas Rizaluddin",
        position: "Product Manager",
        review: "saya hanya bisa pasrah dengan adiks adiks ini",
        image: BagasProfile,
        icon: Kutipan,
    },
    {
        name: "Rizka Oktavia Sari",
        position: "Product Design",
        review: "Mari kita berdoa semoga desainku kelar HARI INI at least mvp nya",
        image: RizkaProfile,
        icon: Kutipan,
    },
    {
        name: "Cut Risfa Zuhra",
        position: "Front End Developer",
        review: "bersyukur kita tidak tipes, semoga berkah",
        image: CutProfile,
        icon: Kutipan,
    },
    {
        name: "Azmi Al Ghifari Rahman",
        position: "Back End Developer",
        review: "Bismillah aja",
        image: AzmiProfile,
        icon: Kutipan,
    },
];

function Members() {
    return (
        <div className="m-auto ml-[92px] font-Poppins">
            <div className="mt-20 flex flex-row gap-10 overflow-y-auto scrollbar-hide">
                {data.map((d, index) => (
                    <div key={index} className="w-[566px] h-[300px] px-[52px] pt-[52px] pb-[104px] bg-white rounded-[52px] shadow justify-start items-center gap-3 inline-flex">
                        <div className="w-[462px] h-36 relative">
                            <img src={d.image} alt="profile" className="w-[92px] h-[92px] left-0 top-0 absolute" />
                            <div className="w-[346px] h-[130px] left-[116px] top-[14px] absolute">
                                <div className="absolute flex-col justify-start items-start inline-flex">
                                    <h3 className="w-54 text-black text-xl font-semibold">{d.name}</h3>
                                    <h4 className="text-black text-base font-normal italic">{d.position}</h4>
                                </div>
                            <div className="w-64 top-[85px] absolute">
                                <p className="text-black text-base font-normal">{d.review}</p></div>
                            <div>
                                <img className="w-[50px] h-[50px] left-[296px] top-[-13px] absolute" src={d.icon} alt="Icon Kutipan" />
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-14 flex justify-end mr-[92px]">
            <div className="w-[184px] h-[34px] px-3 py-2.5 rounded-2xl border border-purple-900 justify-center flex">
                <Link 
                    to="description" 
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-purple-900 text-base font-normal font-['Poppins'] flex items-center gap-2">
                    Kembali ke atas <img src={Arrow} alt="Arrow" />
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Members;
