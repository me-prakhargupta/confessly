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
    name: string;
    title: string;
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
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.quote}
            className="
              relative
              w-[340px] md:w-[420px]
              shrink-0
              rounded-2xl
              border border-white/10
              bg-zinc-950
              px-8 py-6
              shadow-[0_0_45px_rgba(0,0,0,0.85)]
              transition-colors
              hover:border-orange-400/40
            "
          >
            {/* subtle orange glow */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute inset-0
                rounded-2xl
                bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.15),transparent_60%)]
              "
            />

            <blockquote className="relative z-10">
              <p className="text-sm leading-relaxed text-white/90">
                {item.quote}
              </p>

              <div className="mt-6 flex flex-col gap-1">
                <span className="text-sm text-white/50">
                  {item.name}
                </span>
                <span className="text-sm text-white/50">
                  {item.title}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
