// SVG 아이콘 컴포넌트 - 피그마 디자인 기준

export function GhostIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.25" />
      {/* 고스트 몸체 */}
      <path d="M12 24V18C12 13.58 15.58 10 20 10C24.42 10 28 13.58 28 18V24L25.5 22L23 24L20.5 22L18 24L15.5 22L13 24H12Z"
        fill="white" />
      {/* 눈 */}
      <circle cx="17" cy="18" r="1.5" fill="#6C6EF0" />
      <circle cx="23" cy="18" r="1.5" fill="#6C6EF0" />
      {/* 볼터치 */}
      <circle cx="15.5" cy="21" r="1.5" fill="#FFB3C1" fillOpacity="0.8" />
      <circle cx="24.5" cy="21" r="1.5" fill="#FFB3C1" fillOpacity="0.8" />
    </svg>
  );
}

export function GhostIconPurple({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#EBEBFF" />
      <path d="M12 26V18C12 13.58 15.58 10 20 10C24.42 10 28 13.58 28 18V26L25.5 24L23 26L20.5 24L18 26L15.5 24L13 26H12Z"
        fill="#6C6EF0" />
      <circle cx="17" cy="18" r="1.5" fill="white" />
      <circle cx="23" cy="18" r="1.5" fill="white" />
    </svg>
  );
}

export function SafetyIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 4L25 23H3L14 4Z" stroke="#6C6EF0" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <line x1="14" y1="11" x2="14" y2="17" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="20" r="1" fill="#6C6EF0" />
    </svg>
  );
}

export function MedicalIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="22" height="22" rx="6" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <line x1="14" y1="8" x2="14" y2="20" stroke="#6C6EF0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="20" y2="14" stroke="#6C6EF0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function LaborIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="3" y="12" width="22" height="13" rx="3" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <path d="M9 12V9C9 6.79 11.24 5 14 5C16.76 5 19 6.79 19 9V12" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="14" y1="16" x2="14" y2="21" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="25" y2="18" stroke="#6C6EF0" strokeWidth="2" />
    </svg>
  );
}

export function LegalIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="5" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <path d="M9 14C6.5 15 5 17 5 19H23C23 17 21.5 15 19 14" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="14" y1="14" x2="14" y2="19" stroke="#6C6EF0" strokeWidth="2" />
    </svg>
  );
}

export function IndustrialIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="4" y="10" width="20" height="14" rx="2" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <rect x="9" y="10" width="10" height="5" rx="1" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <line x1="10" y1="18" x2="10" y2="21" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="18" x2="14" y2="21" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="18" x2="18" y2="21" stroke="#6C6EF0" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 10V7C9 5.9 9.9 5 11 5H17C18.1 5 19 5.9 19 7V10" stroke="#6C6EF0" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function AnsanIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="3" y="10" width="22" height="15" rx="2" stroke="#6C6EF0" strokeWidth="2" fill="none" />
      <path d="M3 14H25" stroke="#6C6EF0" strokeWidth="2" />
      <path d="M8 10V7L14 4L20 7V10" stroke="#6C6EF0" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <rect x="11" y="17" width="6" height="8" rx="1" stroke="#6C6EF0" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function BridgeLogo({ size = 80 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bridge-logo.png"
      alt="BRIDGE"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block" }}
    />
  );
}
