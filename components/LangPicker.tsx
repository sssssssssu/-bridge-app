"use client";
import { useRef, useState, useEffect } from "react";
import { LANGUAGES, type LangCode } from "@/lib/translations";

interface Props {
  value: LangCode;
  onChange: (code: LangCode) => void;
}

const ITEM_HEIGHT = 52;
const VISIBLE = 5; // 보이는 개수 (홀수)
const HALF = Math.floor(VISIBLE / 2);

export default function LangPicker({ value, onChange }: Props) {
  const langs = LANGUAGES;
  const currentIdx = langs.findIndex((l) => l.code === value);
  const [offset, setOffset] = useState(currentIdx * ITEM_HEIGHT);
  const startY = useRef(0);
  const startOffset = useRef(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function clamp(val: number) {
    return Math.max(0, Math.min((langs.length - 1) * ITEM_HEIGHT, val));
  }

  function snapToNearest(rawOffset: number) {
    const snapped = Math.round(rawOffset / ITEM_HEIGHT) * ITEM_HEIGHT;
    const clamped = clamp(snapped);
    setOffset(clamped);
    const idx = Math.round(clamped / ITEM_HEIGHT);
    onChange(langs[idx].code);
  }

  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true;
    startY.current = e.clientY;
    startOffset.current = offset;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const delta = startY.current - e.clientY;
    setOffset(clamp(startOffset.current + delta));
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = startY.current - e.clientY;
    snapToNearest(startOffset.current + delta);
  }

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    snapToNearest(clamp(offset + e.deltaY));
  }

  // sync when value changes externally
  useEffect(() => {
    const idx = langs.findIndex((l) => l.code === value);
    if (idx >= 0) setOffset(idx * ITEM_HEIGHT);
  }, [value]);

  const selectedIdx = Math.round(offset / ITEM_HEIGHT);

  return (
    <div className="relative w-full select-none" style={{ height: ITEM_HEIGHT * VISIBLE }}>
      {/* 선택 하이라이트 */}
      <div className="absolute left-0 right-0 pointer-events-none z-10 rounded-2xl"
        style={{
          top: HALF * ITEM_HEIGHT,
          height: ITEM_HEIGHT,
          backgroundColor: "#6C6EF0",
          borderRadius: 16,
        }}
      />

      {/* 위아래 페이드 오버레이 */}
      <div className="absolute inset-0 pointer-events-none z-20" style={{
        background: "linear-gradient(to bottom, white 0%, transparent 35%, transparent 65%, white 100%)"
      }} />

      {/* 드래그 영역 */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-30 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ perspective: 800 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
      >
        <div
          className="absolute left-0 right-0"
          style={{
            top: HALF * ITEM_HEIGHT - offset,
            transition: isDragging.current ? "none" : "top 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          {langs.map((lang, i) => {
            const dist = i - selectedIdx;
            const absDist = Math.abs(dist);
            const rotateX = dist * -18; // 3D 기울기
            const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.5 : absDist === 2 ? 0.2 : 0;
            const scale = absDist === 0 ? 1 : absDist === 1 ? 0.9 : 0.8;
            const isSelected = i === selectedIdx;

            return (
              <div
                key={lang.code}
                onClick={() => snapToNearest(i * ITEM_HEIGHT)}
                className="flex items-center justify-center gap-3 font-semibold text-base"
                style={{
                  height: ITEM_HEIGHT,
                  transform: `rotateX(${rotateX}deg) scale(${scale})`,
                  transformOrigin: "center center",
                  opacity,
                  color: isSelected ? "white" : "#6C6EF0",
                  transition: "transform 0.15s, opacity 0.15s",
                  cursor: "pointer",
                }}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.native}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
