import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="section-padding bg-zinc-100">
      <div className="container-custom">
        <h2 className="section-heading">교육 과정 안내</h2>
        <p className="section-subheading">예술인의 권리 보호를 위한 전문 교육 프로그램</p>

        {/* Image placeholder - in production, use an actual image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
            <p className="text-zinc-500">교육 과정 이미지: 교육 진행 장면</p>
          </div>
        </div>

        <Tabs defaultValue="prevention" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="prevention" className="text-base py-3">성희롱·성폭력 예방 교육</TabsTrigger>
            <TabsTrigger value="contract" className="text-base py-3">계약 교육</TabsTrigger>
          </TabsList>

          <TabsContent value="prevention" className="mt-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">1. 성희롱·성폭력 예방 교육</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">교육 내용:</h4>
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

                <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                  <p className="font-medium">최소 신청 인원: 10인 이상</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contract" className="mt-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">2. 계약 교육</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">교육 내용:</h4>
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

                <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                  <p className="font-medium">최소 신청 인원: 20인 이상</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
