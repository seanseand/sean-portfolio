import { AsciiPanel } from "@/components/AsciiPanel";
import { Reveal } from "@/components/Reveal";
import { featured, moreProjects } from "@/data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="work" className="max-w-content mx-auto px-section-x pt-[64px] pb-section-y">
      <div className="flex items-baseline gap-[16px] mb-[38px]">
        <span className="font-heading text-[46px] leading-none text-ink">WORK</span>
        <span className="font-mono font-bold text-[12px] tracking-[.16em] text-coral">
          / THINGS I&apos;VE BUILT &amp; BROKEN
        </span>
      </div>

      {/* ===== HIGHLIGHT: ESCA ===== */}
      <Reveal
        as="article"
        className="paper crumple relative p-0 shadow-card-xl mb-[56px]"
      >
        <div className="absolute -top-[15px] left-[26px] z-[5] bg-ink text-paper font-mono font-bold text-[11px] tracking-[.14em] px-[13px] py-[7px] rotate-[-1.6deg] shadow-[3px_3px_0_#f0492e]">
          ★ HIGHLIGHT PROJECT
        </div>
        <div className="featured-grid grid grid-cols-1 mg:grid-cols-[1fr_1.12fr] gap-0">
          <AsciiPanel n={featured.n} color={featured.color} title={featured.title} />
          <div className="px-[40px] py-[38px] relative z-[1]">
            <div className="font-mono font-bold text-[11px] tracking-[.14em] text-coral">
              {featured.tag}
            </div>
            <h3 className="mt-[8px] mb-[2px] font-display text-[52px] leading-[0.94] tracking-[-.02em]">
              {featured.title}
            </h3>
            <div className="font-sans font-semibold text-[16px] text-body">
              {featured.sub}
            </div>
            <div className="inline-block font-mono font-bold text-[11px] bg-ink text-paper px-[10px] py-[5px] mt-[16px] mb-[4px]">
              {featured.role}
            </div>
            <p className="mt-[12px] mb-0 font-sans font-medium text-[15px] leading-[1.6] text-body">
              {featured.blurb}
            </p>
            <div className="flex gap-[8px] flex-wrap mt-[20px]">
              {featured.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono font-bold text-[11px] border-[1.5px] border-ink px-[10px] py-[5px] bg-card"
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
        <span className="font-mono font-bold text-[13px] tracking-[.16em] text-ink">
          MORE WORK
        </span>
        <span className="flex-1 h-[2px] bg-ink" />
        <span className="font-mono font-bold text-[11px] text-coral">03 SELECTED</span>
      </Reveal>
      <Reveal className="work-grid grid grid-cols-1 mg:grid-cols-3 gap-[24px]">
        {moreProjects.map((p) => (
          <article
            key={p.n}
            className="paper relative overflow-hidden px-[22px] pt-[24px] pb-[22px] shadow-[7px_8px_0_rgba(20,22,28,.13)] flex flex-col border-t-[6px] border-t-[var(--accent)]"
            style={{ '--accent': p.color } as React.CSSProperties}
          >
            <div
              className="absolute right-[2px] -top-[10px] font-heading text-[104px] leading-none opacity-[.13] pointer-events-none text-[var(--accent)]"
            >
              {p.n}
            </div>
            <div
              className="font-mono font-bold text-[10px] tracking-[.12em] relative z-[1] text-[var(--accent)]"
            >
              {p.tag}
            </div>
            <h3 className="mt-[7px] mb-[3px] font-display text-[23px] leading-none tracking-[-.01em] relative z-[1]">
              {p.title}
            </h3>
            <div className="font-sans font-semibold text-[13px] text-body relative z-[1]">
              {p.sub}
            </div>
            <div className="self-start font-mono font-bold text-[10px] bg-ink text-paper px-[9px] py-[4px] mt-[13px] relative z-[1]">
              {p.role}
            </div>
            <p className="mt-[12px] mb-0 font-sans font-medium text-[13px] leading-[1.5] text-body relative z-[1]">
              {p.blurb}
            </p>
            <div
              className="mt-[14px] font-mono font-bold text-[11px] text-ink bg-paper px-[10px] py-[8px] relative z-[1] whitespace-pre-wrap border-[1.5px] border-dashed border-[var(--accent)]"
            >
              {p.signal}
            </div>
            <div className="flex gap-[6px] flex-wrap mt-[14px] relative z-[1]">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono font-bold text-[10px] border-[1.5px] border-ink px-[8px] py-[4px] bg-card"
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
