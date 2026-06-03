"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

const STEPS_KO = [
  "사고 발생 즉시 119에 연락하세요",
  "사업주에게 산재 사실을 알리세요",
  "병원에서 '업무상재해'임을 알리고 치료받으세요",
  "근로복지공단(1588-0075)에 산재 신청을 하세요",
  "필요 서류: 요양급여신청서, 재해경위서, 진단서",
];
const STEPS_EN = [
  "Call 119 immediately",
  "Notify your employer of the accident",
  "Tell the hospital it is a work-related injury",
  "Apply for industrial accident at KCOMWEL (1588-0075)",
  "Required docs: Treatment application, Accident report, Medical certificate",
];

const HAZARDS = [
  { icon: "⚙️", ko: "기계 끼임", en: "Machine Entanglement", actions_ko: ["즉시 기계 전원을 차단하세요", "119에 신고하세요", "함부로 빼내지 마세요"], actions_en: ["Cut power immediately", "Call 119", "Do NOT try to pull out"] },
  { icon: "🔥", ko: "화재", en: "Fire", actions_ko: ["대피 후 119 신고", "소화기 사용법 숙지", "지정된 비상구로 이동"], actions_en: ["Evacuate then call 119", "Know how to use fire extinguisher", "Use designated emergency exits"] },
  { icon: "⚡", ko: "감전", en: "Electric Shock", actions_ko: ["전원 차단 후 접근", "감전자 직접 접촉 금지", "119 신고"], actions_en: ["Cut power before approaching", "Do NOT touch the victim directly", "Call 119"] },
  { icon: "⬇️", ko: "추락", en: "Fall", actions_ko: ["안전모·안전대 착용 필수", "추락 사고 시 즉시 119 신고", "이동 금지, 현장 유지"], actions_en: ["Always wear helmet & harness", "Call 119 immediately if fall occurs", "Do not move — preserve the scene"] },
];

export default function IndustrialView({ lang, nav }: Props) {
  const [openHazard, setOpenHazard] = useState<number | null>(null);

  return (
    <PageLayout title={t("industrial", lang)} icon="🏗️" color="#ff8900" lang={lang} nav={nav}>
      <Card className="bg-[#fff8ef] border border-[#ff8900]/20 !p-4">
        <p className="text-sm text-[#1a1a2e] font-medium leading-relaxed">
          {lang === "ko"
            ? "산재(산업재해)란 업무 중 발생한 부상·질병·사망을 말하며, 외국인 근로자도 동일하게 보상받을 권리가 있습니다."
            : "Industrial accidents (work-related injury, illness, or death) — foreign workers have the same right to compensation as Korean workers."}
        </p>
      </Card>

      <SectionTitle>{t("industrialAccidentGuide", lang)}</SectionTitle>
      <Card>
        <ol className="space-y-3">
          {(lang === "ko" ? STEPS_KO : STEPS_EN).map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#ff8900] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <span className="text-sm text-gray-700 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </Card>

      <SectionTitle>{t("reportAccident", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="031-481-3300" label={lang === "ko" ? "안산시외국인주민상담지원센터 (10개 언어)" : "Ansan Foreign Residents Support Center (10 languages)"} color="#057a55" />
          <CallButton number="1577-0071" label={lang === "ko" ? "외국인력상담센터 (18개 언어, 안산 단원구)" : "Foreign Workers Consultation Center (18 languages)"} color="#0e9f6e" />
          <CallButton number="1588-0075" label={lang === "ko" ? "근로복지공단 고객센터" : "KCOMWEL Customer Center"} color="#ff8900" />
          <CallButton number="1345" label={lang === "ko" ? "외국인종합안내센터 (체류·산재 안내)" : "Korea Immigration & Info Center (24hrs)"} color="#6875f5" />
          <CallButton number="119" label={lang === "ko" ? "응급 신고 (119)" : "Emergency Call (119)"} color="#e63946" />
        </div>
      </Card>

      <SectionTitle>{t("workplaceSafety", lang)}</SectionTitle>
      {HAZARDS.map((h, i) => (
        <Card key={i} className="!p-0 overflow-hidden">
          <button
            onClick={() => setOpenHazard(openHazard === i ? null : i)}
            className="w-full flex items-center gap-3 p-4 text-left"
          >
            <span className="text-2xl">{h.icon}</span>
            <div className="flex-1 font-bold text-[#1a1a2e] text-sm">{lang === "ko" ? h.ko : h.en}</div>
            <div className={`text-gray-400 text-xl transition-transform ${openHazard === i ? "rotate-90" : ""}`}>›</div>
          </button>
          {openHazard === i && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <ul className="space-y-2 mt-3">
                {(lang === "ko" ? h.actions_ko : h.actions_en).map((a, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ff8900] font-bold mt-0.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      ))}

      <Card>
        <ExternalLink url="https://www.kosha.or.kr" label={lang === "ko" ? "한국산업안전보건공단" : "Korea Occupational Safety & Health Agency"} lang={lang} icon="⛑️" />
      </Card>
    </PageLayout>
  );
}
