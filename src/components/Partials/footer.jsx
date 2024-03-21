import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        //Footer
        <footer className="mt-20">
            <div className="border border-black border-opacity-25 "></div>
            <div className="mx-[92px]">
                <img src="Logo.svg" alt="Logo" className="mt-11 mb-4"/>
                <h2 className="text-black text-base font-normal font-Poppins mb-10">Temukan Partner Bisnismu Di Kota Malang</h2>
                <div className="flex flex-row">
                    <div>
                        <p className="text-black text-base font-semibold font-Poppins">Kelompok 6 Intern BCC 2024</p>
                        <p className="text-black text-base font-normal font-Poppins">Fakultas Ilmu Komputer, Universitas Brawijaya, Malang, 65145<br/>+62 821 7397 9078</p>
                    </div>
                    <div className="flex flex-col ml-auto">
                        <p href="#" className="text-black text-base font-semibold font-Poppins">Lainnya</p>
                        <a href="#" className="text-black text-base font-normal font-Poppins"><u>Syarat dan Ketentuan</u></a>
                        <a href="#" className="text-black text-base font-normal font-Poppins"><u><Link to='/biodata'>Kebijakan Privasi</Link></u></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;