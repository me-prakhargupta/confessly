"use client";

import { ChangeEventHandler } from "react";

interface AuthFormProps {
  type?: string;
  lable: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function AuthInput({
  type = "text",
  lable,
  name,
  value,
  onChange,
}: AuthFormProps) {
  return (
    <div
      className="
        relative w-full
        rounded-2xl
        bg-gradient-to-br
        from-white/[0.06]
        to-white/[0.015]
        backdrop-blur-xl
        border border-white/[0.08]
        transition
        focus-within:border-orange-400/40
        focus-within:shadow-[0_0_0_1px_rgba(251,146,60,0.15)]
      "
    >
      <input
        required
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          peer
          block
          w-full
          h-14 sm:h-16
          bg-transparent
          px-5
          pt-6
          text-sm sm:text-base
          text-white/85
          outline-none
        "
      />

      <label
        htmlFor={name}
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-white/40
          transition-all
          duration-200

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base

          peer-focus:top-3
          peer-focus:text-xs
          peer-focus:text-orange-400

          peer-not-placeholder-shown:top-3
          peer-not-placeholder-shown:text-xs
          peer-not-placeholder-shown:text-white/50
        "
      >
        {lable}
      </label>
    </div>
  );
}
