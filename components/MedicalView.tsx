"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import { SHOW_DOCTOR, FOREIGN_PATIENT_CENTER, ANSAN_SUPPORT, SYMPTOMS, HIRA_LABEL, EGEN_LABEL, HIRA_CALL, NHIS_LABEL } from "@/lib/viewTranslations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";
import { MedicalIcon } from "./Icons";

interface Props { lang: LangCode; nav: (v: View) => void; }

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
    <PageLayout title={t("medical", lang)} icon={<MedicalIcon size={24} />} color="#0e9f6e" lang={lang} nav={nav}>
      <SectionTitle>{t("medicalInterpreter", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="1588-5700" label={FOREIGN_PATIENT_CENTER[lang]} color="#0e9f6e" />
          <CallButton number="1644-7111" label={ANSAN_SUPPORT[lang]} color="#057a55" />
        </div>
      </Card>

      <SectionTitle>{lang === "ko" ? "증상 표현 카드" : t("medicalInterpreter", lang)}</SectionTitle>
      <p className="text-xs text-gray-500 -mt-1">{SHOW_DOCTOR[lang]}</p>
      {SYMPTOMS.map((s, i) => {
        const nativeText = lang === 'ko' ? s.ko : (s.native[lang] ?? s.native.en ?? s.ko);
        return (
          <button key={i} onClick={() => copy(nativeText, i)}
            className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3 text-left active:bg-[#f0f2f5]">
            <div>
              <div className="font-bold text-sm" style={{ color: "#6C6EF0" }}>{nativeText}</div>
              {lang !== 'ko' && <div className="text-[#0e9f6e] text-base font-bold mt-0.5">{s.ko}</div>}
            </div>
            <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg flex-shrink-0">
              {copied === i ? `✓` : t("copy", lang)}
            </div>
          </button>
        );
      })}

      <SectionTitle>{t("hospitalSearch", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <ExternalLink url="https://www.hira.or.kr/ra/hosp/getHealthMap.do?pgmid=HIRAA030002010000" label={HIRA_LABEL[lang]} lang={lang} icon="🔍" hint="chrome" />
          <ExternalLink url="https://www.e-gen.or.kr/egen/search_emergency_room.do" label={EGEN_LABEL[lang]} lang={lang} icon="🚨" hint="chrome" />
          <CallButton number="1644-2000" label={HIRA_CALL[lang]} color="#0e9f6e" />
        </div>
      </Card>

      <SectionTitle>{lang === "ko" ? "외국인 의료 지원 제도" : t("medicalInterpreter", lang)}</SectionTitle>
      <Card>
        <ExternalLink url={nhisUrl(lang)} label={NHIS_LABEL[lang]} lang={lang} icon="📄"
          hint={lang !== 'ko' && lang !== 'en' && lang !== 'zh' ? 'chrome' : undefined} />
      </Card>
    </PageLayout>
  );
}
