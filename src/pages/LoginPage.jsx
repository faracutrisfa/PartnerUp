import React from "react";
import LoginRegisterLayout from "../components/Layout/LoginRegisterLayout";
import LoginForm from "../components/Auth/LoginForm";
import Hero from "..//assets/image/login-hero.svg"

const LoginPage = () => {
    return(
        <LoginRegisterLayout>
            <div className="flex flex-row justify-between ml-[125px] mr-[175px] " >
                <img src={Hero} alt="Login Hero" />
                <LoginForm />
            </div>
        </LoginRegisterLayout>
    )
}

export default LoginPage;