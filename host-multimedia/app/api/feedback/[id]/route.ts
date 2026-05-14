import { NextResponse } from "next/server";
import mongoose from "mongoose";

import Feedback from "@/models/Feedback";

const MONGO_URI =
  process.env.MONGODB_URI!;

/* CONNECT DB */

const connectDB = async () => {

  if (
    mongoose.connection.readyState >= 1
  ) {
    return;
  }

  await mongoose.connect(
    MONGO_URI
  );
};

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