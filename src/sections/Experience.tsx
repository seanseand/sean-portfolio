import { Reveal } from "@/components/Reveal";
import { timeline } from "@/data/portfolio";

export const ExperienceSection = () => {
  return (
    <Reveal
      as="section"
      id="experience"
      className="max-w-content mx-auto px-section-x pt-[70px] pb-section-y"
    >
      <div className="flex items-baseline gap-[16px] mb-[38px]">
        <span className="font-heading text-[46px] leading-none text-ink">THE PATH</span>
        <span className="font-mono font-bold text-[12px] tracking-[.16em] text-coral">
          / WHERE I&apos;VE BEEN
        </span>
      </div>
      <div className="relative pl-[34px] border-l-[3px] border-ink flex flex-col gap-[30px]">
        {timeline.map((e) => (
          <div key={e.org} className="relative">
            <span
              className="absolute -left-[45px] top-[4px] w-[16px] h-[16px] border-[3px] border-ink rounded-full bg-[var(--dot)]"
              style={{ '--dot': e.color } as React.CSSProperties}
            />
            <div
              className="paper px-[26px] py-[22px] shadow-[6px_7px_0_rgba(20,22,28,.1)] rotate-[var(--rot)]"
              style={{ '--rot': e.rot } as React.CSSProperties}
            >
              <div className="flex justify-between flex-wrap gap-[8px] items-baseline">
                <div className="font-sans font-extrabold text-[19px]">{e.org}</div>
                <div className="font-mono font-bold text-[12px] text-coral">{e.when}</div>
              </div>
              <div className="font-sans font-semibold text-[13px] text-muted mt-[2px]">
                {e.role} · {e.place}
              </div>
              <p className="mt-[12px] mb-0 font-sans font-medium text-[14px] leading-[1.5] text-body">
                {e.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
};
