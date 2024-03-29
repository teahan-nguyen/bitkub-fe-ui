"use client";
import EyeIcon from "@/components/svgs/Eye";
import * as React from "react";
import { FieldValues, useForm } from "react-hook-form";

export interface INewPasswordFormProps {}

type NewPasswordType = {
  password: string;
  confirmPassword: string;
};

type IsHiddenPasswordType = {
  password: boolean;
  confirmPassword: boolean;
};

export default function NewPasswordForm(props: INewPasswordFormProps) {
  const [isHiddenPassword, setIsHiddenPassword] =
    React.useState<IsHiddenPasswordType>({
      password: false,
      confirmPassword: false,
    });
  const { register, handleSubmit } = useForm<NewPasswordType>();

  const onSubmit = (e: FieldValues) => {
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="">Password</label>
        <div className="w-full flex items-center py-2 px-4 mt-2 space-x-2 rounded-lg border-2 border-gray-300">
          <input
            className="outline-none flex-1"
            type={isHiddenPassword.password ? "password" : "text"}
            placeholder="Password"
            {...register("password")}
          />
          <span
            className="cursor-pointer"
            onClick={() =>
              setIsHiddenPassword((prev) => ({
                ...prev,
                password: !prev.password,
              }))
            }
          >
            <EyeIcon />
          </span>
        </div>
        <ul className="px-7 text-red-500 mt-3">
          <li className="list-disc">Must be at least 8 characters long</li>
          <li className="list-disc">
            Should include a mix of letters, numbers, and special characters
          </li>
        </ul>
      </div>
      <div>
        <label htmlFor="">Confirm new password</label>
        <div className="w-full flex items-center py-2 px-4 mt-2 space-x-2 rounded-lg border-2 border-gray-300">
          <input
            className="outline-none flex-1"
            type={isHiddenPassword.confirmPassword ? "password" : "text"}
            placeholder="Password"
            {...register("confirmPassword")}
          />
          <span
            className="cursor-pointer"
            onClick={() =>
              setIsHiddenPassword((prev) => ({
                ...prev,
                confirmPassword: !prev.confirmPassword,
              }))
            }
          >
            <EyeIcon />
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-black p-2 text-white font-semibold"
      >
        Reset Password
      </button>
    </form>
  );
}
