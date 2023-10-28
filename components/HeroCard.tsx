"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

function HeroCard() {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-purple-950 text-white shadow-xl rounded-xl flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-5 p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h1 className="text-3xl font-bold">Practo Demo</h1>
          <Separator orientation="vertical" />
          <p className="text-xl">We are for you</p>
        </div>
        <div>
          <p className="text-xl md:text-2xl font-bold uppercase text-muted">
            Find Blood Donor for free
          </p>
          <h2 className="text-xl">Join US</h2>
        </div>
        <div>
          <Link href="/signup">
            <Button>Sign up today</Button>
          </Link>
        </div>
      </div>
      <div className="relative h-[200px] w-full max-w-[400px]">
        <Image src="/banner.png" fill alt="doctors icon" />
      </div>
    </section>
  );
}

export default HeroCard;
