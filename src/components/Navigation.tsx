"use client";

import Image from "next/image";

export default function Navigation() {

  const handleAccessClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
    <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-6 lg:px-[60px] bg-[#1C1C1C]/98 md:bg-[#1C1C1C]/95 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center">
        <Image
          src="/assets/images/LOGO.png"
          alt="REPLAI"
          width={80}
          height={20}
          className="h-[18px] md:h-5 w-auto"
          priority
        />
      </div>

      <nav className="hidden md:flex items-center gap-5 lg:gap-10 absolute md:right-28 lg:right-40">
        <a
          href="#mission"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("mission");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-space-mono text-[10px] lg:text-xs text-white uppercase hover:line-through hover:decoration-[#E17D18] transition-all duration-0"
        >
          <span className="hidden lg:inline">// </span>VISION
        </a>
        <span className="text-white/30 font-space-mono text-[10px] lg:text-xs">—</span>
        <a
          href="#events"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("events");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-space-mono text-[10px] lg:text-xs text-white uppercase hover:line-through hover:decoration-[#E17D18] transition-all duration-0"
        >
          <span className="hidden lg:inline">// </span>LIVE
        </a>
        <span className="text-white/30 font-space-mono text-[10px] lg:text-xs">—</span>
        <a
          href="#identity"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("identity");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-space-mono text-[10px] lg:text-xs text-white uppercase hover:line-through hover:decoration-[#E17D18] transition-all duration-0"
        >
          <span className="hidden lg:inline">// </span>IDENTITY
        </a>
      </nav>

      <div className="flex items-center">
        <a
          href="#hero"
          onClick={handleAccessClick}
          className="font-space-mono text-white uppercase text-sm tracking-wide group cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 md:mr-0 md:min-w-0 md:min-h-0"
        >
          <span className="text-white">[</span>
          <span className="group-hover:text-[#E17D18] transition-colors duration-200">
            ACCESS
          </span>
          <span className="text-white">]</span>
        </a>
      </div>
    </header>
  );
}

