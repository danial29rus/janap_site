"use client";

import { cn } from "@/lib/utils";

export function SeigaihaBackdrop({
  className = "",
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      viewBox="0 0 1200 600"
      aria-hidden
    >
      <defs>
        <pattern
          id="seigaiha"
          x="0"
          y="0"
          width="60"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0,30 C15,0 45,0 60,30"
            fill="none"
            stroke="#cfd8e3"
            strokeWidth="1.2"
          />
          <path
            d="M-30,30 C-15,0 15,0 30,30"
            fill="none"
            stroke="#cfd8e3"
            strokeWidth="1.2"
          />
          <path
            d="M30,30 C45,0 75,0 90,30"
            fill="none"
            stroke="#cfd8e3"
            strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#seigaiha)" opacity={opacity} />
    </svg>
  );
}

export function AsanohaBackdrop({
  className = "",
  opacity = 0.12,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      viewBox="0 0 1200 600"
      aria-hidden
    >
      <defs>
        <pattern
          id="asanoha"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <g stroke="#e5e7eb" strokeWidth="1">
            <path d="M30 0 L45 15 L30 30 L15 15 Z" fill="none" />
            <path d="M0 30 L15 45 L30 30 L15 15 Z" fill="none" />
            <path d="M30 60 L45 45 L30 30 L15 45 Z" fill="none" />
            <path d="M60 30 L45 45 L30 30 L45 15 Z" fill="none" />
          </g>
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#asanoha)" opacity={opacity} />
    </svg>
  );
}

export function PaperTexture({
  className = "",
  opacity = 0.16,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      aria-hidden
    >
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `radial-gradient(20px 20px at 10% 15%, rgba(0,0,0,0.035) 0, rgba(0,0,0,0) 60%),
               radial-gradient(18px 18px at 80% 40%, rgba(0,0,0,0.03) 0, rgba(0,0,0,0) 60%),
               radial-gradient(14px 14px at 30% 85%, rgba(0,0,0,0.03) 0, rgba(0,0,0,0) 60%)`,
            opacity,
            mixBlendMode: "multiply" as const,
          }}
        />
      </foreignObject>
    </svg>
  );
}

export function KintsugiVeins({ className = "" }: { className?: string }) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full",
        className
      )}
      viewBox="0 0 1200 600"
      aria-hidden
    >
      <g stroke="#f4d28e" strokeWidth="1.4" opacity="0.35">
        <path
          d="M50 540 C200 520 180 420 320 400 C460 380 520 300 640 280 C760 260 860 300 1000 280"
          fill="none"
        />
        <path
          d="M180 60 C260 120 300 160 360 240 C420 320 540 340 620 420"
          fill="none"
        />
        <path
          d="M900 100 C860 180 820 200 780 260 C740 320 720 380 700 420"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      className={cn("w-full", flip ? "rotate-180" : "")}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 40 C 150 80 300 0 450 40 C600 80 750 0 900 40 C1050 80 1200 0 1200 0 L1200 80 L0 80 Z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  );
}
