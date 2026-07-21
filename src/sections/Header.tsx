export const Header = () => {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-[30px] py-[14px] backdrop-blur-[6px] bg-[rgba(239,233,216,.72)] border-b-[2px] border-ink">
      <a href="#top" className="flex items-center gap-[9px] text-ink">
        <span className="w-[15px] h-[15px] bg-coral rounded-full" />
        <span className="font-sans font-extrabold text-[15px] tracking-[.02em]">
          SEAN OCTAVO
        </span>
      </a>
      <div className="flex gap-[26px] flex-wrap font-mono font-bold text-[12px] tracking-[.12em]">
        <a href="#work" className="text-ink">
          WORK
        </a>
        <a href="#about" className="text-ink">
          ABOUT
        </a>
        <a href="#experience" className="text-ink">
          PATH
        </a>
        <a href="/Octavo_Sean_Resume.pdf" target="_blank" rel="noopener" className="text-ink">
          RESUME
        </a>
        <a href="#contact" className="text-ink">
          SAY HI
        </a>
      </div>
    </nav>
  );
};
