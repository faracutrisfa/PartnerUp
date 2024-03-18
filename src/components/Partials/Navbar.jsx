import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return(
        <div className="mx-[92px] flex items-center justify-between pb-10">
            <img src="Logo.svg" alt="Logo PartnerUp" />
            <div className="text-xl font-medium font-Poppins">
                <Link 
                    to="why" 
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:bg-purple-100 rounded-full py-3 px-8 font-semibold">Kenapa?</Link>
                <Link 
                    to="how" 
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className="cursor-pointer hover:bg-purple-100 rounded-full py-3 px-8 font-semibold">Bagaimana?</Link>
                <Link 
                    to="aboutUs" 
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className="cursor-pointer hover:bg-purple-100 rounded-full py-3 px-8 font-semibold">Tentang Kami</Link>
            </div>
        </div>
    )
}

export default Navbar;