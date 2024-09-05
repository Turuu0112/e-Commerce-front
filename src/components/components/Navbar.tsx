import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="w-screen h-[68px] bg-black top-0 items-center flex gap-2 justify-between">
      <div className="pl-8 flex gap-2">
        <Image src="/Logo.png" alt="logo" width={32} height={32} />
        <div>
          <p className="text-white">Бүтээгдэхүүн</p>
        </div>
      </div>

      <div>
        <input
          type="search"
          placeholder="Бүтээгдэхүүн хайх"
          className="border rounded p-1 w-[300px] h-[40px]"
        ></input>
      </div>

      <div className="flex justify-center gap-4 ">
        <div className=" flex gap-4  text-white items-center  ]">
          <CiHeart size={24}/>
          <MdOutlineShoppingCart size={24} />
        </div>
        <div className="flex gap-2 pr-6">
          <Button className=" bg-black border-blue-700">Бүртгүүлэх</Button>
          <Button className="bg-blue-600">Нэвтрэх</Button>
        </div>
      </div>
    </div>
  );
};
