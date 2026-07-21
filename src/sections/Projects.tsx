import { AsciiPanel } from "@/components/AsciiPanel";
import { Reveal } from "@/components/Reveal";
import { featured, moreProjects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="work" style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 40px 40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 38 }}>
        <span
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: 46,
            lineHeight: 1,
            color: "#14161c",
          }}
        >
          WORK
        </span>
        <span
          style={{
            font: "700 12px 'Space Mono', monospace",
            letterSpacing: ".16em",
            color: "#f0492e",
          }}
        >
          / THINGS I&apos;VE BUILT &amp; BROKEN
        </span>
      </div>

      {/* ===== HIGHLIGHT: ESCA ===== */}
      <Reveal
        as="article"
        className="paper crumple"
        style={{
          position: "relative",
          padding: 0,
          boxShadow: "12px 14px 0 rgba(20,22,28,.16)",
          marginBottom: 56,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -15,
            left: 26,
            zIndex: 5,
            background: "#14161c",
            color: "#efe9d8",
            font: "700 11px 'Space Mono', monospace",
            letterSpacing: ".14em",
            padding: "7px 13px",
            transform: "rotate(-1.6deg)",
            boxShadow: "3px 3px 0 #f0492e",
          }}
        >
          ★ HIGHLIGHT PROJECT
        </div>
        <div
          className="featured-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.12fr", gap: 0 }}
        >
          <AsciiPanel n={featured.n} color={featured.color} title={featured.title} />
          <div style={{ padding: "38px 40px", position: "relative", zIndex: 1 }}>
            <div style={{ font: "700 11px 'Space Mono', monospace", letterSpacing: ".14em", color: "#f0492e" }}>
              {featured.tag}
            </div>
            <h3
              style={{
                margin: "8px 0 2px",
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: 52,
                lineHeight: 0.94,
                letterSpacing: "-.02em",
              }}
            >
              {featured.title}
            </h3>
            <div style={{ font: "600 16px 'Archivo', sans-serif", color: "#2b2d34" }}>
              {featured.sub}
            </div>
            <div
              style={{
                display: "inline-block",
                font: "700 11px 'Space Mono', monospace",
                background: "#14161c",
                color: "#efe9d8",
                padding: "5px 10px",
                margin: "16px 0 4px",
              }}
            >
              {featured.role}
            </div>
            <p style={{ margin: "12px 0 0", font: "500 15px/1.6 'Archivo', sans-serif", color: "#2b2d34" }}>
              {featured.blurb}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {featured.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    font: "700 11px 'Space Mono', monospace",
                    border: "1.5px solid #14161c",
                    padding: "5px 10px",
                    background: "#fffdf4",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ===== MORE WORK ===== */}
      <Reveal style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 26px" }}>
        <span style={{ font: "700 13px 'Space Mono', monospace", letterSpacing: ".16em", color: "#14161c" }}>
          MORE WORK
        </span>
        <span style={{ flex: 1, height: 2, background: "#14161c" }} />
        <span style={{ font: "700 11px 'Space Mono', monospace", color: "#f0492e" }}>
          03 SELECTED
        </span>
      </Reveal>
      <Reveal
        className="work-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
      >
        {moreProjects.map((p) => (
          <article
            key={p.n}
            className="paper"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "24px 22px 22px",
              boxShadow: "7px 8px 0 rgba(20,22,28,.13)",
              borderTop: `6px solid ${p.color}`,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 2,
                top: -10,
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: 104,
                lineHeight: 1,
                color: p.color,
                opacity: 0.13,
                pointerEvents: "none",
              }}
            >
              {p.n}
            </div>
            <div style={{ font: "700 10px 'Space Mono', monospace", letterSpacing: ".12em", color: p.color, position: "relative", zIndex: 1 }}>
              {p.tag}
            </div>
            <h3
              style={{
                margin: "7px 0 3px",
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontSize: 23,
                lineHeight: 1,
                letterSpacing: "-.01em",
                position: "relative",
                zIndex: 1,
              }}
            >
              {p.title}
            </h3>
            <div style={{ font: "600 13px 'Archivo', sans-serif", color: "#2b2d34", position: "relative", zIndex: 1 }}>
              {p.sub}
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                font: "700 10px 'Space Mono', monospace",
                background: "#14161c",
                color: "#efe9d8",
                padding: "4px 9px",
                margin: "13px 0 0",
                position: "relative",
                zIndex: 1,
              }}
            >
              {p.role}
            </div>
            <p style={{ margin: "12px 0 0", font: "500 13px/1.5 'Archivo', sans-serif", color: "#2b2d34", position: "relative", zIndex: 1 }}>
              {p.blurb}
            </p>
            <div
              style={{
                marginTop: 14,
                font: "700 11px 'Space Mono', monospace",
                color: "#14161c",
                background: "#efe9d8",
                border: `1.5px dashed ${p.color}`,
                padding: "8px 10px",
                position: "relative",
                zIndex: 1,
                whiteSpace: "pre-wrap",
              }}
            >
              {p.signal}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14, position: "relative", zIndex: 1 }}>
              {p.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    font: "700 10px 'Space Mono', monospace",
                    border: "1.5px solid #14161c",
                    padding: "4px 8px",
                    background: "#fffdf4",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
};
