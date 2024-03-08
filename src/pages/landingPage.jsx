import React from "react";
import Navbar from "../components/Partials/TopNavBar";
import Description from "../components/LandingPage/description"
import Kenapa from "../components/LandingPage/why"
import How from "../components/LandingPage/how"
import AboutUs from "../components/LandingPage/aboutUs"
import Member from "../components/LandingPage/members"
import Kembali from "../components/LandingPage/kembali"
import Footer from "../components/Partials/footer"

const LandingPage = () => {
    return(
        <div>
            <Navbar />
            <Description />
            <Kenapa />
            <How/>
            <AboutUs/>
            <Member/>
            <Kembali />
            <Footer />
        </div>
    )
}

export default LandingPage;