import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: Request) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  const { phone, message } = await request.json();
  client.messages.create({
    body: message,
    from: "whatsapp:+14155238886",
    to: "whatsapp:+15026562835",
  });

  return NextResponse.json({
    message: "Message sent successfully",
    status: 200,
  });
}
