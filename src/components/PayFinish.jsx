import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TransactionSummary from "./TransactionSummary";
import TimeOutTransaction from './TimeOutTransaction';

const Payment = () => {
    const handleSubscribe = () => alert("Berlangganan berhasil!");
  const iconVA = [{ path: "/img/componen-img/bca.png" }];
  
  const btnPay = () => {
  alert("Pembayaran Berhasil");
}


const transactionItems = [
    { title: "Paket Premium Individual", price: "Rp49.000" },
    { title: "Biaya Admin", price: "Rp3.000" },
    { title: "Total Pembayaran", price: "Rp52.000" },
];

  const stepItem = [
    { item: "1. Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking." },
    { item: "2. Login ke akun Anda." },
    { item: "3. Pilih menu 'Transfer' atau 'Pembayaran'." },
    { item: "4. Pilih opsi 'Virtual Account' atau Virtual Account Number'" },
    {item: "5. Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan pembayaran."}
  ]
    return (
        <>
            <Navbar />
        <TimeOutTransaction
          hourse={'00'}
          minute= {14}
        second={58}
        />
            <div className="text-white p-6 px-9">
                <div className="mb-6 justify-center items-center">
                    <h2 className="text-xl font-bold">Ringkasan Pembayaran</h2>
                </div>
                <div className="flex md:flex-row flex-col gap-4">
                    <div className="p-4 justify-center items-center flex">
                        <Card type="Individual" price="Mulai dari Rp49,990/bulan" description="1 Akun" features={["Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"]} buttonLabel="Langganan" onButtonClick={handleSubscribe} />
                    </div>
                    <div className="w-auto sm:w-3/4 p-4">
                        <div className="flex flex-col mb-4">
                            <h1 className="text-lg">Metode Pembayaran</h1>
                            <div className="flex flex-col gap-8 sm:gap-4">
                                <div className="card-Atm rounded-lg p-4 border w-auto sm:w-[50%] h-10 flex items-center gap-1">
                                    <input type="radio" name="payment" id="va" />
                                    {iconVA.map((icon, index) => (
                                        <img key={index} src={icon.path} alt={`VA ${index}`} />
                                    ))}
                                </div>
                                <div className="flex flex-row gap-[12rem] sm:gap-[12rem]">
                                    <div className="title flex flex-col gap-2">
                                        <p className="text-xs">Tanggal Pembelian</p>
                                        <p className="text-xs">Kode Pembayaran</p>
                                    </div>
                                    <div className="price flex flex-col gap-2">
                                        <p className="text-xs">08 Juni 2023</p>
                                        <p className="text-xs">
                                            3KDJ5XFOV <img src="/img/component/copy.png" alt="" />
                                        </p>
                                    </div>
                                </div>
                                <TransactionSummary items={transactionItems} />
                                <div className="step">
                                    <h1 className="text-s">Tata Cara Pembayaran</h1>
                                    <div className="step-tem flex flex-col gap-2">
                                        {stepItem.map((item, index) => (
                                            <p key={index} className="text-sm">
                                                {item.item}
                                            </p>
                                        ))}
                                    </div>
                                    <button className="rounded-full bg-[#09147A] w-fit -h-10 px-5 py-2 text-sm  my-4 " onClick={btnPay}>
                                        Bayar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
