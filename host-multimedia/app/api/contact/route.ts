import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

/* =========================
   GET ALL MESSAGES
========================= */

export async function GET() {

  try {

    await connectDB();

    const messages =
      await Message.find({})
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      messages,
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch messages",
      },
      {
        status: 500,
      }
    );
  }
}

/* =========================
   SEND MESSAGE
========================= */

export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    if (
      !body.name ||
      !body.email ||
      !body.message
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const newMessage =
      await Message.create({
        name: body.name,
        email: body.email,
        message: body.message,
      });

    return NextResponse.json(
      {
        success: true,
        data: newMessage,
      },
      {
        status: 201,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}