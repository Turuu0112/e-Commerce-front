"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const User = () => {
  return (
    <div className="flex gap-5 w-full ">
      <div className="flex flex-col w-[244px]">
        <Link href="/profile">
          <Button className="bg-white text-black flex justify-start py-2 text-start pl-4 rounded-2xl">
            Хэрэглэгчийн хэсэг
          </Button>
        </Link>
        <Link href="/userhistory">
          <Button className="bg-white text-black pl-4 mt-1 flex justify-start rounded-2xl">
            Захиалгын түүх
          </Button>
        </Link>
      </div>

      <div className="flex flex-col w-full ">
        <h1 className="font-bold">Хэрэглэгчийн хэсэг</h1>

        <div className="border-t w-full mt-6"></div>

        <div className="flex flex-col mt-6">
          <label className="block font-bold text-sm">Овог</label>
          <Input
            type="Овог:"
            placeholder=""
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-[18px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label className="block font-bold text-sm">Нэр</label>
          <Input
            type="Овог:"
            placeholder=""
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-[18px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label className="block font-bold text-sm">Утасны дугаар</label>
          <Input
            type="Овог:"
            placeholder=""
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-[18px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label className="block font-bold text-sm">Имэйл хаяг:</label>
          <Input
            type="Овог:"
            placeholder=""
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-[18px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label className="block font-bold text-sm  ">Хаяг:</label>
          <Input
            type="Овог:"
            placeholder=""
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 h-[94px] border bg-white border-gray-300 rounded-[18px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <div className="flex justify-end mt-6">
            <Button variant="outline">Мэдээлэл шинэчлэх</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
