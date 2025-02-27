/* eslint-disable react/prop-types */

const Card = ({ type, price, description, features, buttonLabel, onButtonClick }) => {
    
    return (
        <div className="flex gap-12 mt-4 mb-4 justify-center items-center">
            <div className="card bg-gradient-to-tl from-[#192DB7] to-[#5370D4] w-[15rem] sm:w-[15rem] h-[24rem] rounded-lg flex flex-col justify-center items-center relative">
                <div className="flex flex-col gap-6 top-3 left-6 absolute">
                    <div className="individual rounded-full p-2 text-sm bg-[#3D4142] max-w-24 justify-center items-center text-center">{type}</div>

                    <div className="desc flex flex-col gap-2">
                        <p className="text-sm">{price}</p>
                        <p className="text-sm">{description}</p>
                    </div>

                    <div className="list flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-2">
                                <img src="/img/componen-img/checklist.png" alt="" className="w-fit" />
                                <p className="text-xs">{feature}</p>
                            </div>
                        ))}
                        <hr className="mt-8" />

                        <div className="flex flex-col gap-2 justify-center items-center">
                            <button className="bg-white text-sm font-semibold rounded-full w-full h-10 text-[#0F1E93]" onClick={onButtonClick}>
                                {buttonLabel}
                            </button>
                            <p className="text-xs">Syarat & Ketentuan Berlaku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
