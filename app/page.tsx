"use client";

import HeroCard from "@/components/HeroCard";
import Navbar from "@/components/Navbar";
import Offering from "@/components/Offering";

export default function Home() {
  return (
    <section className="bg-slate-200 min-h-screen">
      <Navbar />
      <main className="p-5">
        <HeroCard />
        <Offering />
      </main>
    </section>
  );
}
