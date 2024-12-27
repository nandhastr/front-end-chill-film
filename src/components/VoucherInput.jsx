/* eslint-disable react/prop-types */
const VoucherInput = ({ voucherCode, handleVoucherChange, handleVoucherApply }) => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-lg">Kode voucher jika ada</h1>
            <div className="flex gap-1">
                <input type="text" value={voucherCode} onChange={handleVoucherChange} className="bg-transparent rounded-lg border w-[75%] h-10 text-xs px-4" placeholder="Masukan Kode Voucher" />
                <button onClick={handleVoucherApply} className="bg-[#2F3334] rounded-full w-max h-10 px-4 text-sm">
                    Gunakan
                </button>
            </div>
        </div>
    );
};

export default VoucherInput;
