export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative mt-[56px] mg:mt-[70px] bg-blue text-[#f4efe0] border-t-[3px] border-ink overflow-hidden"
    >
      <div className="crumple absolute inset-0 opacity-70" />
      <div className="relative z-[1] max-w-[1180px] mx-auto px-[20px] sm:px-[24px] mg:px-[32px] lg:px-[40px] pt-[64px] mg:pt-[74px] lg:pt-[80px] pb-[72px] mg:pb-[84px] lg:pb-[90px] text-center">
        <div className="font-mono font-bold text-[clamp(11px,1.25vw,13px)] tracking-[.16em] mg:tracking-[.2em] mb-[16px]">
          ◦ LET&apos;S BUILD SOMETHING ◦
        </div>
        <h2 className="m-0 font-heading text-[clamp(50px,11vw,150px)] leading-[0.86] tracking-[.01em]">
          SAY HELLO<span className="text-coral">.</span>
        </h2>
        <a
          href="mailto:sdaoctavo@gmail.com"
          className="inline-block mt-[26px] mg:mt-[30px] bg-[#fffdf4] text-ink font-mono font-bold text-[clamp(13px,1.5vw,16px)] px-[22px] mg:px-[32px] py-[15px] mg:py-[18px] shadow-[6px_6px_0_#14161c]"
        >
          sdaoctavo@gmail.com →
        </a>
        <div className="flex gap-[12px] mg:gap-[14px] justify-center flex-wrap mt-[30px] mg:mt-[34px] font-mono font-bold text-[clamp(12px,1.2vw,13px)]">
          <a
            href="https://linkedin.com/in/seanoctavo"
            className="text-[#f4efe0] border-b-[2px] border-coral"
          >
            LINKEDIN
          </a>
          <span className="opacity-50">/</span>
          <a
            href="https://github.com/seanseand"
            className="text-[#f4efe0] border-b-[2px] border-coral"
          >
            GITHUB
          </a>
          <span className="opacity-50">/</span>
          <span className="text-[#f4efe0]">+63 906 488 6484</span>
        </div>
      </div>
    </section>
  );
};
