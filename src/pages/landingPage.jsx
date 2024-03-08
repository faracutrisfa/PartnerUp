import React from "react";
import Navbar from "../components/Partials/TopNavBar";
import Description from "../components/Partials/description";
import Kenapa from "../components/Partials/why";
import How from "../components/Partials/how";
import AboutUs from "../components/Partials/aboutUs";
import Member from "../components/Partials/members";
import Kembali from "../components/Partials/kembali";
import Footer from "../components/Partials/footer";

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
            <Footer/>
        </div>
    )
}

export default LandingPage;