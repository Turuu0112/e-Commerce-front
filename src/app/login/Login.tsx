"use cleint";

import { useAuth } from "@/components/components/Authprovider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
type LoginComponent = {
  email: string;
  password?: string;
};
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (response.ok) {
  //     console.log("Logged in!");
  //   } else {
  //     console.error("Login failed");
  //   }
  // };
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F7F7F8] items-center pt-[108px]">
      <h1>Нэвтрэх</h1>
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
      <div className="flex flex-col gap-12 mt-4 items-center">
        <Link href="/register">
          <Button className="w-[334px] h-[36px] bg-blue-600 rounded-full ">
            Үүсгэх
          </Button>
        </Link>
        <Link href="/forgetpass">
          <p className="border-b text-gray-500">Нууц үг мартсан</p>
        </Link>

        <Button
          onClick={() => login(email, password)}
          className="w-[334px] h-[36px] bg-white text-blue-600 rounded-full "
        >
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
};
