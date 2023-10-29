import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

async function handler() {
  await dbConnect();
  const applications = await Application.find({});
  return NextResponse.json(applications);
}

export { handler as GET };
