import React from "react";
import Element2 from "../../assets/image/Elemen-2.svg"
import Element3 from "../../assets/image/Elemen-3.svg"

const AboutUs = () => {
    return(
        <div id="aboutUs">
            <img src={Element2} alt="Element" className="absolute -mt-[80px]"/>
            <img src={Element3} alt="Element" className="absolute -mt-[24px] right-0"/>
            <div className="font-Poppins mt-28 bg-white rounded-2xl shadow py-[60px] flex-col mx-[178px] relative">
                <h1 className="font-semibold text-[32px] mb-[52px] text-center">Tentang <span className="text-purple-900"> Kami </span></h1>
                <p className="w-[866px] h-[195px] text-center mx-auto">PartnerUp merupakan website yang dikembangkan oleh Kelompok 6 Intern BCC 2024 yang beranggotakan Baghas Rizaluddin (Product Manager), Rizka Oktavia Sari (Product Designer), Cut Risfa Zuhra (Front-End Developer), dan Azmi Al Ghifari Rahman (Back-End Developer).  PartnerUp membantu mahasiswa-mahasiswa di Kota Malang untuk menemukan partner bisnis dengan minat, keterampilan, dan Ide yang tepat. Kami juga mewadahi mereka untuk dapat saling berbagi ide bisnis bahkan berkolaborasi. Kami percaya dengan ini kami dapat meningkatkan jumlah pelaku UMKM dari kalangan mahasiswa.</p>
            </div>
        </div>
    )
}

export default AboutUs;