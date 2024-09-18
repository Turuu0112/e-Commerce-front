"use client";

import { UserHistory } from "@/components/components/userhistory/Userhistory";

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="container h-fit  flex">
        <UserHistory />
      </div>
    </div>
  );
}
