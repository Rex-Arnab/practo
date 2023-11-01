"use client";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet";
import { ArrowDown, ArrowRight, ArrowUp, Menu } from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MenuItemProps {
  title: string;
  className?: string;
  Icon?: any;
}

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <div className="p-2 border-b-4 border-transparent hover:border-black cursor-pointer">
      <span>{title}</span>
    </div>
  );
};

const MenuItemMobile = ({
  title,
  className,
  Icon = ArrowRight
}: MenuItemProps) => {
  return (
    <div
      className={cn(
        "p-2 border font-semibold flex justify-between items-center hover:border-black hover:font-bold hover:text-black cursor-pointer",
        className
      )}>
      <span>{title}</span>
      <Icon size={16} />
    </div>
  );
};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white p-5 shadow flex items-center justify-between">
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent side="left">
            <section className="flex flex-col justify-between min-h-full">
              <div>
                <Link href="/">
                  <SheetTitle className="my-2 text-xl">Practo</SheetTitle>
                </Link>
                <SheetDescription>
                  <div>
                    <MenuItemMobile title="About" />
                    <Collapsible>
                      <CollapsibleTrigger
                        className="w-full"
                        onClick={() => setToggle(!toggle)}>
                        <MenuItemMobile
                          title="Our Service"
                          Icon={toggle ? ArrowUp : ArrowDown}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-5">
                        <MenuItemMobile title="Doctor Consultation" />
                        <MenuItemMobile title="Book Blood Test" />
                        <MenuItemMobile title="Donation Box" />
                      </CollapsibleContent>
                    </Collapsible>
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
    </nav>
  );
}

export default Navbar;
