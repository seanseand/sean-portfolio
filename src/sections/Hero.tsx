export const HeroSection = () => {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        maxWidth: 1180,
        margin: "0 auto",
        padding: "64px 40px 40px",
      }}
    >
      <div
        style={{
          font: "400 13px 'Space Mono', monospace",
          letterSpacing: ".22em",
          color: "#f0492e",
          marginBottom: 16,
        }}
      >
        ◦ COMPUTER SCIENCE GRADUATE · 2026 · BAGUIO CITY, PH
      </div>
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.55fr 1fr",
          gap: 36,
          alignItems: "end",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontSize: "clamp(56px, 7.6vw, 116px)",
              lineHeight: 0.9,
              letterSpacing: "-.025em",
            }}
          >
            i build software,
            <br />
            ship products
            <br />
            &amp; chase <span style={{ color: "#f0492e" }}>good ideas.</span>
          </h1>
          <p
            style={{
              maxWidth: 520,
              margin: "26px 0 0",
              font: "500 16px/1.55 'Archivo', sans-serif",
              color: "#2b2d34",
            }}
          >
            Full-stack &amp; product builder, ML thesis researcher, and co-founder of
            an agri-IoT startup. I like shipping fast, tidy interfaces, and the
            occasional small experiment.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#14161c",
                color: "#fffdf4",
                font: "700 13px 'Space Mono', monospace",
                letterSpacing: ".08em",
                padding: "14px 22px",
                borderRadius: 2,
                boxShadow: "4px 4px 0 #f0492e",
              }}
            >
              SEE THE WORK →
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#14161c",
                font: "700 13px 'Space Mono', monospace",
                letterSpacing: ".08em",
                padding: "14px 22px",
                border: "2px solid #14161c",
                borderRadius: 2,
              }}
            >
              GET IN TOUCH
            </a>
            <a
              href="/Octavo_Sean_Resume.pdf"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#14161c",
                font: "700 13px 'Space Mono', monospace",
                letterSpacing: ".08em",
                padding: "14px 22px",
                border: "2px dashed #14161c",
                borderRadius: 2,
              }}
            >
              RESUME ↓
            </a>
          </div>
        </div>
        {/* riso portrait cut-out */}
        <div
          className="hero-portrait"
          style={{
            position: "relative",
            justifySelf: "end",
            width: 280,
            height: 340,
          }}
        >
          <div
            className="tornreal"
            style={{
              position: "absolute",
              inset: 0,
              transform: "rotate(3deg)",
              filter: "drop-shadow(9px 11px 0 rgba(20,22,28,.18))",
            }}
          >
            <div
              className="halftone"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f0492e",
                backgroundBlendMode: "multiply",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                font: "700 12px 'Space Mono', monospace",
                textShadow: "0 1px 2px rgba(0,0,0,.3)",
              }}
            >
              PORTRAIT /<br />
              SELF CUT-OUT
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: -30,
              bottom: 44,
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "#3f5fe6",
              mixBlendMode: "multiply",
              opacity: 0.9,
              zIndex: -1,
            }}
          />
        </div>
      </div>
      {/* numbered intro strip */}
      <div
        className="intro-strip"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
          marginTop: 52,
          borderTop: "2px solid #14161c",
          paddingTop: 22,
        }}
      >
        <div>
          <div style={{ font: "700 12px 'Space Mono', monospace", color: "#f0492e" }}>
            01 / NOW
          </div>
          <div style={{ font: "600 15px/1.4 'Archivo', sans-serif", marginTop: 7 }}>
            Co-Founder &amp; CPO at ESCA — an agri-IoT platform for farmers.
          </div>
        </div>
        <div>
          <div style={{ font: "700 12px 'Space Mono', monospace", color: "#f0492e" }}>
            02 / RESEARCH
          </div>
          <div style={{ font: "600 15px/1.4 'Archivo', sans-serif", marginTop: 7 }}>
            ML thesis predicting TB treatment outcomes across 6 models.
          </div>
        </div>
        <div>
          <div style={{ font: "700 12px 'Space Mono', monospace", color: "#f0492e" }}>
            03 / STACK
          </div>
          <div style={{ font: "600 15px/1.4 'Archivo', sans-serif", marginTop: 7 }}>
            React&nbsp;Native · TypeScript · Python · Supabase · Next.js.
          </div>
        </div>
      </div>
    </header>
  );
};
