
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

export async function GET() {
  try {
    await connectDB();

    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json(messages);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

