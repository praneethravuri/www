import { data } from "@/app/data/resume";

export const ogFullName = `${data.firstName} ${data.lastName}`;
export const ogAlt = `${ogFullName} | ${data.title}`;

export function OGContent() {
  return (
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-2px",
          }}
        >
          {ogFullName}
        </h1>
        <p style={{ fontSize: "32px", color: "#a3a3a3", margin: 0 }}>{data.title}</p>
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
        <p style={{ fontSize: "20px", color: "#ffffff", margin: 0, marginTop: "20px" }}>
          {data.url.replace("https://", "")}
        </p>
      </div>
    </div>
  );
}
