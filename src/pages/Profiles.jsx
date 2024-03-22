import React from "react";
import Footer from "../components/Partials/Footer";
import Arrow from "../assets/icon/arrow-left.svg";
import Profile from "../assets/image/Profile-Elys.svg"
import Profile1 from "../assets/image/profile-ronald.svg"
import Profile2 from "../assets/image/profile-dianne.svg"
import Save from "../assets/icon/save.svg"
import Exit from "../assets/icon/exit.svg"
import EditProfile from "../assets/icon/edit-profile.svg"
import { Link } from "react-router-dom";

const Profiles = () => {
    return(
        <div>
            <div className="font-Poppins">
                <div className="flex flex-row justify-start items-center gap-9 mx-[92px] mt-[36px] mb-[20px]">
                    <Link to='/main'><img src={Arrow} alt="Arrow Icon" className="relative"/></Link>
                    <h1 className="text-2xl font-semibold">Profil</h1>
                </div>
                <div className="ml-[144px] w-[700px] h-[468px] mr-5 bg-white rounded-lg border border-black border-opacity-20 flex-col items-start gap-12 inline-flex">
                    <div className="flex flex-row gap-[38px] mx-10 mt-10">
                        <img 
                            src={Profile} 
                            alt="Profile" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-purple-900 text-[32px] font-semibold">Elys Warren</h1>
                            <p className="text-xl">Mahasiswa di Universitas Brawijaya</p>
                            <button className="flex flex-row gap-2 w-[131px] h-[41px] px-3 py-2 bg-white rounded-lg shadow justify-start items-center">
                                <img 
                                    src={EditProfile} 
                                    alt="Icon Edit Profile" />
                                <Link to='/updateProfile'>Edit Profil</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row mx-[40px]">
                            <h1 className="text-black text-opacity-50 text-sm w-[120px]">Minat Bisnis</h1>
                            <div className="ml-7">
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Keuangan</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Perangkat Lunak</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Riset</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Teknologi</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Teknologi Informasi</li>
                            </div>
                        </div>
                        <div className="flex flex-row mx-[40px]">
                            <h1 className="text-black text-opacity-50 text-sm w-[120px]">Keterampilan</h1>
                            <div className="">
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Analisis Keuangan</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Pemahaman UI/UX</li>
                                <li className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-black text-opacity-75 text-sm">Pemograman</li>
                            </div>
                        </div>
                        <div className="flex flex-row mx-[40px]">
                            <h1 className="text-black text-opacity-50 text-sm w-[120px]">Tautan</h1>
                            <div className="">
                                <a href="#" className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-slate-500 text-sm ">linkedin.com/in/elyswarren</a>
                                <a href="#" className="mr-2 mb-5 inline-flex items-center h-9 px-4 rounded-3xl border-2 border-black border-opacity-75 text-slate-500 text-sm ">Elys Warren - PDDIKTI</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[700px] h-[182px] px-8 py-7 left-[144px] top-[610px] mx-[144px] mt-5 bg-white rounded-lg border border-black border-opacity-20 flex-col gap-5 inline-flex">
                    <h1 className="text-purple-900 text-lg font-semibold ">Tentang</h1>
                    <p className="w-[451px] text-black text-base font-normal ">xxxxx</p>
                </div>
                <div className="w-[432px] h-[281px] px-8 py-7 left-[864px] top-[106px] absolute bg-white rounded-lg border border-black border-opacity-20 flex-col gap-5 inline-flex">
                    <h1 className="text-purple-900 text-lg font-semibold ">Komunitas</h1>
                    <p className="w-[351px] text-black text-opacity-50 text-base font-medium ">Belum tergabung dengan komunitas manapun.</p>
                </div>
                <div className="w-[432px] h-[369px] px-8 py-7 left-[864px] top-[407px] absolute bg-white rounded-lg border border-black border-opacity-20 flex-col inline-flex">
                    <h1 className="text-purple-900 text-lg font-semibold mb-4">Simpan Partner</h1>
                    <div className="flex flex-row gap-5 border px-3 py-3">
                        <img 
                            src={Profile1} 
                            alt="Profile" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-semibold">Ronald Richards</h1>
                            <p className="w-[204px] text-black text-base">Mahasiswa di Universitas Brawijaya</p>
                            <div className="flex flex-row justify-between">
                                <button className="items-center py-1 px-3 rounded-3xl border-2 border-purple-900 text-purple-900 text-[8px] font-medium">
                                    <Link to='/profilePartner'>Lihat Profil</Link></button>
                                <img src={Save} alt="Icon Save" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 border px-3 py-3">
                        <img 
                            src={Profile2} 
                            alt="Profile" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-lg font-semibold">Dianne Russel</h1>
                            <p className="w-[204px] text-black text-base">Mahasiswa di Universitas Negeri Malang</p>
                            <div className="flex flex-row justify-between">
                                <button className="items-center py-1 px-3 rounded-3xl border-2 border-purple-900 text-purple-900 text-[8px] font-medium">
                                    <Link to='/profilePartner'>Lihat Profil</Link></button>
                                <img src={Save} alt="Icon Save" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-3 py-2 left-[1187px] top-[790px] absolute bg-white rounded-lg shadow justify-start items-center gap-2 inline-flex">
                    <img src={Exit} alt="Icon Exit" />
                    <Link to='/' className="text-red-700 text-base font-medium">Keluar</Link>
                </button>
            </div>
            <Footer />
        </div> 
    )
}

export default Profiles;