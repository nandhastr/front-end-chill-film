const Footer = () => {
    return (
        <footer className="bg-[#181A1C] text-white py-8 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col md:w-1/3">
                    <img src="/img/logo.png" alt="Logo" className="w-24 h-12 mb-4" />
                    <p className="text-sm text-gray-400">@2023 Chill All Rights Reserved.</p>
                </div>

                <div className="flex flex-col gap-6 md:hidden w-full">
                    <div className="flex justify-between items-center ">
                        <h1 className="font-semibold">Genre</h1>
                        <i className="fa-solid fa-chevron-right" />
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold">Bantuan</h1>
                        <i className="fa-solid fa-chevron-right" />
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-between px-4">
                    <div className="flex flex-col">
                        <h1 className="font-semibold mb-4">Genre</h1>
                        <div className="grid grid-cols-4 gap-4 text-gray-300 text-sm">
                            <ul className="flex flex-col gap-2">
                                <li>Aksi</li>
                                <li>Anak-anak</li>
                                <li>Anime</li>
                                <li>Britania</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>Drama</li>
                                <li>Fantasi Ilmiah & Fantasi</li>
                                <li>Kejahatan</li>
                                <li>KDrama</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>Komedi</li>
                                <li>Petualangan</li>
                                <li>Perang</li>
                                <li>Romantis</li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>Sains & Alam</li>
                                <li>Thriller</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-semibold mb-4">Bantuan</h1>
                        <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                            <li>FAQ</li>
                            <li>Kontak Kami</li>
                            <li>Privasi</li>
                            <li>Syarat & Ketentuan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
