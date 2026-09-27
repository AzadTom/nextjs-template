"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const URLS = ["/signup", "login"];
const NavBarWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const notAllowed = URLS.some((url) =>pathname.toLowerCase().includes(url.toLowerCase()));
  if (notAllowed) return null;
  return <>{children}</>;
};

export default NavBarWrapper;
