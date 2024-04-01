import * as React from "react";
import NewPasswordForm from "./components/new-password-form";

export interface ISetNewPasswordProps {}

export default function SetNewPassword({}: ISetNewPasswordProps) {
  return (
    <>
      <div className="w-[400px] flex-1 flex items-center">
        <div className="space-y-3">
          <p className="font-bold lg:text-3xl text-4xl text-center">
            Set new password
          </p>
          <div className="space-y-5">
            <p className="text-center">
              Please create a new password for your account below.
            </p>
            <NewPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
}
