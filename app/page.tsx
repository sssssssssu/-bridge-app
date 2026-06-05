"use client";
import { useEffect, useState } from "react";
import { LANGUAGES, type LangCode, t } from "@/lib/translations";
import { ViewContext } from "@/lib/viewContext";
import { BridgeLogo } from "@/components/Icons";
import LangPicker from "@/components/LangPicker";
import { GREETINGS, START_BTN } from "@/lib/translations";
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
        <div className="flex flex-col items-center gap-6">
          <BridgeLogo size={110} />
          <h1 className="text-white text-4xl font-black tracking-widest" style={{ letterSpacing: "0.15em" }}>BRIDGE</h1>
        </div>
      </div>
    );
  }

  // 언어 선택 (3D 드럼롤 피커)
  if (view === "lang") {
    const greeting = GREETINGS[lang] ?? GREETINGS.ko;

    return (
      <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white">
        {/* 상단 헤더 */}
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)", borderRadius: 16, padding: 8 }}>
              <BridgeLogo size={40} />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-widest">BRIDGE</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 leading-snug whitespace-pre-line">
            {greeting}
          </p>
        </div>

        {/* 3D 드럼롤 피커 */}
        <div className="flex-1 px-6 flex flex-col justify-center">
          <LangPicker value={lang} onChange={selectLang} />
        </div>

        {/* 시작하기 버튼 */}
        <div className="px-6 pb-12 pt-4">
          <button onClick={startApp}
            className="w-full py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
            style={{ backgroundColor: "#6C6EF0", boxShadow: "0 8px 24px rgba(108,110,240,0.35)" }}>
            {START_BTN[lang]} <span className="text-xl">›</span>
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
