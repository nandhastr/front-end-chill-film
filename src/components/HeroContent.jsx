/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HeroContent = ({ title, description }) => {
    return (
        <div className="absolute px-9 sm:p-6 gap-2 sm:gap-4 top-[12rem] sm:top-[14rem] lg:top-[20rem] left-0 w-full h-full flex flex-col items-start justify-start">
            <h1 className="text-white sm:text-4xl text-3xl font-semibold">{title}</h1>
            <p className="text-white text-sm sm:text-[16px] lg:text-[12px] sm:w-full md:w-3/4 lg:w-1/2">{description}</p>
            <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                <div className="flex sm:gap-2 w-full sm:w-auto justify-start sm:justify-start">
                    <button className="rounded-full sm:w-auto lg:w-[5rem] h-[2.5rem] sm:h-[3rem] text-white text-[12px] sm:text-sm bg-blue-600 px-2 mb-2 sm:mb-0">Mulai</button>

                    <button className="rounded-full w-auto lg:w-[8rem] h-[2.5rem] sm:h-[3rem] sm:w-[14rem] text-white text-[12px] sm:text-sm bg-[#22282A] px-2 mb-2 sm:mb-0">Selengkapnya</button>

                    <button className="rounded-full w-8 sm:w-11 lg:w-11 h-8 sm:h-11 sm:rounded-full text-white text-[12px] sm:text-lg bg-transparent border sm:px-2">18+</button>
                    
                    <img src="/img/sound-icon.png" className="w-8 h-8 sm:h-11 sm:w-11 lg:w-11 sm:ml-auto" alt="Sound Icon" />
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
