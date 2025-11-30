"use client";

import { useState, useEffect } from "react";
import { neueMontrealBold, spaceMono } from "@/lib/fonts";

export default function Identity() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [starCount, setStarCount] = useState(3);
  const [isPulsing, setIsPulsing] = useState(false);
  const [curateText, setCurateText] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarCount((prev) => {
        if (prev === 3) return 5;
        if (prev === 5) return 2;
        return 3;
      });
    }, 2000);

    const pulseInterval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1500);

    const curateInterval = setInterval(() => {
      setCurateText((prev) => (prev + 1) % 3);
    }, 800);

    const cursorInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(pulseInterval);
      clearInterval(curateInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const quadrants = [
    {
      action: "CRITIQUE",
      caption: "LOG EMOTIONAL IMPACT",
      mobileDescription: "Review albums.",
      mobileExpanded: "Log emotional impact. Rate the feeling, not the production.",
    },
    {
      action: "BROADCAST",
      caption: "SYNCHRONOUS LISTENING",
      mobileDescription: "Host sessions.",
      mobileExpanded: "Host live sessions. Control the aux.",
    },
    {
      action: "CURATE",
      caption: "BUILD CONTEXT, NOT LISTS",
      mobileDescription: "Build context.",
      mobileExpanded: "Tag by mood, era, memory. Create meaning.",
    },
    {
      action: "UNEARTH",
      caption: "ARCHAEOLOGY ENGINE",
      mobileDescription: "Discover music.",
      mobileExpanded: "Discover music through coordinates. X: era, Y: genre.",
    },
  ];

  const toggleMobile = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="identity" className="min-h-screen bg-[#1C1C1C] relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
      <div className="absolute top-12 md:top-16 lg:top-20 left-1/2 transform -translate-x-1/2 z-40 bg-[#1C1C1C] px-4">
        <div
          className={`${spaceMono.variable} font-space-mono text-white/50 text-sm text-center`}
        >
          // 03 — SYSTEM CAPABILITIES
        </div>
      </div>

      <div className="hidden xl:block w-full max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 aspect-square">
          <div
            className={`border-r border-b border-white relative cursor-pointer transition-colors duration-0 ${
              hoveredQuadrant === 0 ? "bg-[#222222]" : "bg-[#1C1C1C]"
            }`}
            onMouseEnter={() => setHoveredQuadrant(0)}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {hoveredQuadrant === 0 ? (
                <div
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-6xl uppercase text-white`}
                >
                  CRITIQUE
                </div>
              ) : (
                <div className="flex gap-2 text-[60px]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < starCount ? "text-[#E17D18]" : "text-white/20"}
                    >
                      *
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="absolute bottom-4 left-4">
              <span
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                LOG EMOTIONAL IMPACT
              </span>
            </div>
          </div>

          <div
            className={`border-b border-white relative cursor-pointer transition-colors duration-0 ${
              hoveredQuadrant === 1 ? "bg-[#222222]" : "bg-[#1C1C1C]"
            }`}
            onMouseEnter={() => setHoveredQuadrant(1)}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {hoveredQuadrant === 1 ? (
                <div
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-6xl uppercase text-white`}
                >
                  BROADCAST
                </div>
              ) : (
                <div
                  className={`w-16 h-16 rounded-full bg-[#E17D18] transition-all duration-1500 ${
                    isPulsing ? "opacity-100 scale-100" : "opacity-50 scale-75"
                  }`}
                />
              )}
            </div>
            <div className="absolute bottom-4 left-4">
              <span
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                SYNCHRONOUS LISTENING
              </span>
            </div>
          </div>

          <div
            className={`border-r border-white relative cursor-pointer transition-colors duration-0 ${
              hoveredQuadrant === 2 ? "bg-[#222222]" : "bg-[#1C1C1C]"
            }`}
            onMouseEnter={() => setHoveredQuadrant(2)}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {hoveredQuadrant === 2 ? (
                <div
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-6xl uppercase text-white`}
                >
                  CURATE
                </div>
              ) : (
                <div className="flex flex-col gap-2 text-4xl text-white/30">
                  <div className="transition-opacity duration-200">
                    {curateText === 0 ? "[ MOOD ]" : "[ ]"}
                  </div>
                  <div className="transition-opacity duration-200">
                    {curateText === 1 ? "[ TIME ]" : "[ ]"}
                  </div>
                  <div className="transition-opacity duration-200">
                    {curateText === 2 ? "[ ERA ]" : "[ ]"}
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-4 left-4">
              <span
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                BUILD CONTEXT, NOT LISTS
              </span>
            </div>
          </div>

          <div
            className={`border-white relative cursor-pointer transition-colors duration-0 ${
              hoveredQuadrant === 3 ? "bg-[#222222]" : "bg-[#1C1C1C]"
            }`}
            onMouseEnter={() => setHoveredQuadrant(3)}
            onMouseLeave={() => setHoveredQuadrant(null)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {hoveredQuadrant === 3 ? (
                <div
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-6xl uppercase text-white`}
                >
                  UNEARTH
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-white/70">
                  <div className="text-4xl">↗</div>
                  <div
                    className={`${spaceMono.variable} font-space-mono text-sm`}
                  >
                    X: 90s / Y: SHOEGAZE
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-4 left-4">
              <span
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                ARCHAEOLOGY ENGINE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block xl:hidden w-full px-6 md:px-8">
        <div className="flex flex-col">
          {quadrants.map((quadrant, index) => (
            <div
              key={index}
              className="border-b border-white h-[150px] flex items-center justify-between"
            >
              <div
                className={`${neueMontrealBold.variable} font-neue-montreal-bold text-3xl uppercase text-white`}
              >
                {quadrant.action}
              </div>
              <div className="flex items-center">
                {index === 0 && (
                  <div className="flex gap-2 text-3xl">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < starCount ? "text-[#E17D18]" : "text-white/20"}
                      >
                        *
                      </span>
                    ))}
                  </div>
                )}
                {index === 1 && (
                  <div
                    className={`w-12 h-12 rounded-full bg-[#E17D18] transition-all duration-1500 ${
                      isPulsing ? "opacity-100 scale-100" : "opacity-50 scale-75"
                    }`}
                  />
                )}
                {index === 2 && (
                  <div className="text-3xl text-white">
                    [<span className={cursorBlink ? "opacity-100" : "opacity-0"}>_</span>]
                  </div>
                )}
                {index === 3 && (
                  <div className="text-3xl text-white">↗</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full px-6">
        <div className="flex flex-col">
          {quadrants.map((quadrant, index) => (
            <div key={index}>
              <div
                className="border-b border-white h-20 flex items-center justify-between cursor-pointer"
                onClick={() => toggleMobile(index)}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span
                    className={`${spaceMono.variable} font-space-mono text-[#E17D18] text-sm`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div
                      className={`${neueMontrealBold.variable} font-neue-montreal-bold text-lg uppercase text-white mb-1`}
                    >
                      {quadrant.action}
                    </div>
                    <div
                      className={`${spaceMono.variable} font-space-mono text-white/50 text-xs`}
                    >
                      {quadrant.mobileDescription}
                    </div>
                  </div>
                </div>
              </div>
              {expandedMobile === index && (
                <div className="border-b border-white px-6 pb-4 bg-[#1C1C1C] relative overflow-hidden h-[60px]">
                  <p
                    className={`${spaceMono.variable} font-space-mono text-white text-sm relative z-10`}
                  >
                    {quadrant.mobileExpanded}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
