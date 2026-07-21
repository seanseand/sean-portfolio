import { marqueeText } from "@/data/portfolio";

export const TapeSection = () => {
  return (
    <div className="overflow-hidden bg-ink text-paper border-y-[2px] border-ink py-[12px] mt-[44px]">
      <div className="flex w-max [animation:mq_26s_linear_infinite] font-heading font-bold text-[20px] tracking-[.06em]">
        <span className="flex gap-[26px] pr-[26px]">{marqueeText}</span>
        <span className="flex gap-[26px] pr-[26px]">{marqueeText}</span>
      </div>
    </div>
  );
};
