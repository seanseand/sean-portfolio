import { Reveal } from "@/components/Reveal";

export const AboutSection = () => {
  return (
    <Reveal as="section" id="about" className="max-w-content mx-auto px-section-x pt-[84px] pb-section-y">
      <div className="flex items-baseline gap-[16px] mb-[34px]">
        <span className="font-heading text-[46px] leading-none text-ink">ABOUT</span>
        <span className="font-mono font-bold text-[12px] tracking-[.16em] text-coral">
          / THE HUMAN BEHIND THE COMMITS
        </span>
      </div>
      <div className="about-grid grid grid-cols-1 mg:grid-cols-[1.3fr_1fr] gap-[30px] items-start">
        <div className="paper crumple px-[34px] pt-[34px] pb-[30px] shadow-card-lg rotate-[-.5deg]">
          <p className="m-0 font-sans font-medium text-[17px] leading-[1.6] relative z-[1]">
            I&apos;m <b>Sean Drei A. Octavo</b>, a Computer Science graduate from
            Baguio City. I work across the whole build — from UI/UX direction down to
            the data layer — and I&apos;m happiest turning a rough idea into
            something real people use. Lately that means leading front-end at a
            farm-tech startup, training ML models for public-health research, and
            remastering a university&apos;s site onto a modern CMS.
          </p>
          <div className="flex gap-[10px] flex-wrap mt-[24px] relative z-[1]">
            {["CREATIVITY", "STRATEGIC PLANNING", "ADAPTABILITY", "GROWTH MINDSET"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-paper border-[1.5px] border-ink font-mono font-bold text-[11px] px-[11px] py-[6px]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <div className="paper px-[22px] py-[22px] shadow-card rotate-[1deg]">
            <div className="font-mono font-bold text-[12px] tracking-[.12em] text-coral mb-[12px]">
              ◦ EDUCATION
            </div>
            <div className="font-sans font-extrabold text-[16px]">Saint Louis University</div>
            <div className="font-sans font-medium text-[13px] text-muted">
              B.S. Computer Science · May 2026 · <b>Dean&apos;s Lister</b>
            </div>
            <div className="h-px bg-[rgba(0,0,0,.12)] my-[12px]" />
            <div className="font-sans font-extrabold text-[16px]">University of Saint Louis</div>
            <div className="font-sans font-medium text-[13px] text-muted">STEM Strand · 2021</div>
          </div>
          <div className="paper p-[22px] shadow-card rotate-[-1.2deg]">
            <div className="font-mono font-bold text-[12px] tracking-[.12em] text-blue mb-[12px]">
              ◦ OFF THE CLOCK
            </div>
            <div className="flex gap-[8px] flex-wrap">
              <span className="font-sans font-bold text-[13px]">Cycling</span>
              <span className="text-coral">·</span>
              <span className="font-sans font-bold text-[13px]">Fishing</span>
              <span className="text-coral">·</span>
              <span className="font-sans font-bold text-[13px]">Photography</span>
            </div>
            <div className="font-mono font-medium text-[12px] text-[#777] mt-[12px]">
              Speaks English &amp; Filipino
            </div>
          </div>
        </div>
      </div>
      {/* certs row */}
      <div className="certs-row flex gap-[16px] flex-wrap mt-[22px]">
        <div className="flex items-center gap-[12px] bg-ink text-paper px-[20px] py-[14px] rotate-[.6deg]">
          <span className="font-heading text-[26px] text-gold-bright">★</span>
          <div>
            <div className="font-sans font-bold text-[13px]">
              Lean Six Sigma — Yellow Belt
            </div>
            <div className="font-mono font-normal text-[11px] opacity-70">
              CLSSYB-032225-66
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[12px] bg-ink text-paper px-[20px] py-[14px] rotate-[-.6deg]">
          <span className="font-heading text-[26px] text-blue">★</span>
          <div>
            <div className="font-sans font-bold text-[13px]">
              AskLex — Project Management
            </div>
            <div className="font-mono font-normal text-[11px] opacity-70">
              PMFC-032325-26
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
