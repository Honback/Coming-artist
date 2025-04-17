import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-zinc-900 text-white min-h-[80vh] flex items-center">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-900/60 z-10" />

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40" />

      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            찾아가는 예술인 권리보호 교육
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-8 font-medium leading-relaxed">
            "예술인의 권리를 지키는 첫걸음, 여러분의 현장으로 직접 찾아갑니다"
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/20">
            <h2 className="text-xl font-bold mb-4">교육내용</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-purple-500 text-white p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold">성희롱·성폭력 예방 교육</span> - 문화예술계 특수성을 반영한 성희롱·성폭력 예방 교육
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-500 text-white p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold">계약 교육</span> - 예술 계약의 기본 개념, 계약 시 유의사항, 저작권 기본 지식
                </div>
              </li>
            </ul>
          </div>

          {/* <div className="space-y-3 mb-10 ">
            <p className="flex gap-2">
              <span className="font-bold min-w-32">신청기간</span>
              <span>수시 접수 ~ '25. 11. 26. (예산 소진 시 조기 종료)</span>
            </p>
            <p className="flex gap-2">
              <span className="font-bold min-w-32">교육비용</span>
              <span>전액 무료 (한국예술인복지재단 지원)</span>
            </p>
            <p className="flex gap-2">
              <span className="font-bold min-w-32">교육형태</span>
              <span>대면 또는 실시간 비대면</span>
            </p>
            <p className="flex gap-2">
              <span className="font-bold min-w-32">교육시간</span>
              <span>1회당 90~180분</span>
            </p>
          </div> */}

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/20 space-y-3">
            <div className="flex gap-2 items-start">
              <span className="font-bold text-white min-w-32 ">신청기간</span>
              <span className="text-white">수시 접수 ~ '25. 11. 26. (예산 소진 시 조기 종료)</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-bold text-white min-w-32">교육비용</span>
              <span className="text-white">전액 무료 (한국예술인복지재단 지원)</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-bold text-white min-w-32">교육형태</span>
              <span className="text-white">대면 또는 실시간 비대면</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-bold text-white min-w-32">교육시간</span>
              <span className="text-white">1회당 90~180분</span>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#apply">
              <Button size="lg" className="w-full sm:w-auto poster-button-primary">
              신청 절차 바로가기
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="bg-purple-600/40 w-full sm:w-auto border-white text-white hover:bg-white/10">
                상담 문의하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
