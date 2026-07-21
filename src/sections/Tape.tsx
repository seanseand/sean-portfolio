import { marqueeText } from "@/data/portfolio";

export const TapeSection = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "#14161c",
        color: "#efe9d8",
        borderTop: "2px solid #14161c",
        borderBottom: "2px solid #14161c",
        padding: "12px 0",
        marginTop: 44,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "mq 26s linear infinite",
          font: "700 20px 'Anton', sans-serif",
          letterSpacing: ".06em",
        }}
      >
        <span style={{ display: "flex", gap: 26, paddingRight: 26 }}>{marqueeText}</span>
        <span style={{ display: "flex", gap: 26, paddingRight: 26 }}>{marqueeText}</span>
      </div>
    </div>
  );
};
