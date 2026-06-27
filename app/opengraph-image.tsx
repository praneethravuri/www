import { ImageResponse } from "next/og";
import { data } from "@/app/data/resume";

export const runtime = "edge";

const fullName = `${data.firstName} ${data.lastName}`;
const pageTitle = `${fullName} | ${data.title}`;

export const alt = pageTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          padding: "40px",
        }}
      >
        {/* Name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-2px",
          }}
        >
          {fullName}
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: "32px",
            color: "#a3a3a3",
            margin: 0,
          }}
        >
          {data.title}
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "24px",
            color: "#7c7c7c",
            margin: 0,
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          {data.heroHeadline}
        </p>

        {/* URL */}
        <p
          style={{
            fontSize: "20px",
            color: "#ffffff",
            margin: 0,
            marginTop: "20px",
          }}
        >
          {data.url.replace("https://", "")}
        </p>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
