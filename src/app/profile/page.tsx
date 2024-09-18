"use client";

import { User } from "@/components/components/user/user";

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="container h-[509px]  flex">
        <User />
      </div>
    </div>
  );
}
