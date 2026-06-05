"use client";
import { type View } from "@/app/page";
import { type LangCode, t, googleTranslateUrl, LANG_SELECTOR_NOTE } from "@/lib/translations";
import { useViewMode } from "@/lib/viewContext";

interface Props {
  title: string;
  icon: string;
  color: string;
  lang: LangCode;
  nav: (v: View) => void;
  children: React.ReactNode;
}

export default function PageLayout({ title, icon, color, lang, nav, children }: Props) {
  const { forceMobile } = useViewMode();
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F2F3F8" }}>
      {/* 헤더 */}
      <div className="sticky top-0 z-30 px-5 pt-5 pb-4 rounded-b-3xl" style={{ background: "linear-gradient(160deg, #7B7DF5 0%, #5B5EE8 100%)" }}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => nav("home")}
            className={`${!forceMobile ? "md:hidden" : ""} w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold flex-shrink-0`}
          >
            ‹
          </button>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
            <h1 className="text-white text-lg font-black truncate">{title}</h1>
          </div>
        </div>
      </div>

      {/* 긴급 플로팅 버튼 */}
      <a
        href="tel:112"
        className={`${!forceMobile ? "md:hidden" : ""} fixed bottom-6 right-4 z-50 text-white rounded-2xl px-4 py-3 flex items-center gap-2 font-bold text-sm`}
        style={{ backgroundColor: "#6C6EF0", boxShadow: "0 8px 24px rgba(108,110,240,0.45)" }}
      >
        <span>🚨</span>
        {t("emergency", lang)} 112
      </a>

      <div className="flex-1 px-4 pt-4 pb-28 space-y-3">
        {children}
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CallButton({ number, label, color = "#1a1a2e" }: { number: string; label: string; color?: string }) {
  return (
    <a
      href={`tel:${number}`}
      className="flex items-center gap-3 p-3 rounded-xl border-2 transition-all active:scale-95"
      style={{ borderColor: color, backgroundColor: `${color}10` }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 text-white" style={{ backgroundColor: color }}>
        📞
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm truncate" style={{ color }}>{label}</div>
        <div className="text-gray-500 text-xs font-mono">{number}</div>
      </div>
      <div className="text-lg" style={{ color }}>›</div>
    </a>
  );
}

// hint: 'chrome' = show chrome auto-translate hint, 'site' = show site has lang selector, string = custom note
export function ExternalLink({ url, label, lang, icon = "🔗", hint }: {
  url: string; label: string; lang: LangCode; icon?: string;
  hint?: 'chrome' | 'site' | string;
}) {
  const isKo = lang === 'ko';

  const chromeHint: Partial<Record<LangCode, string>> = {
    en: '🌐 Chrome browser will offer automatic translation',
    zh: '🌐 Chrome浏览器将自动提供翻译',
    vi: '🌐 Chrome sẽ tự động đề nghị dịch trang này',
    mn: '🌐 Chrome хөтөч автоматаар орчуулга санал болгоно',
    id: '🌐 Chrome akan otomatis menawarkan terjemahan',
    ms: '🌐 Chrome akan menawarkan terjemahan secara automatik',
    ru: '🌐 Chrome автоматически предложит перевод страницы',
    uz: "🌐 Chrome avtomatik tarjima taklif qiladi",
    th: '🌐 Chrome จะเสนอการแปลอัตโนมัติ',
    fil: '🌐 Awtomatikong mag-aalok ng pagsasalin ang Chrome',
    si: '🌐 Chrome ස්වයංක්‍රීයව පරිවර්තනය ඉදිරිපත් කරයි',
    km: '🌐 Chrome នឹងស្នើការបកប្រែដោយស្វ័យប្រវត្តិ',
    ne: '🌐 Chrome ले स्वचालित अनुवाद प्रस्ताव गर्नेछ',
  };

  const noteText = hint === 'chrome'
    ? (!isKo ? chromeHint[lang] : undefined)
    : hint === 'site'
    ? (!isKo ? LANG_SELECTOR_NOTE[lang] : undefined)
    : hint;

  return (
    <div className="rounded-xl bg-[#f0f2f5] overflow-hidden">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 transition-all active:bg-[#e4e6e9]"
      >
        <div className="w-10 h-10 rounded-xl bg-[#1a1a2e]/10 flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-[#1a1a2e] truncate">{label}</div>
          <div className="text-gray-400 text-xs truncate">{url}</div>
        </div>
        <div className="text-gray-400 text-lg">›</div>
      </a>
      {noteText && (
        <div className={`flex items-start gap-1.5 px-3 py-2 border-t border-[#e4e6e9] text-xs leading-snug ${hint === 'site' ? 'bg-amber-50 text-amber-800' : 'bg-blue-50 text-blue-700'}`}>
          <span>{noteText}</span>
        </div>
      )}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider pt-2 pb-1">{children}</h2>;
}
