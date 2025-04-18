import Link from "next/link";

export function InstructorsSection() {
  return (
    <section id="instructors" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">예술 분야별 전문 강사진</h2>
        <p className="section-subheading">당신의 분야를 정확히 이해하는 전문가가 교육합니다</p>

        {/* Image placeholder - in production, use an actual image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center bg-[url('/images/instructors-img.png')] bg-cover">
            <p className="text-zinc-500"></p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm">
              <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-center mb-4">계약 교육 전문가</h3>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                  <span>법률전문가(변호사)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                  <span>현장전문가</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                  <span>예술 분야별 전문강사</span>
                </li>
              </ul>

              <div className="mt-6 bg-white p-4 rounded-lg border border-zinc-100">
                <p className="text-zinc-700 text-sm">
                  예술계 법률 문제를 다년간 다룬 전문 변호사와 현장 경험이 풍부한 분야별 전문가가 함께 교육합니다.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-lg p-6 shadow-sm">
              <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-center mb-4">성희롱·성폭력 예방교육 전문강사</h3>

              <ul className="text-center mb-4">
                <li className="mb-1">문학, 미술, 음악, 무용, 연극, 영화,</li>
                <li>연예, 만화 등 각 예술 분야 전문가</li>
                <br />
              </ul>


              <div className="mt-6 bg-white p-4 rounded-lg border border-zinc-100">
                <p className="text-zinc-700 text-sm">
                  성희롱·성폭력 예방교육은 수요자가 특정 강사를 선택할 수 있습니다.
                </p>
                <p className="text-zinc-700 text-sm">※ 전문강사 Pool : <Link href="https://sinmungo.kawf.kr/user/edu/tchr/list.do" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">전문강사 정보 확인하기</Link></p>
              </div>
            </div>
          </div>

          <blockquote className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-10 text-center">
            <p className="text-base sm:text-lg font-medium mb-0">
              "당신의 분야를 이해하는 강사가 교육을 진행하기 때문에, 현장에서 실제 발생할 수 있는 사례를 중심으로 이야기합니다."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
