/* eslint-disable react/prop-types */
const TransactionSummary = ({ items }) => {

    const btnPayment = () => {
        location.href = "/payFinish";
    }
    const ispayPage = location.pathname === "/payFinish";
    return (
        <div className="mt-4 flex flex-col gap-2">
            <h1 className="text-sm">Ringkasan Transaksi</h1>
            <div className="flex gap-[10rem] sm:gap-[20rem]] w-full">
                <div className="title flex flex-col gap-2">
                    {items.map((item, index) => (
                        <h1 key={index} className="text-xs">
                            {item.title}
                        </h1>
                    ))}
                </div>
                <div className="price flex flex-col gap-2">
                    {items.map((item, index) => (
                        <h1 key={index} className="text-xs">
                            {item.price}
                        </h1>
                    ))}
                </div>
            </div>
            {!ispayPage && (
                <button className="rounded-full bg-[#09147A] w-fit h-10 px-5 py-2 text-sm my-4" onClick={btnPayment}>
                    Bayar
                </button>
            )}
        </div>
    );
};

export default TransactionSummary;
