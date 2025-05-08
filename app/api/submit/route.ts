import { NextResponse } from "next/server";

/*
This endpoint handles form submissions.
To activate form submissions, host this website on Webifier, or set them up by yourself.
*/
export async function POST(request: Request) {
    const { fullName, email, phone, message, other, channel } = await request.json();

    return NextResponse.json({ success: true }, { status: 200 });
}
