import { Button } from "@/components/ui/button";

export default function Pgae() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F7F7F8] items-center pt-[108px] gap-4">
      <h1>Нууц үг сэргээх</h1>
      <input
        placeholder="Имэйл хаяг оруулах"
        className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
      />
      <Button className="w-[334px] h-[36px] bg-blue-600 rounded-full  ">
          Илгээх
        </Button>
    </div>
  );
}
