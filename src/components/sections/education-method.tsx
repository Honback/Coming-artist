import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function EducationMethodSection() {
  return (
    <section id="method" className="section-padding bg-zinc-50">
      <div className="container-custom">
        <h2 className="section-heading">교육 방식: 여러분의 환경에 맞게 선택하세요</h2>
        <p className="section-subheading">대면 또는 비대면, 여러분의 상황에 따라 맞춤형으로 진행됩니다</p>

        {/* Image placeholder - in production, use an actual image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
            <p className="text-zinc-500">교육 방식 이미지: 대면/비대면 교육 장면</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">교육 시간</h3>
              </div>
              <p>1회당 <strong>90~180분</strong> (단체 요청에 따라 조정 가능)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">교육 일정</h3>
              </div>
              <p>평일 주간은 물론, <strong>주말 및 야간</strong> 교육도 가능합니다.</p>
            </div>
          </div>

          <Tabs defaultValue="inperson" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="inperson" className="text-base py-3">대면 교육</TabsTrigger>
              <TabsTrigger value="online" className="text-base py-3">실시간 비대면 교육</TabsTrigger>
              <TabsTrigger value="space" className="text-base py-3">교육공간 지원</TabsTrigger>
            </TabsList>

            <TabsContent value="inperson" className="mt-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">1. 대면 교육</h3>
                </div>

                <ul className="space-y-3 ml-16">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>예술 분야별 전문 강사가 신청 기관에 직접 방문</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>현장 맞춤형 강의와 사례 중심 교육 진행</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>실시간 질의응답 및 전문가 자문</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="online" className="mt-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">2. 실시간 비대면 교육</h3>
                </div>

                <ul className="space-y-3 ml-16">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>화상회의 플랫폼을 통한 라이브 교육</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>온라인 설문과 채팅을 활용한 참여</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="space" className="mt-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">3. 교육공간 지원</h3>
                </div>

                <ul className="space-y-3 ml-16">
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>교육공간이 없는 단체를 위해 교육장 제공 가능</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>재단이 마련한 교육 전용 공간에서 진행</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span>사전에 요청 시 협의 후 제공</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>

          <blockquote className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-10 text-center">
            <p className="text-lg font-medium mb-0">
              "여러분의 일정과 환경에 맞춰 최적의 교육 방식을 선택하세요. 접근성과 교육 효과를 모두 고려한 맞춤형 교육을 제공합니다."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
