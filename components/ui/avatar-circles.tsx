"use client";

import { Blobatar } from "@blobatar/react";
import { useGaze } from "@blobatar/react/gaze";
import { cn } from "@/lib/utils";

// Minimal adaptation of Magic UI Avatar Circles using animated inline Blobatars.
export function AvatarCircles({ className, names }: { className?: string; names: string[] }) {
  return (
    <div className={cn("flex -space-x-4", className)} aria-hidden="true">
      {names.map((name) => (
        <PointerAvatar key={name} name={name} />
      ))}
    </div>
  );
}

function PointerAvatar({ name }: { name: string }) {
  const { ref } = useGaze({ travel: 3, lookAt: "pointer" });

  return (
    <Blobatar
      ref={ref}
      name={name}
      animate="always"
      palette={{ head: "#ff5f1f", eye: "#141413" }}
      className="size-14 shrink-0 sm:size-[76px]"
    />
  );
}
