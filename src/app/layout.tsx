"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";

import "./globals.css";
import Providers from "./utils/providers";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expanzo Assignment",
  description: "Created By Hassan M Yakubu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Box as='div' pos='relative' h='100vh' overflowY={"hidden"}>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
