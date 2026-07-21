import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/portfolio";

export const ExperienceSection = () => {
  return (
    <Reveal
      as="section"
      id="experience"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 40px 40px" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 38 }}>
        <span
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: 46,
            lineHeight: 1,
            color: "#14161c",
          }}
        >
          THE PATH
        </span>
        <span
          style={{
            font: "700 12px 'Space Mono', monospace",
            letterSpacing: ".16em",
            color: "#f0492e",
          }}
        >
          / WHERE I&apos;VE BEEN
        </span>
      </div>
      <div
        style={{
          position: "relative",
          paddingLeft: 34,
          borderLeft: "3px solid #14161c",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {timeline.map((e) => (
          <div key={e.org} style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: -45,
                top: 4,
                width: 16,
                height: 16,
                background: e.color,
                border: "3px solid #14161c",
                borderRadius: "50%",
              }}
            />
            <div
              className="paper"
              style={{
                padding: "22px 26px",
                boxShadow: "6px 7px 0 rgba(20,22,28,.1)",
                transform: `rotate(${e.rot})`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, alignItems: "baseline" }}>
                <div style={{ font: "800 19px 'Archivo', sans-serif" }}>{e.org}</div>
                <div style={{ font: "700 12px 'Space Mono', monospace", color: "#f0492e" }}>{e.when}</div>
              </div>
              <div style={{ font: "600 13px 'Archivo', sans-serif", color: "#555", marginTop: 2 }}>
                {e.role} · {e.place}
              </div>
              <p style={{ margin: "12px 0 0", font: "500 14px/1.5 'Archivo', sans-serif", color: "#2b2d34" }}>
                {e.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
};
