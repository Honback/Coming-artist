import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ApplicationProcessSection() {
  return (
    <section id="apply" className="section-padding bg-zinc-100">
      <div className="container-custom">
        <h2 className="section-heading">신청 및 진행 절차</h2>
        <p className="section-subheading">간편한 3단계로 교육이 진행됩니다</p>

        {/* Image placeholder - in production, use an actual image */}
        {/* <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
            <p className="text-zinc-500">신청 절차 이미지: 단계별 안내</p>
          </div>
        </div> */}

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="flex-shrink-0 bg-primary text-white font-bold text-xl size-12 rounded-full flex items-center justify-center z-10">1</div>
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-2">교육 신청서 작성 및 제출</h3>
                <p className="text-zinc-600 font-semibold mb-4">(교육희망일 최소 14일 전까지)</p>
                <ul className="space-y-2 text-zinc-700">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>온라인 신청서를 통해 기관 정보, 참가자 수, 희망 날짜, 예술 분야 등 기재</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>신청페이지: <Link href="#" className="text-primary hover:underline">바로가기</Link></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>※ <strong>희망 강사 선택 가능</strong>: 성희롱·성폭력 예방 교육은 강사Pool 중 원하는 강사 선택 가능</span>
                  </li>
                </ul>
              </div>
              {/* Gradient background element */}
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="flex-shrink-0 bg-primary text-white font-bold text-xl size-12 rounded-full flex items-center justify-center z-10">2</div>
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-2">수강 가능 여부 및 상세사항 안내</h3>
                <p className="text-zinc-600 font-semibold mb-4">(3일 내 신청자 연락처로 회신)</p>
                <ul className="space-y-2 text-zinc-700">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>담당자가 신청 내용 검토 후 연락</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>교육 일정, 강사 매칭, 필요 시설 등 협의</span>
                  </li>
                </ul>
              </div>
              {/* Gradient background element */}
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 relative overflow-hidden">
              <div className="flex-shrink-0 bg-primary text-white font-bold text-xl size-12 rounded-full flex items-center justify-center z-10">3</div>
              <div className="relative z-10 w-full">
                <h3 className="text-xl font-bold mb-2">교육 진행</h3>
                <ul className="space-y-2 text-zinc-700">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>약속된 날짜에 강사가 방문하거나 온라인으로 교육 진행</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                    <span>교육 후 수료증 발급 (참가자 명단 필요)</span>
                  </li>
                </ul>
              </div>
              {/* Gradient background element */}
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>
          </div>

          <blockquote className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mb-8 text-center">
            <p className="text-lg font-medium mb-0">
              "교육 신청부터 수료까지 친절한 안내를 제공합니다. 궁금한 점은 언제든 문의해주세요."
            </p>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              교육 신청하기
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              자료 다운로드
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-400 text-zinc-700 hover:bg-zinc-100">
              관련 법령 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
