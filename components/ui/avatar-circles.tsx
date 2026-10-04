"use client";

import { Blobatar } from "@blobatar/react";
import { cn } from "@/lib/utils";

// Minimal adaptation of Magic UI Avatar Circles using animated inline Blobatars.
export function AvatarCircles({ className, names }: { className?: string; names: string[] }) {
  return (
    <div className={cn("flex -space-x-4", className)} aria-hidden="true">
      {names.map((name) => (
        <Blobatar
          key={name}
          name={name}
          animate="always"
          palette={{ head: "#ff5f1f", eye: "#141413" }}
          className="size-14 shrink-0 sm:size-[76px]"
        />
      ))}
    </div>
  );
}
