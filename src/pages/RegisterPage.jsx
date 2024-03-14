import React from "react";
import LoginRegisterLayout from "../components/Layout/LoginRegisterLayout";
import RegisterForm from "../components/Auth/RegisterForm";

const RegisterPage = () => {
    return(
        <LoginRegisterLayout>
            <RegisterForm />
        </LoginRegisterLayout>
    )
}

export default RegisterPage;