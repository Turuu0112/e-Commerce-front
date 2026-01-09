"use client";

import { useAuth } from "@/components/components/Authprovider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [status,setstatus]=useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[380px] bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Admin Sign In
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your credentials to access the dashboard
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            className="w-full h-[40px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full h-[40px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-6">
          <Link href="/forgetpass">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </Link>
        </div>

        {/* Login button */}
        <Button
          onClick={() => login(email, password)}
          className="w-full h-[40px] bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Sign In
        </Button>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link href="/register">
              <span className="text-blue-600 hover:underline cursor-pointer">
                Create one
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
