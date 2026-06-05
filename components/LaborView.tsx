"use client";
import { useState } from "react";
import { type View } from "@/app/page";
import { type LangCode, t } from "@/lib/translations";
import { LABOR_UI, LABOR_LAWS_TRANSLATED } from "@/lib/viewTranslations";
import PageLayout, { Card, CallButton, ExternalLink, SectionTitle } from "./PageLayout";
import { LaborIcon } from "./Icons";

interface Props { lang: LangCode; nav: (v: View) => void; }

const MIN_WAGE_2026 = 10320;
const TAX_RATES: Record<string, number> = { none: 0, simple: 0.033, standard: 0.09 };

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

  const L = (key: string) => LABOR_UI[key]?.[lang] ?? LABOR_UI[key]?.en ?? key;

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
  const weeklyHolidayPay = includeWeeklyHoliday && weeklyHours >= 15 ? hoursNum * (52 / 12) * hourlyWage : 0;
  const grossTotal = monthlyBase + overtimePay + weeklyHolidayPay;
  const taxAmount = grossTotal * (TAX_RATES[tax] ?? 0);
  const netTotal = grossTotal - taxAmount;

  function reset() { setWage(""); setHours(""); setDays(""); setExtraHours(""); setCalculated(false); }

  const SELECT = lang === "ko" ? "선택" : "Select";
  const HOUR_UNIT = lang === "ko" ? "시간" : "h";
  const DAY_UNIT = lang === "ko" ? "일" : "d";

  return (
    <PageLayout title={t("labor", lang)} icon={<LaborIcon size={24} />} color="#ff5a1f" lang={lang} nav={nav}>
      <SectionTitle>{t("wageCalc", lang)}</SectionTitle>

      {/* Min wage banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">📢</span>
        <div>
          <div className="font-black text-yellow-900 text-sm">{L("minWageBanner")}</div>
          <div className="text-yellow-800 font-bold text-lg">₩{MIN_WAGE_2026.toLocaleString()}<span className="text-sm font-normal">/hr</span></div>
        </div>
      </div>

      <Card>
        {/* Mode toggle */}
        <div className="flex rounded-xl bg-[#f0f2f5] p-1 mb-4">
          {(["hourly", "monthly"] as const).map((m) => (
            <button key={m} onClick={() => { setMode(m); setCalculated(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${mode === m ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
              {m === "hourly" ? L("hourlyToMonthly") : L("monthlyInput")}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">
              {mode === "hourly" ? L("hourlyWageLabel") : L("monthlyWageLabel")}
            </label>
            <input type="number" value={wage} onChange={(e) => { setWage(e.target.value); setCalculated(false); }}
              placeholder={mode === "hourly" ? "10320" : "2000000"}
              className="w-full border-2 rounded-xl px-3 py-2.5 text-sm font-mono border-gray-200 focus:border-[#ff5a1f] outline-none" />
            {belowMin && <p className="text-[#e63946] text-xs mt-1 font-semibold">⚠️ {L("belowMin")}</p>}
          </div>

          {mode === "hourly" && (<>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{L("hoursPerDay")}</label>
                <select value={hours} onChange={(e) => { setHours(e.target.value); setCalculated(false); }}
                  className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                  <option value="">{SELECT}</option>
                  {[4,5,6,7,8,9,10,11,12].map(h => <option key={h} value={h}>{h}{HOUR_UNIT}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">{L("daysPerWeek")}</label>
                <select value={days} onChange={(e) => { setDays(e.target.value); setCalculated(false); }}
                  className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                  <option value="">{SELECT}</option>
                  {[1,2,3,4,5,6,7].map(d => <option key={d} value={d}>{d}{DAY_UNIT}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">{L("overtimeHours")}</label>
              <select value={extraHours} onChange={(e) => { setExtraHours(e.target.value); setCalculated(false); }}
                className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
                <option value="">{L("noTax")}</option>
                {[4,8,12,16,20,24,30,40].map(h => <option key={h} value={h}>{h}{HOUR_UNIT}</option>)}
              </select>
            </div>
          </>)}

          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{L("weeklyHoliday")}</label>
            <div className="flex rounded-xl bg-[#f0f2f5] p-1">
              {[true, false].map((v) => (
                <button key={String(v)} onClick={() => { setIncludeWeeklyHoliday(v); setCalculated(false); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${includeWeeklyHoliday === v ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
                  {v ? L("included") : L("excluded")}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{L("tax")}</label>
            <select value={tax} onChange={(e) => { setTax(e.target.value); setCalculated(false); }}
              className="w-full border-2 rounded-xl px-3 py-2.5 text-sm border-gray-200 focus:border-[#ff5a1f] outline-none bg-white">
              <option value="none">{L("noTax")}</option>
              <option value="simple">3.3%</option>
              <option value="standard">~9%</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">{L("trainee")}</label>
            <div className="flex rounded-xl bg-[#f0f2f5] p-1">
              {[false, true].map((v) => (
                <button key={String(v)} onClick={() => { setTrainee(v); setCalculated(false); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${trainee === v ? "bg-white text-[#ff5a1f] shadow-sm" : "text-gray-500"}`}>
                  {v ? L("applied") : L("noTax")}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => setCalculated(true)} disabled={!wageNum}
          className="w-full mt-4 py-3.5 rounded-xl font-black text-base disabled:opacity-40 active:scale-95 transition-all"
          style={{ backgroundColor: "#FFD600", color: "#1a1a2e" }}>
          {L("calculate")}
        </button>

        {calculated && netTotal > 0 && (
          <div className="mt-4 p-4 bg-[#fff4ef] rounded-xl border border-[#ff5a1f]/20 space-y-2">
            <div className="text-xs font-semibold text-gray-500">{L("estimatedMonthly")}</div>
            <div className="text-[#ff5a1f] text-3xl font-black">₩{Math.round(netTotal).toLocaleString()}</div>
            <div className="border-t border-[#ff5a1f]/20 pt-2 space-y-1 text-xs text-gray-500">
              <div className="flex justify-between"><span>{L("base")}</span><span className="font-mono">₩{Math.round(monthlyBase).toLocaleString()}</span></div>
              {overtimePay > 0 && <div className="flex justify-between"><span>{L("overtime")}</span><span className="font-mono text-green-600">+₩{Math.round(overtimePay).toLocaleString()}</span></div>}
              {weeklyHolidayPay > 0 && <div className="flex justify-between"><span>{L("weeklyHoliday")}</span><span className="font-mono text-green-600">+₩{Math.round(weeklyHolidayPay).toLocaleString()}</span></div>}
              <div className="flex justify-between font-semibold text-gray-700 border-t border-gray-200 pt-1">
                <span>{L("gross")}</span><span className="font-mono">₩{Math.round(grossTotal).toLocaleString()}</span>
              </div>
              {taxAmount > 0 && <div className="flex justify-between text-red-500"><span>{L("taxInsurance")}</span><span className="font-mono">-₩{Math.round(taxAmount).toLocaleString()}</span></div>}
            </div>
            <button onClick={reset} className="w-full mt-1 py-2 rounded-lg bg-white border border-gray-200 text-gray-500 text-xs font-semibold">{L("reset")}</button>
          </div>
        )}
      </Card>

      <SectionTitle>{t("laborLaw", lang)}</SectionTitle>
      {LABOR_LAWS_TRANSLATED.map((law) => (
        <Card key={law.key}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fff4ef] flex items-center justify-center text-xl flex-shrink-0">{law.icon}</div>
            <div>
              <div className="font-bold text-[#1a1a2e] text-sm">{law.title[lang] ?? law.title.en}</div>
              <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{law.detail[lang] ?? law.detail.en}</div>
            </div>
          </div>
        </Card>
      ))}

      <SectionTitle>{t("wageTheft", lang)}</SectionTitle>
      <Card>
        <div className="space-y-2">
          <CallButton number="1350" label={LABOR_UI.wageTheftCall[lang] ?? LABOR_UI.wageTheftCall.en ?? ""} color="#ff5a1f" />
          <CallButton number="031-412-1992" label={LABOR_UI.ansanLaborOffice[lang] ?? LABOR_UI.ansanLaborOffice.en ?? ""} color="#ff5a1f" />
          <CallButton number="1644-7111" label={LABOR_UI.moel[lang] !== undefined ? (lang === "ko" ? "안산시외국인주민상담지원센터" : "Ansan Foreign Residents Support") : "Ansan Support"} color="#057a55" />
          <ExternalLink url="https://labor.moel.go.kr/minwonApply/minwonFormat.do?searchVal=SN001"
            label={LABOR_UI.moel[lang] ?? LABOR_UI.moel.en ?? ""} lang={lang} icon="💻" hint="chrome" />
        </div>
      </Card>
    </PageLayout>
  );
}
