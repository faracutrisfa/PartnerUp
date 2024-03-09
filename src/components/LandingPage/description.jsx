import { Navigate, useNavigate } from "react-router-dom";
import React from "react";
import Hero from "../../../src/assets/image/Landing-page-image.svg"

const Description = () => {
    const navigate = useNavigate();

    return(
        <main className="max-w-7xl mx-auto my-11 font-Poppins">
            <div className="box-border flex flex-wrap">
                <article className="w-full md:w-2/4 mt-12 ">
                    <h1 className="font-semibold text-4xl mb-8">Halo <span className="text-purple-900">mahasiwa</span>, ayo <br /> temukan <span className="text-purple-900">partner bisnismu</span> <br /> di sini!</h1>
                    <p className="font-reguler text-xl mb-8">Berhenti membuat alasan untuk tidak memulai bisnis. <b>PartnerUp</b> menghubungkanmu dengan ribuan mahasiswa di Kota Malang yang dapat menjadi partner bisnismu!</p>
                    <button onClick={() => navigate('/login')} className="font-semibold text-sm text-purple-50 bg-purple-900 border-2 border-purple-900 rounded-full px-8 py-3 hover:bg-purple-50 mr-5 hover:border-purple-900 hover:text-purple-900">Masuk</button>
                    <button onClick={() => navigate('/register')} className="font-semibold text-sm text-purple-900 hover:text-purple-50 border-2  border-purple-900 hover:bg-purple-900 rounded-full px-8 py-3  dark:border-purple-900  dark:hover:bg-purple-900 ">Daftar</button>
                </article>
                <aside className="md:w-2/4 flex justify-end">
                    <div><img src={Hero} alt="Landing page image" /></div>
                </aside>
            </div>
        </main>
    )
}

export default Description;