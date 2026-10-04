import { ImageResponse } from "next/og";
import { OGContent, ogAlt } from "./_og-content";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = { width: 1200, height: 675 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OGContent />, { ...size });
}
