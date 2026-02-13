import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theFuture = localFont({
  src: [
    {
      path: "../../public/fonts/the-future-web/the-future-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-thin-italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-extralight-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-future-web/the-future-black-italic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-the-future",
  display: "swap",
});

const foundersGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-semibold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/founders-grotesk-web/founders-grotesk-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-founders-grotesk",
  display: "swap",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2DM Technologies | Applied AI Consulting",
  description: "Applied AI consulting for your startup",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' fill='%23ff0000'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theFuture.variable} ${foundersGrotesk.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
