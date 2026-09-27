"use client";
import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "cn";

const User = ({
  loginText,
  loginUrl,
  signupText,
  signupUrl,
  className="",
  className2="",
}: {
  loginText: string;
  loginUrl: string;
  signupText: string;
  signupUrl: string;
  className?:string;
  className2?:string;
}) => {
  const { isLogin, setUserNull } = useAuthStore((state) => state);

  const handleLogOut = () => {
    setUserNull();
  };

  if (isLogin) {
    return (
      <div className={cn("cursor-pointer",className2)} onClick={handleLogOut}>
        <CircleUserRound />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-row gap-2 w-full",className)}>
      <Button variant="outline" size="sm">
        <a href={loginUrl}>{loginText}</a>
      </Button>
      <Button size="sm">
        <a href={signupUrl}>{signupText}</a>
      </Button>
    </div>
  );
};

export default User;
