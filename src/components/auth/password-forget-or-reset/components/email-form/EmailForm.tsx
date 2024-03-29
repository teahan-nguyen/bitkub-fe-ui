"use client";
import SubOption from "@/components/sub-option";
import * as React from "react";
import { FieldValues, useForm } from "react-hook-form";

export interface IEmailFormProps {
  isForgetPasswordPage: boolean;
}

export default function EmailForm({ isForgetPasswordPage }: IEmailFormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e: FieldValues) => {
    console.log(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="">
            {isForgetPasswordPage ? "Email" : "Try another email"}
          </label>
          <input
            className="w-full outline-none flex items-center py-2 px-4 mt-2 rounded-lg border-2 border-gray-300"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-black p-2 text-white font-semibold"
        >
          {isForgetPasswordPage ? "Sign in" : "Resent the link"}
        </button>
        <SubOption
          title={isForgetPasswordPage ? "Back to" : "Didn't receive the email?"}
          redirectText={isForgetPasswordPage ? "Sign in" : "Get help"}
          forwardTo={isForgetPasswordPage ? "/login" : "/help"}
        />
      </form>
    </>
  );
}
