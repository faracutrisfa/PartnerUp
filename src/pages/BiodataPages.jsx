import React from "react";
import LoginRegisterLayout from "../components/Layout/LoginRegisterLayout";
import BiodataForm from "../components/Auth/BiodataForm";

const BiodataPage = () => {
    return(
        <LoginRegisterLayout>
            <BiodataForm/>
        </LoginRegisterLayout>
    )
}

export default BiodataPage;