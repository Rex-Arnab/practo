import { signOut } from "next-auth/react";

import Link from "next/link";
import AdminAvatar from "./AdminAvatar";
import { Power } from "lucide-react";

function UserNav() {
  return (
    <nav className="bg-primary text-white p-5 shadow flex items-center justify-between">
      <Link href="/user/dashboard">
        <div className="text-xl font-bold hover:text-gray-300">User Area</div>
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/user/application">
          <div className="cursor-pointer hover:opacity-70">Application</div>
        </Link>
        <AdminAvatar />
        <div
          title="logout"
          className="cursor-pointer hover:opacity-70"
          onClick={() => signOut()}>
          <Power size={24} />
        </div>
      </div>
    </nav>
  );
}

export default UserNav;
