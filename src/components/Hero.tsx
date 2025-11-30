"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "phosphor-react";
import { neueMontrealBold, spaceMono, editorialNewItalic } from "@/lib/fonts";

const EMOTIVE_WORDS = ["CHAOS", "BLISS", "GRIEF", "RIOT", "HEALING"];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cycleSpeed = isMobile ? 2500 : 1500;

  useEffect(() => {
    if (isFocused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % EMOTIVE_WORDS.length);
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 300);
    }, cycleSpeed);

    return () => clearInterval(interval);
  }, [isFocused, cycleSpeed]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }, [email]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (!email) {
      setIsFocused(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.freewaitlists.com/waitlists/cmilq2ywx013fls01weqxj0oc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            meta: {
              source: "landing-page",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      const data = await response.json();
      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Waitlist API error:", err);
    } finally {
      setIsLoading(false);
    }
  };


  const currentWord = isFocused ? "LISTENING" : EMOTIVE_WORDS[currentWordIndex];

  return (
    <section
      id="hero"
      className={`min-h-screen bg-[#1C1C1C] relative flex items-center justify-center transition-opacity duration-300 ${
        isFocused ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="absolute top-6 left-6">
        <span className={`${spaceMono.variable} font-space-mono text-white text-xs md:text-sm`}>
          REPLAI [BETA]
        </span>
      </div>

      <div className="absolute top-6 right-6 hidden lg:block">
        <span className={`${spaceMono.variable} font-space-mono text-white text-xs md:text-sm`}>
          CURRENT MOOD: NOCTURNAL
        </span>
      </div>

      <div className="absolute bottom-6 left-6 hidden lg:block">
        <span className={`${spaceMono.variable} font-space-mono text-white text-xs`}>
          SCROLL TO EXPLORE
        </span>
      </div>

      <div className="absolute bottom-6 right-6">
        <span className={`${spaceMono.variable} font-space-mono text-white text-xs md:text-sm`}>
          ARCHIVE STATUS: OPEN
        </span>
      </div>

      <div className="flex flex-col items-center justify-start md:justify-center px-6 text-center pt-20 md:pt-0 lg:pt-12 gap-0 md:gap-8 lg:gap-12">
        <div className="mb-0 md:mb-0 lg:mb-0">
          {isMobile ? (
            <h1
              className={`${neueMontrealBold.variable} font-neue-montreal-bold text-[48px] uppercase text-white leading-tight`}
            >
              YOUR 2025<br />
              SOUNDED<br />
              LIKE<br />
              <span className="inline-block">
                [
                <span
                  className={`${editorialNewItalic.variable} font-editorial-new-italic mx-2 transition-colors duration-300 ${
                    isFlashing || isFocused
                      ? "text-[#E17D18]"
                      : "text-white"
                  }`}
                >
                  {currentWord}
                </span>
                ]
              </span>
            </h1>
          ) : (
            <h1
              className={`${neueMontrealBold.variable} font-neue-montreal-bold text-6xl md:text-7xl lg:text-[120px] uppercase text-white leading-tight`}
            >
              YOUR 2025<br />
              SOUNDED LIKE<br />
              <span className="inline-block">
                [
                <span
                  className={`${editorialNewItalic.variable} font-editorial-new-italic mx-2 transition-colors duration-300 ${
                    isFlashing || isFocused
                      ? "text-[#E17D18]"
                      : "text-white"
                  }`}
                >
                  {currentWord}
                </span>
                ]
              </span>
            </h1>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-full md:max-w-[60%] lg:max-w-[400px] fixed md:relative bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto mb-0 md:mb-0 px-4 md:px-0 pb-4 md:pb-0 z-[60] md:z-auto`}
        >
          <div className={`bg-white ${isSubmitted ? "rounded-lg" : "rounded-full"} px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 shadow-[0_0_30px_rgba(225,125,24,0.3)] transition-all duration-300 relative z-[60] md:z-auto`}>
            {isSubmitted ? (
              <span className={`${spaceMono.variable} font-space-mono text-[#1C1C1C] uppercase text-sm w-full text-center relative z-[60] md:z-auto`}>
                INVITE REQUESTED
              </span>
            ) : (
              <>
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder="email@address.com"
                  className={`${spaceMono.variable} font-space-mono flex-1 bg-transparent text-[#1C1C1C] outline-none placeholder:text-[#1C1C1C]/50 text-sm md:text-base`}
                />
                <button
                  type="submit"
                  disabled={!isValid || isLoading}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E17D18] flex items-center justify-center text-white transition-opacity duration-200 ${
                    isValid && !isLoading
                      ? "opacity-100 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Plus weight="bold" size={20} className="md:w-6 md:h-6" />
                  )}
                </button>
              </>
            )}
          </div>
          {error && (
            <p className={`${spaceMono.variable} font-space-mono text-red-500 text-xs mt-2 text-center`}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
