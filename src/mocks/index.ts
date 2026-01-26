export async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("./browser");
  await worker.start({
    onUnhandledRequest: "bypass",
  });

  console.log("✅ MSW Mocking Enabled");
}
