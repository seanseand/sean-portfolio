"use client";

import { useEffect, useRef, useState } from "react";

interface AsciiPanelProps {
  n: string;
  color: string;
  title: string;
}

const RAMP = " .:-=+ic*oO0%#@";

function makePlaceholderSource(color: string, num: string) {
  const s = document.createElement("canvas");
  s.width = 220;
  s.height = 220;
  const x = s.getContext("2d")!;
  const g = x.createRadialGradient(110, 78, 8, 108, 120, 168);
  g.addColorStop(0, "#ffffff");
  g.addColorStop(0.45, color);
  g.addColorStop(1, "#0a0b0f");
  x.fillStyle = g;
  x.fillRect(0, 0, 220, 220);
  x.fillStyle = "rgba(255,255,255,.95)";
  x.font = "bold 150px 'Space Mono', monospace";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(num, 110, 112);
  return s as HTMLCanvasElement | HTMLImageElement;
}

/**
 * The featured-project hover panel: a halftone/torn-paper block that
 * "decodes" into ASCII art on hover, and accepts a dropped photo to
 * ASCII-ify instead of the generated placeholder. Ports the mockup's
 * `initAscii()` + `makePlaceholderSource()` DCLogic methods.
 */
export function AsciiPanel({ n, color, title }: AsciiPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dropHint, setDropHint] = useState<string | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const cv = canvasRef.current;
    if (!panel || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let src: HTMLCanvasElement | HTMLImageElement = makePlaceholderSource(color, n);
    let prog = 0;
    let hovering = false;
    let raf: number | null = null;

    const render = () => {
      const w = panel.clientWidth;
      const h = panel.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cell = 8;
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      const sc = document.createElement("canvas");
      sc.width = cols;
      sc.height = rows;
      const sx = sc.getContext("2d")!;
      sx.drawImage(src, 0, 0, cols, rows);
      const d = sx.getImageData(0, 0, cols, rows).data;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#111318";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "8px 'Space Mono', monospace";
      ctx.textBaseline = "top";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = (r * cols + c) * 4;
          const lum = (d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11) / 255;
          const th = (((Math.sin(c * 12.9898 + r * 78.233) * 43758.5453) % 1) + 1) % 1;
          if (th > prog) continue;
          const ch = RAMP[Math.floor(lum * (RAMP.length - 1))];
          if (ch === " ") continue;
          ctx.fillStyle =
            lum > 0.62 ? "#efe9d8" : `rgba(240,73,46,${(0.45 + lum * 0.55).toFixed(3)})`;
          ctx.fillText(ch, c * cell, r * cell);
        }
      }
    };

    const tick = () => {
      prog = hovering ? Math.min(1, prog + 0.055) : Math.max(0, prog - 0.08);
      render();
      if (prog > 0 && (hovering || prog < 1)) {
        raf = requestAnimationFrame(tick);
      } else if (prog <= 0) {
        ctx.clearRect(0, 0, cv.width, cv.height);
        raf = null;
      } else {
        raf = null;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      hovering = true;
      cv.style.opacity = "1";
      kick();
    };
    const onLeave = () => {
      hovering = false;
      cv.style.opacity = "0";
      kick();
    };
    const onDragOver = (e: DragEvent) => {
      e.preventDefault();
      setDropHint("RELEASE TO DROP");
    };
    const onDragLeave = () => setDropHint(null);
    const onDrop = (e: DragEvent) => {
      e.preventDefault();
      setDropHint(null);
      const f = e.dataTransfer?.files?.[0];
      if (!f || !f.type.startsWith("image")) return;
      const img = new Image();
      img.onload = () => {
        src = img;
        hovering = true;
        cv.style.opacity = "1";
        prog = 0;
        kick();
      };
      img.src = URL.createObjectURL(f);
    };

    panel.addEventListener("mouseenter", onEnter);
    panel.addEventListener("mouseleave", onLeave);
    panel.addEventListener("dragover", onDragOver);
    panel.addEventListener("dragleave", onDragLeave);
    panel.addEventListener("drop", onDrop);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      panel.removeEventListener("mouseenter", onEnter);
      panel.removeEventListener("mouseleave", onLeave);
      panel.removeEventListener("dragover", onDragOver);
      panel.removeEventListener("dragleave", onDragLeave);
      panel.removeEventListener("drop", onDrop);
    };
  }, [color, n]);

  return (
    <div className="relative min-h-[360px]">
      <div
        ref={panelRef}
        className="halftone tornreal relative w-full h-full min-h-[360px] bg-blend-multiply flex items-center justify-center cursor-crosshair"
        style={{ backgroundColor: color }}
      >
        <div className="font-heading text-[104px] text-[rgba(255,255,255,.9)] leading-none [text-shadow:0_2px_6px_rgba(0,0,0,.25)]">
          {n}
        </div>
        <div className="absolute bottom-[14px] left-0 right-0 text-center text-[rgba(255,255,255,.85)] font-mono font-bold text-[11px] tracking-[.1em]">
          ◦ {title} — HOVER TO DECODE · DROP A PHOTO ◦
        </div>
        <canvas
          ref={canvasRef}
          className="ascii-cv absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none"
        />
        <div
          className="absolute top-[10px] right-[12px] font-mono font-bold text-[9px] text-[rgba(255,255,255,.85)] transition-opacity duration-[250ms] pointer-events-none z-[2]"
          style={{ opacity: dropHint ? 1 : 0 }}
        >
          {dropHint ?? "DROP PHOTO ↴"}
        </div>
      </div>
    </div>
  );
}
