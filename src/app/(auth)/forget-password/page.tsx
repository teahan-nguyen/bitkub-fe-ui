import PasswordForgetOrReset from "@/components/auth/password-forget-or-reset";
import * as React from "react";

export interface IForgetPasswordPageProps {}

export default function ForgetPasswordPage({}: IForgetPasswordPageProps) {
  return <PasswordForgetOrReset isForgetPasswordPage={true} />;
}
