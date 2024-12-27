/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card';

const PaketChoice = () => {
  const handleSubscribe = () => {
      location.href = "/Payment";
  };
  return (
      <div className="paket-choice">
          <div className="flex flex-col gap-1 text-2xl title justify-center items-center">
              <h1 className="font-semibold">Pilih Paketmu</h1>
              <p className="text-xs">Temukan Paket Sesuai Kebutuhanmu!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-1  sm:gap-6 justify-center items-center">
              <Card 
              type="Individual" 
              price="Mulai dari Rp49,990/bulan" 
              description="1 Akun" 
              features={["Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"]} 
              buttonLabel="Langganan" 
              onButtonClick={handleSubscribe} />

              <Card 
              type="Berdua" 
              price="Mulai dari Rp79,990/bulan" 
              description="2 Akun" 
              features={["Tidak ada iklan", "Kualitas 1080p", "Download konten pilihan"]} 
              buttonLabel="Langganan" 
              onButtonClick={() => alert("Berlangganan Berdua!")} />

              <Card 
              type="Keluarga" 
              price="Mulai dari Rp159,990/bulan" 
              description="5-7 Akun" 
              features={["Tidak ada iklan", "Kualitas 4k", "Download konten pilihan"]} 
              buttonLabel="Langganan" 
              onButtonClick={() => alert("Berlangganan Family!")} />
          </div>
      </div>
  );
}

export default PaketChoice
