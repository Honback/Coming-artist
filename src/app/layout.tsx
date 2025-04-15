import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "찾아가는 예술인 권리보호 교육 | 한국예술인복지재단",
  description: "예술인의 권리를 지키는 첫걸음, 여러분의 현장으로 직접 찾아갑니다. 한국예술인복지재단이 제공하는 성희롱·성폭력 예방 교육과 계약 교육으로 예술인의 권리를 보호하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
