import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionLayout } from "@/components/layout/section-layout";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PosterCard } from "@/components/ui/poster-card";

export function CurriculumSection() {
  return (
    <SectionLayout
      id="curriculum"
      title="교육 과정 안내"
      subtitle="예술인의 권리 보호를 위한 전문 교육 프로그램"
      bgColor="white"
    >
      {/* Image placeholder */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10 max-w-3xl mx-auto">
        <PlaceholderImage
          // text="교육 과정 이미지: 교육 진행 장면"
          height={400}
          className="bg-zinc-100 bg-[url('/images/curriculum-img.png')] bg-cover bg-center bg-color"
        />
      </div>

      <Tabs defaultValue="prevention" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full h-full grid-cols-2 mb-8 bg-zinc-100">
          <TabsTrigger
            value="prevention"
            className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            성희롱·성폭력 예방 교육
          </TabsTrigger>
          <TabsTrigger
            value="contract"
            className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            계약 교육
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prevention" className="mt-4">
          <PosterCard title="1. 성희롱·성폭력 예방 교육" color="white">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-zinc-800">교육 내용</h4>
              <ul className="space-y-3 ml-6">
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>문화예술계 특수성을 반영한 성희롱·성폭력의 개념</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술계 내 성희롱·성폭력 사례와 판례</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>2차 피해 예방과 피해자 지원제도</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>성평등한 창작환경 조성을 위한 실천 방안</span>
                </li>
              </ul>
            </div>

            <blockquote className="bg-zinc-50 p-4 rounded-lg border-l-4 border-primary mb-4 text-zinc-700">
              <p>"법정의무교육 과정으로, 교육 이수자에게는 성희롱·성폭력 예방교육 수료증이 발급됩니다. 예술계 내 성범죄 예방 인식과 문화 확산에 기여합니다."</p>
            </blockquote>

            <div className="mt-6 bg-zinc-100 p-4 rounded-lg">
              <p className="font-medium">최소 신청 인원: 10인 이상</p>
            </div>
          </PosterCard>
        </TabsContent>

        <TabsContent value="contract" className="mt-4">
          <PosterCard title="2. 계약 교육" color="white">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-zinc-800">교육 내용</h4>
              <ul className="space-y-3 ml-6">
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술 계약의 기본 개념과 중요성</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>계약 체결 시 유의사항과 필수 검토 항목</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>분야별 표준계약서 활용법</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>저작권 기본 용어와 권리 보호 방법</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>계약 관련 분쟁 사례와 해결 방안</span>
                </li>
              </ul>
            </div>

            <blockquote className="bg-zinc-50 p-4 rounded-lg border-l-4 border-primary mb-4 text-zinc-700">
              <p>"계약서 한 장의 차이가 예술인의 권리를 지키는 시작점입니다. 법률 전문가와 현장 전문가가 예술 분야별 맞춤형 강의를 제공합니다."</p>
            </blockquote>

            <div className="mt-6 bg-zinc-100 p-4 rounded-lg">
              <p className="font-medium">최소 신청 인원: 20인 이상</p>
            </div>
          </PosterCard>
        </TabsContent>
      </Tabs>
    </SectionLayout>
  );
}
