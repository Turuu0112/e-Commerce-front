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

interface AuthUser {
  user: User | null;
  isAuthenticated: boolean;
  role?: string; // Add role here
}

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
  forgotPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authPaths = ["/login", "register"];

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User>({} as User);
  const [isReady, setIsReady] = useState<boolean>(false);
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;

      setUser({
        //+
        ...user, // Spread the existing user object//+
        isAuthenticated: true, //+
        role: user.role, // Save the role//+
      }); //+

      // Redirect based on role
      const redirectPath = user.role === "admin" ? "/admin" : "/";
      router.push(redirectPath);
      toast.success("Нэвтрэлт амжилттай!");

      localStorage.setItem("token", token);
    } catch (error) {
      toast.error("Нууц үг эсвэл майл буруу байна!");
      console.error("Нэвтрэх алдаа:", error);
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
  };
  const forgotPassword = async (email: string) => {
    try {
      const res = await api.post("/auth/forgot-password", { email });
      toast.success(res.data.message);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(
          err.response?.data?.message || "Failed to send password reset link"
        );
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  const logout = async () => {
    try {
      const res = await api.post("/auth/logout");
      localStorage.removeItem("token");
      setUser({} as User);
      toast.success(res.data.message);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || "Failed to logout");
      } else {
        toast.error("An unknown error occurred");
      }
    }
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
    <AuthContext.Provider
      value={{ user, login, register, logout, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
