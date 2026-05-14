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

/* BAD WORDS */

const bannedWords = [
  "fuck",
  "bitch",
  "asshole",
  "mc",
  "bc",
  "madarchod",
  "bhenchod",
  "randi",
  "shit",
  "harami",
];

/* =========================
   GET FEEDBACK
========================= */

export async function GET() {

  try {

    await connectDB();

    const feedback =
      await Feedback.find()
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      feedback
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch feedback",
      },
      {
        status: 500,
      }
    );
  }
}

/* =========================
   POST FEEDBACK
========================= */

export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const review =
      body.review.toLowerCase();

    /* BAD WORD CHECK */

    const containsBadWord =
      bannedWords.some((word) =>
        review.includes(word)
      );

    if (containsBadWord) {

      return NextResponse.json(
        {
          error:
            "Unable to send. Your message is not appropriate.",
        },
        {
          status: 400,
        }
      );
    }

    const newFeedback =
      await Feedback.create({
        name: body.name,
        review: body.review,
      });

    return NextResponse.json(
      newFeedback,
      {
        status: 201,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Feedback submission failed",
      },
      {
        status: 500,
      }
    );
  }
}