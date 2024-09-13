import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F7F7F8] items-center pt-[108px]">
      <h1>Нэвтрэх</h1>
      <input
        placeholder="Имэйл хаяг"
        className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
      />
      <input
        placeholder="Нууц үг"
        className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
      />
      <div className="flex flex-col gap-12 mt-4 items-center">
        <Button className="w-[334px] h-[36px] bg-blue-600 rounded-full ">
          Үүсгэх
        </Button>
        <Link href="/forgetpass">
          <p className="border-b text-gray-500">Нууц үг мартсан</p>
        </Link>
        <Button className="w-[334px] h-[36px] bg-white text-blue-600 rounded-full ">
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
}
