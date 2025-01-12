/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom"; 

const PopUp = ({ isOpen, onClose, series }) => {
    const navigate = useNavigate(); 
    const isFilmPage = location.pathname === "/film";
    const isEpisodePage = location.pathname === "/beranda" || location.pathname === "/series";

    if (!isOpen || !series) return null;

    const { title, url, year, rating, duration, genre, cast, synopsis, episodes, rekomendasi, videoUrl } = series;

    const handlePlayVideo = () => {
        navigate(`/VideoPage/${series.id}`); 
    };

    return (
        <div className="fixed  inset-0 bg-black bg-opacity-50  flex justify-center items-center z-50">
            <div className="relative mt-32 bg-[#181A1C] text-white rounded-lg w-[90%] md:w-[60%] lg:w-[50%] max-h-screen overflow-y-auto shadow-lg">
                <div className="">
                    <img src={url} alt={title} className="w-full h-auto object-cover rounded-b-none rounded-t-lg" />
                    <button className="absolute top-3 right-3 bg-black bg-opacity-50 text-white rounded-full p-2" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <div className="items-center absolute mt-[-10rem] md:w-[90%]">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <div className="flex justify-between items-center ">
                            <div className="flex gap-4 items-center">
                                <button className="bg-blue-600 text-white rounded-[1rem] w-16 h-10 my-2 text-xs flex justify-center items-center" onClick={handlePlayVideo}>
                                    Mulai
                                </button>
                                <button className="border bg-transparent rounded-full my-2 w-10 h-10 flex justify-center items-center text-xl">+</button>
                            </div>
                            <div className="sound-icon">
                                <img src="/img/sound-icon.png" alt="Sound Icon" className=" border rounded-full p-2 w-10 h-10" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-300 ">
                        <p>
                            <span>{year}</span> {duration}  {rating}
                        </p>

                        <div className="md:grid grid-cols-2 md:gap-4">
                            <p className="mt-2">{synopsis}</p>
                            <div className="grid grid-rows">
                                <p className="mt-2 flex gap-2">
                                    <span>Cast:</span>
                                    <span>{cast}</span>
                                </p>
                                <p className="mt-2 flex gap-2">
                                    <span>Genre:</span>
                                    <span> {genre}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {isEpisodePage && (
                        <div className="mt-6 mb-10">
                            <h3 className="text-lg font-semibold">Episodes</h3>
                            {episodes?.length > 0 ? (
                                <div className="space-y-4">
                                    {episodes.map((episode, index) => (
                                        <div key={index} className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
                                            <img src={episode.url} alt={episode.title} className="w-24 h-16 object-cover rounded-lg" />
                                            <div>
                                                <h4 className="font-semibold">{episode.title}</h4>
                                                <p className="text-sm text-gray-400">{episode.duration}</p>
                                                <p className="text-sm mt-2">{episode.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-400">No episodes available.</p>
                            )}
                        </div>
                    )}

                    {isFilmPage && rekomendasi?.length > 0 && (
                        <div className="mt-6 mb-10 pb-10">
                            <h3 className="text-lg font-semibold mb-4">Rekomendasi Serupa</h3>
                            <div className="flex space-x-4">
                                {rekomendasi.map((item, index) => (
                                    <div key={index} className="relative">
                                        {item.status && (
                                            <div className={`absolute top-1 left-1 sm:left-4 text-white rounded-full px-2 ${item.status === "Premium" ? "bg-yellow-500" : "bg-blue-600"}`}>
                                                <p className="sm:text-[10px] text-[4px]">{item.status}</p>
                                            </div>
                                        )}
                                        {item.ratingTop && (
                                            <div className="absolute pt-1 right-3 sm:right-6 bg-red-600 text-white rounded-sm px-2">
                                                <p className="sm:text-[10px] text-[4px]">{item.ratingTop}</p>
                                            </div>
                                        )}
                                        <img src={item.url} alt={item.title} className="w-full px-3 object-cover rounded-lg hover:scale-110 transition duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopUp;
