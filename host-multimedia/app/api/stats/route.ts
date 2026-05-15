import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Message from "@/models/Message";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    await connectDB();

    const totalMessages =
      await Message.countDocuments();

    const totalPortfolio =
      await Portfolio.countDocuments();

    return NextResponse.json({
      totalMessages: totalMessages || 0,
      totalProjects: totalPortfolio || 0,
      totalPortfolio: totalPortfolio || 0,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      totalMessages: 0,
      totalProjects: 0,
      totalPortfolio: 0,
    });
  }
}