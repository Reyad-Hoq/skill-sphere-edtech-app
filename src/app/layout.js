import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toast } from "@heroui/react";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "SkillSphere EdTech",
  description: "Empowering Minds, Shaping Futures: Your Gateway to Knowledge and Growth",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon-32x32.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${jetbrainsMono.className}`}>
        {children}
        <ToastContainer />
      </body>
    </html >
  );
}
