import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-screen h-[68px] bg-black top-0 items-center flex gap-2 justify-between">
      <div className="pl-8 flex gap-2">
        <Image src="/Symbol.png" alt="logo" width={32} height={32} />
        <div className="flex gap-8">
          <Link href="/">
            <p className="text-white">Ecommerce</p>
          </Link>
          <Link href="/category">
            <p className="text-white">Ангилал</p>
          </Link>
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
          <Link href="/favorite">
            <CiHeart size={24} />
          </Link>
          <MdOutlineShoppingCart size={24} />
        </div>
        <div className="flex gap-2 pr-6">
          <Link href="/register">
            <Button className=" bg-black border-blue-700">Бүртгүүлэх</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-blue-700">Нэвтрэх</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
