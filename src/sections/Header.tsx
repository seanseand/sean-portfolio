export const Header = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 30px",
        backdropFilter: "blur(6px)",
        background: "rgba(239,233,216,.72)",
        borderBottom: "2px solid #14161c",
      }}
    >
      <a
        href="#top"
        style={{ display: "flex", alignItems: "center", gap: 9, color: "#14161c" }}
      >
        <span
          style={{
            width: 15,
            height: 15,
            background: "#f0492e",
            borderRadius: "50%",
          }}
        />
        <span style={{ font: "800 15px 'Archivo', sans-serif", letterSpacing: ".02em" }}>
          SEAN OCTAVO
        </span>
      </a>
      <div
        style={{
          display: "flex",
          gap: 26,
          font: "700 12px 'Space Mono', monospace",
          letterSpacing: ".12em",
          flexWrap: "wrap",
        }}
      >
        <a href="#work" style={{ color: "#14161c" }}>
          WORK
        </a>
        <a href="#about" style={{ color: "#14161c" }}>
          ABOUT
        </a>
        <a href="#experience" style={{ color: "#14161c" }}>
          PATH
        </a>
        <a href="/Octavo_Sean_Resume.pdf" target="_blank" rel="noopener" style={{ color: "#14161c" }}>
          RESUME
        </a>
        <a href="#contact" style={{ color: "#14161c" }}>
          SAY HI
        </a>
      </div>
    </nav>
  );
};
