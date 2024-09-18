"use client";

import { PaymentComponent } from "@/components/components/pay/pay";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 ">
      <div className="mb-8">
        {" "}
        <h1 className="font-bold">Step three</h1>
      </div>
      <div className="container h-fit  flex justify-center">
        <PaymentComponent />
      </div>
    </div>
  );
}
