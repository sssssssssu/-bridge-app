"use client";
import { type View } from "@/app/page";
import { type LangCode, t, LANGUAGES } from "@/lib/translations";
import { useViewMode } from "@/lib/viewContext";

interface Props {
  lang: LangCode;
  nav: (v: View) => void;
  onChangeLang: () => void;
  forceMobile?: boolean;
  onToggleView?: () => void;
}

const CATEGORIES = [
  { id: "safety" as View,     icon: "🔴", label: "safety",     color: "#e63946", bg: "#fff0f0" },
  { id: "medical" as View,    icon: "🏥", label: "medical",    color: "#0e9f6e", bg: "#f0fff8" },
  { id: "labor" as View,      icon: "💼", label: "labor",      color: "#ff5a1f", bg: "#fff4ef" },
  { id: "legal" as View,      icon: "⚖️", label: "legal",      color: "#6875f5", bg: "#f3f0ff" },
  { id: "industrial" as View, icon: "🏗️", label: "industrial", color: "#ff8900", bg: "#fff8ef" },
];

const EMERGENCY = [
  { number: "112", label: "callPolice", color: "#1a56db", icon: "🚔" },
  { number: "119", label: "callFire",   color: "#e63946", icon: "🚑" },
];

export default function HomeView({ lang, nav, onChangeLang, onToggleView }: Props) {
  const { forceMobile } = useViewMode();
  const langInfo = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      {/* Header */}
      <div className="bg-[#1a1a2e] px-5 pt-10 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl">🌉</div>
            <div>
              <h1 className="text-white text-xl font-black tracking-tight leading-none">BRIDGE</h1>
              <p className="text-white/50 text-xs">브릿지 · 안산</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* 모바일에서 PC뷰 전환 버튼 */}
            {onToggleView && (
              // PC 뷰(사이드바 있음)일 때는 숨김, 모바일이거나 forceMobile일 때 표시
              <button
                onClick={onToggleView}
                title={forceMobile ? "PC 뷰로 전환" : "PC 뷰로 전환"}
                className={`${!forceMobile ? "md:hidden" : ""} flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-2 text-white/80 text-sm font-medium`}
              >
                <span>🖥️</span>
              </button>
            )}
            <button
              onClick={onChangeLang}
              className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 text-white/80 text-sm font-medium"
            >
              <span>{langInfo.flag}</span>
              <span>{langInfo.native}</span>
            </button>
          </div>
        </div>

        {/* Emergency quick dial */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          {EMERGENCY.map((e) => (
            <a
              key={e.number}
              href={`tel:${e.number}`}
              className="rounded-2xl p-3 flex items-center gap-2 transition-all active:scale-95"
              style={{ backgroundColor: e.color }}
            >
              <span className="text-2xl">{e.icon}</span>
              <div>
                <div className="text-white text-xs font-medium leading-tight opacity-80">
                  {t(e.label, lang).split("(")[0].trim()}
                </div>
                <div className="text-white text-2xl font-black leading-none">{e.number}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Chat shortcut */}
      <button
        onClick={() => nav("chat")}
        className="mx-4 mt-4 bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 border-2 border-[#6875f5]/20 text-left"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#6875f5] flex items-center justify-center text-2xl flex-shrink-0">🤖</div>
        <div className="flex-1">
          <div className="font-bold text-[#1a1a2e] text-sm">{t("chat", lang)}</div>
          <div className="text-gray-500 text-xs mt-0.5">
            {lang === "ko" ? "상황을 설명하면 도움이 되는 기관을 안내해드립니다" :
             lang === "vi" ? "Mô tả tình huống, tôi sẽ hướng dẫn bạn đến cơ quan phù hợp" :
             lang === "zh" ? "描述您的情况，我将为您提供相关机构指导" :
             "Describe your situation, I'll guide you to the right agency"}
          </div>
        </div>
        <div className="text-gray-400 text-xl">›</div>
      </button>

      {/* Categories */}
      <div className="px-4 pt-4 pb-8 grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => nav(cat.id)}
            className="rounded-2xl p-4 shadow-sm flex flex-col items-start gap-3 transition-all active:scale-95 text-left"
            style={{ backgroundColor: cat.bg, border: `1.5px solid ${cat.color}20` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
              style={{ backgroundColor: cat.color }}
            >
              {cat.icon}
            </div>
            <div
              className="text-base font-black leading-tight"
              style={{ color: cat.color }}
            >
              {t(cat.label, lang)}
            </div>
          </button>
        ))}

        {/* Ansan Center call card */}
        <a
          href="tel:1644-7111"
          className="col-span-2 bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-[#057a55]/20 transition-all active:scale-95"
        >
          <div className="w-12 h-12 rounded-xl bg-[#057a55] flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
          <div className="flex-1 min-w-0">
            <div className="text-[#057a55] font-bold text-sm leading-tight">
              {lang === "ko" ? "안산시외국인주민상담지원센터" : "Ansan Foreign Residents Support Center"}
            </div>
            <div className="text-gray-500 text-xs font-mono mt-0.5">1644-7111</div>
          </div>
          <div className="text-[#057a55] text-xl">📞</div>
        </a>

        {/* Ansan Global website */}
        <a
          href="https://www.ansan.go.kr/global/main/main.do"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-[#057a55]/20 transition-all active:scale-95"
        >
          <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-2xl flex-shrink-0">🌏</div>
          <div className="flex-1 min-w-0">
            <div className="text-[#1a1a2e] font-bold text-sm leading-tight">
              {lang === "ko" ? "안산시 외국인지원본부 홈페이지" : "Ansan City Global Website"}
            </div>
            <div className="text-gray-400 text-xs mt-0.5">ansan.go.kr/global</div>
          </div>
          <div className="text-gray-400 text-xl">🔗</div>
        </a>
      </div>
    </div>
  );
}
