// app/api/stream-video-token/route.ts
import { NextResponse } from "next/server";
import { StreamClient } from "@stream-io/node-sdk";

const client = new StreamClient(
  process.env.NEXT_PUBLIC_STREAM_API_KEY!,
  process.env.STREAM_API_SECRET! // never expose in frontend
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const token = client.generateUserToken({ user_id: userId, validity_in_seconds: 3600 }); 

  return NextResponse.json({ token });
}
