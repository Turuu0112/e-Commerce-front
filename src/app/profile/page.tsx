"use client";

import UserInfo from "@/components/components/user/user";

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="container h-[509px]  flex">
        <UserInfo />
      </div>
    </div>
  );
}
