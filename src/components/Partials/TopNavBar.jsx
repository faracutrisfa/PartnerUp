import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
import {HiMenuAlt1} from "react-icons/hi"
import Logo from "../LandingPage/logo";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    function openHamburger() {
        setToggle(true);
    }

    function closeHamburger() {
        setToggle(false);
    }

    return(
       <>
            <div className="flex items-center justify-between p-10 lg:flex-row">
                <Logo />
                <div className="space-x-4 px-11 font-medium font-Poppins">
                    <div className="ssm:hidden lg:block space-x-2">
                        <a href="#" className="hover:bg-purple-100 rounded-full px-5 py-2 text-x1">Kenapa?</a>
                        <a href="#" className="hover:bg-purple-100 rounded-full px-5 py-2 text-x1">Bagaimana?</a>
                        <a href="#" className="hover:bg-purple-100 rounded-full px-5 py-2 text-x1">Tentang Kami</a>
                    </div>
                    <div className="ssm:block lg:hidden">
                        {toggle ? (
                            <AiOutlineClose onClick={closeHamburger} size={25} className="text-purple-900 cursor-pointer"/>
                        ) : (<HiMenuAlt1 onClick={openHamburger} size={25} className="text-purple-900 cursor-pointer"/>) }
                    </div>
                </div>
            </div>

            <div className="ssm:block lg:hidden">
                {toggle ? (
                    <div className="font-medium font-Poppins">
                    <ul className="ml-20">
                        <li className="text-l mb-3 cursor-pointer">Kenapa?</li>
                        <li className="text-l mb-3 cursor-pointer">Bagaimana?</li>
                        <li className="text-l mb-3 cursor-pointer">Tentang Kami</li>
                    </ul>
                </div>
                ) 
                : (
                    <div></div>
                ) }
                
            </div>
       </>
    )
}

export default Navbar;