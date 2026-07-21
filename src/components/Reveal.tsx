"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * Scroll-reveal wrapper: fades/slides children in once they enter the
 * viewport. Ports the mockup's `.reveal` class + IntersectionObserver logic
 * from `componentDidMount`, including its "reveal everything" safety-net
 * fallback in case the observer never fires.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
      node.classList.add("in");
      return;
    }

    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      observer.observe(node);
    } catch {
      // IntersectionObserver unavailable — fall through to the safety net below.
    }

    const fallback = setTimeout(() => {
      node.classList.add("in");
    }, 1600);

    return () => {
      observer?.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className ?? ""}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
