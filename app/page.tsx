"use client";
import { useEffect, useState } from "react";
import { LANGUAGES, type LangCode, t } from "@/lib/translations";
import { ViewContext } from "@/lib/viewContext";
import HomeView from "@/components/HomeView";
import SafetyView from "@/components/SafetyView";
import MedicalView from "@/components/MedicalView";
import LaborView from "@/components/LaborView";
import LegalView from "@/components/LegalView";
import IndustrialView from "@/components/IndustrialView";
import ChatView from "@/components/ChatView";

export type View = "splash" | "lang" | "home" | "safety" | "medical" | "labor" | "legal" | "industrial" | "chat";

const NAV_ITEMS: { id: View; icon: string; labelKey: string; color: string }[] = [
  { id: "home",       icon: "🏠", labelKey: "home",       color: "#6C6EF0" },
  { id: "safety",     icon: "⚠️", labelKey: "safety",     color: "#e63946" },
  { id: "medical",    icon: "➕", labelKey: "medical",    color: "#0e9f6e" },
  { id: "labor",      icon: "💼", labelKey: "labor",      color: "#ff5a1f" },
  { id: "legal",      icon: "⚖️", labelKey: "legal",      color: "#6C6EF0" },
  { id: "industrial", icon: "🏗️", labelKey: "industrial", color: "#ff8900" },
  { id: "chat",       icon: "🤖", labelKey: "chat",       color: "#6C6EF0" },
];

export default function App() {
  const [lang, setLang] = useState<LangCode>("ko");
  const [view, setView] = useState<View>("splash");
  const [ready, setReady] = useState(false);
  const [forceMobile, setForceMobile] = useState(false);

  useEffect(() => {
    // 스플래시 2초 후 언어 선택으로
    const saved = localStorage.getItem("bridge_lang") as LangCode | null;
    const timer = setTimeout(() => {
      if (saved && LANGUAGES.find((l) => l.code === saved)) {
        setLang(saved);
        setView("home");
      } else {
        setView("lang");
      }
      setReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function selectLang(code: LangCode) {
    setLang(code);
  }

  function startApp() {
    localStorage.setItem("bridge_lang", lang);
    setView("home");
  }

  const nav = (v: View) => setView(v);
  const langInfo = LANGUAGES.find((l) => l.code === lang)!;

  // 스플래시
  if (!ready || view === "splash") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center max-w-md mx-auto"
        style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)" }}>
        <div className="flex flex-col items-center gap-4">
          {/* B 로고 */}
          <div className="w-24 h-24 relative">
            <div className="w-full h-full rounded-3xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(10px)" }}>
              <span className="text-white text-5xl font-black" style={{ fontStyle: "italic" }}>B</span>
            </div>
            {/* 말풍선 꼬리 */}
            <div className="absolute -bottom-2 left-4 w-4 h-4 rounded-full"
              style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <h1 className="text-white text-4xl font-black tracking-widest">BRIDGE</h1>
        </div>
      </div>
    );
  }

  // 언어 선택
  if (view === "lang") {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
        <div className="flex-1 px-6 pt-12 pb-4">
          <p className="text-2xl font-bold text-gray-900 leading-snug mb-8">
            <span style={{ color: "#6C6EF0" }}>○○○</span>
            {lang === "ko" ? "님, 환영해요!\n사용할 언어를 선택해주세요." :
             lang === "en" ? ", Welcome!\nPlease select the language you would like to use." :
             "님, 환영해요!\n사용할 언어를 선택해주세요."}
          </p>

          <div className="space-y-3">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => selectLang(l.code)}
                className="w-full py-3.5 rounded-full text-base font-semibold transition-all"
                style={{
                  backgroundColor: lang === l.code ? "#6C6EF0" : "#EBEBFF",
                  color: lang === l.code ? "#fff" : "#6C6EF0",
                }}
              >
                {l.native}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-10">
          <button
            onClick={startApp}
            className="w-full py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: "#6C6EF0" }}
          >
            {lang === "ko" ? "시작하기" : lang === "en" ? "Get Started" : "시작하기"}
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <ViewContext.Provider value={{ forceMobile, setForceMobile }}>
      <div className="min-h-screen flex" style={{ background: "#F2F3F8" }}>
        {/* PC 사이드바 */}
        <aside className={`${forceMobile ? "hidden" : "hidden md:flex"} flex-col w-64 min-h-screen sticky top-0 flex-shrink-0 bg-white border-r border-gray-100`}>
          {/* Logo */}
          <div className="px-6 pt-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-xl italic"
                style={{ background: "linear-gradient(135deg, #7B7DF5, #5B5EE8)" }}>B</div>
              <div>
                <h1 className="text-gray-900 text-xl font-black tracking-tight leading-none">BRIDGE</h1>
                <p className="text-gray-400 text-xs">브릿지 · 안산</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => nav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${
                  view === item.id ? "text-white font-bold" : "text-gray-500 hover:bg-gray-50"
                }`}
                style={view === item.id ? { backgroundColor: "#6C6EF0" } : {}}>
                <span className="text-xl w-7 text-center">{item.icon}</span>
                <span className="text-sm font-semibold">{t(item.labelKey, lang)}</span>
              </button>
            ))}
          </nav>

          <div className="px-3 pb-6 space-y-2 border-t border-gray-100 pt-4">
            <button onClick={() => setView("lang")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 hover:bg-gray-50 transition-all">
              <span className="text-xl">{langInfo.flag}</span>
              <span className="text-sm font-semibold">{langInfo.native}</span>
            </button>
            <button onClick={() => setForceMobile(!forceMobile)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 hover:bg-gray-50 transition-all">
              <span className="text-xl">📱</span>
              <span className="text-sm font-semibold">{forceMobile ? "PC 뷰로 전환" : "모바일 뷰로 전환"}</span>
            </button>
            <a href="tel:112" className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-bold text-sm"
              style={{ backgroundColor: "#6C6EF0" }}>
              🚨 {t("emergency", lang)} 112
            </a>
          </div>
        </aside>

        {/* 메인 */}
        <main className="flex-1 min-w-0">
          <div className={forceMobile ? "max-w-md mx-auto w-full" : "w-full"}>
            {view === "home"       && <HomeView lang={lang} nav={nav} onChangeLang={() => setView("lang")} onToggleView={() => setForceMobile(!forceMobile)} />}
            {view === "safety"     && <SafetyView lang={lang} nav={nav} />}
            {view === "medical"    && <MedicalView lang={lang} nav={nav} />}
            {view === "labor"      && <LaborView lang={lang} nav={nav} />}
            {view === "legal"      && <LegalView lang={lang} nav={nav} />}
            {view === "industrial" && <IndustrialView lang={lang} nav={nav} />}
            {view === "chat"       && <ChatView lang={lang} nav={nav} />}
          </div>
        </main>
      </div>
    </ViewContext.Provider>
  );
}
