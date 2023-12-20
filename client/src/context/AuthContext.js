"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          router.push("/login");
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    };
    checkAuthentication();
  }, [router]);

  const login = async (userData) => {
    try {
      const result = await loginUser(userData);
      console.log(result);
      if (result.success) {
        localStorage.setItem("token", result.token);
        setLoggedIn(true);
        router.push("/");
      } else {
        console.error("Error al iniciar sesión:", result.message);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
