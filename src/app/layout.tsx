import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./components/providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

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
