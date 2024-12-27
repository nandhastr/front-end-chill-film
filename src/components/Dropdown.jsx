/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Dropdown = ({ options, label }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="dropdown relative">
            <button className="text-white bg-gray-800 border border-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" onClick={toggleDropdown}>
                {label}
                <i className="ml-3 fa-solid fa-angle-down" />
            </button>
            {isDropdownOpen && (
                <ul className="grid grid-cols-2 absolute bg-gray-800 text-white text-sm rounded-lg shadow-lg p-2 mt-2 w-[20rem] z-10" onClick={closeDropdown}>
                    {options.map((option, index) => (
                        <li key={index} className="py-1 px-2 hover:bg-gray-700 rounded">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
