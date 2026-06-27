import { MetadataRoute } from "next";
import { data } from "@/app/data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${data.firstName} ${data.lastName} - ${data.title}`,
    short_name: data.firstName,
    description: data.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    scope: "/",
    categories: ["technology"],
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
