"use client";

import { useState } from "react";
import Link from "next/link";
import { sendMessage } from "@/services/auth";
import AuthInput from "@/components/input/AuthInput";
import { toast } from "sonner";

export default function SendMessage() {
  const [form, setForm] = useState({
    username: "",
    content: "",
  });

  const [sending, setSending] = useState(false);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendHandler = async () => {
    if (!form.content.trim() || !form.username.trim()) {
      toast.error("Username and message are required");
      return;
    }

    setSending(true);

    try {
      const res = await sendMessage(form);

      toast.success("Your message has been sent successfully.");
      setForm({ username: "", content: "" });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center px-6">

      {/* Ambient warmth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-orange-300/8 blur-[140px]" />
      </div>

      {/* Content */}
      <section
        className="
          relative z-10
          w-full max-w-xl mx-auto
          flex flex-col
          gap-8
          py-10 sm:py-14
        "
      >
        {/* Intro */}
        <div className="space-y-5">
          <p className="text-center text-sm text-white/40">
            Take your time.
          </p>

          {/* <Link
            href="/choose"
            className="block text-xs text-white/30 hover:text-white/50 transition"
          >
            ← Back
          </Link> */}

          <header className="space-y-3">
            <h1 className="text-xl font-medium">
              Say what you’ve been holding.
            </h1>

            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              Send a message to a specific person
            </p>
          </header>
        </div>

        {/* Username */}
        <AuthInput
          type="text"
          name="username"
          lable="Who this is for (username)"
          value={form.username}
          onChange={changeHandler}
        />

        {/* Message */}
        <div className="space-y-4">
          <textarea
            name="content"
            value={form.content}
            onChange={changeHandler}
            placeholder="You don’t have to get it right."
            rows={6}
            className="
              w-full
              rounded-2xl
              bg-gradient-to-br
              from-white/[0.06]
              to-white/[0.015]
              backdrop-blur-xl
              border border-white/[0.08]
              px-6
              py-5
              text-sm
              text-white/85
              placeholder:text-white/35
              outline-none
              resize-none
              focus:border-orange-400/40
              transition
            "
          />

          <p className="text-xs text-white/30">
            This won’t come back to you.
          </p>
        </div>

        {/* Action bar */}
        <div
          className="
            sticky bottom-4
            flex items-center justify-between gap-4
            pt-4
            bg-black/40 backdrop-blur-md
          "
        >
          <span className="text-xs text-white/30">
            There’s no right way to write this.
          </span>

          <button
            onClick={sendHandler}
            disabled={sending || !form.content.trim()}
            className="
              rounded-full
              px-7
              py-2.5
              text-sm
              bg-orange-400/90
              text-black
              hover:bg-orange-400
              disabled:opacity-40
              transition
              hover:cursor-pointer
            "
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </div>
      </section>
    </main>
  );
}
