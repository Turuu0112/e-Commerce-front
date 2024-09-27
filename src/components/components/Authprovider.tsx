"use client";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

interface User {
  _id: string;
  email: string;
  name: string;
  isVerified: string | boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  resetPasswordToken?: string;
  __v: number;
  password: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  // forgotPassword: (email: string) => Promise<void>;
  // logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authPaths = ["", ""];

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User>({} as User);
  const [isReady, setIsReady] = useState<boolean>(false);
  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      setUser(res.data.user);
      toast.success(res.data.message);
      router.replace("/");
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Login failed.");
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };
  const register = async (name: string, email: string, password: string) => {
    console.log("register ajillaa");

    try {
      const res = await api.post("/auth/register", { name, email, password });
      setUser(res.data.user);
      toast.success(res.data.message);
      router.push("/");
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Registration failed.");
      } else {
        toast.error("An unknown error occurred.");
      }
    }
    console.log("Registering:", name, password, email);
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await api.get("/auth/check-auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err: unknown) {
        console.log(err);
        localStorage.remove("token");
        if (err instanceof AxiosError) {
          toast.error(
            err.response?.data?.message ||
              "Your session has expired. Please login again."
          );
        } else {
          toast.error("An unknown error occurred.");
        }
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (!authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (!user) router.replace("/login");
  }, [pathname, user, isReady, router]);

  if (!isReady) return null;
  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
