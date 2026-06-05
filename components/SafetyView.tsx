"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t, getEmergencyPhrase } from "@/lib/translations";
import { SAFETY_GUIDE_TITLE, FIRE_GUIDE, QUAKE_GUIDE, SITE_LANG_NOTE } from "@/lib/viewTranslations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";
import { SafetyIcon } from "./Icons";

interface Props { lang: LangCode; nav: (v: View) => void; }

const PHRASE_IDS = ["need_ambulance", "fire", "assault", "accident"];

function fireUrl(lang: LangCode) {
  return lang === 'ko'
    ? 'https://www.safekorea.go.kr/safekorea-kor/acts/nacts/action-guide.do?&category=fires&actsHeaderTitle=%ED%99%94%EC%9E%AC&menuSn=4'
    : 'https://eng.safekorea.go.kr/safekorea-eng/acts/nacts/action-guide.do?&category=fire&actsHeaderTitle=%ED%99%94%EC%9E%AC&menuSn=1004';
}
function quakeUrl(lang: LangCode) {
  return lang === 'ko'
    ? 'https://www.safekorea.go.kr/safekorea-kor/acts/nacts/action-guide.do?&category=earthQuake&actsHeaderTitle=%EC%A7%80%EC%A7%84&menuSn=4'
    : 'https://eng.safekorea.go.kr/safekorea-eng/acts/nacts/action-guide.do?&category=earthQuake&actsHeaderTitle=%EC%A7%80%EC%A7%84&menuSn=1004';
}

export default function SafetyView({ lang, nav }: Props) {
  const [location, setLocation] = useState<string | null>(null);
  const [locLoading, setLocLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  function getLocation() {
    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(`https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`);
        setLocLoading(false);
      },
      () => setLocLoading(false)
    );
  }

  function copy(text: string, id: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <PageLayout title={t("safety", lang)} icon={<SafetyIcon size={24} />} color="#e63946" lang={lang} nav={nav}>
      <SectionTitle>{lang === "ko" ? "긴급 신고" : t("emergency", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="112" label={t("callPolice", lang)} color="#1a56db" />
          <CallButton number="119" label={t("callFire", lang)} color="#e63946" />
        </div>
      </Card>

      <SectionTitle>{t("shareLocation", lang)}</SectionTitle>
      <Card>
        {!location ? (
          <button onClick={getLocation} disabled={locLoading}
            className="w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 active:opacity-80"
            style={{ backgroundColor: "#1a1a2e" }}>
            {locLoading ? "⏳" : "📍"} {t("shareLocation", lang)}
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 break-all">{location}</p>
            <div className="flex gap-2">
              <button onClick={() => copy(location, "loc")}
                className="flex-1 py-2 rounded-xl text-sm font-semibold"
                style={{ background: "#EBEBFF", color: "#6C6EF0" }}>
                {copied === "loc" ? t("copied", lang) : t("copy", lang)}
              </button>
              <a href={location} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#0e9f6e] text-white font-semibold text-sm text-center">
                Google Maps
              </a>
            </div>
          </div>
        )}
      </Card>

      <SectionTitle>{t("emergencyPhrases", lang)}</SectionTitle>
      {PHRASE_IDS.map((id) => {
        const phrase = getEmergencyPhrase(id, lang);
        return (
          <Card key={id}>
            <div className="mb-2">
              <p className="font-bold text-sm" style={{ color: "#6C6EF0" }}>{phrase.native}</p>
              {lang !== "ko" && <p className="text-gray-400 text-xs mt-1">{phrase.ko}</p>}
            </div>
            <button onClick={() => copy(phrase.native, id)}
              className="w-full py-2 rounded-xl text-sm font-semibold"
              style={{ background: "#EBEBFF", color: "#6C6EF0" }}>
              {copied === id ? `✓ ${t("copied", lang)}` : t("copy", lang)}
            </button>
          </Card>
        );
      })}

      <SectionTitle>{SAFETY_GUIDE_TITLE[lang]}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <ExternalLink url={fireUrl(lang)} label={FIRE_GUIDE[lang]} lang={lang}
            hint={lang !== 'ko' ? SITE_LANG_NOTE[lang] : undefined} />
          <ExternalLink url={quakeUrl(lang)} label={QUAKE_GUIDE[lang]} lang={lang}
            hint={lang !== 'ko' ? SITE_LANG_NOTE[lang] : undefined} />
        </div>
      </Card>
    </PageLayout>
  );
}
