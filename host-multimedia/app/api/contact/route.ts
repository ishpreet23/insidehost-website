
import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const newMessage = await Message.create({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}

