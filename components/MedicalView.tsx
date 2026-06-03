"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

const SYMPTOMS = [
  { ko: "머리가 아파요", en: "I have a headache" },
  { ko: "열이 나요", en: "I have a fever" },
  { ko: "배가 아파요", en: "I have a stomachache" },
  { ko: "숨쉬기가 힘들어요", en: "I have difficulty breathing" },
  { ko: "가슴이 아파요", en: "I have chest pain" },
  { ko: "다쳤어요", en: "I am injured" },
  { ko: "어지러워요", en: "I feel dizzy" },
  { ko: "구역질이 나요", en: "I feel nauseous" },
  { ko: "약이 필요해요", en: "I need medicine" },
  { ko: "임신했어요", en: "I am pregnant" },
];

function nhisUrl(lang: LangCode) {
  if (lang === 'en') return 'https://www.nhis.or.kr/english/index.do';
  if (lang === 'zh') return 'https://www.nhis.or.kr/chinese/index.do';
  return 'https://www.nhis.or.kr/nhis/index.do';
}

export default function MedicalView({ lang, nav }: Props) {
  const [copied, setCopied] = useState<number | null>(null);

  function copy(text: string, i: number) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(i);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <PageLayout title={t("medical", lang)} icon="🏥" color="#0e9f6e" lang={lang} nav={nav}>
      <SectionTitle>{t("medicalInterpreter", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="1588-5700" label={lang === "ko" ? "외국인환자 지원센터" : "Foreign Patient Support Center"} color="#0e9f6e" />
          <CallButton number="1644-7111" label={lang === "ko" ? "안산시외국인주민상담지원센터" : "Ansan Foreign Residents Support"} color="#057a55" />
        </div>
      </Card>

      <SectionTitle>{lang === "ko" ? "증상 표현 카드" : "Symptom Phrase Cards"}</SectionTitle>
      <p className="text-xs text-gray-500 -mt-1">
        {lang === "ko" ? "의사에게 보여주세요 →" : "Show this to the doctor →"}
      </p>
      {SYMPTOMS.map((s, i) => (
        <button
          key={i}
          onClick={() => copy(s.ko, i)}
          className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3 text-left active:bg-[#f0f2f5]"
        >
          <div>
            <div className="font-bold text-[#1a1a2e] text-sm">{s.en}</div>
            <div className="text-[#0e9f6e] text-base font-bold mt-0.5">{s.ko}</div>
          </div>
          <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0">
            {copied === i ? `✓` : t("copy", lang)}
          </div>
        </button>
      ))}

      <SectionTitle>{t("hospitalSearch", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <ExternalLink
            url="https://www.hira.or.kr/ra/hosp/getHealthMap.do?pgmid=HIRAA030002010000"
            label={lang === "ko" ? "건강보험심사평가원 병원 찾기" : "HIRA Hospital Search"}
            lang={lang}
            icon="🔍"
            hint="chrome"
          />
          <ExternalLink
            url="https://www.e-gen.or.kr/egen/search_emergency_room.do"
            label={lang === "ko" ? "응급실 위치 찾기 (e-gen)" : "Emergency Room Finder (e-gen)"}
            lang={lang}
            icon="🚨"
            hint="chrome"
          />
          <CallButton number="1644-2000" label={lang === "ko" ? "건강보험심사평가원 콜센터" : "HIRA Call Center"} color="#0e9f6e" />
        </div>
      </Card>

      <SectionTitle>{lang === "ko" ? "외국인 의료 지원 제도" : "Medical Support for Foreigners"}</SectionTitle>
      <Card>
        <ExternalLink
          url={nhisUrl(lang)}
          label={lang === "ko" ? "건강보험 가입 안내 (국민건강보험공단)" : "Health Insurance Guide (NHIS)"}
          lang={lang}
          icon="📄"
          hint={lang !== 'ko' && lang !== 'en' && lang !== 'zh' ? 'chrome' : undefined}
        />
      </Card>
    </PageLayout>
  );
}
