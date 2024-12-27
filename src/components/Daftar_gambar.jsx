/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Daftar_gambar = ({ title, items }) => {
    const isProfilePage = location.pathname === "/profile";
    return (
        <>
            <section className="mb-4 mt-12">
                <div className="px-6 flex flex-col sm:gap-6">
                    {!isProfilePage && (
                        <h2 className="font-semibold text-sm sm:text-2xl pb-4">{title}</h2>
                    )}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 ">
                        {items.map((item, index) => (
                            <div key={index} className="carousel-item relative">
                                {item.status ? (
                                    <>
                                        <div className="absolute top-1 left-1 sm:left-4 w-auto bg-blue-600 text-white rounded-full">
                                            <div className="flex justify-between items-center px-1 sm:px-2">
                                                <p className="sm:text-[10px] text-[4px]">{item.status}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                {item.ratingTop ? (
                                    <>
                                        <div className="absolute pt-1 right-2 sm:right-2 bg-red-600 text-white h-auto sm:w-6 w-3 rounded-sm">
                                            <div className="flex justify-between items-center text-center">
                                                <p className="sm:text-[10px] text-[4px] text-center sm:text-center">{item.ratingTop}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                <img src={item.url} alt={item.title} className=" w-full object-cover rounded-lg hover:scale-[1.1] transition duration-500 mb-2" />
                                <div className="absolute bottom-0 left-0 w-full p-3 text-white rounded-b-lg">
                                    <div className="flex justify-between items-center px-2">
                                        {item.title || item.rating ? (
                                            <>
                                                {item.title && <h4 className="text-sm font-medium">{item.title}</h4>}
                                                {item.rating && <p className="text-sm">⭐ {item.rating}</p>}
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Daftar_gambar
