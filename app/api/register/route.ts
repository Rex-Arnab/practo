import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

async function handler(req: Request) {
  await dbConnect();
  console.log("Trigger Register");

  const body = await req.json();
  const { email, password, firstname, lastname, phone } = body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        success: false,
        data: "User already exists"
      });
    }
    const newUser = await User.create({
      email,
      password,
      firstname,
      lastname,
      phone
    });

    return NextResponse.json({
      success: true,
      data: newUser
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: error
    });
  }
}

export { handler as POST };
