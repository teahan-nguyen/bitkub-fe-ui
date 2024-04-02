"use client";
import SubOption from "@/components/sub-option";
import BitkubLogo from "../../svgs/BitkubLogo";
import LoginButton from "./login-button";
import { Radio } from "@/components/common/Radio/Radio";
import { useState } from "react";

export interface IAuthPageProps {
  isSignInPage: boolean;
}

export default function AuthPage({ isSignInPage }: IAuthPageProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <>
      <div className="flex-1 flex items-center">
        <div className="text-center space-y-16">
          <p className="font-bold lg:text-3xl text-4xl">
            {isSignInPage ? "Welcome Back!" : "Create an account"}
          </p>
          <button onClick={() => setIsChecked((prev) => !prev)}>asd</button>
          <Radio
            checked={isChecked}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <div className="lg:space-y-2 space-y-5">
            <LoginButton isGoogleLogin={true} />
            <LoginButton isGoogleLogin={false} />
            <SubOption
              title={
                isSignInPage
                  ? "Don’t have an acount?"
                  : "Already have an account ?"
              }
              forwardTo={isSignInPage ? "/register" : "/login"}
              redirectText={isSignInPage ? "Sign up" : "Sign in"}
            />
          </div>
        </div>
      </div>
      <BitkubLogo />
    </>
  );
}
