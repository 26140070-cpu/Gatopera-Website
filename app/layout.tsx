import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = { title: "26140070-cpu — Ingeniería de software", description: "Portafolio de ingeniería inversa, clientes de Minecraft, inteligencia artificial y sistemas web." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className={`${archivo.variable} ${syne.variable} ${mono.variable}`}>{children}</body></html>; }
