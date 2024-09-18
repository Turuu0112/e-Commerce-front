"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PaymentComponent = () => {
  const [timer, setTimer] = useState("14:59");

  const banks = [
    "/bank1.png",
    "/bank2.png",
    "/bank3.png",
    "/bank4.png",
    "/bank5.png",
    "/bank6.png",
    "/bank7.png",
    "/bank8.png",
    "/bank9.png",
    "/bank10.png",
    "/bank11.png",
    "/bank12.png",
    "/bank13.png",
  ];

  return (
    <div className="w-[500px] mx-auto p-6 border border-gray-200 rounded-lg flex flex-col items-center">
      <h3 className="font-bold text-lg mb-4">3. Төлбөр төлөлт</h3>

      <div className="mb-4">
        <span className="text-gray-500">{timer}</span>
      </div>
      <div className="mb-4">
        <Image src="/Qr.png" alt="QR Code" width={200} height={200} />
      </div>

      <p className="text-center font-medium mb-4">Төлөх боломжтой банкууд:</p>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {banks.map((bank, index) => (
          <div key={index} className="w-10 h-10">
            <Image
              src={bank}
              alt={`Bank ${index + 1}`}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>

      <Link href="/sags2">
        <button className="p-2 bg-gray-200 rounded-[18px] w-[114px]">
          Буцах
        </button>
      </Link>
    </div>
  );
};
