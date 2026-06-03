"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";

interface Props { lang: LangCode; nav: (v: View) => void; }

const MIN_WAGE_2026 = 10320;

const LABOR_LAWS = [
  {
    icon: "💰", ko: "최저임금", en: "Minimum Wage",
    detail_ko: "시간당 10,320원 (2026년 기준)",
    detail_en: "₩10,320/hour (2026 standard)",
  },
  {
    icon: "☕", ko: "휴게시간", en: "Break Time",
    detail_ko: "4시간 근무 → 30분 이상 / 8시간 근무 → 1시간 이상",
    detail_en: "4hrs work → 30min+ / 8hrs work → 1hr+ break",
  },
  {
    icon: "🌙", ko: "연장·야간·휴일 수당", en: "Overtime / Night / Holiday Pay",
    detail_ko: "기본 시급의 50% 가산 지급 (연장근무·야간·휴일 공통)",
    detail_en: "50% extra pay on top of base wage (overtime/night/holiday)",
  },
  {
    icon: "🏖️", ko: "연차 유급휴가", en: "Annual Paid Leave",
    detail_ko: "1년 근무 시 15일 / 3년 이상부터 2년마다 1일 추가 (최대 25일)",
    detail_en: "15 days after 1yr / +1 day every 2yrs from 3rd year (max 25)",
  },
  {
    icon: "💵", ko: "퇴직금", en: "Severance Pay",
    detail_ko: "1년 이상 근무 후 퇴직 시 30일분 평균임금 지급",
    detail_en: "30 days avg wage per year worked (after 1+ year)",
  },
  {
    icon: "🛡️", ko: "주휴수당", en: "Weekly Holiday Pay",
    detail_ko: "주 15시간 이상 근무 시 1일분 유급 주휴일 보장",
    detail_en: "Paid day off per week if working 15+ hours/week",
  },
];

const TAX_RATES: Record<string, number> = {
  none: 0,
  simple: 0.033, // 3.3% (사업소득세)
  standard: 0.09, // 약 9% 4대보험+소득세
};

