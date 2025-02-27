/* eslint-disable react/prop-types */

const HeroContent = ({ title, description }) => {
    return (
        <div className="absolute px-9 md:px-14 sm:p-6 gap-2 sm:gap-4 top-[12rem] md:top-[12rem] left-0 w-full h-[auto] flex flex-col items-start justify-start ">
            <h1 className="text-white sm:text-4xl text-3xl font-semibold">{title}</h1>
            <p className="text-white text-sm sm:text-[16px] lg:text-[12px] sm:w-full md:w-3/4 lg:w-1/2">{description}</p>
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-2 md:gap-4 justify-center items-center">
                    <button className="rounded-full sm:w-auto lg:w-[5rem] h-[2.5rem] sm:h-[3rem] text-white text-[12px] sm:text-sm bg-blue-600 px-2 mb-2 sm:mb-0">Mulai</button>

                    <button className="rounded-full w-full px-2  h-[2.5rem] md:h-[2.5rem] md:w-[14rem] text-white text-[12px] md:text-lg bg-[#22282A] mb-2 md:mb-0 relative justify-center items-center">Selengkapnya</button>

                    <button className="rounded-full w-11 h-7 md:w-11  md:h-11 sm:rounded-full text-white text-[12px] sm:text-lg bg-transparent border">18+</button>
                </div>
                <div className="border rounded-full">
                    <i className="fa-solid fa-volume-high  p-[0.5rem]  relative after:content-[''] after:absolute after:left-0 after:top-1/2 after:w-full after:h-[2px] after:bg-white after:rotate-[20deg]"></i>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
