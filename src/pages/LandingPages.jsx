import React from "react";
import LandingPageLayout from "../components/Layout/LandingPageLayout";
import Description from "../components/DestinationPage/Description";
import Why from "../components/DestinationPage/Why"
import How from "../components/DestinationPage/How"
import AboutUs from "../components/DestinationPage/AboutUs"
import Members from "../components/DestinationPage/Members"

const LandingPages = () => {
    return(
        <LandingPageLayout>
            <Description />
            <Why />
            <How />
            <AboutUs />
            <Members />
        </LandingPageLayout>
    )
}

export default LandingPages;