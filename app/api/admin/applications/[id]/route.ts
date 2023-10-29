import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { NextRequest, NextResponse } from "next/server";

async function handler(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const applications = await Application.findOne({ _id: params.id });
  return NextResponse.json(applications);
}

async function Deletehandler(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  await Application.deleteOne({ _id: params.id });
  return NextResponse.json({
    message: "Application deleted successfully"
  });
}

export { handler as GET, Deletehandler as DELETE };
