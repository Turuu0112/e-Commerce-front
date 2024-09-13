import { Button } from "@/components/ui/button";
import Link from "next/link";
import Input from "postcss/lib/input";

export default function Page() {
  return ( 
    <div className="w-full h-screen flex  flex-col items-center bg-[#F7F7F8]">
      <div className="mt-[108px]">
        <div className="text-center">
          <h1>Бүртгүүлэх</h1>
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Нэр"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            placeholder="Имэйл хаяг"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            placeholder="Нууц үг"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            placeholder="Нууц үг давтах "
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 text-gray-500">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li>Тэмдэгт орсон байх</li>
        </div>
        <div className="flex flex-col gap-12 mt-4">
          <Button className="w-[334px] h-[36px] bg-blue-600 rounded-full ">
            Үүсгэх
          </Button>
          <Link href="/login">
          <Button className="w-[334px] h-[36px] bg-white text-blue-600 rounded-full ">
            Нэвтрэх
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
