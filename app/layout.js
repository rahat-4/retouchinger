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
    "Retouchinger provides Mobile App Development, Web App Design & Development, Custom Software Solutions, AI Agents & Chatbots, Automation Tools & Workflows, and Photo Editing Services.",
  keywords: [
    "mobile app development",
    "web app design",
    "custom software",
    "AI chatbots",
    "automation",
    "photo editing",
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
      "Mobile apps, web apps, custom software, AI agents, automation tools, and professional photo editing services.",
    siteName: "Retouchinger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retouchinger - Software Development Agency",
    description:
      "Mobile apps, web apps, custom software, AI agents, automation tools, and professional photo editing services.",
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
