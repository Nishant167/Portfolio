"use client";

import { useEffect, useState } from "react";

const IST_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
});

/** IST wall clock. Renders a placeholder until mounted to avoid mismatches. */
export function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => setTime(IST_FORMATTER.format(new Date()));

    update();
    const interval = window.setInterval(update, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <time className="font-mono text-[11px]" suppressHydrationWarning>
      {time}
    </time>
  );
}
