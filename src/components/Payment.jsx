import { useState } from "react";

import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PaymentMethod from "./PaymentMethod";
import VoucherInput from "./VoucherInput";
import TransactionSummary from "./TransactionSummary";

const Payment = () => {
    const handleSubscribe = () => alert("Berlangganan berhasil!");
    const [voucherCode, setVoucherCode] = useState("");

    const handleVoucherChange = (e) => setVoucherCode(e.target.value);
    const handleVoucherApply = () => alert(`Voucher ${voucherCode} diterapkan!`);

    const iconCard = [
        { path: "/img/componen-img/visa-logo.png" },
        { path: "/img/componen-img/MASTERCARD.png" },
        { path: "/img/componen-img/jcb.png" },
        { path: "/img/componen-img/AMERICAN EXPRESS.png" },
    ];
    const iconVA = [
        { path: "/img/componen-img/bca.png" },
    ]

    const transactionItems = [
        { title: "Paket Premium Individual", price: "Rp49.000" },
        { title: "Biaya Admin", price: "Rp3.000" },
        { title: "Total Pembayaran", price: "Rp52.000" },
    ];

    return (
        <>
            <Navbar />
            <div className="text-white p-6 px-9">
                <div className="mb-6 justify-center items-center">
                    <h2 className="text-xl font-bold">Ringkasan Pembayaran</h2>
                </div>
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="p-4 justify-center items-center flex">
                        <Card type="Individual" price="Mulai dari Rp49,990/bulan" description="1 Akun" features={["Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"]} buttonLabel="Langganan" onButtonClick={handleSubscribe} />
                    </div>
                    <div className="w-auto sm:w-3/4 p-4">
                        <PaymentMethod iconCard={iconCard} iconVA={iconVA} />

                        <VoucherInput voucherCode={voucherCode} handleVoucherChange={handleVoucherChange} handleVoucherApply={handleVoucherApply} />

                        <TransactionSummary items={transactionItems} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
