export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Portfolio from "@/models/Portfolio";

/* =========================
   GET PORTFOLIO
========================= */

export async function GET() {

  try {

    console.log("CONNECTING DB...");

    await connectDB();

    console.log("DB CONNECTED");

    const portfolio =
      await Portfolio.find()
        .sort({
          createdAt: -1,
        });

    console.log("PORTFOLIO DATA:", portfolio);

    return NextResponse.json(
      portfolio,
      {
        status: 200,
      }
    );

  } catch (error) {

    console.log("GET PORTFOLIO ERROR:", error);

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

    if (
      !body.title ||
      !body.category ||
      !body.mediaUrl ||
      !body.type
    ) {

      return NextResponse.json(
        {
          error:
            "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

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