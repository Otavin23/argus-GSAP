"use client";

import { Hero } from "@/components/ui/hero";
import "./globals.css";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
    </main>
  );
}
