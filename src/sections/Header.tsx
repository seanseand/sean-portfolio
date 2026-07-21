export const Header = () => {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-[16px] px-[20px] sm:px-[24px] mg:px-[30px] py-[12px] mg:py-[14px] backdrop-blur-[6px] bg-[rgba(239,233,216,.72)] border-b-[2px] border-ink">
      <a href="#top" className="flex items-center gap-[9px] text-ink">
        <span className="w-[15px] h-[15px] bg-coral rounded-full" />
        <span className="font-sans font-extrabold text-[clamp(13px,1.4vw,15px)] tracking-normal">
          SEAN OCTAVO
        </span>
      </a>
      <div className="flex gap-x-[16px] mg:gap-x-[22px] lg:gap-x-[26px] gap-y-[8px] flex-wrap justify-end font-mono font-bold text-[clamp(10px,1.1vw,12px)] tracking-[.1em] mg:tracking-[.12em]">
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
