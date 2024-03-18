import React from "react";
import Google from "../../assets/icon/google.svg"
import Email from "../../assets/icon/email.svg"
import Lock from "../../assets/icon/lock.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await handleLogin(form);
  
        window.localStorage.setItem("token", response.data.token);
  
        setTimeout(() => {
          navigate("/main");
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
  
    return(
        <div className="w-[532px]">
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
                        onChange={(e) => setForm({ ...form, email: e.target.value })}  
                        type="email" 
                        className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                </div>
            </div>

            <div className="py-5">
                <label htmlFor="password" className="text-purple-900 font-medium mb-2 flex items-center gap-2 absolute bg-purple-50 ml-7 -mt-3 px-2"><img src={Lock} alt="Icon Lock"/>Kata Sandi</label>
                <div className="flex">
                    <input 
                        id="password" 
                        onChange={(e) => setForm({ ...form, password: e.target.value })} 
                        type="password" 
                        className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div>
                    <input type="checkbox" name="" id="" className="w-12 h-[14px] border-purple-900"/>
                    <label htmlFor="" className="font-medium">Ingat Saya</label>
                </div>
                <span className="font-semibold">Lupa Kata Sandi?</span>
            </div>

            <button type="submit" className="w-[532px] h-[72px] px-[136px] py-6 mt-[32px] bg-purple-900 bg-opacity-50 rounded-3xl border justify-center items-center gap-3 inline-flex text-purple-50 font-bold text-xl hover:bg-purple-900">
                Masuk
            </button>

            <div className="text-center mt-5">
                <span className="font-medium">Belum punya akun? <Link to='/register' className="font-bold">Daftar</Link></span>
            </div>
            </form>
        </div>
    )
}

export default LoginForm;