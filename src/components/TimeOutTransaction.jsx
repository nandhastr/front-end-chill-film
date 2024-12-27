/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TimeOutTransaction = ({hourse,minute,second}) => {
  return (
      <>
          <div className="justify-center items-center flex px-9 mt-6">
              <div className="justify-center items-center flex flex-col bg-[#22282A] w-full rounded-lg">
                  <div className="justify-center items-center my-3">
                      <h1 className="text-xs ">Lakukan Pemabayaran Sebelum</h1>
                  </div>
                  <div className="time flex gap-2 justify-center items-center my-3">
                      <p className="bg-[#2a3133] rounded-lg px-2 py-1">
                          {hourse} <span className="text-xs">Jam</span>
                      </p>{" "}
                      :
                      <p className="bg-[#2a3133] rounded-lg px-2 py-1">
                          {minute} <span className="text-xs">Menit</span>
                      </p>{" "}
                      :
                      <p className="bg-[#2a3133] rounded-lg px-2 py-1">
                          {second} <span className="text-xs">Detik</span>
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
}

export default TimeOutTransaction
