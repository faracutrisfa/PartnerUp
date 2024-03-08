import React from "react";
import Logo from "../components/LandingPage/logo";
import LoginHero from "../assets/image/login-hero.svg"
import IconGoogle from "../assets/icon/google.svg"
import IconEmail from "../assets/icon/email.svg"
import IconLock from "../assets/icon/lock.svg"

const Login = () => {
    return(
        <div className="p-10">
            <Logo/>
            <div className="my-24 mx-20 flex flex-row">
                <img src={LoginHero} alt="Login Hero" />
                <div className="ml-auto">
                    <button className="w-[532px] h-[72px] rounded-3xl border border-black justify-center items-center gap-3 flex flex-row">
                        <img src={IconGoogle} alt="Icon Google" /> 
                        <h1 className="text-center text-black text-xl font-medium font-Poppins">Masuk dengan Google</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login