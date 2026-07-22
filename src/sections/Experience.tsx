import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/portfolio";

export const ExperienceSection = () => {
  return (
    <Reveal
      as="section"
      id="experience"
      className="max-w-content mx-auto px-[20px] sm:px-[24px] mg:px-[32px] lg:px-section-x pt-[58px] mg:pt-[66px] lg:pt-[70px] pb-[32px] lg:pb-section-y"
    >
      <div className="flex flex-wrap items-baseline gap-[10px] mg:gap-[16px] mb-[30px] mg:mb-[38px]">
        <span className="font-heading text-[clamp(38px,5.5vw,46px)] leading-none text-ink">THE PATH</span>
        <span className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] tracking-[.14em] mg:tracking-[.16em] text-coral">
          / WHERE I&apos;VE BEEN
        </span>
      </div>
      <div className="relative pl-[24px] mg:pl-[34px] border-l-[3px] border-ink flex flex-col gap-[24px] mg:gap-[30px]">
        {timeline.map((e) => (
          <div key={e.org} className="relative">
            <span
              className="absolute -left-[30.5px] mg:-left-[40.5px] top-[4px] w-[16px] h-[16px] border-[3px] border-ink rounded-full bg-[var(--dot)]"
              style={{ '--dot': e.color } as React.CSSProperties}
            />
            <div
              className="paper px-[20px] mg:px-[26px] py-[20px] mg:py-[22px] shadow-[6px_7px_0_rgba(20,22,28,.1)] rotate-[var(--rot)]"
              style={{ '--rot': e.rot } as React.CSSProperties}
            >
              <div className="flex justify-between flex-wrap gap-[8px] items-baseline">
                <div className="font-sans font-extrabold text-[clamp(17px,1.8vw,19px)]">{e.org}</div>
                <div className="font-mono font-bold text-[clamp(11px,1.15vw,12px)] text-coral">{e.when}</div>
              </div>
              <div className="font-sans font-semibold text-[clamp(12px,1.2vw,13px)] text-muted mt-[2px]">
                {e.role} · {e.place}
              </div>
              <p className="mt-[12px] mb-0 font-sans font-medium text-[clamp(13px,1.3vw,14px)] leading-[1.5] text-body">
                {e.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
};
