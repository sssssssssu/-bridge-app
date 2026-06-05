"use client";
import { useRef, useEffect, useCallback } from "react";
import { LANGUAGES, type LangCode } from "@/lib/translations";

interface Props {
  value: LangCode;
  onChange: (code: LangCode) => void;
}

const ITEM_H = 52;
const VISIBLE = 5;

export default function LangPicker({ value, onChange }: Props) {
  const langs = LANGUAGES;
  const listRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 현재 선택 인덱스 → 스크롤 위치 계산
  function idxToScrollTop(idx: number) {
    return idx * ITEM_H;
  }

  // 스크롤 위치 → 인덱스
  function scrollTopToIdx(scrollTop: number) {
    return Math.round(scrollTop / ITEM_H);
  }

  // 외부에서 value 바뀌면 스크롤 이동
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const idx = langs.findIndex(l => l.code === value);
    if (idx < 0) return;
    el.scrollTo({ top: idxToScrollTop(idx), behavior: "smooth" });
  }, [value, langs]);

  const handleScroll = useCallback(() => {
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    isScrolling.current = true;

    scrollTimer.current = setTimeout(() => {
      const el = listRef.current;
      if (!el) return;
      isScrolling.current = false;

      const idx = Math.max(0, Math.min(langs.length - 1, scrollTopToIdx(el.scrollTop)));
      // 딱 맞게 스냅
      el.scrollTo({ top: idxToScrollTop(idx), behavior: "smooth" });
      onChange(langs[idx].code);
    }, 80);
  }, [langs, onChange]);

  // 초기 위치 세팅
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const idx = langs.findIndex(l => l.code === value);
    if (idx >= 0) el.scrollTop = idxToScrollTop(idx);
  }, []); // eslint-disable-line

  return (
    <div className="relative w-full select-none" style={{ height: ITEM_H * VISIBLE }}>

      {/* 선택 하이라이트 바 */}
      <div className="absolute left-0 right-0 pointer-events-none z-10 rounded-2xl"
        style={{
          top: Math.floor(VISIBLE / 2) * ITEM_H,
          height: ITEM_H,
          backgroundColor: "#6C6EF0",
        }}
      />

      {/* 위 아래 페이드 */}
      <div className="absolute inset-0 pointer-events-none z-20" style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 28%, transparent 42%, transparent 58%, rgba(255,255,255,0.4) 72%, rgba(255,255,255,0.95) 100%)"
      }} />

      {/* 스크롤 컨테이너 */}
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="absolute inset-0 z-30 overflow-y-scroll"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* 위 패딩 (선택 영역 가운데 정렬용) */}
        <div style={{ height: Math.floor(VISIBLE / 2) * ITEM_H }} />

        {langs.map((lang, i) => {
          const isSelected = lang.code === value;
          return (
            <div
              key={lang.code}
              style={{
                height: ITEM_H,
                scrollSnapAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                cursor: "pointer",
                transition: "opacity 0.15s, transform 0.15s",
              }}
              onClick={() => {
                const el = listRef.current;
                if (el) el.scrollTo({ top: idxToScrollTop(i), behavior: "smooth" });
                onChange(lang.code);
              }}
            >
              <span style={{ fontSize: 20 }}>{lang.flag}</span>
              <span style={{
                fontSize: 16,
                fontWeight: isSelected ? 700 : 500,
                color: isSelected ? "white" : "#6C6EF0",
                transition: "color 0.15s, font-weight 0.15s",
              }}>
                {lang.native}
              </span>
            </div>
          );
        })}

        {/* 아래 패딩 */}
        <div style={{ height: Math.floor(VISIBLE / 2) * ITEM_H }} />
      </div>

      {/* 스크롤바 숨기기 */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
