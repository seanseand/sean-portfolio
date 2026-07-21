import { AsciiPanel } from "@/components/AsciiPanel";
import { Reveal } from "@/components/Reveal";
import { featured, moreProjects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="max-w-[1180px] mx-auto px-[20px] sm:px-[24px] mg:px-[32px] lg:px-[40px] pt-[56px] mg:pt-[64px] pb-[32px] lg:pb-[40px]"
    >
      <div className="flex flex-wrap items-baseline gap-[10px] mg:gap-[16px] mb-[30px] mg:mb-[38px]">
        <span className="font-heading text-[clamp(38px,5.5vw,46px)] leading-none text-ink">WORK</span>
        <span className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] tracking-[.14em] mg:tracking-[.16em] text-coral">
          / THINGS I&apos;VE BUILT &amp; BROKEN
        </span>
      </div>

      {/* ===== HIGHLIGHT: ESCA ===== */}
      <Reveal
        as="article"
        className="paper crumple relative p-0 shadow-[8px_10px_0_rgba(20,22,28,.16)] mg:shadow-[12px_14px_0_rgba(20,22,28,.16)] mb-[44px] mg:mb-[56px]"
      >
        <div className="absolute -top-[15px] left-[20px] mg:left-[26px] z-[5] bg-ink text-[#efe9d8] font-mono font-bold text-[clamp(10px,1vw,11px)] tracking-[.14em] px-[12px] mg:px-[13px] py-[7px] rotate-[-1.6deg] shadow-[3px_3px_0_#f0492e]">
          ★ HIGHLIGHT PROJECT
        </div>
        <div className="featured-grid grid grid-cols-1 mg:grid-cols-[.9fr_1.1fr] lg:grid-cols-[1fr_1.12fr] gap-0">
          <AsciiPanel n={featured.n} color={featured.color} title={featured.title} />
          <div className="px-[24px] mg:px-[32px] lg:px-[40px] py-[30px] mg:py-[34px] lg:py-[38px] relative z-[1]">
            <div className="font-mono font-bold text-[clamp(10px,1vw,11px)] tracking-[.14em] text-coral">
              {featured.tag}
            </div>
            <h3 className="mt-[8px] mb-[2px] font-display text-[clamp(38px,5.4vw,52px)] leading-[0.94] tracking-[-.02em]">
              {featured.title}
            </h3>
            <div className="font-sans font-semibold text-[clamp(14px,1.45vw,16px)] text-[#2b2d34]">
              {featured.sub}
            </div>
            <div className="inline-block font-mono font-bold text-[clamp(10px,1vw,11px)] bg-ink text-[#efe9d8] px-[10px] py-[5px] mt-[16px] mb-[4px]">
              {featured.role}
            </div>
            <p className="mt-[12px] mb-0 font-sans font-medium text-[clamp(14px,1.35vw,15px)] leading-[1.6] text-[#2b2d34]">
              {featured.blurb}
            </p>
            <div className="flex gap-[8px] flex-wrap mt-[20px]">
              {featured.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono font-bold text-[clamp(10px,1vw,11px)] border-[1.5px] border-ink px-[10px] py-[5px] bg-card"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ===== MORE WORK ===== */}
      <Reveal className="flex items-center gap-[14px] mt-0 mb-[26px]">
        <span className="font-mono font-bold text-[clamp(12px,1.2vw,13px)] tracking-[.16em] text-ink">
          MORE WORK
        </span>
        <span className="flex-1 h-[2px] bg-ink" />
        <span className="font-mono font-bold text-[clamp(10px,1vw,11px)] text-coral">03 SELECTED</span>
      </Reveal>
      <Reveal className="work-grid grid grid-cols-1 mg:grid-cols-3 gap-[20px] lg:gap-[24px]">
        {moreProjects.map((p) => (
          <article
            key={p.n}
            className="paper relative overflow-hidden px-[20px] mg:px-[22px] pt-[22px] mg:pt-[24px] pb-[20px] mg:pb-[22px] shadow-[7px_8px_0_rgba(20,22,28,.13)] flex flex-col"
            style={{ borderTop: `6px solid ${p.color}` }}
          >
            <div
              className="absolute right-[2px] -top-[10px] font-heading text-[clamp(82px,10vw,104px)] leading-none opacity-[.13] pointer-events-none"
              style={{ color: p.color }}
            >
              {p.n}
            </div>
            <div
              className="font-mono font-bold text-[clamp(9px,.95vw,10px)] tracking-[.12em] relative z-[1]"
              style={{ color: p.color }}
            >
              {p.tag}
            </div>
            <h3 className="mt-[7px] mb-[3px] font-display text-[clamp(21px,2.3vw,24px)] leading-none tracking-[-.01em] relative z-[1]">
              {p.title}
            </h3>
            <div className="font-sans font-semibold text-[clamp(12px,1.2vw,13px)] text-[#2b2d34] relative z-[1]">
              {p.sub}
            </div>
            <div className="self-start font-mono font-bold text-[clamp(9px,.95vw,10px)] bg-ink text-[#efe9d8] px-[9px] py-[4px] mt-[13px] relative z-[1]">
              {p.role}
            </div>
            <p className="mt-[12px] mb-0 font-sans font-medium text-[clamp(12px,1.2vw,13px)] leading-[1.5] text-[#2b2d34] relative z-[1]">
              {p.blurb}
            </p>
            <div
              className="mt-[14px] font-mono font-bold text-[clamp(10px,1vw,11px)] text-ink bg-[#efe9d8] px-[10px] py-[8px] relative z-[1] whitespace-pre-wrap"
              style={{ border: `1.5px dashed ${p.color}` }}
            >
              {p.signal}
            </div>
            <div className="flex gap-[6px] flex-wrap mt-[14px] relative z-[1]">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono font-bold text-[clamp(9px,.95vw,10px)] border-[1.5px] border-ink px-[8px] py-[4px] bg-card"
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
