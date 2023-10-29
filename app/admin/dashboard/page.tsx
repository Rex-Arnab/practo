"use client";

import AdminNavbar from "@/components/AdminNavbar";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="">
      <AdminNavbar />

      <main className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-10">
        <Link href="/admin/application">
          <Card className="p-5">
            <CardTitle>Application</CardTitle>
          </Card>
        </Link>
      </main>
    </div>
  );
}

export default Dashboard;
