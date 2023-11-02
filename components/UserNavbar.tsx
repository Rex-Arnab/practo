import { signOut } from "next-auth/react";

import Link from "next/link";
import AdminAvatar from "./AdminAvatar";

function UserNav() {
  return (
    <nav className="bg-primary text-white p-5 shadow flex items-center justify-between">
      <Link href="/dashboard">
        <div className="text-xl font-bold hover:text-gray-300">Admin Panel</div>
      </Link>
      <div
        className="flex items-center gap-5 cursor-pointer"
        title="logout"
        onClick={() => signOut()}>
        <AdminAvatar />
      </div>
    </nav>
  );
}

export default UserNav;
