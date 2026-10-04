import Image from "next/image";
import { cn } from "@/lib/utils";

// Static, server-rendered adaptation of Magic UI Avatar Circles.
// https://magicui.design/docs/components/avatar-circles
export function AvatarCircles({
  className,
  avatarUrls,
}: {
  className?: string;
  avatarUrls: { imageUrl: string; alt: string }[];
}) {
  return (
    <div className={cn("flex -space-x-4", className)}>
      {avatarUrls.map((avatar) => (
        <Image
          key={avatar.imageUrl}
          src={avatar.imageUrl}
          alt={avatar.alt}
          width={76}
          height={76}
          unoptimized
          className="size-14 shrink-0 sm:size-[76px]"
        />
      ))}
    </div>
  );
}
