import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gatopera Client - Minecraft Utility Mod",
  description: "Gatopera is a free, open-source utility client for Minecraft. Download the latest version with advanced features and full customization.",
  keywords: ["Minecraft client", "Gatopera Client", "Minecraft utility mod", "free Minecraft client"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-foreground antialiased"}>
        {children}
      </body>
    </html>
  );
}