"use client";
import { api } from "@/lib/axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext();

const authPaths = ["/login", "/register"];
type Auth = {
  email: string;
  err: string;
  name: string;
  children: string;
  passwords: {
    password: string;
    passwordConfirm: string;
  };
};

export const AuthProvider = ({ children }: Auth) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const login = async ({ email, passwords }: Auth) => {
    try {
      const res = await api.post("/auth/login", { email, passwords });
      console.log(res, "responseLogin");

      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);

      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const register = async ({ name, email, passwords }: Auth) => {
    console.log(name, email, passwords);

    try {
      await api.post("/auth/register", {
        name,
        email,
        passwords,
      });

      router.push("/login");
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem("token");

        if (!token) return;

        const res = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
    toast.error("Your session has expired. Please login again.");
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (!user) router.replace("/login");
  }, [pathname, user, isReady]);

  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
