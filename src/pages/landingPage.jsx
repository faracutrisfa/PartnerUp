import React from "react";
import Navbar from "../components/Partials/TopNavBar";
import Description from "../components/Partials/description";
import Kenapa from "../components/Partials/why";
import How from "../components/Partials/how";
import AboutUs from "../components/Partials/aboutUs";

const LandingPage = () => {
    return(
        <div>
            <Navbar />
            <Description />
            <Kenapa />
            <How/>
            <AboutUs/>
        </div>
    )
}

export default LandingPage;