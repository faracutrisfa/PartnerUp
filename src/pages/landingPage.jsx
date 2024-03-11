import React from "react";
import Navbar from "../components/Partials/Navbar";
import Description from "../components/LandingPage/Description"
import Why from "../components/LandingPage/Why"
import How from "../components/LandingPage/How"
import AboutUs from "../components/LandingPage/aboutUs";
import Members from "../components/LandingPage/Members"
import Kembali from "../components/LandingPage/Kembali"
import Footer from "../components/Partials/Footer"

const LandingPage = () => {
    return(
        <div>
            <Navbar />
            <Description />
            <Why />
            <How/>
            <AboutUs/>
            <Members/>
            <Kembali />
            <Footer />
        </div>
    )
}

export default LandingPage;