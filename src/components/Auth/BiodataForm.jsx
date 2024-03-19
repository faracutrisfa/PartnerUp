import React from "react";
import Elemen from "../../assets/image/ElemenRegister.svg"

const BiodataForm = () => {
    return (
        <div className="relative flex justify-center items-center font-Poppins">
            <img src={Elemen} alt="Element Landing Page " className="w-full -mt-16" />
            <div className="w-[532px] absolute -mt-32">
                <form>
                    <label htmlFor="name" className="text-black text-base font-medium">Nama Lengkap</label>
                    <input 
                        type="text" 
                        id="name"
                        className="mt-[16px] w-[532px] h-[67px] px-9 py-7 bg-purple-50 rounded-3xl border border-purple-900 justify-start items-center gap-2 inline-flex text-purple-900" 
                    />
                    <label htmlFor="name" className="text-black text-base font-medium flex mt-[24px]">Asal Perguruan Tinggi</label>
                    <select name="universitas" id="universitas" required className="">
                        <option value="" disabled selected>Pilih Perguruan Tinggi</option>
                        <option value="IBUM">IKIP Budi Utomo Malang</option>
                        <option value="IPM">Institut Pertanian Malang</option>
                        <option value="ITBAM">Institut Teknologi dan Bisnis Asia Malang</option>
                        <option value="ITNM">Institut Teknologi Nasional Malang</option>
                        <option value="POLINEMA">Politeknik Negeri Malang</option>
                        <option value="STIE-M">STIE Malangkucecwara</option>
                        <option value="STIKI-M">STIKI Malang</option>
                        <option value="ITNM">Institut Teknologi Nasional Malang</option>
                        <option value="UBNM">Universitas Bina Nusantara Malang</option>
                        <option value="UB">Universitas Brawijaya</option>
                        <option value="UG">Universitas Gajayana</option>
                        <option value="UI-M">Universitas Islam Malang</option>
                        <option value="UIN-M">Universitas Islam Negeri Maulana Malik Ibrahim</option>
                        <option value="UKWKM">Universitas Katolik Widya Karya Malang</option>
                        <option value="UNMER">Universitas Merdeka</option>
                        <option value="UM">Universitas Negeri Malang</option>
                        <option value="UMM">Universitas Muhammadiyah Malang</option>
                        <option value="PGRI-M">Universitas PGRI Kanjuruhan Malang</option>
                        <option value="UT-M">Universitas Terbuka Malang</option>
                        <option value="UTT">Universitas Tribhuwana Tunggadewi</option>
                        <option value="UWM">Universitas Widayagama Malang</option>
                        <option value="UW-M">Universitas Wisnuwardhana Malang</option>
                    </select>
                    <label htmlFor="address" className="text-black text-base font-medium flex mt-[24px]">Alamat</label>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="city">Kota</label>
                            <button>Malang</button>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="District">Kecamatan</label>
                            <select name="district" id="district" required>
                                <option value="" disabled selected>Pilih Kecamatan</option>
                                <option value="blimbing">Blimbing</option>
                                <option value="kedungkandang">Kedungkandang</option>
                                <option value="klojen">Klojen</option>
                                <option value="lowokwaru">Lowokwaru</option>
                                <option value="sukun">Sukun</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="interests"  className="text-black text-base font-medium flex mt-[24px]">Minat</label>

                </form>
            </div>
        </div>
    )
}

export default BiodataForm;