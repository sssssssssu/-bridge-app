"use client";
import { useState, useRef, useEffect } from "react";
import { type View } from "@/app/page";
import { type LangCode, t, LANGUAGES } from "@/lib/translations";
import { useViewMode } from "@/lib/viewContext";

interface Props { lang: LangCode; nav: (v: View) => void; }
interface Message { role: "user" | "assistant"; content: string; }

const QUICK = [
  { ko: "일하다가 손을 다쳤어요", en: "I got injured at work" },
  { ko: "월급을 안 줘요", en: "My employer won't pay me" },
  { ko: "비자 기간이 지났어요", en: "My visa has expired" },
  { ko: "병원에 가야 하는데 한국어를 못해요", en: "I need to go to hospital but can't speak Korean" },
];

export default function ChatView({ lang, nav }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { forceMobile } = useViewMode();

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
      const langInfo = LANGUAGES.find((l) => l.code === lang)!;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, lang, langNative: langInfo.native }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content || "Error" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F2F3F8" }}>
      {/* 헤더 */}
      <div className="sticky top-0 z-30 px-5 pt-5 pb-4 rounded-b-3xl"
        style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)" }}>
        <div className="flex items-center gap-3">
          <button onClick={() => nav("home")}
            className={`${!forceMobile ? "md:hidden" : ""} w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold flex-shrink-0`}>
            ‹
          </button>
          <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-2xl flex-shrink-0">👻</div>
          <div>
            <h1 className="text-white text-base font-black leading-none">{t("chat", lang)}</h1>
            <p className="text-white/60 text-xs">
              {lang === "ko" ? "안녕하세요 AI 챗봇이에요, 반가워요!" : "Hello! I'm BRIDGE AI, nice to meet you!"}
            </p>
          </div>
        </div>
      </div>

      {/* 안내 */}
      <div className="mx-4 mt-3 p-3 bg-white rounded-2xl border border-purple-100">
        <p className="text-purple-600 text-xs leading-relaxed">{t("aiDisclaimer", lang)}</p>
      </div>

      {/* 메시지 */}
      <div className="flex-1 px-4 pt-4 pb-4 space-y-4 overflow-y-auto">
        {messages.length === 0 && (
          <div className="space-y-2 pt-2">
            {QUICK.map((q, i) => (
              <button key={i} onClick={() => setInput(lang === "ko" ? q.ko : q.en)}
                className="w-full text-left bg-white rounded-2xl px-4 py-3 text-sm font-medium shadow-sm active:scale-95 transition-all"
                style={{ color: "#6C6EF0" }}>
                {lang === "ko" ? q.ko : q.en}
              </button>
            ))}
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">👻</div>
            )}
            <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
              m.role === "user"
                ? "text-white rounded-br-sm"
                : "bg-white text-gray-800 rounded-bl-sm shadow-sm"
            }`}
            style={m.role === "user" ? { backgroundColor: "#C5C6FB" } : {}}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">👻</div>
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full animate-bounce"
                    style={{ backgroundColor: "#6C6EF0", animationDelay: `${i*0.15}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* 입력창 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3 flex gap-2 items-center">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{ backgroundColor: "#EBEBFF", color: "#6C6EF0" }}>+</button>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
          placeholder={t("typeMessage", lang)}
          className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none border-2 border-transparent focus:border-purple-300" />
        <button onClick={send} disabled={!input.trim() || loading}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg disabled:opacity-40 flex-shrink-0"
          style={{ backgroundColor: "#6C6EF0" }}>↑</button>
      </div>
    </div>
  );
}
