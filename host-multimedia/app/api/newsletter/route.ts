
import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const subscriber = await Subscriber.create({
      email: body.email,
    });

    return NextResponse.json({
      success: true,
      data: subscriber,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed",
    });
  }
}

