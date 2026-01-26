"use client";

import { useEffect } from "react";

export default function MswProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    async function startWorker() {
      if (process.env.NODE_ENV !== "development") return;

      const { worker } = await import("@/mocks/browser");
      await worker.start({
        onUnhandledRequest: "bypass",
      });

      console.log("✅ MSW started in browser");
    }

    startWorker();
  }, []);

  return <>{children}</>;
}
