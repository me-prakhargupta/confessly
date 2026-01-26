"use client";

import { ChangeEventHandler } from "react";

interface AuthFormProps {
  type?: string;
  lable: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function FloatingInput({ type, lable, name, value, onChange }: AuthFormProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          peer block w-full rounded-2xl outline-none border bg-zinc-950
          h-14 sm:h-16
          px-4 pt-5 sm:pt-6
          text-base sm:text-lg
          focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30
        "
      />

      <label
        htmlFor={name}
        className="
          absolute left-4 top-4 text-white/50 transition-all duration-200
          text-sm sm:text-base

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
          peer-placeholder-shown:text-white/40

          peer-focus:top-2
          peer-focus:text-xs sm:peer-focus:text-sm
          peer-focus:text-orange-400

          peer-not-placeholder-shown:top-2
          peer-not-placeholder-shown:text-xs sm:peer-not-placeholder-shown:text-sm
          peer-not-placeholder-shown:text-white/50
        "
      >
        {lable}
      </label>
    </div>
  );
}
