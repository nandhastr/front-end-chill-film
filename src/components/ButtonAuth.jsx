/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ButtonAuth = ({isLogin, buttonText}) => {
  return (
      <div>
          {isLogin ? (
              <button type="submit" className="w-full rounded-full bg-[#3D4142] text-white py-2 hover:bg-[#707174] transition duration-300">
                  {buttonText}
              </button>
          ) : (
              <a href="/pages/Register" className="w-full block text-center rounded-full bg-[#3D4142] text-white py-2 hover:bg-[#707174] transition duration-300">
                  {buttonText}
              </a>
          )}
      </div>
  );
}

export default ButtonAuth
