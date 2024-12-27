/* eslint-disable react/prop-types */
const PaymentMethod = ({ iconCard, iconVA }) => {
    return (
        <div className="flex flex-col mb-4">
            <h1 className="text-lg">Metode Pembayaran</h1>
            <div className="flex gap-8 sm:gap-4">
                <div className="card-Atm rounded-lg p-4 border w-auto sm:w-1/2 h-10 flex items-center gap-1">
                    <input type="radio" name="payment" id="atm" />
                    {iconCard.map((icon, index) => (
                        <img key={index} src={icon.path} alt={`ATM ${index}`} />
                    ))}
                </div>
                <div className="card-Atm-VA rounded-lg p-2 border w-auto sm:w-2/6 h-10 flex gap-1 items-center">
                    <input type="radio" name="payment" id="va" />
                    {iconVA.map((icon, index) => (
                        <img key={index} src={icon.path} alt={`VA ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
