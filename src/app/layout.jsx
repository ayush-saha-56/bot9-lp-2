import React from "react";
import { Manrope } from "next/font/google";
import Header from "@/components/layout/header";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer";
import SocketProvider from "../context/socket-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "bot9 - Automate customer support",
  description: "Automate your customer support with bot9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-sky-50 overflow-x-hidden`}>
        <SocketProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SocketProvider>
      </body>
    </html>
  );
}











