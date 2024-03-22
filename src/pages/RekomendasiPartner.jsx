import React from "react";
import MainLayout from "../components/Layout/MainLayout"
import ProfileRonald from "../assets/image/diane.svg"
import ProfileDianne from "../assets/image/ronald.svg"
import ProfileJane from "../assets/image/profile-jane.svg"
import ProfileDarel from "../assets/image/profile-darel.svg"
import Keluar from "../assets/icon/keluar.svg"
import Save from "../assets/icon/saves.svg"
import Chat from "../assets/icon/chats.svg"
import Filter from "../assets/icon/filter.svg"
import { Link, animateScroll as scroll } from "react-scroll";
// import { getAllRecommend } from "../api/services/auth";

const ListRekomendasiPartner = [
    {
        profile: ProfileRonald,
        nama: "Ronald Richards",
        universitas: "Mahasiswa di Universitas Brawijaya",
        minat: ["Teknologi", "Teknologi Informasi", "Perangkat Lunak"],
        keterampilan : ["Pemahaman UI/UX", "Pemecahan Masalah", "Pemograman", "Pengembangan Perangkat Lunak"]
    },
    {
        profile: ProfileDianne,
        nama: "Dianne Russell",
        universitas: "Mahasiswa di Universitas Negeri Malang",
        minat: [ "Teknologi Informasi", "Layanan Kreatif", "Manajemen", "Perangkat Lunak", "Riset"],
        keterampilan : [ "Analisis Data", "Manajemen Proyek", "Pemahaman UI/UX"]
    },
    {
        profile: ProfileJane,
        nama: "Jane Cooper",
        universitas: "Mahasiswa di Universitas Brawijaya",
        minat: ["Teknologi", "Makanan dan Minuman", "Keuangan"],
        keterampilan : ["Analisis Keuangan", "Manajemen Proyek", "Pemograman"]
    },
    {
        profile: ProfileDarel,
        nama: "Darrel Watson",
        universitas: "Mahasiswa di Universitas Bina Nusantara Malang",
        minat: ["Teknologi Informasi", "Hiburan", "Layanan Kreatif", "Media"],
        keterampilan : ["Desain Grafis", "Pemograman", "Penyuntingan Foto", "Penyuntingan  Video", "Penulisan Naskah Konten"]
    }
]

const RekomendasiPartner = () => {
    // const [Recommend, setRecommend] = useState([]);

    // const getRecommend = async () => {
    //     try {
    //         const response = await getAllRecommend();
    //         setRecommend(response.data)
    //     }
    //     catch (error) {
    //         if (error.response.data.error == "recommend not found") {
    //             setRecommend([]);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     getRecommend();
    // }, [])
    
    return(
        <MainLayout>
            {/* <div>
                {Recommend.length > 0 ? (
                    <ul>
                        {Recommend.map((partner, index) => (
                            <li key={index}>
                                <h3>{partner.Name}</h3>
                                <p>Uni: {partner.Uni}</p>
                                <p>Minat:</p>
                                <ul>
                                    {partner.minat_id.map((minat, index) => (
                                        <li key={index}>{minat.Name}</li>
                                    ))}
                                </ul>
                                <p>Skill:</p>
                                <ul>
                                    {partner.skill_id.map((skill, index) => (
                                        <li key={index}>{skill.Name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="flex items-center justify-center font-Poppins opacity-40 h-[361px]">Tidak ada rekomendasi partner saat ini.</p>
                )}
            </div> */}
            <div className="font-Poppins justify-center mx-[245px] mt-[146px]">
                <div className="flex flex-row justify-end mb-2">
                    <div className="text-black text-opacity-50 text-xl font-medium">Rekomendasi Partner <span className="text-purple-900">|</span></div>
                    <img src={Filter} alt="" className="ml-2"/> 
                    <p className="text-purple-900 text-xl font-medium ml-2">Filter</p>
                </div>
                {ListRekomendasiPartner.map((d, index) => (
                    <div key={index} className="">
                        <div className="w-[1040px] h-[558px] bg-white rounded-3xl flex flex-col items-center justify-center mb-40" >
                            <img src={d.profile} alt="profile" className="-mt-[170px] mb-[19px]" />
                            <div className="">
                                <div className="flex flex-col">
                                    <h3 className="text-purple-900 text-[32px] font-semibold flex justify-center items-center">{d.nama}</h3>
                                    <h3 className="text-black text-xl font-normal flex justify-center items-center mb-10">{d.universitas}</h3>
                                    <div className="flex flex-row gap-2 mx-[211px]">
                                        <p className="text-black text-opacity-50 text-sm w-28">Minat Bisnis</p>
                                        <div className="">
                                            {d.minat.map((minat, idx) => (
                                                <p 
                                                    key={idx} 
                                                    className="mb-5 mr-2 inline-flex items-center h-6 px-2.5 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm font-medium">
                                                    {minat}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2 mx-[211px] ">
                                        <p className="text-black text-opacity-50 text-sm">Keterampilan</p>
                                        <div>
                                            {d.keterampilan.map((keterampilan, idx) => (
                                                <p 
                                                    key={idx} 
                                                    className="mb-5 mr-2 inline-flex items-center h- px-2.5 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm font-medium">
                                                    {keterampilan}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[32px] mt-[50px]">
                                <img src={Keluar} alt="" />
                                <img src={Save} alt="" />
                                <img src={Chat} alt="" />
                                <div className="flex flex-row justify-between">
                                <button className="items-center py-2.5 px-5 rounded-3xl border-2 border-purple-900 text-purple-900 text-base font-medium">
                                    <Link to='/profilePartner'>Lihat Profil</Link></button>         
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default RekomendasiPartner;