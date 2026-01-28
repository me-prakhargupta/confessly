"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  };

  const setSpeed = () => {
    if (!containerRef.current) return;

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    containerRef.current.style.setProperty(
      "--animation-duration",
      duration,
    );
  };

  return (
   <div
  ref={containerRef}
  className={cn(
    "relative z-20 max-w-7xl overflow-hidden",
    "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
    className,
  )}
>
  <ul
    ref={scrollerRef}
    className={cn(
      "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-10",
      start && "animate-scroll",
      pauseOnHover && "hover:[animation-play-state:paused]",
    )}
  >
    {items.map((item) => (
      <li
  key={item.quote}
  className="
    relative
    w-[320px] sm:w-[360px] md:w-[420px]
    shrink-0
    rounded-2xl
    px-7 py-6
    bg-gradient-to-br
    from-white/[0.05]
    to-white/[0.015]
    backdrop-blur-xl
    border border-white/[0.08]
    transition
    hover:border-orange-400/30
  "
>
  {/* very soft warmth */}
  <div
    aria-hidden
    className="
      pointer-events-none
      absolute inset-0
      rounded-2xl
      bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.08),transparent_70%)]
    "
  />

  <blockquote className="relative z-10">
    <p className="text-sm sm:text-base leading-relaxed text-white/75">
      {item.quote}
    </p>
  </blockquote>
</li>

    ))}
  </ul>
</div>

  );
};
