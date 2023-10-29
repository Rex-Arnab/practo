import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Welcome Admin"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-slate-200">{children}</div>;
}
