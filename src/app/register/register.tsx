"use client";

import { useAuth } from "@/components/components/Authprovider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();

  const [passwordChecks, setPasswordChecks] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const validatePassword = (password: string) => {
    setPasswordChecks({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[@$!%*?&#,.]/.test(password),
    });
  };

  const handlePasswordChange = (e: { target: { value: any } }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleRegister = () => {
    if (password === confirmPassword) {
      register(name, email, password);
    } else {
      alert("Нууц үг таарахгүй байна.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#F7F7F8]">
      <div className="mt-[108px]">
        <div className="text-center">
          <h1>Бүртгүүлэх</h1>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
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
            onChange={handlePasswordChange}
            placeholder="Нууц үг"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Нууц үг давтах"
            className="border w-[334px] h-[36px] rounded-full p-2 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 text-gray-500">
          <li
            className={
              passwordChecks.hasUppercase ? "text-green-500" : "text-red-500"
            }
          >
            Том үсэг орсон байх
          </li>
          <li
            className={
              passwordChecks.hasLowercase ? "text-green-500" : "text-red-500"
            }
          >
            Жижиг үсэг орсон байх
          </li>
          <li
            className={
              passwordChecks.hasNumber ? "text-green-500" : "text-red-500"
            }
          >
            Тоо орсон байх
          </li>
          <li
            className={
              passwordChecks.hasSpecialChar ? "text-green-500" : "text-red-500"
            }
          >
            Тэмдэгт орсон байх
          </li>
        </div>
        <div className="flex flex-col gap-12 mt-4">
          <Button
            type="submit"
            onClick={handleRegister}
            className="w-[334px] h-[36px] bg-blue-600 rounded-full"
          >
            Үүсгэх
          </Button>

          <Link href="/login">
            <Button className="w-[334px] h-[36px] bg-white text-blue-600 rounded-full">
              Нэвтрэх
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
