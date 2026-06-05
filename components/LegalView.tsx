"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import { LEGAL_SITUATIONS, LEGAL_CONTACTS } from "@/lib/viewTranslations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

export default function LegalView({ lang, nav }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <PageLayout title={t("legal", lang)} icon="⚖️" color="#6875f5" lang={lang} nav={nav}>
      <SectionTitle>{t("legalGuide", lang)}</SectionTitle>
      {LEGAL_SITUATIONS.map((s) => (
        <Card key={s.id} className="!p-0 overflow-hidden">
          <button onClick={() => setOpen(open === s.id ? null : s.id)}
            className="w-full flex items-center gap-3 p-4 text-left">
            <span className="text-2xl">{s.icon}</span>
            <div className="flex-1 font-bold text-[#1a1a2e] text-sm">{s.title[lang] ?? s.title.en}</div>
            <div className={`text-gray-400 text-xl transition-transform ${open === s.id ? "rotate-90" : ""}`}>›</div>
          </button>
          {open === s.id && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <ol className="space-y-2 mt-3">
                {(s.steps[lang] ?? s.steps.en ?? []).map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6875f5] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
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
          {LEGAL_CONTACTS.map((c, i) => (
            <CallButton key={i} number={c.number} label={c.label[lang] ?? c.label.en ?? ""} color="#6875f5" />
          ))}
        </div>
      </Card>

      <Card>
        <ExternalLink url="https://www.klac.or.kr" label={lang === "ko" ? "대한법률구조공단 온라인" : "Korea Legal Aid Corp Online"} lang={lang} icon="⚖️" hint="chrome" />
      </Card>
    </PageLayout>
  );
}
