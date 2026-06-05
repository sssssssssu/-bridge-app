"use client";
import { type View } from "@/app/page";
import { type LangCode, t, SERVICE_DESC, SELECT_SERVICE, TO_PC_VIEW } from "@/lib/translations";
import { useViewMode } from "@/lib/viewContext";
import { GhostIcon, SafetyIcon, MedicalIcon, LaborIcon, LegalIcon, IndustrialIcon, AnsanIcon } from "@/components/Icons";

interface Props {
  lang: LangCode;
  nav: (v: View) => void;
  onChangeLang: () => void;
  onToggleView?: () => void;
}

const CATEGORIES = [
  { id: "safety" as View,     Icon: SafetyIcon,     labelKey: "safety",     descKey: "safety" },
  { id: "medical" as View,    Icon: MedicalIcon,    labelKey: "medical",    descKey: "medical" },
  { id: "labor" as View,      Icon: LaborIcon,      labelKey: "labor",      descKey: "labor" },
  { id: "legal" as View,      Icon: LegalIcon,      labelKey: "legal",      descKey: "legal" },
  { id: "industrial" as View, Icon: IndustrialIcon, labelKey: "industrial", descKey: "industrial" },
];

const LANG_LABELS: Partial<Record<LangCode, string>> = {
  ko: "🇰🇷 한국어", en: "🇺🇸 EN", zh: "🇨🇳 中文", vi: "🇻🇳 VI",
  mn: "🇲🇳 MN", id: "🇮🇩 ID", ms: "🇲🇾 MS", ru: "🇷🇺 RU",
  uz: "🇺🇿 UZ", th: "🇹🇭 TH", fil: "🇵🇭 FIL", si: "🇱🇰 SI",
  km: "🇰🇭 KM", ne: "🇳🇵 NE",
};

const POLICE_LABEL: Partial<Record<LangCode, string>> = {
  ko: "경찰신고", en: "Police", zh: "警察", vi: "Cảnh sát", mn: "Цагдаа",
  id: "Polisi", ms: "Polis", ru: "Полиция", uz: "Politsiya",
  th: "ตำรวจ", fil: "Pulis", si: "පොලිසිය", km: "ប៉ូលីស", ne: "पुलिस",
};

const FIRE_LABEL: Partial<Record<LangCode, string>> = {
  ko: "소방/구급", en: "Fire/EMS", zh: "消防/急救", vi: "Cứu hỏa", mn: "Гал унтраах",
  id: "Pemadam", ms: "Bomba", ru: "Пожарная", uz: "Yong'in",
  th: "ดับเพลิง", fil: "Bumbero", si: "ගිනිනිවීම", km: "ពន្លត់ភ្លើង", ne: "दमकल",
};

const ANSAN_LABEL: Partial<Record<LangCode, string>> = {
  ko: "안산 외국인\n지원센터", en: "Ansan Foreign\nSupport Center",
  zh: "安山外国人\n支援中心", vi: "Trung tâm hỗ\ntrợ Ansan",
  mn: "Ансан гадаадын\nиргэдийн төв", id: "Pusat Dukungan\nAsing Ansan",
  ms: "Pusat Sokongan\nAsing Ansan", ru: "Центр поддержки\nАнсана",
  uz: "Ansan xorijliklar\nqo'llab markazi", th: "ศูนย์สนับสนุน\nชาวต่างชาติอันซัน",
  fil: "Ansan Foreign\nSupport Center", si: "Ansan විදේශ\nසහාය මධ්‍යස්ථානය",
  km: "មជ្ឈមណ្ឌលគាំទ្រ\nជនបរទេស អានសាន", ne: "अन्सान विदेशी\nसहायता केन्द्र",
};

const CHAT_LABEL: Partial<Record<LangCode, string>> = {
  ko: "AI 챗봇 상담", en: "AI Chat", zh: "AI咨询", vi: "Tư vấn AI",
  mn: "AI Зөвлөх", id: "Konsultasi AI", ms: "Soal Jawab AI", ru: "ИИ Чат",
  uz: "AI Maslahat", th: "ปรึกษา AI", fil: "AI Konsulta", si: "AI සාකච්ඡාව",
  km: "ប្រឹក្សា AI", ne: "AI परामर्श",
};

