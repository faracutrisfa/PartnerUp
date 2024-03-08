import React from "react";
import Arrow from "../../assets/icon/Arrow.svg"

const Kembali = () => {
    return (
        <div className="mt-14 flex justify-end mx-40">
            <div className="w-[184px] h-[34px] px-3 py-2.5 rounded-2xl border border-purple-900 justify-center flex">
                <button className="text-purple-900 text-base font-normal font-['Poppins'] flex items-center gap-2">
                    Kembali ke atas <img src={Arrow} alt="Arrow" />
                </button>
            </div>
        </div>
    )
}

export default Kembali;