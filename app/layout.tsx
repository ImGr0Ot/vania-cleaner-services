import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vania's Cleaner Services",
  description:
    "Website for Vania's Cleaner Service powered by Anthony's Marketing,Here you can request the cleaning service for your home in Louisville",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.icns",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
