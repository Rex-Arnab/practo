import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

async function handler() {
  await dbConnect();

  try {
    const user = await User.find({});
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