const CHAT_DESC: Partial<Record<LangCode, string>> = {
  ko: "상황을 설명하면\n기관을 안내드려요!", en: "Describe your\nsituation!",
  zh: "描述您的情况\n我来为您指引！", vi: "Mô tả tình huống\ncủa bạn!",
  mn: "Нөхцөл байдлаа\nтайлбарлаарай!", id: "Ceritakan situasi\nAnda!",
  ms: "Ceritakan situasi\nanda!", ru: "Опишите вашу\nситуацию!",
  uz: "Vaziyatingizni\ntasvirlab bering!", th: "อธิบายสถานการณ์\nของคุณ!",
  fil: "Ilarawan ang iyong\nsituasyon!", si: "ඔබේ තත්ත්වය\nවිස්තර කරන්න!",
  km: "ពិពណ៌នា\nស្ថានភាពរបស់អ្នក!", ne: "आफ्नो अवस्था\nवर्णन गर्नुस्!",
};

export default function HomeView({ lang, nav, onChangeLang, onToggleView }: Props) {
  const { forceMobile } = useViewMode();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F2F3F8" }}>
      {/* 헤더 */}
      <div className="px-5 pt-10 pb-6 rounded-b-3xl"
        style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)" }}>
        {/* 상단 바 */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {onToggleView && (
              <button onClick={onToggleView}
                className={`${!forceMobile ? "md:hidden" : ""} w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm`}>
                🖥️
              </button>
            )}
          </div>
          <button onClick={onChangeLang}
            className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5 text-white text-sm font-medium">
            {LANG_LABELS[lang] ?? "🌐"}
          </button>
        </div>

        {/* 마스코트 + 타이틀 */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex-shrink-0">
            <GhostIcon size={64} />
          </div>
          <div>
            <h1 className="text-white text-xl font-black leading-tight whitespace-pre-line">
              {SELECT_SERVICE[lang] ?? SELECT_SERVICE.ko}
            </h1>
          </div>
        </div>

        {/* 긴급 전화 버튼 */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <a href="tel:112"
            className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 font-bold text-sm active:scale-95 transition-all"
            style={{ color: "#6C6EF0" }}>
            <span>📞</span> 112 {POLICE_LABEL[lang] ?? "Police"}
          </a>
          <a href="tel:119"
            className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 font-bold text-sm active:scale-95 transition-all text-red-500">
            <span>📞</span> 119 {FIRE_LABEL[lang] ?? "Fire/EMS"}
          </a>
        </div>
      </div>

      {/* 카테고리 그리드 */}
      <div className="flex-1 px-4 pt-5 pb-28">
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => nav(cat.id)}
              className="bg-white rounded-2xl p-4 text-left shadow-sm active:scale-95 transition-all flex flex-col gap-3">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "#EBEBFF" }}>
                <cat.Icon size={26} />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-base">{t(cat.labelKey, lang)}</div>
                <div className="text-gray-400 text-xs mt-1 leading-relaxed whitespace-pre-line">
                  {SERVICE_DESC[cat.descKey]?.[lang] ?? SERVICE_DESC[cat.descKey]?.en ?? ""}
                </div>
              </div>
            </button>
          ))}

          {/* 안산 센터 */}
          <a href="tel:1644-7111"
            className="bg-white rounded-2xl p-4 text-left shadow-sm active:scale-95 transition-all flex flex-col gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: "#EBEBFF" }}><AnsanIcon size={26} /></div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight whitespace-pre-line">
                {ANSAN_LABEL[lang] ?? ANSAN_LABEL.en}
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
        <div className="w-9 h-9 flex-shrink-0"><GhostIcon size={36} /></div>
        <div className="text-left">
          <div className="text-white font-bold text-xs">{CHAT_LABEL[lang] ?? "AI Chat"}</div>
          <div className="text-white/70 text-xs whitespace-pre-line">
            {CHAT_DESC[lang] ?? CHAT_DESC.en}
          </div>
        </div>
      </button>
    </div>
  );
}
