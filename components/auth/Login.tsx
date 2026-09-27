"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import ErrorDialog from "./ErrorDialog";

interface LoginProps {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login = ({
  heading,
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "Go to home",
  },
  buttonText = "Login",
  googleText = "Sign up with Google",
  signupText = "Don't have an account?",
  signupUrl = "/auth/signup",
}: LoginProps) => {
  const { setUser } = useAuthStore((state) => state);

  const [state, setState] = useState({
    isLoading: false,
    isError: false,
  });

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      const token = crypto.randomUUID();
      setUser(token);
      redirect("/");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isError: true,
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <section className="bg-muted  h-screen ">
      <ErrorDialog
        status={state.isError}
        handleRetry={() => setState((prev) => ({ ...prev, isError: false }))}
      />
      <div className="flex h-full items-center justify-center">
        <div className="border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10 dark:invert"
                />
              </a>
            </div>
            {heading && <h1 className="text-3xl font-semibold">{heading}</h1>}
          </div>
          <div className="flex w-full flex-col gap-8">
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input type="email" placeholder="Email" required />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  pattern="[a-zA-z0-9]{8,}"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  disabled={state.isLoading}
                  type="submit"
                  className="mt-2 w-full"
                >
                  {state.isLoading ? "Loading" : buttonText}
                </Button>
              </div>
            </form>
            <Button variant="outline" className="w-full -mt-4">
              <FcGoogle className="mr-2 size-5" />
              {googleText}
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
