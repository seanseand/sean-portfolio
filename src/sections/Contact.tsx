export const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        marginTop: 70,
        background: "#3f5fe6",
        color: "#f4efe0",
        borderTop: "3px solid #14161c",
        overflow: "hidden",
      }}
    >
      <div className="crumple" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          padding: "80px 40px 90px",
          textAlign: "center",
        }}
      >
        <div style={{ font: "700 13px 'Space Mono', monospace", letterSpacing: ".2em", marginBottom: 16 }}>
          ◦ LET&apos;S BUILD SOMETHING ◦
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(56px, 10vw, 150px)",
            lineHeight: 0.86,
            letterSpacing: ".01em",
          }}
        >
          SAY HELLO<span style={{ color: "#f0492e" }}>.</span>
        </h2>
        <a
          href="mailto:sdaoctavo@gmail.com"
          style={{
            display: "inline-block",
            marginTop: 30,
            background: "#fffdf4",
            color: "#14161c",
            font: "700 16px 'Space Mono', monospace",
            padding: "18px 32px",
            boxShadow: "6px 6px 0 #14161c",
          }}
        >
          sdaoctavo@gmail.com →
        </a>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 34,
            font: "700 13px 'Space Mono', monospace",
          }}
        >
          <a
            href="https://linkedin.com/in/seanoctavo"
            style={{ color: "#f4efe0", borderBottom: "2px solid #f0492e" }}
          >
            LINKEDIN
          </a>
          <span style={{ opacity: 0.5 }}>/</span>
          <a
            href="https://github.com/seanseand"
            style={{ color: "#f4efe0", borderBottom: "2px solid #f0492e" }}
          >
            GITHUB
          </a>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: "#f4efe0" }}>+63 906 488 6484</span>
        </div>
      </div>
    </section>
  );
};
