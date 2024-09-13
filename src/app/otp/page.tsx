import { InputOT } from "@/components/components/input.otp";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F7F7F8] items-center pt-[108px] gap-6">
      <Image src="/Group.png" width={200} height={200} alt="mail"></Image>
      <div className="text-center">
        <h1 className="font-bold">Баталгаажуулах</h1>
        <p>хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
      </div>
      <InputOT />
      <div className="text-gray-500 border-b">
        <p>Дахин илгээх</p>
      </div>
    </div>
  );
}
