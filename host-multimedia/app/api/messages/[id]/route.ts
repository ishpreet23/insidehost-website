
import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

export async function DELETE(
  req: Request,
  context: any
) {
  try {

    await connectDB();

    const id = context.params.id;

    await Message.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Message deleted",
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}

