"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

const SITUATIONS = [
  {
    id: "assault",
    icon: "🆘",
    ko: "폭행 피해를 당했을 때",
    en: "When Assaulted",
    steps_ko: ["안전한 곳으로 이동하세요", "112에 신고하세요", "병원에서 진단서를 받으세요", "안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
    steps_en: ["Move to a safe place", "Call 112", "Get a medical certificate from a hospital", "Contact Ansan Foreign Residents Support (1644-7111)"],
  },
  {
    id: "fraud",
    icon: "📝",
    ko: "사기·계약 문제",
    en: "Fraud or Contract Issues",
    steps_ko: ["계약서와 관련 서류를 보관하세요", "대한법률구조공단(132)에 무료 상담을 받으세요", "안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
    steps_en: ["Keep all contracts and documents", "Get free consultation from KLAC (132)", "Contact Ansan Foreign Residents Support (1644-7111)"],
  },
  {
    id: "visa",
    icon: "🛂",
    ko: "체류·비자 문제",
    en: "Visa & Residency Issues",
    steps_ko: ["외국인종합안내센터(1345)에 문의하세요", "안산출입국외국인사무소에 방문하세요", "체류 기간 초과 전 반드시 연장 신청하세요"],
    steps_en: ["Call Korea Immigration Service (1345)", "Visit Ansan Immigration Office", "Apply for extension BEFORE your visa expires"],
  },
  {
    id: "harassment",
    icon: "🛡️",
    ko: "성희롱·차별 피해",
    en: "Sexual Harassment or Discrimination",
    steps_ko: ["안전한 곳으로 이동하세요", "국가인권위원회(1331)에 신고하세요", "안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
    steps_en: ["Move to a safe place", "Report to National Human Rights Commission (1331)", "Contact Ansan Foreign Residents Support (1644-7111)"],
  },
];

export default function LegalView({ lang, nav }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <PageLayout title={t("legal", lang)} icon="⚖️" color="#6875f5" lang={lang} nav={nav}>
      <SectionTitle>{t("legalGuide", lang)}</SectionTitle>
      {SITUATIONS.map((s) => (
        <Card key={s.id} className="!p-0 overflow-hidden">
          <button
            onClick={() => setOpen(open === s.id ? null : s.id)}
            className="w-full flex items-center gap-3 p-4 text-left"
          >
            <span className="text-2xl">{s.icon}</span>
            <div className="flex-1 font-bold text-[#1a1a2e] text-sm">{lang === "ko" ? s.ko : s.en}</div>
            <div className={`text-gray-400 text-xl transition-transform ${open === s.id ? "rotate-90" : ""}`}>›</div>
          </button>
          {open === s.id && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <ol className="space-y-2 mt-3">
                {(lang === "ko" ? s.steps_ko : s.steps_en).map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6875f5] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </Card>
      ))}

      <SectionTitle>{t("legalConsult", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="1644-7111" label={lang === "ko" ? "안산시외국인주민상담지원센터" : "Ansan Foreign Residents Support"} color="#057a55" />
          <CallButton number="132" label={lang === "ko" ? "대한법률구조공단 (무료 상담)" : "Korea Legal Aid Corp (Free)"} color="#6875f5" />
          <CallButton number="1345" label={lang === "ko" ? "외국인종합안내센터 (24시간)" : "Immigration Info Center (24hrs)"} color="#1a56db" />
          <CallButton number="1331" label={lang === "ko" ? "국가인권위원회" : "National Human Rights Commission"} color="#e63946" />
        </div>
      </Card>

      <Card>
        <ExternalLink url="https://www.klac.or.kr" label={lang === "ko" ? "대한법률구조공단 온라인" : "Korea Legal Aid Corp Online"} lang={lang} icon="⚖️" hint="chrome" />
      </Card>
    </PageLayout>
  );
}
