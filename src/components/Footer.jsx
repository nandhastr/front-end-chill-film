/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
    return (
        <>
            <section className="mb-8 mt-14 border-t-[1px] pt-4 border-slate-[#181A1C]">
                <div className="px-9 pt-3 flex flex-col md:flex-row gap-8">
                    <div className="md:flex-col">
                        <div className="flex flex-col gap-3 mb-5">
                            <img src="/img/logo.png" alt="" className="w-24 h-12" />
                            <p className="">@2023 Chill All Rights Reserved</p>
                        </div>
                        <div className="flex md:hidden flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold flex">Genre</h1>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold flex">Bantuan</h1>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:gap-8">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-semibold"></h1>
                            <div className="grid grid-cols-2 md:flex md:flex-row gap-4">
                                <ul className="flex flex-col gap-3">
                                    <li>Aksi</li>
                                    <li>Anak-anak</li>
                                    <li>Anime</li>
                                    <li>Britania</li>
                                </ul>
                                <ul className="flex flex-col gap-3">
                                    <li>Drama</li>
                                    <li>Fantasi Ilmiah & Fantasi</li>
                                    <li>Kejahatan</li>
                                    <li>KDrama</li>
                                </ul>
                                <ul className="flex flex-col gap-3">
                                    <li>Komedia</li>
                                    <li>Petualang</li>
                                    <li>Perang</li>
                                    <li>Romantis</li>
                                </ul>
                                <ul className="flex flex-col gap-3">
                                    <li>Sains & Alam</li>
                                    <li>Trailer</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h1 className="font-semibold text-sm ">Bantuan</h1>
                            <ul className="flex flex-col gap-3">
                                <li>FAQ</li>
                                <li>Kontak Kami</li>
                                <li>Privasi</li>
                                <li>Syarat & Ketentuan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
