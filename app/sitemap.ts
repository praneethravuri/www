import { MetadataRoute } from "next";
import { data, sitePages } from "@/app/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: data.url,
      lastModified: new Date(data.lastUpdated),
    },
    ...Object.keys(sitePages).map((slug) => ({
      url: `${data.url}/${slug}`,
      lastModified: new Date(data.lastUpdated),
    })),
  ];
}
