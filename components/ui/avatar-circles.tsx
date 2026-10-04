"use client";

import { useState } from "react";
import { Blobatar } from "@blobatar/react";
import { useGaze } from "@blobatar/react/gaze";
import { cn } from "@/lib/utils";

// Minimal adaptation of Magic UI Avatar Circles using animated inline Blobatars.
export function AvatarCircles({ className, names }: { className?: string; names: string[] }) {
  return (
    <div className={cn("flex -space-x-4", className)}>
      {names.map((name) => (
        <PointerAvatar key={name} name={name} />
      ))}
    </div>
  );
}

function PointerAvatar({ name }: { name: string }) {
  const [playing, setPlaying] = useState(true);
  const { ref } = useGaze({ travel: playing ? 3 : 0, lookAt: playing ? "pointer" : "rest" });

  return (
    <button
      type="button"
      onClick={() => setPlaying((value) => !value)}
      aria-label={playing ? "Pause avatar animation" : "Resume avatar animation"}
      aria-pressed={!playing}
      title={playing ? "Pause animation" : "Resume animation"}
      className="size-14 shrink-0 cursor-pointer sm:size-[76px]"
    >
      <Blobatar
        ref={ref}
        name={name}
        animate={playing ? "always" : undefined}
        palette={{ head: "#ff5f1f", eye: "#141413" }}
        className="size-full"
        aria-hidden="true"
      />
    </button>
  );
}
