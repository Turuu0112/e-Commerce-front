import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { CiUser } from "react-icons/ci";

export const AdminNavbar = () => {
  return (
    <div className="w-screen h-[68px] bg-black top-0 items-center flex gap-2 justify-between">
      <div className="pl-8 flex gap-2">
        <Image src="/Symbol.png" alt="logo" width={32} height={32} />
      </div>

      <div className="flex justify-center gap-4 ">
        <div className=" flex gap-4  text-white items-center  ]">
          <Link href="/sags">
            <MdOutlineShoppingCart size={24} />
          </Link>
          <Link href="/profile">
            <CiUser size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};
