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

export default function App() {
  const [lang, setLang] = useState<LangCode>("en");
  const [view, setView] = useState<View>("lang");
  const [ready, setReady] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col max-w-md mx-auto relative">
      {view === "home" && <HomeView lang={lang} nav={nav} onChangeLang={() => setView("lang")} />}
      {view === "safety" && <SafetyView lang={lang} nav={nav} />}
      {view === "medical" && <MedicalView lang={lang} nav={nav} />}
      {view === "labor" && <LaborView lang={lang} nav={nav} />}
      {view === "legal" && <LegalView lang={lang} nav={nav} />}
      {view === "industrial" && <IndustrialView lang={lang} nav={nav} />}
      {view === "chat" && <ChatView lang={lang} nav={nav} />}
    </div>
  );
}

function LangSelect({ onSelect }: { onSelect: (c: LangCode) => void }) {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-6 max-w-md mx-auto">
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
