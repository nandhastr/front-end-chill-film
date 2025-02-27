/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";

import PopUp from "./PopUp";

const Carousel = ({ title, items, settings }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeries, setSelectedSeries] = useState(null);
    

    const handleItemClick = (items) => {
        setSelectedSeries(items); 
        setIsOpen(true); 
    };

    return (
        <section className="mb-4">
            <div className="px-12 flex flex-col md:gap-3">
                {title && <h2 className="font-semibold text-md md:text-2xl ">{title}</h2>}
                <div className="img-carousel ">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index} className="carousel-item relative ">
                                {item.status ? (
                                    <div className={`absolute top-1 left-1 sm:left-4 w-auto text-white rounded-full px-1 sm:px-2 ${item.status === "Premium" ? "bg-yellow-500" : "bg-blue-600"}`}>
                                        <div className="flex  justify-between items-center px-1 sm:px-2">
                                            {item.slug === "rilis" || item.slug === "premium" || item.slug === "next" ? (
                                                <p className="sm:text-[10px] text-[4px]">{item.status}</p>
                                            ) : (
                                                <p className="sm:text-[10px] text-[4px]">
                                                    <i className="fa-solid fa-star text-yellow-400 mr-2" />
                                                    {item.status}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                                {item.ratingTop ? (
                                    <div className="absolute pt-1 right-3 sm:right-6 bg-red-600 text-white h-auto sm:w-6 w-2 rounded-sm">
                                        <div className="flex justify-between items-center text-center">
                                            <p className="sm:text-[10px] text-[4px] text-center sm:text-center">{item.ratingTop}</p>
                                        </div>
                                    </div>
                                ) : null}
                                <img src={item.url} alt={item.title} className="slide-image w-full h-full md:w-full  md:h-full px-2 object-cover rounded-lg hover:scale-[1.1] transition duration-500" onClick={() => handleItemClick(item)} />
                                <div className="absolute bottom-0 left-0 w-full p-3 text-white rounded-b-lg">
                                    <div className="flex justify-between items-center px-2">
                                        {item.title || item.rating ? (
                                            <>
                                                {item.title && <h4 className="text-sm font-medium md:block hidden">{item.title}</h4>}
                                                {item.rating && <p className="text-sm">⭐ {item.rating}</p>}
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <PopUp isOpen={isOpen} onClose={() => setIsOpen(false)} series={selectedSeries} />
        </section>
    );
};

export default Carousel;
