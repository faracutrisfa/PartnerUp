import React from "react";
import Profile from "../../assets/image/profile.svg";

const data = [
    {
        name: "Bagas Rizaluddin",
        position: "Product Manager",
        review: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        image: Profile,
    },
    {
        name: "Rizka Oktavia Sari",
        position: "Product Design",
        review: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        image: Profile,
    },
    {
        name: "Cut Risfa Zuhra",
        position: "Front End Developer",
        review: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        image: Profile,
    },
    {
        name: "Azmi Al Ghifari Rahman",
        position: "Back End Developer",
        review: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        image: Profile,
    },
];

function Member() {
    return (
        <div className="m-auto mx-40">
            <div className="mt-20 flex flex-row gap-10 overflow-y-auto scrollbar-hide">
                {data.map((d, index) => (
                    <div key={index} className="pr-28 pl-16 pt-12 pb-20 mb-4 font-Poppins bg-gradient-to-b from-purple-50 to-purple-100 rounded-[52px] shadow justify-start gap-3 flex">
                        <img src={d.image} alt="profile" className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 className="font-semibold text-xl">{d.name}</h3>
                            <h4 className="text-base">{d.position}</h4>
                            <p className="mt-12">{d.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Member;
