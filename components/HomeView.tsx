"use client";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import { useViewMode } from "@/lib/viewContext";

interface Props {
  lang: LangCode;
  nav: (v: View) => void;
  onChangeLang: () => void;
  onToggleView?: () => void;
}

const CATEGORIES = [
  {
    id: "safety" as View,
    icon: "⚠️",
    labelKey: "safety",
    desc_ko: "미리 안전 사고를\n예방하고 대응해요.",
    desc_en: "Prevent and respond\nto safety accidents.",
  },
  {
    id: "medical" as View,
    icon: "➕",
    labelKey: "medical",
    desc_ko: "병원, 응급 정보를\n제공해요.",
    desc_en: "Provides hospital\nand emergency info.",
  },
  {
    id: "labor" as View,
    icon: "💼",
    labelKey: "labor",
    desc_ko: "근로자의 권리 정보를\n제공해요.",
    desc_en: "Provides worker\nrights information.",
  },
  {
    id: "legal" as View,
    icon: "🏆",
    labelKey: "legal",
    desc_ko: "법률과 관련해\n상담하고 지원해요.",
    desc_en: "Consult and support\nlegal matters.",
  },
  {
    id: "industrial" as View,
    icon: "📦",
    labelKey: "industrial",
    desc_ko: "산재 신청 및 보상에\n대한 정보를 제공해요.",
    desc_en: "Info on industrial\naccident claims.",
  },
];

export default function HomeView({ lang, nav, onChangeLang, onToggleView }: Props) {
  const { forceMobile } = useViewMode();
  const isKo = lang === "ko";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F2F3F8" }}>
      {/* 헤더 */}
      <div className="px-5 pt-10 pb-6 rounded-b-3xl"
        style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)" }}>
        {/* 상단 바 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {onToggleView && (
              <button onClick={onToggleView}
                className={`${!forceMobile ? "md:hidden" : ""} w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm`}>
                🖥️
              </button>
            )}
          </div>
          <button onClick={onChangeLang}
            className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5 text-white text-sm font-medium">
            {lang === "ko" ? "🇰🇷 한국어" : lang === "en" ? "🇺🇸 EN" : lang === "zh" ? "🇨🇳 中文" :
             lang === "vi" ? "🇻🇳 VI" : lang === "mn" ? "🇲🇳 MN" : lang === "ru" ? "🇷🇺 RU" :
             lang === "id" ? "🇮🇩 ID" : lang === "th" ? "🇹🇭 TH" : lang === "fil" ? "🇵🇭 FIL" :
             lang === "uz" ? "🇺🇿 UZ" : lang === "ms" ? "🇲🇾 MS" : lang === "si" ? "🇱🇰 SI" :
             lang === "km" ? "🇰🇭 KM" : "🇳🇵 NE"}
          </button>
        </div>

        {/* 마스코트 + 타이틀 */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl flex-shrink-0">
            👻
          </div>
          <div>
            <h1 className="text-white text-xl font-black leading-tight">
              {isKo ? "필요한 서비스를\n선택하세요!" :
               lang === "en" ? "Select the service\nyou need!" :
               lang === "vi" ? "Chọn dịch vụ\nbạn cần!" :
               lang === "zh" ? "请选择您需要的\n服务！" :
               lang === "ru" ? "Выберите нужную\nвам услугу!" :
               "필요한 서비스를\n선택하세요!"}
            </h1>
          </div>
        </div>

        {/* 긴급 전화 버튼 */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <a href="tel:112"
            className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 font-bold text-sm active:scale-95 transition-all"
            style={{ color: "#6C6EF0" }}>
            <span>📞</span> 112 {isKo ? "경찰신고" : "Police"}
          </a>
          <a href="tel:119"
            className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 font-bold text-sm active:scale-95 transition-all text-red-500">
            <span>📞</span> 119 {isKo ? "소방/구급" : "Fire/EMS"}
          </a>
        </div>
      </div>

      {/* 카테고리 그리드 */}
      <div className="flex-1 px-4 pt-5 pb-28">
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => nav(cat.id)}
              className="bg-white rounded-2xl p-4 text-left shadow-sm active:scale-95 transition-all flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "#EBEBFF" }}>
                {cat.icon}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base">{t(cat.labelKey, lang)}</div>
                <div className="text-gray-400 text-xs mt-1 leading-relaxed whitespace-pre-line">
                  {isKo ? cat.desc_ko : cat.desc_en}
                </div>
              </div>
            </button>
          ))}

          {/* 안산 센터 */}
          <a href="tel:1644-7111"
            className="bg-white rounded-2xl p-4 text-left shadow-sm active:scale-95 transition-all flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: "#EBEBFF" }}>🏢</div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight">
                {isKo ? "안산 외국인\n지원센터" : "Ansan\nSupport Center"}
              </div>
              <div className="text-gray-400 text-xs mt-1">1644-7111</div>
            </div>
          </a>
        </div>
      </div>

      {/* AI 챗봇 플로팅 버튼 */}
      <button onClick={() => nav("chat")}
        className="fixed bottom-6 right-4 z-50 rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2"
        style={{ backgroundColor: "#6C6EF0", boxShadow: "0 8px 32px rgba(108,110,240,0.4)" }}>
        <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center text-lg">👻</div>
        <div className="text-left">
          <div className="text-white font-bold text-xs">{t("chat", lang)}</div>
          <div className="text-white/70 text-xs">
            {isKo ? "상황을 설명하면\n기관을 안내드려요!" : "Describe your\nsituation!"}
          </div>
        </div>
      </button>
    </div>
  );
}
