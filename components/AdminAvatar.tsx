"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AdminAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className="border-white text-primary">CN</AvatarFallback>
    </Avatar>
  );
}

export default AdminAvatar;
