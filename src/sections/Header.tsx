"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "WORK", external: false },
  { href: "#about", label: "ABOUT", external: false },
  { href: "#experience", label: "PATH", external: false },
  { href: "/Octavo_Sean_Resume.pdf", label: "RESUME", external: true },
  { href: "#contact", label: "SAY HI", external: false },
] as const;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  // Lock body scroll while the overlay is open so it can't cause a
  // horizontal/vertical scroll shift on top of the mobile viewport.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Focus the first element inside the overlay, trap Tab within it, and
  // let Escape close the menu and return focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusables = overlay.querySelectorAll<HTMLElement>("a[href], button");
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    overlay.addEventListener("keydown", onKeyDown);
    return () => overlay.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    // No backdrop-filter/transform on <nav> itself: either would make it the
    // containing block for the overlay's `fixed` positioning below, shrinking
    // the overlay down to the header's own box instead of the viewport. The
    // blurred paper background lives on a decorative absolutely-positioned
    // layer instead, confined to the header via its own `sticky` ancestor.
    <nav className="sticky top-0 z-40 border-b-[2px] border-ink">
      <div className="absolute inset-0 -z-10 backdrop-blur-[6px] bg-[rgba(239,233,216,.72)]" />

      <div className="relative z-50 flex items-center justify-between px-[30px] py-[14px]">
        <a href="#top" className="flex items-center gap-[9px] text-ink">
          <span className="w-[15px] h-[15px] bg-coral rounded-full" />
          <span className="font-sans font-extrabold text-[15px] tracking-[.02em]">
            SEAN OCTAVO
          </span>
        </a>

        <div className="hidden mg:flex gap-[26px] font-mono font-bold text-[12px] tracking-[.12em]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink"
              {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          className="mg:hidden flex h-[32px] w-[32px] flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-[2px] w-[20px] bg-ink transition-transform duration-200 ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[20px] bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-[28px] px-[30px] bg-paper font-mono font-bold text-[28px] tracking-[.08em] transition-opacity duration-200 mg:hidden motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-ink"
            onClick={close}
            {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
