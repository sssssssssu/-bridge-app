"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

const PHRASES: Record<string, { ko: string; en: string }> = {
  need_ambulance: { ko: "구급차가 필요합니다.", en: "I need an ambulance." },
  fire: { ko: "불이 났습니다.", en: "There is a fire." },
  assault: { ko: "폭행을 당하고 있습니다. 도와주세요.", en: "I am being assaulted. Please help me." },
  accident: { ko: "교통사고가 났습니다.", en: "There has been a traffic accident." },
};

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
        const url = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        setLocation(url);
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
    <PageLayout title={t("safety", lang)} icon="🔴" color="#e63946" lang={lang} nav={nav}>
      <SectionTitle>{lang === "ko" ? "긴급 신고" : "Emergency Call"}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="112" label={t("callPolice", lang)} color="#1a56db" />
          <CallButton number="119" label={t("callFire", lang)} color="#e63946" />
          <CallButton number="1588-0112" label={t("multilingualPolice", lang)} color="#6875f5" />
        </div>
      </Card>

      <SectionTitle>{t("shareLocation", lang)}</SectionTitle>
      <Card>
        {!location ? (
          <button
            onClick={getLocation}
            disabled={locLoading}
            className="w-full py-3 rounded-xl bg-[#1a1a2e] text-white font-bold text-sm flex items-center justify-center gap-2 active:opacity-80"
          >
            {locLoading ? "⏳" : "📍"} {t("shareLocation", lang)}
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 break-all">{location}</p>
            <div className="flex gap-2">
              <button
                onClick={() => copy(location, "loc")}
                className="flex-1 py-2 rounded-xl bg-[#1a1a2e]/10 text-[#1a1a2e] font-semibold text-sm"
              >
                {copied === "loc" ? t("copied", lang) : t("copy", lang)}
              </button>
              <a
                href={location}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-[#0e9f6e] text-white font-semibold text-sm text-center"
              >
                Google Maps
              </a>
            </div>
          </div>
        )}
      </Card>

      <SectionTitle>{t("emergencyPhrases", lang)}</SectionTitle>
      {Object.entries(PHRASES).map(([id, phrase]) => (
        <Card key={id}>
          <div className="mb-2">
            <p className="font-bold text-sm text-[#1a1a2e]">{phrase.en}</p>
            <p className="text-gray-500 text-sm mt-0.5">{phrase.ko}</p>
          </div>
          <button
            onClick={() => copy(phrase.en, id)}
            className="w-full py-2 rounded-xl bg-[#f0f2f5] text-[#1a1a2e] font-semibold text-sm active:bg-[#e4e6e9]"
          >
            {copied === id ? `✓ ${t("copied", lang)}` : t("copy", lang)}
          </button>
        </Card>
      ))}

      <SectionTitle>{lang === "ko" ? "생활 안전 가이드" : "Safety Guide"}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <ExternalLink
            url={fireUrl(lang)}
            label={lang === "ko" ? "🔥 화재 행동요령" : "🔥 Fire Emergency Guide"}
            lang={lang}
            hint="site"
          />
          <ExternalLink
            url={quakeUrl(lang)}
            label={lang === "ko" ? "🌍 지진 행동요령" : "🌍 Earthquake Guide"}
            lang={lang}
            hint="site"
          />
        </div>
      </Card>
    </PageLayout>
  );
}
