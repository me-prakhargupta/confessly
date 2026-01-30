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
    <div className="relative w-full group">
      {/* Subtle Glow Underlay */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/15 to-transparent rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
      
      <div
        className="
          relative w-full
          rounded-2xl
          bg-white/[0.03]
          backdrop-blur-2xl
          border border-white/10
          transition-all duration-300
          group-hover:border-white/20
          group-focus-within:border-orange-500/40
          group-focus-within:bg-black/40
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
            block w-full
            h-16
            bg-transparent
            px-5 pt-6
            text-sm sm:text-base
            text-stone-200
            outline-none
            transition-all
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
            text-stone-500
            text-sm font-normal
            transition-all duration-200
            
            /* Float effect - resets to normal text style */
            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:text-sm
            
            peer-focus:top-4
            peer-focus:text-xs
            peer-focus:text-orange-400

            peer-not-placeholder-shown:top-4
            peer-not-placeholder-shown:text-xs
            peer-not-placeholder-shown:text-stone-500
          "
        >
          {lable}
        </label>
      </div>
    </div>
  );
}