import localFont from "next/font/local";

export const neueMontrealBold = localFont({
  src: "../../public/assets/fonts/PPNeueMontrealMono-Bold.otf",
  variable: "--font-neue-montreal-bold",
  display: "swap",
});

export const neueMontrealMedium = localFont({
  src: "../../public/assets/fonts/PPNeueMontrealMono-Medium.otf",
  variable: "--font-neue-montreal-medium",
  display: "swap",
});

export const spaceMono = localFont({
  src: [
    {
      path: "../../public/assets/fonts/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

export const editorialNewItalic = localFont({
  src: "../../public/assets/fonts/PPEditorialNew-Italic.otf",
  variable: "--font-editorial-new-italic",
  display: "swap",
});

