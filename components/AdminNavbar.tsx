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
import AdminAvatar from "./AdminAvatar";

interface MenuItemProps {
  title: string;
}

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <div className="p-2 cursor-pointer hover:text-gray-300">
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

function AdminNavbar() {
  return (
    <nav className="bg-primary text-white p-5 shadow flex items-center justify-between">
      <Link href="/admin/dashboard">
        <div className="text-xl font-bold hover:text-gray-300">Admin Panel</div>
      </Link>
      <div className="hidden lg:flex items-center gap-5">
        <Link href="/admin/application">
          <MenuItem title="Application" />
        </Link>
        <Link href="/admin">
          <AdminAvatar />
        </Link>
      </div>
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
                    <Link href="/admin/application">
                      <MenuItemMobile title="Application" />
                    </Link>
                  </div>
                </SheetDescription>
              </div>
              <div className="flex flex-col">
                <Link href="/admin">
                  <Button className="w-full">Logout</Button>
                </Link>
              </div>
            </section>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default AdminNavbar;
