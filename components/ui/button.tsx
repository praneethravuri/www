import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

// shadcn Button, limited to the outline variant used by this portfolio.
export function Button({
  asChild = false,
  className,
  ...props
}: ComponentProps<"button"> & { asChild?: boolean }) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      data-slot="button"
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-4 py-2 text-sm font-medium text-ink hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        className
      )}
      {...props}
    />
  );
}
