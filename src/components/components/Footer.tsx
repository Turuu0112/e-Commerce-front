import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LiaFacebook } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-screen h-[282px] bg-black flex justify-center items-center px-[200px] mb-0 ">
      <div className="w-full ">
        <div className="w-full flex justify-between">
          <Image src="/Symbol.png" width={50} height={50} alt="image"></Image>
          <div className="flex gap-4">
            <div className="flex items-center gap-3">
              <div className="border rounded-full p-2 m-auto  ">
                <IoCallOutline size={15} color="white" />
              </div>
              <p className="text-white">(976) 7007-1234</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="border rounded-full p-2 m-auto  ">
                <CiMail size={15} color="white" />
              </div>
              <p className="text-white">contact@ecommerce.mn</p>
            </div>
          </div>
        </div>
        <div className="border-t mt-[43px] pt-[43px] flex justify-between">
          <div className="text-white flex  items-center gap-1">
            <FaRegCopyright />
            <p>2024 Ecommerce MN</p>
          </div>

          <div className="flex gap-6 text-white">
            <LiaFacebook size={24} />
            <FiTwitter size={24} />
            <FaInstagram size={24} />
            <CiLinkedin size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