export default function LaborView({ lang, nav }: Props) {
  const [mode, setMode] = useState<"hourly" | "monthly">("hourly");
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [extraHours, setExtraHours] = useState("");
  const [includeWeeklyHoliday, setIncludeWeeklyHoliday] = useState(true);
  const [tax, setTax] = useState("none");
  const [trainee, setTrainee] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const wageNum = parseFloat(wage) || 0;
  const hoursNum = parseFloat(hours) || 0;
  const daysNum = parseFloat(days) || 0;
  const extraNum = parseFloat(extraHours) || 0;

  const effectiveMinWage = trainee ? Math.round(MIN_WAGE_2026 * 0.9) : MIN_WAGE_2026;
  const belowMin = mode === "hourly" && wageNum > 0 && wageNum < effectiveMinWage;

  const weeklyHours = hoursNum * daysNum;
  const monthlyRegular = weeklyHours * (52 / 12);
  const hourlyWage = mode === "hourly" ? wageNum : (wageNum / (monthlyRegular || 1));

  const monthlyBase = mode === "hourly" ? hourlyWage * monthlyRegular : wageNum;
  const overtimePay = extraNum * (52 / 12) * hourlyWage * 1.5;
  const weeklyHolidayPay = includeWeeklyHoliday && weeklyHours >= 15
    ? hoursNum * (52 / 12) * hourlyWage : 0;
  const grossTotal = monthlyBase + overtimePay + weeklyHolidayPay;
  const taxAmount = grossTotal * (TAX_RATES[tax] ?? 0);
  const netTotal = grossTotal - taxAmount;

  const isKo = lang === 'ko';

  function calc() { setCalculated(true); }
  function reset() { setWage(""); setHours(""); setDays(""); setExtraHours(""); setCalculated(false); }

  return (
    <PageLayout title={t("labor", lang)} icon="💼" color="#ff5a1f" lang={lang} nav={nav}>
      <SectionTitle>{t("wageCalc", lang)}</SectionTitle>

      {/* Min wage banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">📢</span>
        <div>
          <div className="font-black text-yellow-900 text-sm">2026 {isKo ? '최저시급' : 'Min. Wage'}</div>
          <div className="text-yellow-800 font-bold text-lg">₩{MIN_WAGE_2026.toLocaleString()}<span className="text-sm font-normal">/hr</span></div>
        </div>
      </div>

      <Card>
        {/* Mode toggle */}
        <div className="flex rounded-xl bg-[#f0f2f5] p-1 mb-4">
          {(["hourly", "monthly"] as const).map((m) => (
            <button key={m} onClick={() => { setMode(m); setCalculated(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${mode === m ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
              {m === "hourly" ? (isKo ? "시급 → 월급" : "Hourly → Monthly") : (isKo ? "월급 입력" : "Enter Monthly")}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {/* Wage input */}
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">
              {mode === "hourly" ? (isKo ? "시급 (원)" : "Hourly Wage (₩)") : (isKo ? "월급 (원)" : "Monthly Wage (₩)")}
            </label>
            <input type="number" value={wage} onChange={(e) => { setWage(e.target.value); setCalculated(false); }}
              placeholder={mode === "hourly" ? "10320" : "2000000"}
              className="w-full border-2 rounded-xl px-3 py-2.5 text-sm font-mono border-gray-200 focus:border-[#ff5a1f] outline-none" />
            {belowMin && (
              <p className="text-[#e63946] text-xs mt-1 font-semibold">
                ⚠️ {isKo ? `최저임금(₩${effectiveMinWage.toLocaleString()}) 미달!` : `Below min. wage (₩${effectiveMinWage.toLocaleString()})!`}
              </p>
            )}
          </div>

          {mode === "hourly" && (<>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "일일 근무시간" : "Hours/day"}</label>
                <select value={hours} onChange={(e) => { setHours(e.target.value); setCalculated(false); }}
                  className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                  <option value="">{isKo ? "선택" : "Select"}</option>
                  {[4,5,6,7,8,9,10,11,12].map(h => <option key={h} value={h}>{h}{isKo ? "시간" : "h"}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "일주 근무일수" : "Days/week"}</label>
                <select value={days} onChange={(e) => { setDays(e.target.value); setCalculated(false); }}
                  className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                  <option value="">{isKo ? "선택" : "Select"}</option>
                  {[1,2,3,4,5,6,7].map(d => <option key={d} value={d}>{d}{isKo ? "일" : "d"}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "월 연장근무 시간" : "Monthly overtime hours"}</label>
              <select value={extraHours} onChange={(e) => { setExtraHours(e.target.value); setCalculated(false); }}
                className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                <option value="">{isKo ? "없음" : "None"}</option>
                {[4,8,12,16,20,24,30,40].map(h => <option key={h} value={h}>{h}{isKo ? "시간" : "h"}</option>)}
              </select>
            </div>
          </>)}

          {/* Weekly holiday */}
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "주휴수당" : "Weekly Holiday Pay"}</label>
            <div className="flex rounded-xl bg-[#f0f2f5] p-1">
              {[false, true].map((v) => (
                <button key={String(v)} onClick={() => { setIncludeWeeklyHoliday(v); setCalculated(false); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${includeWeeklyHoliday === v ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
                  {v ? (isKo ? "포함" : "Included") : (isKo ? "미포함" : "Excluded")}
                </button>
              ))}
            </div>
          </div>

          {/* Tax */}
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "세금" : "Tax"}</label>
            <select value={tax} onChange={(e) => { setTax(e.target.value); setCalculated(false); }}
              className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
              <option value="none">{isKo ? "미적용" : "Not applied"}</option>
              <option value="simple">{isKo ? "3.3% (사업소득세)" : "3.3% (freelance tax)"}</option>
              <option value="standard">{isKo ? "약 9% (4대보험+소득세)" : "~9% (social insurance + income tax)"}</option>
            </select>
          </div>

          {/* Trainee */}
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{isKo ? "수습 (3개월 이내)" : "Trainee (within 3 months)"}</label>
            <div className="flex rounded-xl bg-[#f0f2f5] p-1">
              {[false, true].map((v) => (
                <button key={String(v)} onClick={() => { setTrainee(v); setCalculated(false); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${trainee === v ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
                  {v ? (isKo ? "적용 (최저임금 90%)" : "Applied (90% of min wage)") : (isKo ? "미적용" : "Not applied")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculate button */}
        <button onClick={calc} disabled={!wageNum}
          className="w-full mt-4 py-3.5 rounded-xl bg-yellow-400 text-gray-900 font-black text-base disabled:opacity-40 active:scale-95 transition-all">
          {isKo ? "계산하기" : "Calculate"}
        </button>

        {/* Result */}
        {calculated && netTotal > 0 && (
          <div className="mt-4 p-4 bg-[#fff4ef] rounded-xl border border-[#ff5a1f]/20 space-y-2">
            <div className="text-xs font-semibold text-gray-500">{isKo ? "예상 월 수령액" : "Estimated Monthly Pay"}</div>
            <div className="text-[#ff5a1f] text-3xl font-black">₩{Math.round(netTotal).toLocaleString()}</div>
            <div className="border-t border-[#ff5a1f]/20 pt-2 space-y-1 text-xs text-gray-500">
              <div className="flex justify-between"><span>{isKo ? "기본급" : "Base"}</span><span className="font-mono">₩{Math.round(monthlyBase).toLocaleString()}</span></div>
              {overtimePay > 0 && <div className="flex justify-between"><span>{isKo ? "연장근무수당 (×1.5)" : "Overtime (×1.5)"}</span><span className="font-mono text-green-600">+₩{Math.round(overtimePay).toLocaleString()}</span></div>}
              {weeklyHolidayPay > 0 && <div className="flex justify-between"><span>{isKo ? "주휴수당" : "Weekly Holiday"}</span><span className="font-mono text-green-600">+₩{Math.round(weeklyHolidayPay).toLocaleString()}</span></div>}
              <div className="flex justify-between font-semibold text-gray-700 border-t border-gray-200 pt-1">
                <span>{isKo ? "세전 합계" : "Gross"}</span><span className="font-mono">₩{Math.round(grossTotal).toLocaleString()}</span>
              </div>
              {taxAmount > 0 && <div className="flex justify-between text-red-500"><span>{isKo ? "세금/보험료" : "Tax/Insurance"}</span><span className="font-mono">-₩{Math.round(taxAmount).toLocaleString()}</span></div>}
            </div>
            <button onClick={reset} className="w-full mt-1 py-2 rounded-lg bg-white border border-gray-200 text-gray-500 text-xs font-semibold">{isKo ? "초기화" : "Reset"}</button>
          </div>
        )}
      </Card>

      <SectionTitle>{t("laborLaw", lang)}</SectionTitle>
      {LABOR_LAWS.map((law) => (
        <Card key={law.ko}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fff4ef] flex items-center justify-center text-xl flex-shrink-0">{law.icon}</div>
            <div>
              <div className="font-bold text-[#1a1a2e] text-sm">{isKo ? law.ko : law.en}</div>
              <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{isKo ? law.detail_ko : law.detail_en}</div>
            </div>
          </div>
        </Card>
      ))}

      <SectionTitle>{t("wageTheft", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="1350" label={isKo ? "고용노동부 콜센터 (임금체불 신고)" : "Ministry of Employment Hotline (Wage Theft)"} color="#ff5a1f" />
          <CallButton number="031-412-0000" label={isKo ? "안산고용노동지청" : "Ansan Labor Office"} color="#ff5a1f" />
          <CallButton number="1644-7111" label={isKo ? "안산시외국인주민상담지원센터" : "Ansan Foreign Residents Support"} color="#057a55" />
          <ExternalLink
            url="https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=SN001"
            label={isKo ? "고용노동부 온라인 민원 신청" : "Ministry of Employment - Online Complaint"}
            lang={lang}
            icon="💻"
            hint="chrome"
          />
        </div>
      </Card>
    </PageLayout>
  );
}
