"use client";

import { useState } from "react";
import { neueMontrealBold, spaceMono, editorialNewItalic } from "@/lib/fonts";

export default function Mission() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const rows = [
    {
      index: "01",
      statement: "THE ALGORITHM HAS NO PULSE.",
      expansion:
        "Streaming platforms optimize for retention. We optimize for resonance. A song isn't data points; it's a timestamp of who you were when you heard it.",
    },
    {
      index: "02",
      statement: "CURATION OVER CONSUMPTION.",
      expansion:
        "You are not a user. You are a curator. Stop feeding the feed. Start building a library of emotion, tagged by mood, era, and memory.",
    },
    {
      index: "03",
      statement: "CULTURE IS SYNCHRONOUS.",
      expansion:
        "Music is meant to be felt together. Review albums, host live sessions, and find the others who listen at your exact frequency.",
    },
  ];

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="mission" className="min-h-screen bg-[#1C1C1C] relative">
      <div className="hidden xl:block">
        <div className="h-screen flex flex-col">
          {rows.map((row, index) => (
            <div
              key={index}
              className="h-[200px] flex border-b border-white/20 last:border-b-0 relative"
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                backgroundColor: hoveredRow === index ? "#222222" : "#1C1C1C",
              }}
            >
              <div className="w-[10%] px-8 flex items-start pt-8">
                <span
                  className={`${spaceMono.variable} font-space-mono text-white/50 text-sm`}
                >
                  [ {row.index} ]
                </span>
              </div>
              <div className="w-[40%] px-8 flex items-center">
                <h3
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-5xl uppercase text-white leading-tight`}
                >
                  {row.statement}
                </h3>
              </div>
              <div
                className="w-[50%] px-8 flex items-center transition-opacity duration-0"
                style={{
                  opacity: hoveredRow === index ? 1 : 0,
                }}
              >
                <p
                  className={`${editorialNewItalic.variable} font-editorial-new-italic text-white/70 text-base leading-relaxed`}
                >
                  {row.expansion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:hidden">
        <div className="hidden md:block xl:hidden">
          <div className="min-h-screen flex flex-col">
            {rows.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-center border-b border-white/20 last:border-b-0 px-8"
                style={{ minHeight: "auto", paddingTop: "60px", paddingBottom: "60px" }}
              >
                <div className="mb-4">
                  <span
                    className={`${spaceMono.variable} font-space-mono text-white/50 text-sm`}
                  >
                    [ {row.index} ]
                  </span>
                </div>
                <div className="mb-6">
                  <h3
                    className={`${neueMontrealBold.variable} font-neue-montreal-bold text-3xl md:text-4xl uppercase text-white leading-tight mb-6`}
                  >
                    {row.statement}
                  </h3>
                </div>
                <div>
                  <p
                    className={`${editorialNewItalic.variable} font-editorial-new-italic text-white/70 text-base leading-relaxed`}
                    style={{ fontSize: "16px" }}
                  >
                    {row.expansion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="min-h-screen flex flex-col">
            {rows.map((row, index) => (
              <div key={index}>
                <div
                  className="border-b border-white/20 last:border-b-0 h-20 flex items-center justify-between px-6 cursor-pointer"
                  onClick={() => toggleRow(index)}
                >
                  <h3
                    className={`${neueMontrealBold.variable} font-neue-montreal-bold text-xl uppercase text-white leading-tight flex-1 flex items-baseline`}
                  >
                    <span
                      className={`${spaceMono.variable} font-space-mono text-white/50 text-[8px] leading-none mr-1`}
                      style={{ verticalAlign: "super", fontSize: "0.5em", lineHeight: "1" }}
                    >
                      {row.index}
                    </span>
                    <span>{row.statement}</span>
                  </h3>
                  <span
                    className={`${spaceMono.variable} font-space-mono text-[#E17D18] text-xl ml-4`}
                  >
                    {expandedRows.has(index) ? "−" : "+"}
                  </span>
                </div>
                {expandedRows.has(index) && (
                  <div className="border-b border-white/20 px-6 pb-6 bg-[#1C1C1C]">
                    <p
                      className={`${spaceMono.variable} font-space-mono text-white text-sm leading-relaxed`}
                    >
                      {row.expansion}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
