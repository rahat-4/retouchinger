import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const getOutfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const getOvo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Retouchinger - Software Development Agency",
  description:
    "Retouchinger is a Software Engineering & Development company specializing in full-stack web development, delivering high-quality solutions to help businesses grow with technology.",
  keywords: [
    "software development",
    "web development",
    "full-stack development",
    "React",
    "Next.js",
    "Django",
    "Python",
    "software agency",
  ],
  authors: [{ name: "Retouchinger" }],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://retouchinger.com",
    title: "Retouchinger - Software Development Agency",
    description:
      "Full-stack web development solutions to help businesses grow with technology.",
    siteName: "Retouchinger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retouchinger - Software Development Agency",
    description:
      "Full-stack web development solutions to help businesses grow with technology.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/png" href="/r-icon.png" />
        <link rel="shortcut icon" href="/r-icon.png" />
        <link rel="apple-touch-icon" href="/r-icon.png" />
      </head>
      <body
        className={`${getOutfit.className} ${getOvo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
