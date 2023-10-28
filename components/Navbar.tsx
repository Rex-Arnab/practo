"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  title: string;
}

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <div className="p-2 border-b-4 border-transparent hover:border-black cursor-pointer">
      <span>{title}</span>
    </div>
  );
};

const MenuItemMobile = ({ title }: MenuItemProps) => {
  return (
    <div className="p-2 border font-semibold flex justify-between items-center hover:border-black hover:font-bold hover:text-black cursor-pointer">
      <span>{title}</span>
      <ArrowRight size={16} />
    </div>
  );
};

function Navbar() {
  return (
    <nav className="bg-white p-5 shadow flex items-center justify-between">
      <Link href="/">
        <div className="text-xl font-bold">Practo</div>
      </Link>
      <div className="hidden lg:flex items-center gap-5">
        <MenuItem title="About" />
        <MenuItem title="Our Service" />
        <MenuItem title="Doctor Consultation" />
        <MenuItem title="Book Blood Test" />
        <MenuItem title="Donation Box" />
        <MenuItem title="Contact" />

        <div className="flex gap-2">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" className="border-black">
              Signup
            </Button>
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent side="left">
            <section className="flex flex-col justify-between min-h-full">
              <div>
                <SheetTitle>Practo</SheetTitle>
                <SheetDescription>
                  <div>
                    <MenuItemMobile title="About" />
                    <MenuItemMobile title="Our Service" />
                    <MenuItemMobile title="Doctor Consultation" />
                    <MenuItemMobile title="Book Blood Test" />
                    <MenuItemMobile title="Donation Box" />
                    <MenuItemMobile title="Contact" />
                  </div>
                </SheetDescription>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/login">
                  <Button className="w-full">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full border-black" variant="outline">
                    Signup
                  </Button>
                </Link>
              </div>
            </section>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
