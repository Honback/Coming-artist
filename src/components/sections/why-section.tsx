import { SectionLayout } from "@/components/layout/section-layout";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PosterCard } from "@/components/ui/poster-card";

export function WhySection() {
  return (
    <SectionLayout
      id="why"
      title="왜 찾아가는 예술인 권리보호 교육인가요?"
      subtitle="예술인의 권리와 창작환경을 지키기 위한 맞춤형 교육"
      bgColor="white"
    >
      {/* Image placeholder */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10 max-w-3xl mx-auto">
        <PlaceholderImage
          // text="교육 필요성 이미지: 다양한 예술 환경"
          height={400}
          className="bg-zinc-100 bg-[url('/images/why-img.jpg')] bg-cover bg-center"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <PosterCard className="mb-10">
          <blockquote className="border-l-4 border-primary pl-4 py-3 italic text-zinc-700">
            <p className="text-base sm:text-lg">
              "예술인이 스스로 권리를 지키기 위해서는 예술 환경과 관련 법·제도에 대한 이해가 필요합니다. 한국예술인복지재단은 예술계의 공정환경 조성을 위해 '찾아가는 예술인 권리보호 교육'을 실시합니다."
            </p>
          </blockquote>
        </PosterCard>

        <h3 className="text-xl font-bold mb-6 text-primary">예술인들이 직면하는 현실적 어려움:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 ">
          <PosterCard color="white" className="h-16 sm:h-full flex items-center">
            <div className="flex items-center justify-left gap-4">
              <div className="bg-zinc-100 p-3 rounded-full flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-zinc-800">예술 활동 중 발생할 수 있는 성희롱·성폭력 문제</p>
              </div>
            </div>
          </PosterCard>

          <PosterCard color="white" className="h-16 sm:h-full flex items-center">
            <div className="flex items-center justify-left  gap-4">
              <div className="bg-zinc-100 p-3 rounded-full flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-zinc-800">불공정한 계약 관행으로 인한 권리 침해</p>
              </div>
            </div>
          </PosterCard>

          <PosterCard color="white" className="h-16 sm:h-full flex items-center">
            <div className="flex items-center justify-left  gap-4">
              <div className="bg-zinc-100 p-3 rounded-full flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-zinc-800">저작권에 대한 이해 부족으로 발생하는 불이익</p>
              </div>
            </div>
          </PosterCard>

          <PosterCard color="white" className="h-16 sm:h-full flex items-center">
            <div className="flex items-center justify-left  gap-3">
              <div className="bg-zinc-100 p-3 rounded-full flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-base tracking-tight sm:text-lg font-medium text-zinc-800">예술인 권리 구제를 위한 절차와 기관에 대한 정보 부족</p>
              </div>
            </div>
          </PosterCard>
        </div>

        <PosterCard className="mt-10" color="white">
          <p className="text-base sm:text-lg font-medium text-center text-zinc-800">
            이제 예술인 권리보호 교육이 여러분의 현장으로 직접 찾아갑니다. 예술 현장의 특수성을 반영한 실질적인 교육으로 권리 의식을 높이고 건강한 창작환경을 조성하세요.
          </p>
        </PosterCard>
      </div>
    </SectionLayout>
  );
}
