import React, { useState } from "react";
import Elemen from "../../assets/image/ElemenRegister.svg"
import { asalUniversitas } from "../../assets/data/AsalUniversitas";
import { Kecamatan } from "../../assets/data/Kecamatan";
import { ListMinat } from "../../assets/data/ListMinat";
import { ListSkill } from "../../assets/data/ListSkill";
import { useNavigate } from "react-router-dom";
import { handleBiodata } from "../../api/services/auth";

const BiodataForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        uni_id: null,
        district_id: null,
        minat_id: [],
        skill_id: []
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await handleBiodata(form);
  
        window.localStorage.setItem("token", response.data.token);
  
        setTimeout(() => {
          navigate("/main");
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };


    const [selectedMinat, setSelectedMinat] = useState([]);

    function handleMinat(event) {
        const selectedValue = event.target.value;
        if (!selectedMinat.includes(selectedValue)) {
            if (selectedMinat.length < 5) {
                setSelectedMinat(prevMinat => [...prevMinat, selectedValue]);
            } else {
                alert("Anda hanya dapat memilih maksimal 5 pilihan");
            }
        }
    }

    const removeMinat = (indexToRemove) => {
        setSelectedMinat(prevMinat=> prevMinat.filter((_, index) => index !== indexToRemove));
    };

    const [selectedSkills, setSelectedSkills] = useState([]);

    function handleSkill(event) {
        const selectedValue = event.target.value;
        if (!selectedSkills.includes(selectedValue)) {
            if (selectedSkills.length < 5) {
                setSelectedSkills(prevSkills => [...prevSkills, selectedValue]);
            } else {
                alert("Anda hanya dapat memilih maksimal 5 pilihan");
            }
        }
    }    

    const removeSkill = (indexToRemove) => {
        setSelectedSkills(prevSkills => prevSkills.filter((_, index) => index !== indexToRemove));
    };
    
    return(
        <div className="relative flex justify-center items-center font-Poppins">
            <img src={Elemen} alt="Element Landing Page " className="w-full -mt-16" />
            <div className="w-[532px] absolute">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="name" className="text-black text-base font-medium">Nama Lengkap</label>
                    <input 
                        type="text" 
                        id="name"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} 
                        placeholder="Masukkan Nama Lengkap"
                        className="mt-[16px] w-[532px] h-[67px] px-9 py-7 rounded-3xl border-2 border-purple-900 justify-start text-purple-900" 
                    />

                    <label htmlFor="name" className="text-black text-base font-medium flex mt-[24px]">Asal Perguruan Tinggi</label>
                    <select 
                        name="universitas" 
                        id="universitas" 
                        required 
                        className="mt-[16px] w-[532px] h-[67px] pl-9 rounded-3xl border-2 border-purple-900 text-black text-opacity-30 text-base"
                        onChange={(e) => setForm({ ...form, uni_id: e.target.value })} >
                        <option value="" disabled selected className="">Pilih Perguruan Tinggi</option>
                        {
                            asalUniversitas.map((universitas) => {
                                return <option value={universitas.value} className="text-bold" >{universitas.text}</option>
                            })
                        }
                    </select>

                    <label htmlFor="address" className="text-black text-base font-medium flex mt-[24px]">Alamat</label>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="city" className=" text-black text-opacity-30 text-base mb-2">Kota</label>
                            <button className="text-purple-900 text-base font-medium w-[216px] h-[67px] px-9 py-7 bg-purple-100 rounded-3xl border-2 border-purple-900 justify-start items-center inline-flex">Malang</button>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="District" className="text-black text-opacity-30 text-base mb-2">Kecamatan</label>
                            <select 
                                name="District" 
                                id="District" 
                                required 
                                className="w-[296px] h-[67px] pl-9 rounded-3xl border-2 border-purple-900 text-black text-opacity-30 text-base" 
                                onChange={(e) => setForm({ ...form, district_id: e.target.value })}>
                                <option value="" disabled selected className="">Pilih Kecamatan</option>
                                {
                                    Kecamatan.map((Kecamatan) => {
                                        return <option value={Kecamatan.value} className="text-bold" >{Kecamatan.text}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <label htmlFor="Minat" className="text-black text-base font-medium flex mt-[24px]">Minat</label>
                    <select 
                        name="Minat" 
                        id="Minat" 
                        onChange={handleMinat} 
                        className="mt-[16px] w-[532px] h-[67px] pl-9 rounded-3xl border-2 border-purple-900 text-black text-opacity-30 text-base"
                        >
                        <option value="" disabled selected className="">Pilih Minat Bisnis (Maksimal 5 Pilihan)</option>
                        {
                            ListMinat.map(item => (
                            <option key={item.value} value={item.value}>{item.minat}</option>
                        ))}
                    </select>
                    <div>
                        {selectedMinat.map((value, index) => (
                            <p 
                                key={index} 
                                className="mt-5 mr-3 text-purple-900 inline-flex items-center h-9 px-5 py-[4px] bg-purple-100 rounded-2xl border-2 border-purple-900 justify-start">{value} 
                                <button
                                    onClick={() => removeMinat(index)}
                                    className="inline-flex ml-2.5 text-xl">x
                                </button>
                            </p>
                        ))}
                    </div>
                    
                    <label htmlFor="Skill" className="text-black text-base font-medium flex mt-[24px]">Keterampilan</label>
                    <select    
                        name="Skill" 
                        id="Skill" 
                        onChange={handleSkill} 
                        className="mt-[16px] w-[532px] h-[67px] pl-9 rounded-3xl border-2 border-purple-900 text-black text-opacity-30 text-base" >
                        <option value="" disabled selected className="">Pilih Keterampilan (Maksimal 5 Pilihan)</option>
                        {
                            ListSkill.map(skill => (
                            <option key={skill.value} value={skill.value}>{skill.text}</option>
                        ))}
                    </select>
                    <div>
                        {selectedSkills.map((value, index) => (
                            <p 
                                key={index} 
                                className="mt-5 mr-3 text-purple-900 inline-flex items-center h-9 px-5 py-[4px] bg-purple-100 rounded-2xl border-2 border-purple-900 justify-start">{value} 
                                <button
                                    onClick={() => removeSkill(index)}
                                    className="inline-flex ml-2.5 text-xl">x
                                </button>
                            </p>
                        ))}
                    </div>

                    <button 
                        type="submit" 
                        className="float-right mt-5 w-40 h-[59px] px-12 py-6 bg-purple-900 bg-opacity-50 rounded-[64px] justify-center items-center gap-2.5 inline-flex text-purple-50 font-semibold hover:bg-purple-900">
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BiodataForm;