/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './../components/Navbar';
import Daftar_saya from './Daftar_saya';
import SubscriberStatus from './../components/SubscriberStatus';

const Profile = () => {
    const isSubscribed = false;
    return (
        <>
            <Navbar />
            <section>
                <div className="px-14 mt-12">
                    <div className="title">
                        <h1 className="font-semibold">Profile Saya</h1>
                    </div>
                    <div className="grid sm:grid-cols-2 mt-2 sm:mt-7 sm:gap-10 gap-4 grid-cols-1">
                        <div className="profile flex flex-col sm:order-first order-last ">
                            <div className="flex gap-8 items-center">
                                <img src="/img/user.png" alt="" className="rounded-full sm:w-24 w-16 border" />
                                <div className="ket flex flex-col gap-4">
                                    <button className="bg-transparent border px-2 py-1 text-[#09147A] text-sm rounded-full border-[#09147A] hover:border-blue-300 hover:bg-[#5160ef] transition duration-300">Ubah Foto</button>
                                    <h6>
                                        <i className="fa-regular fa-bookmark mr-1" />
                                        Maks. 2mb
                                    </h6>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Nama Pengguna</label>
                                    <div className="flex flex-row justify-between items-center pr-2">
                                        <input type="text" value="William" className="block w-full bg-gray-700 text-white rounded-lg p-2" />
                                        <i className="fa-solid fa-pencil" />
                                    </div>
                                </div>
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Email</label>
                                    <div className="flex flex-row justify-between items-center pr-2">
                                        <input type="email" value="william1980@gmail.com" className="block w-full bg-gray-700 text-white rounded-lg p-2" />
                                    </div>
                                </div>
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Kata Sandi</label>
                                    <div className="flex flex-row justify-between items-center pr-2">
                                        <input type="password" value="********" className="block w-full bg-gray-700 text-white rounded-lg p-2" />
                                        <i className="fa-solid fa-pencil" />
                                    </div>
                                </div>
                            </div>
                            <button className="bg-[#09147A] rounded-full w-[7rem] p-2 text-white sm:mt-4 mt-5">Simpan</button>
                        </div>
                        <div className="Subscribe">
                        <SubscriberStatus isSubscribed={isSubscribed} />
                        </div>
                    </div>

                    <div className="daftar-saya s:mt-12 mt-12">
                        <div className="title flex justify-between ">
                            <h1 className="font-semibold">Daftar Saya</h1>
                            <h4 className="text-xs hidden md:block">Lihat Semua</h4>
                        </div>
                    </div>
                </div>
                <Daftar_saya />
            </section>
        </>
    );
}

export default Profile
