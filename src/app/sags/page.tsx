"use client";

import { Cart } from "@/components/components/sags/step1";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 ">
      <div className="mb-8">
        {" "}
        <h1 className="font-bold">Step one</h1>
      </div>
      <div className="container h-fit  flex justify-center">
        <Cart />
      </div>
    </div>
  );
}
