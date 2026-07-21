"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport ASCII shimmer field pinned behind the page content.
 * Ports the mockup's `startAscii()` DCLogic method: an ambient noise field
 * that brightens near the pointer and ripples outward on move/click.
 */
export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const ramp = ' .`\'":;i!+*x#W@'; // sparse -> dense
    const CELL = 17;
    let cols = 0;
    let rows = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let px = -9999;
    let py = -9999;
    let tx = -9999;
    let ty = -9999;
    const rings: { x: number; y: number; t: number; strong?: number }[] = [];

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = "13px 'Space Mono', monospace";
      ctx.textBaseline = "top";
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX;
      const ny = e.clientY;
      if (tx > -9000 && Math.hypot(nx - tx, ny - ty) > 26) {
        rings.push({ x: nx, y: ny, t: 0 });
      }
      tx = nx;
      ty = ny;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onDown = (e: PointerEvent) =>
      rings.push({ x: e.clientX, y: e.clientY, t: 0, strong: 1 });
    window.addEventListener("pointerdown", onDown, { passive: true });

    let t = 0;
    let raf = 0;
    const loop = () => {
      t += 0.016;
      if (tx < -9000) {
        tx = window.innerWidth * (0.5 + 0.32 * Math.sin(t * 0.5));
        ty = window.innerHeight * (0.5 + 0.28 * Math.cos(t * 0.4));
      }
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].t += 0.016;
        if (rings[i].t > 2.4) rings.splice(i, 1);
      }
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (let r = 0; r < rows; r++) {
        const cy = r * CELL;
        const dy = cy - py;
        for (let c = 0; c < cols; c++) {
          const cx = c * CELL;
          const dx = cx - px;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let v =
            0.1 +
            0.06 * Math.sin(cx * 0.03 + cy * 0.04 + t * 0.8) +
            0.05 * Math.sin(cy * 0.05 - t);
          if (dist < 190) {
            const f = 1 - dist / 190;
            v += f * f * (0.5 + 0.5 * Math.sin(dist * 0.06 - t * 5));
          }
          for (const ring of rings) {
            const rd = Math.sqrt((cx - ring.x) ** 2 + (cy - ring.y) ** 2);
            const front = ring.t * 240;
            const band = Math.abs(rd - front);
            if (band < 34) {
              v += (1 - band / 34) * (1 - ring.t / 2.4) * (ring.strong ? 1.1 : 0.6);
            }
          }
          if (v <= 0.13) continue;
          const idx = Math.max(0, Math.min(ramp.length - 1, Math.floor(v * ramp.length)));
          const ch = ramp[idx];
          if (ch === " ") continue;
          const near = dist < 150;
          ctx.fillStyle = near
            ? `rgba(240,73,46,${Math.min(0.5, v * 0.55)})`
            : `rgba(20,22,28,${Math.min(0.32, v * 0.42)})`;
          ctx.fillText(ch, cx, cy);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none opacity-90"
    />
  );
}
