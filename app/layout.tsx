import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRIDGE — 브릿지",
  description: "안산 외국인 주민을 위한 다국어 안전·권리 정보 앱",
  manifest: "/manifest.json",
  icons: {
    icon: "/bridge-logo.png",
    apple: "/bridge-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a1a2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
