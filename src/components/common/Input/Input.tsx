"use client";

import React, { FocusEvent, useCallback, useMemo, useState } from "react";

import SVGIconEye from "@/components/svgs/SVGIconEye";
import PasswordChecker from "./PasswordChecker";
import Label from "./Label";
import FormError from "./FormError";
import SVGInputClearWithHover from "@/components/svgs/SVGInputClearWithHover";
import { cn } from "@/utils/tailwindUtils";

interface InputProps {
  variant?: any;
  inputSize?: any;
  placeholder: string;
  error?: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  name: string;
  value: string;
  disabled?: boolean;
  type?: "text" | "password" | "email";
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
  labelRequired?: boolean;
  labelClassName?: string;
  maxLength?: number;
  isShowPasswordChecker?: boolean;
}

const Input = ({
  maxLength = Infinity,
  placeholder,
  error = "",
  label = "",
  className,
  inputClassName,
  name,
  onChange,
  onBlur,
  value,
  type = "text",
  disabled = false,
  labelRequired = false,
  labelClassName = "",
  isShowPasswordChecker = false,
}: InputProps) => {
  const [isShowPasswordCheckerState, setIsShowPasswordCheckerState] =
    useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const computedError: string = useMemo(() => {
    if (isShowPasswordCheckerState) {
      return "";
    }

    return error || "";
  }, [error, isShowPasswordCheckerState]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length <= maxLength) {
        onChange && onChange(e);
      }
    },
    [onChange, maxLength],
  );

  const resetInput = useCallback(() => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange && onChange(event);
  }, [onChange]);

  const onBlurHandler = useCallback(
    (e: FocusEvent<HTMLInputElement, Element>) => {
      onBlur && onBlur(e);
      if (!isShowPasswordChecker) {
        return;
      }
      setIsShowPasswordCheckerState(false);
    },
    [isShowPasswordChecker, onBlur],
  );

  const borderClassName = useMemo(() => {
    if (computedError) {
      return "border-red-500 focus:border-red-500 hover:border-red-500 focus:border-red-500";
    }

    if (disabled) {
      return "border-neutral-2-1 focus:border-neutral-2-1 hover:border-neutral-2-1";
    }

    return "border-grey-100 focus:border-[#A5D3FF] hover:border-grey-200 focus:border-green-500";
  }, [disabled, computedError]);

  const bgClassName = useMemo(() => {
    if (disabled) {
      return "bg-[#f1f1f1]";
    }

    return "bg-white";
  }, [disabled]);

  const placeholderClassName = useMemo(() => {
    return "placeholder:text-neutral-1-4 placeholder:text-[14px] placeholder:leading-[20px]";
  }, []);

  const toggleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, [setIsShowPassword]);

  return (
    <div className={cn(` `, className)}>
      <Label
        label={label}
        labelRequired={labelRequired}
        htmlFor={name}
        labelClassName={labelClassName}
      />
      <div className="flex-grow">
        <div className="relative ">
          <input
            tabIndex={disabled ? -1 : 0}
            id={name}
            disabled={disabled}
            name={name}
            className={cn(
              `transition border-[2px] rounded-[8px]
        text-[14px] leading-[20px] text-justify
        w-full
        outline-none
        focus:outline-none
        focus-within:outline-none
        disabled:cursor-not-allowed
        h-[40px] py-3 px-2
        `,

              borderClassName,
              bgClassName,
              placeholderClassName,
              disabled ? "text-neutral-1-9 " : "text-neutral-1-9",
              disabled && "cursor-not-allowed",
              inputClassName,
            )}
            placeholder={placeholder || ""}
            value={value || ""}
            onChange={handleChange}
            onBlur={onBlurHandler}
            onFocus={() => {
              if (isShowPasswordChecker) {
                setIsShowPasswordCheckerState(true);
              }
            }}
            type={isShowPassword ? "text" : type}
            autoFocus={false}
          />
          {value && !disabled && type !== "password" && (
            <SVGInputClearWithHover
              onClick={resetInput}
              className=" absolute top-[50%] translate-y-[-50%] right-[7px] z-10"
            />
          )}

          {type === "password" && (
            <SVGIconEye
              onClick={toggleShowPassword}
              className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-2 z-10 "
            />
          )}
        </div>

        {computedError && !isShowPasswordCheckerState && (
          <FormError errorMessage={computedError} />
        )}

        {isShowPasswordCheckerState && (
          <div className="w-full mt-2 ">
            <PasswordChecker password={value || ""} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
