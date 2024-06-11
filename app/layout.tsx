import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoza",
  description: "The connected workspace where better, faster work happens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey={"yoza-theme"}
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
