import React from "react";

interface FormErrorProps {
  errorMessage: string;
}

export default function FormError({ errorMessage }: FormErrorProps) {
  if (!errorMessage) {
    return null;
  }

  return (
    <div
      className="text-left mt-[6px] text-[14px] leading-[20px] text-red-500"
      data-testid="form-error"
    >
      {errorMessage}
    </div>
  );
}
