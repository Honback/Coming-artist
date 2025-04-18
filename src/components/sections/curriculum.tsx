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
            value="contract"
            className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            예술 계약
          </TabsTrigger>

          <TabsTrigger
            value="prevention"
            className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            성희롱·성폭력 예방
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contract" className="mt-4">
          <PosterCard title="1. 예술 계약" color="white">
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-zinc-800">교육 내용</h4>
              <ul className="space-y-3 ml-6">
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>문화예술분야 표준계약서의 유형 및 특징</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술 활동 관련 계약 체결 시 유의사항</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>서면계약서 작성 방법과 공정 계약의 법리</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술 계약 시 알아야 할 저작권 기본 용어(저작인격권, 저작재산권 등)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>「예술인 복지법」,「예술인권리보장법」상의 예술 표현의 자유 보장, 예술인의 직업적 권리의 보호와 증진 등</span>
                </li>
              </ul>
            </div>

            <blockquote className="text-sm sm:text-base  bg-zinc-50 p-4 rounded-lg border-l-4 border-primary mb-4 text-zinc-700">
              <p>"계약서 한 장의 차이가 예술인의 권리를 지키는 시작점입니다. 법률 전문가와 현장 전문가가 예술 분야별 맞춤형 강의를 제공합니다."</p>
            </blockquote>

            <div className="mt-6 bg-zinc-100 p-4 rounded-lg">
              <p className="font-medium">최소 신청 인원: 20인 이상</p>
            </div>
          </PosterCard>
        </TabsContent>

        <TabsContent value="prevention" className="mt-4">
          <PosterCard title="2. 성희롱·성폭력 예방" color="white">
            <div className="mb-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-zinc-800">교육 내용</h4>
              <ul className="space-y-3 ml-6">
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>성희롱·성폭력 예방교육 필요성</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>성희롱·성폭력에 대한 편견(통념) 깨기</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>정보제공(성희롱·성폭력 피해 현황, 성폭력 관련 법, 정책)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술계 내 성희롱·성폭력 발생 원인, 유형 및 사례 등</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>사건 발생 시 대처방법(피해자 지원 제도, 관련 시설 안내)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>예술단체 내 성희롱·성폭력 예방을 위한 실천방안 및 규약 만들기 등</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>'예술인권리보장법'상의 성평등한 예술 환경 조성, 예술인의 권리구제 등</span>
                </li>
              </ul>
            </div>

            <blockquote className="text-sm sm:text-base bg-zinc-50 p-4 rounded-lg border-l-4 border-primary mb-4 text-zinc-700">
              <p>"법정의무교육 과정으로, 교육 이수자에게는 성희롱·성폭력 예방교육 수료증이 발급됩니다."</p>
            </blockquote>

            <div className="mt-6 bg-zinc-100 p-4 rounded-lg">
              <p className="font-medium">최소 신청 인원: 10인 이상</p>
            </div>
          </PosterCard>
        </TabsContent>



      </Tabs>
    </SectionLayout>
  );
}
