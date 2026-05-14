
import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Message from "@/models/Message";

export async function GET() {
  try {

    await connectDB();

    // COUNT MESSAGES
    const totalMessages =
      await Message.countDocuments();

    return NextResponse.json({
      totalMessages,
      totalProjects: 0,
      totalPortfolio: 0,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to fetch stats",
      },
      {
        status: 500,
      }
    );
  }
}

