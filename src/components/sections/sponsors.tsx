import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section className="py-10 bg-zinc-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-8">
          주최 및 협력기관
        </h2>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Image placeholder - in production, use actual logos */}
          <div className="bg-white shadow-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <div className="h-[4rem] w-[16rem] bg-zinc-200 rounded-lg flex items-center justify-center bg-[url('/images/footer-logo.png')] bg-contain bg-center">
                  {/* <p className="text-zinc-500"></p> */}
                </div>
                <p className="font-medium">주최: 문화체육관광부</p>
              </div>

              <div className="hidden md:block text-3xl text-zinc-300">|</div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-[3.5rem] w-[10rem] flex items-center justify-center invert overflow-hidden bg-[url('/images/logo.png')] bg-top bg-cover bg-center">
                  {/* <p className="text-zinc-500">한국예술인복지재단 로고</p> */}
                </div>
                <p className="font-medium">주관: 한국예술인복지재단</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <div className="flex space-x-4">
            {/* <a
              href="#apply"
              className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-md transition-colors"
            >
              신청 절차 바로가기
            </a> */}
            <Button>
              <Link href="#apply"
              className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-md transition-colors">
                신청 절차 바로가기
              </Link>
            </Button>
            {/* <a
              href="#download"
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 py-2 px-6 rounded-md transition-colors"
            >
              자료 다운로드
            </a> */}
            {/* <a
              href="#related-laws"
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 py-2 px-6 rounded-md transition-colors"
            >
              관련 법령 보기
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
