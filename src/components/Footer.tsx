"use client";

import { spaceMono } from "@/lib/fonts";

export default function Footer() {
  const handleReturnToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.querySelector('input[type="email"]') as HTMLInputElement;
        input?.focus();
      }, 500);
    }
  };

  return (
    <footer className="bg-[#1C1C1C] border-t border-white">
      <div className="hidden xl:block">
        <div className="px-12 py-[60px]">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col">
              <div
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                © 2025 REPLAI
              </div>
              <div
                className={`${spaceMono.variable} font-space-mono text-white/50 text-[10px]`}
              >
                ALL RIGHTS RESERVED.
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <a
                href="#"
                className={`${spaceMono.variable} font-space-mono text-white text-[10px] hover:underline hover:decoration-[#E17D18] transition-all duration-0`}
              >
                [ TERMS OF SERVICE ]
              </a>
              <a
                href="#"
                className={`${spaceMono.variable} font-space-mono text-white text-[10px] hover:underline hover:decoration-[#E17D18] transition-all duration-0`}
              >
                [ PRIVACY POLICY ]
              </a>
            </div>

            <div className="flex flex-col">
              <div
                className={`${spaceMono.variable} font-space-mono text-white text-[10px]`}
              >
                <a href="https://x.com/replaiapp" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-[#E17D18] transition-all duration-0">
                  X
                </a>
                {" / "}
                <a href="https://instagram.com/replai_world" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-[#E17D18] transition-all duration-0">
                  INSTAGRAM
                </a>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div
                className={`${spaceMono.variable} font-space-mono text-white text-[10px] flex items-center gap-1`}
              >
                SYSTEM STATUS: NOMINAL{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              </div>
              <button
                onClick={handleReturnToTop}
                className={`${spaceMono.variable} font-space-mono text-[#E17D18] text-[10px] hover:underline transition-all duration-0`}
              >
                [ RETURN TO SIGNAL ↑ ]
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block xl:hidden">
        <div className="px-8 py-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div
                className={`${spaceMono.variable} font-space-mono text-white/50 text-xs`}
              >
                © 2025 REPLAI
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button
                onClick={handleReturnToTop}
                className={`${spaceMono.variable} font-space-mono text-[#E17D18] text-xs hover:underline transition-all duration-0`}
              >
                [ RETURN TO SIGNAL ↑ ]
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <div
                className={`${spaceMono.variable} font-space-mono text-white text-xs`}
              >
                <a
                  href="#"
                  className="hover:underline hover:decoration-[#E17D18] transition-all duration-0"
                >
                  TERMS
                </a>
                {" / "}
                <a
                  href="#"
                  className="hover:underline hover:decoration-[#E17D18] transition-all duration-0"
                >
                  PRIVACY
                </a>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div
                className={`${spaceMono.variable} font-space-mono text-white text-xs`}
              >
                <a href="https://x.com/replaiapp" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-[#E17D18] transition-all duration-0">
                  X
                </a>
                {" / "}
                <a href="https://instagram.com/replai_world" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-[#E17D18] transition-all duration-0">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-6 pt-8 pb-32 space-y-6">
          <button
            onClick={handleReturnToTop}
            className={`${spaceMono.variable} font-space-mono text-white text-sm border border-white w-full py-4 hover:bg-white hover:text-[#1C1C1C] transition-colors duration-200`}
          >
            [ RETURN TO TOP ]
          </button>

          <div className="flex flex-col gap-2">
            <a
              href="https://x.com/replaiapp"
              target="_blank"
              rel="noopener noreferrer"
              className={`${spaceMono.variable} font-space-mono text-white text-sm hover:underline hover:decoration-[#E17D18] transition-all duration-0`}
            >
              X
            </a>
            <a
              href="https://instagram.com/replai_world"
              target="_blank"
              rel="noopener noreferrer"
              className={`${spaceMono.variable} font-space-mono text-white text-sm hover:underline hover:decoration-[#E17D18] transition-all duration-0`}
            >
              INSTAGRAM
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <div
              className={`${spaceMono.variable} font-space-mono text-[#666] text-[10px]`}
            >
              REPLAI © 2025
            </div>
            <div
              className={`${spaceMono.variable} font-space-mono text-[#666] text-[10px]`}
            >
              <a
                href="#"
                className="hover:underline hover:decoration-[#E17D18] transition-all duration-0"
              >
                PRIVACY
              </a>
              {" / "}
              <a
                href="#"
                className="hover:underline hover:decoration-[#E17D18] transition-all duration-0"
              >
                TERMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

