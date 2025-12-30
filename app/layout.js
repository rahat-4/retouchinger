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
  icons: {
    icon: "/r-icon.png",
    shortcut: "/r-icon.png",
    apple: "/r-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${getOutfit.className} ${getOvo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
