import dbConnect from "@/lib/db";
import Application from "@/models/Application";

import { NextResponse } from "next/server";

async function handler(req: Request) {
  await dbConnect();

  const body = await req.json();
  const {
    name,
    phone_number,
    email,
    age,
    blood_group,
    nearest_hospital,
    state,
    district
  } = body;

  if (
    !name ||
    !phone_number ||
    !email ||
    !age ||
    !blood_group ||
    !nearest_hospital ||
    !state ||
    !district
  ) {
    if (!name) {
      return NextResponse.json({
        status: 400,
        message: "Name is required"
      });
    } else if (!phone_number) {
      return NextResponse.json({
        status: 400,
        message: "Phone Number is required"
      });
    } else if (!email) {
      return NextResponse.json({
        status: 400,
        message: "Email is required"
      });
    } else if (!age) {
      return NextResponse.json({
        status: 400,
        message: "Age is required"
      });
    } else if (!blood_group) {
      return NextResponse.json({
        status: 400,
        message: "Blood Group is required"
      });
    } else if (!nearest_hospital) {
      return NextResponse.json({
        status: 400,
        message: "Nearest Hospital is required"
      });
    } else if (!state) {
      return NextResponse.json({
        status: 400,
        message: "State is required"
      });
    } else if (!district) {
      return NextResponse.json({
        status: 400,
        message: "District is required"
      });
    }
  }

  try {
    const application = await Application.create({
      name,
      phone_number,
      email,
      age,
      blood_group,
      nearest_hospital,
      state,
      district
    });

    return NextResponse.json({
      status: 200,
      message: "Application created successfully",
      data: application
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: error
    });
  }
}

export { handler as POST };
