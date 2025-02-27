import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
     
    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            alert("Anda telah keluar.");
            window.location.href = "/";
        } catch (error) {
            console.error("Error signing out: ", error);
            alert("Terjadi kesalahan saat keluar.");
        }
    };

    return (
        <>
            <section>
                <nav className="bg-[#181A1C] text-white px-9 py-2">
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center justify-center">
                                <Link to="/Dashboard">
                                    <img src="/img/logo.png" alt="Logo" className="h-4 w-auto sm:h-10 object-fill" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-8">
                                <a href="/series" className="hover:text-gray-300 sm:text-sm text-[8px] transition-colors duration-200">
                                    Series
                                </a>
                                <a href="/film" className="hover:text-gray-300 sm:text-sm text-[8px] transition-colors duration-200">
                                    Film
                                </a>
                                <a href="/MyList" className="hover:text-gray-300 sm:text-sm text-[8px] transition-colors duration-200">
                                    Daftar Saya
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="flex items-center space-x-2 focus:outline-none btn-profile" onClick={toggleDropdown}>
                                <img src="/img/user.png" alt="User" className="h-4 w-4 sm:h-8 sm:w-8 rounded-full" />
                                <i className="fa-solid fa-angle-down" />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[#181A1C] rounded-md shadow-sm overflow-hidden z-10 transition duration-300">
                                    <Link to="/profile" className="block px-4 py-2 text-[8px] sm:text-sm text-white hover:text-blue-600 p-4 hover:bg-[#484a4d] transition duration-300" onClick={closeDropdown}>
                                        <i className="mr-2 fa-solid fa-user"></i>Profil Saya
                                    </Link>
                                    <Link to="/profile" className="block px-4 py-2 text-[8px] sm:text-sm text-white hover:text-blue-600 p-4 hover:bg-[#484a4d] transition duration-300" onClick={closeDropdown}>
                                        <i className="mr-2 fa-solid fa-star"></i>Ubah Premium
                                    </Link>
                                    <button
                                        className="block px-4 py-2 text-[8px] sm:text-sm text-white hover:text-blue-600 p-4 hover:bg-[#484a4d] transition duration-300"
                                        onClick={() => {
                                            closeDropdown();
                                            handleLogout();
                                        }}
                                    >
                                        <i className="mr-4 fa-solid fa-arrow-right-from-bracket" />
                                        Keluar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
