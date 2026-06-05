"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import { INDUSTRIAL_DEFINITION, INDUSTRIAL_STEPS, HAZARDS, INDUSTRIAL_CONTACTS } from "@/lib/viewTranslations";
import PageLayout, { Card, CallButton, SectionTitle } from "./PageLayout";
import { IndustrialIcon } from "./Icons";

interface Props { lang: LangCode; nav: (v: View) => void; }

export default function IndustrialView({ lang, nav }: Props) {
  const [openHazard, setOpenHazard] = useState<number | null>(null);
  const steps = INDUSTRIAL_STEPS[lang] ?? INDUSTRIAL_STEPS.en ?? [];

  return (
    <PageLayout title={t("industrial", lang)} icon={<IndustrialIcon size={24} />} color="#ff8900" lang={lang} nav={nav}>
      <Card className="bg-[#fff8ef] border border-[#ff8900]/20 !p-4">
        <p className="text-sm text-[#1a1a2e] font-medium leading-relaxed">
          {INDUSTRIAL_DEFINITION[lang]}
        </p>
      </Card>

      <SectionTitle>{t("industrialAccidentGuide", lang)}</SectionTitle>
      <Card>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "#ff8900" }}>{i + 1}</div>
              <span className="text-sm text-gray-700 pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </Card>

      <SectionTitle>{t("reportAccident", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          {INDUSTRIAL_CONTACTS.map((c, i) => (
            <CallButton key={i} number={c.number ?? ""} label={c.label[lang] ?? c.label.en ?? ""} color="#ff8900" />
          ))}
        </div>
      </Card>

      <SectionTitle>{t("workplaceSafety", lang)}</SectionTitle>
      {HAZARDS.map((h, i) => (
        <Card key={i} className="!p-0 overflow-hidden">
          <button onClick={() => setOpenHazard(openHazard === i ? null : i)}
            className="w-full flex items-center gap-3 p-4 text-left">
            <span className="text-2xl">{h.icon}</span>
            <div className="flex-1 font-bold text-[#1a1a2e] text-sm">{h.title[lang] ?? h.title.en}</div>
            <div className={`text-gray-400 text-xl transition-transform ${openHazard === i ? "rotate-90" : ""}`}>›</div>
          </button>
          {openHazard === i && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <ul className="space-y-2 mt-3">
                {(h.actions[lang] ?? h.actions.en ?? []).map((a, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="font-bold mt-0.5" style={{ color: "#ff8900" }}>•</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      ))}
    </PageLayout>
  );
}
