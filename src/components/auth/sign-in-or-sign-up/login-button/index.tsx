"use client";
import GoogleLogo from "@/components/svgs/GoogleLogo";
import OktaLogo from "@/components/svgs/OktaLogo";
import * as React from "react";

export interface ILoginButtonProps {
  isGoogleLogin: boolean;
}

export default function LoginButton({ isGoogleLogin }: ILoginButtonProps) {
  const handleLoginByGoogle = () => {
    console.log("Login by google");
  };

  const handleLoginByOkta = () => {
    console.log("Login by okta");
  };
  return (
    <div
      className="w-[400px] h-12 font-medium gap-2 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 cursor-pointer"
      onClick={isGoogleLogin ? handleLoginByGoogle : handleLoginByOkta}
    >
      {isGoogleLogin ? <GoogleLogo /> : <OktaLogo />}
      <p>{isGoogleLogin ? "Sign in with google" : "Sign up with OKTA"}</p>
    </div>
  );
}
