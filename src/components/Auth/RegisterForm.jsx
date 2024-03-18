import React from "react";
import Google from "../../assets/icon/google.svg"
import Email from "../../assets/icon/email.svg"
import Lock from "../../assets/icon/lock.svg"
import { Link } from "react-router-dom";
import Elemen from "../../assets/image/ElemenRegister.svg"
import { handleRegister } from "../../api/services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        if (form.confirmpassword !== form.password) {
            return alert("Konfirmasi password dan password tidak sama!");
        }
        const response = await handleRegister(form);

        setTimeout(() => {
            navigate("/biodata");
        }, 1000);
        } catch (error) {
        console.log(error);
        }
    };

    return(
        <div className="relative flex justify-center items-center">
            <img src={Elemen} alt="Element Landing Page " className="w-full -mt-16" />
            <div className="w-[532px] absolute -mt-32">
                <button className="w-[532px] h-[72px] rounded-3xl border border-black justify-center items-center gap-3 flex flex-row">
                    <img src={Google} alt="Icon Google" /> 
                    <h1 className="text-center text-black text-xl font-medium font-Poppins">Masuk dengan Google</h1>
                </button>
                <div className="flex flex-row my-[37px] gap-6">
                        <div className="w-[229px] h-[0px] border border-neutral-400"></div>
                        <p className="text-neutral-400 text-sm font-medium font-Poppins -mt-2">Atau</p>
                        <div className="w-[229px] h-[0px] border border-neutral-400"></div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>    

                <div>
                    <label htmlFor="email" className="text-purple-900 font-medium mb-2 flex items-center gap-2 absolute bg-purple-50 ml-7 -mt-3 px-2"><img src={Email} alt="Icon Lock"/>Email</label>
                    <div className="flex">
                        <input 
                            id="email" 
                            type="email" 
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                    </div>
                </div>

                <div className="py-5">
                    <label htmlFor="password" className="text-purple-900 font-medium mb-2 flex items-center gap-2 absolute bg-purple-50 ml-7 -mt-3 px-2"><img src={Lock} alt="Icon Lock"/>Kata Sandi</label>
                    <div className="flex">
                        <input 
                            id="password" 
                            type="password"
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                    </div>
                </div>

                <div className="">
                    <label htmlFor="password" className="text-purple-900 font-medium mb-2 flex items-center gap-2 absolute bg-purple-50 ml-7 -mt-3 px-2"><img src={Lock} alt="Icon Lock"/>Konfirmasi Kata Sandi</label>
                    <div className="flex">
                        <input 
                            id="confirmpassword" 
                            type="password" 
                            onChange={(e) => setForm({ ...form, confirmpassword: e.target.value })}
                            className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                    </div>
                </div>

                <div className="flex flex-row mx-[20px] mt-4 ">
                    <div>
                        <input type="checkbox" name="" id="" className="w-12 h-[14px] border-purple-900"/>
                        <label htmlFor="" className="font-medium">Saya setuju dengan <u>kebijakan privasi, syarat, dan ketentuan</u> <span className="ml-12">yang berlaku</span></label>
                    </div>
                </div>

                <button type="submit" className="w-[532px] h-[72px] px-[136px] py-6 mt-[32px] bg-purple-900 bg-opacity-50 rounded-3xl border justify-center items-center gap-3 inline-flex text-purple-50 font-bold text-xl hover:bg-purple-900">
                    Daftar
                </button>

                <div className="text-center mt-5">
                    <span className="font-medium">Sudah punya akun? <Link to='/login' className="font-bold">Masuk</Link></span>
                </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;