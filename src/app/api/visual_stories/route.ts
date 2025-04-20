import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.baseURL;

  try {
    const res = await fetch(apiUrl + "carousel/all");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching visual stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
