"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputState = "default" | "error" | "disabled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  state?: InputState;
  as?: "input" | "textarea";
};

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    { className, as = "input", state = "default", label, error, ...props },
    ref
  ) => {
    const Component = as;

    const stateStyles = {
      default: "focus:border-blue-500 focus:ring-blue-200",
      error: "border-red-500 focus:border-red-500 focus:ring-red-200",
      disabled: "bg-gray-100 cursor-not-allowed",
    };

    return (
      <div className="space-y-1 w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <Component
          ref={
            ref as React.ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
          }
          className={cn(
            "w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2",
            stateStyles[state],
            className
          )}
          aria-invalid={state === "error"}
          {...(props as React.InputHTMLAttributes<HTMLInputElement> &
            React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
