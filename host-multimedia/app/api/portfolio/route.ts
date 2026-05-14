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

/* =========================
   GET PORTFOLIO
========================= */

export async function GET() {

  try {

    await connectDB();

    const portfolio =
      await Portfolio.find()
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      portfolio,
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch portfolio",
      },
      {
        status: 500,
      }
    );
  }
}

/* =========================
   CREATE PORTFOLIO
========================= */

export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const newPortfolio =
      await Portfolio.create({
        title: body.title,

        category:
          body.category,

        mediaUrl:
          body.mediaUrl,

        type: body.type,

        description:
          body.description ||
          "Premium cinematic creative crafted with futuristic visuals, luxury aesthetics and modern branding.",
      });

    return NextResponse.json(
      newPortfolio,
      {
        status: 201,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}