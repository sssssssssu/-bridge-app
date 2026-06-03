import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

const SYSTEM = (langNative: string, lang: string) =>
  `You are BRIDGE, a multilingual safety and rights assistant for foreign residents in Ansan, Korea.

Always respond in ${langNative} (language code: ${lang}).

You help with: emergency situations (112/119), medical issues, labor rights, legal problems, and industrial accidents.

Key contacts to recommend:
- Emergency Police: 112
- Fire & Ambulance: 119
- Multilingual Police: 1588-0112
- Ansan Foreign Residents Support Center: 1644-7111 (labor, legal, medical, translation)
- Korea Immigration Service Center: 1345 (visa/residency, 24hrs)
- Korea Legal Aid Corp: 132 (free legal consultation)
- KCOMWEL (industrial accident): 1588-0075
- National Human Rights Commission: 1331

Keep responses concise (3-5 sentences max). Always recommend the most relevant phone number. End with a reminder to consult a professional for accurate advice.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, lang, langNative } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM(langNative, lang),
    });

    const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({ history });
    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);

    return NextResponse.json({ content: result.response.text() });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ content: "", error: msg }, { status: 500 });
  }
}
