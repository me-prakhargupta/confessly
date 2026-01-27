"use client";

import AuthInput from "@/components/input/AuthInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendMessage } from "@/services/auth";

export default function SendMessage() {
    const router = useRouter();
      const [form, setForm] = useState({
        username: "",
        content: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState("");
    
      const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const sendHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
    
        try {
          const res = await sendMessage(form);
    
          if (res.statusCode === 200) {
            router.push("/");
          } else {
            setError(res.message || "Signin failed");
          }
        } catch (err: any) {
          setError(err?.response?.data?.message || "Something went wrong");
        } finally {
          setLoading(false);
        }
      };

    return(
        <section className="min-h-screen sm:mb-15 flex items-center justify-center px-4">
          <div className="w-full max-w-xl">
            <p className="text-white/40 text-sm mb-6 text-center">This will be sent anonymously. Take your time.</p>
          <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 p-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Say something you can’t say out loud</h2>
            <p className="text-sm text-white/60 mb-8">Reach out anonymously if you know their username.</p>
            <form onSubmit={sendHandler}>
              <AuthInput type="text" name="username" lable="Username" value={form.username} onChange={changeHandler}/>
              <div className="mt-6">
                <label className="block text-sm text-white/70 mb-2">Your message</label>
                <textarea name="content" value={form.content} onChange={changeHandler} rows={7} placeholder="Write what you want to say…" className="w-full rounded-xl bg-black/50 border border-white/10 text-white px-4 py-3 outline-none focus:border-orange-400 transition resize-none"/>
              </div>
              <p className="text-xs text-white/40 mt-4">No name. No profile. No identity attached.</p>
              <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 text-black font-semibold py-3 hover:opacity-90 transition">Send anonymously</button>
            </form>
          </div>
        </div>
      </section>
    );
}