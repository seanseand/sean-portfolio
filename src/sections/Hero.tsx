export const HeroSection = () => {
  return (
    <header
      id="top"
      className="relative max-w-content mx-auto px-[20px] sm:px-[24px] mg:px-[32px] lg:px-section-x pt-[48px] mg:pt-[58px] lg:pt-[64px] pb-[32px] lg:pb-section-y overflow-x-clip"
    >
      <div className="font-mono font-normal text-[clamp(11px,1.3vw,13px)] tracking-[.18em] mg:tracking-[.22em] text-coral mb-[16px]">
        ◦ COMPUTER SCIENCE GRADUATE · 2026 · BAGUIO CITY, PH
      </div>
      <div className="hero-grid grid grid-cols-1 mg:grid-cols-[1.35fr_.8fr] lg:grid-cols-[1.55fr_1fr] gap-[30px] lg:gap-[36px] items-end">
        <div>
          <h1 className="m-0 font-display text-[clamp(46px,9vw,116px)] leading-[0.9] tracking-[-.025em]">
            Sean
            <br />
            Octavo<span className="text-coral">.</span>
          </h1>
          <p className="max-w-[560px] mt-[18px] mg:mt-[22px] mb-0 font-display text-[clamp(19px,2.7vw,30px)] leading-[1.15] tracking-[-.01em]">
            i build software, ship products &amp; chase{" "}
            <span className="text-coral">good ideas.</span>
          </p>
          <p className="max-w-[520px] mt-[22px] mg:mt-[26px] mb-0 font-sans font-medium text-[clamp(15px,1.45vw,17px)] leading-[1.55] text-body">
            Full-stack &amp; product builder with a research background and
            startup experience. I like shipping fast, tidy interfaces, and the
            occasional small experiment.
          </p>
          <div className="flex gap-[14px] mt-[28px] flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center gap-[8px] bg-ink text-card font-mono font-bold text-[clamp(12px,1.2vw,13px)] tracking-[.08em] px-[18px] mg:px-[22px] py-[13px] mg:py-[14px] rounded-[2px] shadow-btn"
            >
              SEE THE WORK →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-[8px] bg-transparent text-ink font-mono font-bold text-[clamp(12px,1.2vw,13px)] tracking-[.08em] px-[18px] mg:px-[22px] py-[13px] mg:py-[14px] border-[2px] border-ink rounded-[2px]"
            >
              GET IN TOUCH
            </a>
            <a
              href="/Octavo_Sean_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[8px] bg-transparent text-ink font-mono font-bold text-[clamp(12px,1.2vw,13px)] tracking-[.08em] px-[18px] mg:px-[22px] py-[13px] mg:py-[14px] border-[2px] border-dashed border-ink rounded-[2px]"
            >
              RESUME ↓
            </a>
          </div>
        </div>
        {/* decorative halftone glyph (replaces portrait cut-out) */}
        <div
          className="hero-portrait relative justify-self-start mt-[32px] mg:justify-self-end mg:mt-0 w-full max-w-[280px] aspect-[14/17]"
          aria-hidden="true"
        >
          <div
            className="tornreal hero-glyph absolute inset-0 [--r:3deg] drop-shadow-[9px_11px_0_rgba(20,22,28,.18)]"
          >
            <div className="halftone w-full h-full bg-coral bg-blend-multiply flex items-center justify-center">
              <span className="font-heading text-[clamp(88px,40vw,150px)] leading-none tracking-[-.02em] text-[rgba(255,255,255,.92)] [text-shadow:0_2px_6px_rgba(0,0,0,.25)]">
                SO
              </span>
            </div>
          </div>
          <div className="absolute -left-[10%] bottom-[13%] w-[39%] aspect-square rounded-full bg-blue mix-blend-multiply opacity-90 -z-10" />
        </div>
      </div>
      {/* numbered intro strip */}
      <div className="intro-strip grid grid-cols-1 mg:grid-cols-3 gap-[18px] lg:gap-[24px] mt-[42px] mg:mt-[52px] border-t-[2px] border-ink pt-[22px]">
        <div>
          <div className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] text-coral">01 / NOW</div>
          <div className="font-sans font-semibold text-[clamp(14px,1.35vw,15px)] leading-[1.4] mt-[7px]">
            Co-Founder &amp; CPO at ESCA — an agri-IoT platform for farmers.
          </div>
        </div>
        <div>
          <div className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] text-coral">02 / RESEARCH</div>
          <div className="font-sans font-semibold text-[clamp(14px,1.35vw,15px)] leading-[1.4] mt-[7px]">
            ML thesis predicting TB treatment outcomes across 6 models.
          </div>
        </div>
        <div>
          <div className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] text-coral">03 / STACK</div>
          <div className="font-sans font-semibold text-[clamp(14px,1.35vw,15px)] leading-[1.4] mt-[7px]">
            React&nbsp;Native · TypeScript · Python · Supabase · Next.js.
          </div>
        </div>
      </div>
    </header>
  );
};
