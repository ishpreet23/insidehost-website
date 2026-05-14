import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    // SECRET ADMIN LOGIN

    if (
      email === "admin@insidehost.com" &&
      password === "insidehost123"
    ) {
      return NextResponse.json({
        success: true,
        message: "Login Successful",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid Credentials",
      },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}