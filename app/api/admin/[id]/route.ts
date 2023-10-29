import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

async function handler(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const user = await User.findOne({ _id: params.id });
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
    console.log(error);
    return NextResponse.json({
      success: false,
      data: error
    });
  }
}

export { handler as GET };
