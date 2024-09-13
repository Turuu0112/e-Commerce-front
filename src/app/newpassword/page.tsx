import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="w-screen pt-[108px] flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-[24px]">Нууц үг сэргээх</h1>
        <input
          placeholder="Нууц үг"
          className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
        />
        <input
          placeholder="Нууц үг давтах "
          className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
        />
        <div className="flex flex-col gap-2 mt-4 text-gray-500">
          <li>Том үсэг орсон байх</li>
          <li>Жижиг үсэг орсон байх</li>
          <li>Тоо орсон байх</li>
          <li>Тэмдэгт орсон байх</li>
        </div>
        <Button className="w-[334px] h-[36px] bg-blue-600 rounded-full mt-4 ">
            Үүсгэх
          </Button>
      </div>
    </div>
  );
}
