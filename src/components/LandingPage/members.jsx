import React from "react";
import Kutipan from "../../assets/icon/Kutipan.svg"
import CutProfile from "../../assets/image/CutProfile.svg"
import RizkaProfile from "../../assets/image/RizkaProfile.svg"

const data = [
    {
        name: "Bagas Rizaluddin",
        position: "Product Manager",
        review: "saya hanya bisa pasrah dengan adiks adiks ini",
        image: RizkaProfile,
        icon: Kutipan,
    },
    {
        name: "Rizka Oktavia Sari",
        position: "Product Design",
        review: "Maaf yh developer q desainnya blom kelar (((meminta mff di atas materai)))",
        image: RizkaProfile,
        icon: Kutipan,
    },
    {
        name: "Cut Risfa Zuhra",
        position: "Front End Developer",
        review: "bersyukur kita tidak tipes",
        image: CutProfile,
        icon: Kutipan,
    },
    {
        name: "Azmi Al Ghifari Rahman",
        position: "Back End Developer",
        review: "Bismillah aja",
        image: CutProfile,
        icon: Kutipan,
    },
];

function Members() {
    return (
        <div className="m-auto mx-40 font-Poppins">
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
        </div>
    );
}

export default Members;
