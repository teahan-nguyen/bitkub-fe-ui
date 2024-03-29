import * as React from "react";
import EmailForm from "./components/email-form/EmailForm";

export interface IPasswordForgetOrResetProps {
  isForgetPasswordPage: boolean;
}

export default function PasswordForgetOrReset({
  isForgetPasswordPage,
}: IPasswordForgetOrResetProps) {
  return (
    <>
      <div className="w-[400px] flex-1 flex items-center">
        <div className="space-y-16">
          <p className="font-bold lg:text-3xl text-4xl text-center">
            {isForgetPasswordPage
              ? "Forget Password"
              : "Password Reset Link Sent"}
          </p>
          <div className="space-y-5">
            <div className="text-center space-y-5 text-gray-600">
              <p>
                {isForgetPasswordPage
                  ? "Enter the email address you signed up with below. An email will be sent containing a link to reset your password."
                  : "A password reset link has been sent to the email address associated with your account. Please check your inbox, including your spam folder, for the email containing the reset link"}
              </p>
              {!isForgetPasswordPage && (
                <p className="text-red-500">
                  The link will be valid for 5 minutes
                </p>
              )}
            </div>
            <div>
              <EmailForm isForgetPasswordPage={isForgetPasswordPage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
