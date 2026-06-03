"use client";
import { useEffect, useState } from "react";
import { LANGUAGES, type LangCode, t } from "@/lib/translations";
import HomeView from "@/components/HomeView";
import SafetyView from "@/components/SafetyView";
import MedicalView from "@/components/MedicalView";
import LaborView from "@/components/LaborView";
import LegalView from "@/components/LegalView";
import IndustrialView from "@/components/IndustrialView";
import ChatView from "@/components/ChatView";

export type View = "lang" | "home" | "safety" | "medical" | "labor" | "legal" | "industrial" | "chat";

const NAV_ITEMS: { id: View; icon: string; labelKey: string; color: string }[] = [
  { id: "home",       icon: "🏠", labelKey: "home",       color: "#1a1a2e" },
  { id: "safety",     icon: "🔴", labelKey: "safety",     color: "#e63946" },
  { id: "medical",    icon: "🏥", labelKey: "medical",    color: "#0e9f6e" },
  { id: "labor",      icon: "💼", labelKey: "labor",      color: "#ff5a1f" },
  { id: "legal",      icon: "⚖️", labelKey: "legal",      color: "#6875f5" },
  { id: "industrial", icon: "🏗️", labelKey: "industrial", color: "#ff8900" },
  { id: "chat",       icon: "🤖", labelKey: "chat",       color: "#6875f5" },
];

export default function App() {
  const [lang, setLang] = useState<LangCode>("en");
  const [view, setView] = useState<View>("lang");
  const [ready, setReady] = useState(false);
  const [forceMobile, setForceMobile] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bridge_lang") as LangCode | null;
    if (saved && LANGUAGES.find((l) => l.code === saved)) {
      setLang(saved);
      setView("home");
    }
    setReady(true);
  }, []);

  function selectLang(code: LangCode) {
    setLang(code);
    localStorage.setItem("bridge_lang", code);
    setView("home");
  }

  if (!ready) return null;

  if (view === "lang") {
    return <LangSelect onSelect={selectLang} />;
  }

  const nav = (v: View) => setView(v);
  const langInfo = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div className={`min-h-screen bg-[#f0f2f5] flex ${forceMobile ? "force-mobile" : ""}`}>
      {/* ── PC 사이드바 (md 이상 + 모바일 강제 아닐 때만 표시) ── */}
      <aside className={`${forceMobile ? "hidden" : "hidden md:flex"} flex-col w-64 bg-[#1a1a2e] min-h-screen sticky top-0 flex-shrink-0`}>
        {/* Logo */}
        <div className="px-6 pt-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl">🌉</div>
            <div>
              <h1 className="text-white text-xl font-black tracking-tight leading-none">BRIDGE</h1>
              <p className="text-white/40 text-xs">브릿지 · 안산</p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => nav(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                view === item.id
                  ? "bg-white/15 text-white font-bold"
                  : "text-white/60 hover:bg-white/8 hover:text-white"
              }`}
            >
              <span className="text-xl w-7 text-center">{item.icon}</span>
              <span className="text-sm font-semibold">{t(item.labelKey, lang)}</span>
              {view === item.id && (
                <div className="ml-auto w-1.5 h-6 rounded-full" style={{ backgroundColor: item.color }} />
              )}
            </button>
          ))}
        </nav>

        {/* Language & emergency */}
        <div className="px-3 pb-6 space-y-2 border-t border-white/10 pt-4">
          <button
            onClick={() => setView("lang")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-all"
          >
            <span className="text-xl">{langInfo.flag}</span>
            <span className="text-sm font-semibold">{langInfo.native}</span>
          </button>
          {/* 모바일 뷰 전환 버튼 */}
          <button
            onClick={() => setForceMobile(!forceMobile)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-all"
          >
            <span className="text-xl">📱</span>
            <span className="text-sm font-semibold">
              {forceMobile ? "PC 뷰로 전환" : "모바일 뷰로 전환"}
            </span>
          </button>
          <a
            href="tel:112"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#e63946] text-white font-bold text-sm"
          >
            🚨 {t("emergency", lang)} 112
          </a>
        </div>
      </aside>

      {/* ── 메인 콘텐츠 ── */}
      <main className="flex-1 min-w-0">
        <div className={forceMobile ? "max-w-md mx-auto" : "w-full"}>
          {view === "home"       && <HomeView lang={lang} nav={nav} onChangeLang={() => setView("lang")} forceMobile={forceMobile} onToggleView={() => setForceMobile(!forceMobile)} />}
          {view === "safety"     && <SafetyView lang={lang} nav={nav} />}
          {view === "medical"    && <MedicalView lang={lang} nav={nav} />}
          {view === "labor"      && <LaborView lang={lang} nav={nav} />}
          {view === "legal"      && <LegalView lang={lang} nav={nav} />}
          {view === "industrial" && <IndustrialView lang={lang} nav={nav} />}
          {view === "chat"       && <ChatView lang={lang} nav={nav} />}
        </div>
      </main>
    </div>
  );
}

function LangSelect({ onSelect }: { onSelect: (c: LangCode) => void }) {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-6 max-w-lg mx-auto">
      <div className="mb-8 text-center">
        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-4xl">
          🌉
        </div>
        <h1 className="text-4xl font-black text-white tracking-tight">BRIDGE</h1>
        <p className="text-white/60 text-sm mt-1">브릿지 · 안산 외국인 주민</p>
      </div>

      <p className="text-white/80 text-base font-medium mb-6">
        {t("selectLanguage", "en")} / 언어 선택
      </p>

      <div className="w-full grid grid-cols-2 gap-3">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => onSelect(l.code)}
            className="bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 rounded-2xl p-4 flex items-center gap-3 text-left transition-all"
          >
            <span className="text-2xl">{l.flag}</span>
            <div>
              <div className="text-white font-bold text-sm leading-tight">{l.native}</div>
              <div className="text-white/50 text-xs">{l.name}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
