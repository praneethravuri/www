import * as React from "react";

import { cn } from "@/lib/utils";

// ponytail: single variant; add back cva when a second variant is needed
const badgeCls =
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap bg-secondary text-secondary-foreground";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="badge" className={cn(badgeCls, className)} {...props} />;
}

export { Badge };
