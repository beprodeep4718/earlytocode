// app/api/sessions/create/route.ts
import { NextResponse } from "next/server";
import { tablesDb, ID } from "@/models/server/config";
import { db, sessionsTable } from "@/models/name";
import { StreamClient } from "@stream-io/node-sdk";

const stream = new StreamClient(
  process.env.NEXT_PUBLIC_STREAM_API_KEY!,
  process.env.STREAM_API_SECRET!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { teacherId, studentId, startTime, currentUserId } = body;

    if (!teacherId || !studentId || !startTime || !currentUserId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // 📹 Create Stream Video Call
    const id = crypto.randomUUID();
    const callId = `session_${id}`;
    const call = stream.video.call("default", callId);
    await call.create({
      data: {
        created_by_id: currentUserId, // 👈 required
      },
    });

    // 🗄 Save session to Appwrite
    const session = await tablesDb.createRow({
      databaseId: db,
      tableId: sessionsTable,
      rowId: ID.unique(),
      data: {
        teacherId,
        studentId,
        callId,
        startTime,
        status: "scheduled",
      },
    });

    return NextResponse.json({ success: true, session });
  } catch (err) {
    console.error("Error creating session:", err);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
