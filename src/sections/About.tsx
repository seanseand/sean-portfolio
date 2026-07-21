import { Reveal } from "@/components/Reveal";

export const AboutSection = () => {
  return (
    <Reveal
      as="section"
      id="about"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 40px 40px" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 34 }}>
        <span
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: 46,
            lineHeight: 1,
            color: "#14161c",
          }}
        >
          ABOUT
        </span>
        <span
          style={{
            font: "700 12px 'Space Mono', monospace",
            letterSpacing: ".16em",
            color: "#f0492e",
          }}
        >
          / THE HUMAN BEHIND THE COMMITS
        </span>
      </div>
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 30,
          alignItems: "start",
        }}
      >
        <div
          className="paper crumple"
          style={{
            padding: "34px 34px 30px",
            boxShadow: "8px 9px 0 rgba(20,22,28,.12)",
            transform: "rotate(-.5deg)",
          }}
        >
          <p
            style={{
              margin: 0,
              font: "500 17px/1.6 'Archivo', sans-serif",
              position: "relative",
              zIndex: 1,
            }}
          >
            I&apos;m <b>Sean Drei A. Octavo</b>, a Computer Science graduate from
            Baguio City. I work across the whole build — from UI/UX direction down to
            the data layer — and I&apos;m happiest turning a rough idea into
            something real people use. Lately that means leading front-end at a
            farm-tech startup, training ML models for public-health research, and
            remastering a university&apos;s site onto a modern CMS.
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 24,
              position: "relative",
              zIndex: 1,
            }}
          >
            {["CREATIVITY", "STRATEGIC PLANNING", "ADAPTABILITY", "GROWTH MINDSET"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#efe9d8",
                    border: "1.5px solid #14161c",
                    font: "700 11px 'Space Mono', monospace",
                    padding: "6px 11px",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            className="paper"
            style={{
              padding: "22px 22px",
              boxShadow: "6px 7px 0 rgba(20,22,28,.12)",
              transform: "rotate(1deg)",
            }}
          >
            <div
              style={{
                font: "700 12px 'Space Mono', monospace",
                letterSpacing: ".12em",
                color: "#f0492e",
                marginBottom: 12,
              }}
            >
              ◦ EDUCATION
            </div>
            <div style={{ font: "800 16px 'Archivo', sans-serif" }}>Saint Louis University</div>
            <div style={{ font: "500 13px 'Archivo', sans-serif", color: "#555" }}>
              B.S. Computer Science · May 2026 · <b>Dean&apos;s Lister</b>
            </div>
            <div style={{ height: 1, background: "rgba(0,0,0,.12)", margin: "12px 0" }} />
            <div style={{ font: "800 16px 'Archivo', sans-serif" }}>University of Saint Louis</div>
            <div style={{ font: "500 13px 'Archivo', sans-serif", color: "#555" }}>
              STEM Strand · 2021
            </div>
          </div>
          <div
            className="paper"
            style={{
              padding: 22,
              boxShadow: "6px 7px 0 rgba(20,22,28,.12)",
              transform: "rotate(-1.2deg)",
            }}
          >
            <div
              style={{
                font: "700 12px 'Space Mono', monospace",
                letterSpacing: ".12em",
                color: "#3f5fe6",
                marginBottom: 12,
              }}
            >
              ◦ OFF THE CLOCK
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ font: "700 13px 'Archivo', sans-serif" }}>Cycling</span>
              <span style={{ color: "#f0492e" }}>·</span>
              <span style={{ font: "700 13px 'Archivo', sans-serif" }}>Fishing</span>
              <span style={{ color: "#f0492e" }}>·</span>
              <span style={{ font: "700 13px 'Archivo', sans-serif" }}>Photography</span>
            </div>
            <div
              style={{
                font: "500 12px 'Space Mono', monospace",
                color: "#777",
                marginTop: 12,
              }}
            >
              Speaks English &amp; Filipino
            </div>
          </div>
        </div>
      </div>
      {/* certs row */}
      <div className="certs-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#14161c",
            color: "#efe9d8",
            padding: "14px 20px",
            transform: "rotate(.6deg)",
          }}
        >
          <span style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 26, color: "#e8a83a" }}>
            ★
          </span>
          <div>
            <div style={{ font: "700 13px 'Archivo', sans-serif" }}>
              Lean Six Sigma — Yellow Belt
            </div>
            <div style={{ font: "400 11px 'Space Mono', monospace", opacity: 0.7 }}>
              CLSSYB-032225-66
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#14161c",
            color: "#efe9d8",
            padding: "14px 20px",
            transform: "rotate(-.6deg)",
          }}
        >
          <span style={{ fontFamily: "var(--font-anton), sans-serif", fontSize: 26, color: "#3f5fe6" }}>
            ★
          </span>
          <div>
            <div style={{ font: "700 13px 'Archivo', sans-serif" }}>
              AskLex — Project Management
            </div>
            <div style={{ font: "400 11px 'Space Mono', monospace", opacity: 0.7 }}>
              PMFC-032325-26
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
