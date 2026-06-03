"use client";
import { useState, useRef, useEffect } from "react";
import { type View } from "@/app/page";
import { type LangCode, t, LANGUAGES } from "@/lib/translations";

interface Props { lang: LangCode; nav: (v: View) => void; }

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatView({ lang, nav }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const langInfo = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const next = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, lang, langNative: langInfo.native }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content || "Error: no response" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5] max-w-md">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#6875f5] px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button onClick={() => nav("home")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">←</button>
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div>
          <div>
            <h1 className="text-white text-base font-black leading-none">{t("chat", lang)}</h1>
            <p className="text-white/60 text-xs">BRIDGE AI</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mx-4 mt-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
        <p className="text-yellow-800 text-xs leading-relaxed">{t("aiDisclaimer", lang)}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 pt-4 pb-4 space-y-3 overflow-y-auto">
        {messages.length === 0 && (
          <div className="space-y-2">
            {[
              { ko: "일하다가 손을 다쳤어요", en: "I got injured at work" },
              { ko: "월급을 안 줘요", en: "My employer won't pay me" },
              { ko: "비자 기간이 지났어요", en: "My visa has expired" },
              { ko: "병원에 가야 하는데 한국어를 못해요", en: "I need to go to hospital but can't speak Korean" },
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => { setInput(lang === "ko" ? q.ko : q.en); }}
                className="w-full text-left bg-white rounded-xl p-3 text-sm text-gray-700 shadow-sm border border-gray-100 active:bg-gray-50"
              >
                {lang === "ko" ? q.ko : q.en}
              </button>
            ))}
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-[#6875f5] text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#6875f5] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
          placeholder={t("typeMessage", lang)}
          className="flex-1 bg-[#f0f2f5] rounded-xl px-4 py-2.5 text-sm outline-none border-2 border-transparent focus:border-[#6875f5]"
        />
        <button
          onClick={send}
          disabled={!input.trim() || loading}
          className="w-11 h-11 rounded-xl bg-[#6875f5] text-white font-bold text-lg flex items-center justify-center disabled:opacity-50 transition-all active:scale-95"
        >
          ↑
        </button>
      </div>
    </div>
  );
}
