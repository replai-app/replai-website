"use client";

import { useState, useEffect } from "react";
import { neueMontrealBold, spaceMono, editorialNewItalic } from "@/lib/fonts";

export default function Events() {
  const [isPulsing, setIsPulsing] = useState(true);
  const [isBlinking, setIsBlinking] = useState(true);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [tappedRow, setTappedRow] = useState<number | null>(null);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);

    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  const handleRowClick = (index: number) => {
    if (index === 0) {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const input = heroSection.querySelector("input") as HTMLInputElement;
        heroSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          input?.focus();
          if (input) {
            input.value = "";
          }
        }, 500);
      }
    }
  };

  const events = [
    {
      date: "16.01.26",
      event: "REPLAI: VOL 1",
      location: "BREAD & BUTTER, SHOREDITCH",
      status: "RSVP OPEN",
      isActive: true,
    },
    {
      date: "FEBRUARY 2026",
      event: "VOL 2",
      location: "LONDON",
      status: "LOCKED",
      isActive: false,
      opacity: 0.2,
    },
  ];

  return (
    <section id="events" className="min-h-screen bg-[#1C1C1C] relative">
      <div className="border-b border-white/20">
        <div className="px-6 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div
            className={`${spaceMono.variable} font-space-mono text-white/50 text-sm`}
          >
            // 02 — TRANSMISSIONS
          </div>
          <div className="overflow-hidden w-full md:w-auto relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className={`${spaceMono.variable} font-space-mono text-white text-xs md:text-sm mr-8`}
                >
                  RSVP REQUIRED /// CAPACITY LIMITED ///
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="flex flex-col">
          <div className="flex items-center border-b border-white/30 px-12 py-4">
            <div className="w-[15%]">
              <span className={`${spaceMono.variable} font-space-mono text-white/50 text-xs uppercase`}>
                DATE
              </span>
            </div>
            <div className="w-[35%]">
              <span className={`${spaceMono.variable} font-space-mono text-white/50 text-xs uppercase`}>
                EVENT
              </span>
            </div>
            <div className="w-[30%]">
              <span className={`${spaceMono.variable} font-space-mono text-white/50 text-xs uppercase`}>
                LOCATION
              </span>
            </div>
            <div className="w-[20%] text-right">
              <span className={`${spaceMono.variable} font-space-mono text-white/50 text-xs uppercase`}>
                STATUS
              </span>
            </div>
          </div>
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center border-b border-white/30 px-12 py-8 transition-colors duration-0 ${
                event.isActive
                  ? hoveredRow === index
                    ? "bg-[#E17D18] text-black cursor-pointer"
                    : "bg-black text-white cursor-pointer"
                  : "cursor-default"
              }`}
              style={!event.isActive ? { opacity: event.opacity } : {}}
              onMouseEnter={() => event.isActive && setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => event.isActive && handleRowClick(index)}
            >
              <div className="w-[15%] flex items-center gap-3">
                {event.isActive && (
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-[#E17D18] transition-opacity duration-1000 ${
                      isPulsing ? "opacity-100" : "opacity-30"
                    }`}
                  />
                )}
                <span
                  className={`${spaceMono.variable} font-space-mono ${
                    hoveredRow === index ? "text-black" : "text-white"
                  }`}
                >
                  {event.date}
                </span>
              </div>
              <div className="w-[35%]">
                <h3
                  className={`${neueMontrealBold.variable} font-neue-montreal-bold text-[32px] uppercase ${
                    hoveredRow === index ? "text-black" : "text-white"
                  }`}
                >
                  {event.event}
                </h3>
              </div>
              <div className="w-[30%]">
                <span
                  className={`${spaceMono.variable} font-space-mono text-sm ${
                    hoveredRow === index ? "text-black/70" : "text-white/70"
                  }`}
                >
                  {event.location}
                </span>
              </div>
              <div className="w-[20%] text-right">
                <span
                  className={`${spaceMono.variable} font-space-mono text-sm ${
                    hoveredRow === index
                      ? "text-black"
                      : event.isActive
                      ? "text-white"
                      : "text-white/50"
                  } ${
                    event.isActive &&
                    hoveredRow !== index &&
                    !isBlinking
                      ? "opacity-50"
                      : ""
                  } transition-opacity duration-1000`}
                >
                  {hoveredRow === index && event.isActive
                    ? "[ CLAIM ENTRY ]"
                    : `[ ${event.status} ]`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:hidden">
        <div className="hidden md:block xl:hidden">
          <div className="flex flex-col">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center border-b border-white/30 px-8 py-6 transition-colors duration-200 ${
                  event.isActive && tappedRow === index ? "bg-[#E17D18]" : ""
                } ${
                  event.isActive ? "cursor-pointer" : ""
                }`}
                style={!event.isActive ? { opacity: event.opacity } : {}}
                onClick={() => {
                  if (event.isActive) {
                    setTappedRow(index);
                    setTimeout(() => {
                      handleRowClick(index);
                      setTappedRow(null);
                    }, 200);
                  }
                }}
              >
                <div className="w-[20%] flex flex-col">
                  <span
                    className={`${spaceMono.variable} font-space-mono text-white text-sm`}
                  >
                    {event.date}
                  </span>
                  {event.isActive && (
                    <span
                      className={`${spaceMono.variable} font-space-mono text-white/70 text-xs`}
                    >
                      20:00
                    </span>
                  )}
                </div>
                <div className="w-[60%] flex flex-col">
                  <h3
                    className={`${neueMontrealBold.variable} font-neue-montreal-bold text-lg uppercase text-white mb-1`}
                  >
                    {event.event}
                  </h3>
                  <span
                    className={`${editorialNewItalic.variable} font-editorial-new-italic text-white/70 text-xs italic`}
                  >
                    {event.isActive ? "Bread & Butter, Shoreditch" : event.location}
                  </span>
                </div>
                <div className="w-[20%] text-right">
                  <span
                    className={`${spaceMono.variable} font-space-mono text-sm text-white border border-white/30 px-3 py-1 inline-block`}
                  >
                    [ RSVP ]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col">
            {events.map((event, index) => {
              if (index === 0) {
                return (
                  <div
                    key={index}
                    className="border border-white mx-6 my-6 cursor-pointer overflow-hidden"
                    onClick={() => handleRowClick(index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`${spaceMono.variable} font-space-mono text-white text-sm`}
                        >
                          {event.date}
                        </span>
                        <span
                          className={`${spaceMono.variable} font-space-mono text-[#E17D18] text-sm`}
                        >
                          ● LIVE
                        </span>
                      </div>
                      <div className="text-center mb-6">
                        <h3
                          className={`${neueMontrealBold.variable} font-neue-montreal-bold text-[32px] uppercase text-white`}
                        >
                          {event.event}
                        </h3>
                      </div>
                      <div className="text-center mb-6">
                        <span
                          className={`${spaceMono.variable} font-space-mono text-white/70 text-sm`}
                        >
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#E17D18] py-4 text-center">
                      <span
                        className={`${spaceMono.variable} font-space-mono text-black text-sm uppercase`}
                      >
                        TAP TO RSVP
                      </span>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="border-b border-white/30 h-10 flex items-center justify-center px-6"
                    style={{ opacity: event.opacity }}
                  >
                    <span
                      className={`${spaceMono.variable} font-space-mono text-white/50 text-xs`}
                    >
                      UPCOMING: {event.event} [ {event.status} ]
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

