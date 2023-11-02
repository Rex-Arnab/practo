"use client";

import UserNav from "@/components/UserNavbar";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="">
      <UserNav />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-10">
        <Link href="/user/application">
          <Card className="p-5">
            <CardTitle>New Application</CardTitle>
          </Card>
        </Link>
        <Link href="/user/applicationlist">
          <Card className="p-5">
            <CardTitle>My Application</CardTitle>
          </Card>
        </Link>
      </main>
    </div>
  );
}

export default Dashboard;
