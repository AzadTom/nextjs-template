"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { Lock, X } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginDialog = () => {
  const { isLogin, isLoginDialog, setDialog } = useAuthStore((state) => state);
  const router = useRouter();

  const handleLoginDialog = () => {
    setDialog(false);
  };

  const handleLogin = () => {
    handleLoginDialog();
    router.push("/auth/login");
  };

  if (!isLoginDialog || isLogin) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-md flex justify-center items-center">
      <div className="relative max-w-105  w-full mx-auto bg-white min-h-64 rounded-md px-6 py-12 flex flex-col gap-3 justify-center items-center">
        <div
          onClick={handleLoginDialog}
          className="absolute top-4 right-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        >
          <X />
        </div>
        <div>
          <Lock />
        </div>
        <h2 className="text-3xl font-semibold text-center">
          Login to continue
        </h2>
        <p className="text-black/50 text-center">
          Please sign in to your account <br /> and perform actions
        </p>
        <div className="w-full flex flex-col gap-3 mt-5">
          <button
            onClick={handleLogin}
            className="bg-black px-3 py-2 text-white rounded-md cursor-pointer w-full"
          >
            Continue to login
          </button>
          <button
            onClick={handleLoginDialog}
            className="px-3 py-2 text-black rounded-md cursor-pointer w-full"
          >
            Maybe later
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-5">
          Please login in so that you can perform action
        </p>
      </div>
    </div>
  );
};

export default LoginDialog;
