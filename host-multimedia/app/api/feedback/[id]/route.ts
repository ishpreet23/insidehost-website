export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Feedback from "@/models/Feedback";

/* DELETE FEEDBACK */

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    await connectDB();

    const { id } =
      await params;

    await Feedback.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}