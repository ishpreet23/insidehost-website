import { NextResponse } from "next/server";
import mongoose from "mongoose";

import Portfolio from "@/models/Portfolio";

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

/* DELETE PORTFOLIO */

export async function DELETE(
  req: Request,
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

    /* IMPORTANT */

    const { id } =
      await params;

    console.log(
      "DELETE ID:",
      id
    );

    if (!id) {

      return NextResponse.json(
        {
          error:
            "Portfolio ID missing",
        },
        {
          status: 400,
        }
      );
    }

    const deletedPortfolio =
      await Portfolio.findByIdAndDelete(
        id
      );

    if (!deletedPortfolio) {

      return NextResponse.json(
        {
          error:
            "Portfolio not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Portfolio deleted successfully",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log(
      "DELETE ERROR:",
      error
    );

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