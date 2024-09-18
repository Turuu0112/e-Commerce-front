"use client"
import { useAuth } from "@/components/components/providers/Autoprovider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call your API to register
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (response.ok) {
      // Handle successful registration
      console.log("Registered!");
    } else {
      // Handle registration error
      console.error("Registration failed");
    }
  };
  return (
    <div className="w-full h-screen flex  flex-col items-center bg-[#F7F7F8]">
      <div className="mt-[108px]">
        <div className="text-center">
          <h1>Бүртгүүлэх</h1>
        </div>
        <div className="flex flex-col">
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Нэр"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Имэйл хаяг"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Нууц үг"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            type="password"
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
          <Button
            type="submit"
            onClick={() => register(email, password,name)}
            className="w-[334px] h-[36px] bg-blue-600 rounded-full "
          >
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
};
