"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { BiArrowToTop } from "react-icons/bi";
import Image from "next/image";

const list = [
  {
    image: "/sandal.png",
    name: "Sandal",
    quantity: 1,
    urjih: "x",
    price: "120000₮",
  },

  {
    image: "/sandal.png",
    name: "Sandal",
    quantity: 1,
    urjih: "x",
    price: "120000₮",
  },

  {
    image: "/sandal.png",
    name: "Sandal",
    quantity: 1,
    urjih: "x",
    price: "120000₮",
  },

  {
    image: "/sandal.png",
    name: "Sandal",
    quantity: 1,
    urjih: "x",
    price: "120000₮",
  },
];

export const UserHistory = () => {
  return (
    <div className="flex gap-5 w-full  ">
      <div className="flex flex-col  w-[244px]">
        <Link href="/profile">
          <Button className="bg-white text-black flex justify-start py-2 text-start pl-4 rounded-2xl">
            Хэрэглэгчийн хэсэг
          </Button>
        </Link>
        <Button className="bg-white text-black pl-4 mt-1 flex justify-start rounded-2xl">
          Захиалгын түүх
        </Button>
      </div>

      <div className="flex flex-col  w-full ">
        <h1 className="font-bold text-[16px]">Захиалгын түүх</h1>

        <div className="border-t w-full mt-6"></div>

        <div className="flex flex-col mt-6 border h-full rounded-2xl bg-white">
          <div className="flex  flex-col px-6 py-8 ">
            <div className="flex justify-between items-center ">
              <div className="flex  items-center gap-2 ">
                <h1 className="font-bold">2024-09-03 15:34</h1>
                <Button variant="outline">хүргэлтэнд гарсан</Button>
              </div>
              <Button className="bg-white text-black">
                <BiArrowToTop />
              </Button>
            </div>

            <div className="">
              {list.map((item) => (
                <div className="flex items-center gap-4  justify-between py-4">
                  <div className="flex gap-2">
                    <Image src={item.image} width={50} height={50} alt="img" />
                    <div className="flex flex-col">
                      <h1>{item.name}</h1>
                      <p>
                        {item.quantity} {item.urjih} {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="font-bold">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="border-dashed border w-full mt-6"></div>

            <div className="flex justify-between items-center mt-4">
              <h1 className="font-bold">Үнийн дүн:</h1>
              <p className="font-bold">480’000₮</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-white h-[132px] mt-4">
          <div className="flex  flex-col px-6 py-8 ">
            <div className="flex  items-center gap-2 ">
              <h1 className="font-bold">2024-09-03 15:34</h1>
              <Button variant="outline">дууссан</Button>
            </div>{" "}
            <div className="flex justify-between items-center mt-4">
              <h1>Үнийн дүн:</h1>
              <p className="font-bold">120’000₮</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl bg-white h-[132px] mt-4">
          <div className="flex  flex-col px-6 py-8 ">
            <div className="flex  items-center gap-2 ">
              <h1 className="font-bold">2024-09-03 15:34</h1>
              <Button variant="outline">дууссан</Button>
            </div>{" "}
            <div className="flex justify-between items-center mt-4">
              <h1>Үнийн дүн:</h1>
              <p className="font-bold">120’000₮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
