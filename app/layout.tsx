import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";
import NavBarWrapper from "@/components/navbar/NavBarWrapper";
import { Providers } from "@/providers/Providers";
import LoginDialog from "@/components/auth/LoginDialog";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smash Pro - Website Template",
  description: "A modern and responsive website template built with Next.js and Tailwind CSS for building fast and scalable web applications.",
  icons:{
    icon:"https://cdn.21st.dev/assets/mirror/06/067c72836298829da27d230af61c2b4be0e09da5103dc2789639d18beea789f4.svg",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <NavBarWrapper>
            <Navbar />
          </NavBarWrapper>
          {children}
        </Providers>
        <LoginDialog/>
      </body>
    </html>
  );
}
