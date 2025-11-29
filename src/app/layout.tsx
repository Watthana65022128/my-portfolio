import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watthana Kayowaen - Developer Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
  keywords: ["developer", "portfolio", "web development", "full-stack"],
  authors: [{ name: "Watthana Kayowaen" }],
  openGraph: {
    title: "Watthana Kayowaen - Developer Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
