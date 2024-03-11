import React from "react";
import Logo from "../components/LandingPage/Logo";
import LoginHero from "../assets/image/login-hero.svg"
import IconGoogle from "../assets/icon/google.svg"
import IconEmail from "../assets/icon/email.svg"
import IconLock from "../assets/icon/lock.svg"
import { Link } from "react-router-dom";
import Footer from "../components/Partials/Footer"

const Login = () => {
    return(
        <div>
            <div className="p-10">
                <Logo/>
            </div>
            <div className="mx-20 flex flex-row justify-between font-Poppins">
                <img src={LoginHero} alt="Login Hero" />
                <div className="">
                    <button className="w-[532px] h-[72px] rounded-3xl border border-black justify-center items-center gap-3 flex flex-row">
                        <img src={IconGoogle} alt="Icon Google" /> 
                        <h1 className="text-center text-black text-xl font-medium font-Poppins">Masuk dengan Google</h1>
                    </button>
                    <div className="flex flex-row my-[37px] gap-6">
                        <div className="w-[229px] h-[0px] border border-neutral-400"></div>
                        <p className="text-neutral-400 text-sm font-medium font-Poppins -mt-2">Atau</p>
                        <div className="w-[229px] h-[0px] border border-neutral-400"></div>
                    </div>
                    <form action="">
                    <div>
                        <label htmlFor="email" className="text-purple-900 font-medium mb-2 flex items-center gap-2"><img src={IconEmail} alt="Icon Lock"/>Email</label>
                        <div className="flex">
                            <input id="email" type="email" className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                        </div>
                    </div>
                    <div className="py-5">
                        <label htmlFor="password" className="text-purple-900 font-medium mb-2 flex items-center gap-2"><img src={IconLock} alt="Icon Lock"/>Kata Sandi</label>
                        <div className="flex">
                            <input id="password" type="password" className="w-[532px] h-[72px] pl-9 pr-[152px] py-7 rounded-3xl border border-purple-900 bg-purple-50 text-purple-900" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <input type="checkbox" name="" id="" className="w-9"/>
                            <label htmlFor="" className="font-medium ml-1">Ingat Saya</label>
                        </div>
                        <span className="font-semibold">Lupa Kata Sandi?</span>
                    </div>
                    <button type="submit" className="w-[532px] h-[72px] px-[136px] py-6 mt-9 bg-purple-900 bg-opacity-50 rounded-3xl border justify-center items-center gap-3 inline-flex text-purple-50 font-bold text-xl hover:bg-purple-900">
                        Masuk
                    </button>
                    <div className="text-center mt-5">
                        <span className="font-medium">Belum punya akun? <Link to='/register' className="font-bold">Daftar</Link></span>
                    </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login