"use client";

import { useEffect, useState } from "react";
import { MapPinIcon } from "@phosphor-icons/react";
import { data } from "@/app/data/resume";

export default function TopBar() {
  const [time, setTime] = useState<string>("—:—");

  useEffect(() => {
    function tick() {
      try {
        setTime(
          new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Chicago",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZoneName: "short",
          }).format(new Date())
        );
      } catch {
        setTime(new Date().toLocaleTimeString());
      }
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="flex items-center justify-between gap-4 pt-[28px] text-[13px] tracking-[0.04em] text-muted-foreground">
      <span className="inline-flex items-center gap-[7px] whitespace-nowrap">
        <MapPinIcon size={13} className="opacity-70 flex-none" />
        {data.location}
      </span>
      <span className="whitespace-nowrap">{time}</span>
    </header>
  );
}
