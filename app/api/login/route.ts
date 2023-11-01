import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

async function handler(req: Request) {
  await dbConnect();

  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      return NextResponse.json({
        success: true,
        data: user
      });
    }
    return NextResponse.json({
      success: false,
      data: "User not found"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: error
    });
  }
}

export { handler as POST };
