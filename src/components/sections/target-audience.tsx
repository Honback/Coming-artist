import { Card, CardContent } from "@/components/ui/card";

export function TargetAudienceSection() {
  return (
    <section id="target" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">누가 이 교육을 들어야 할까요?</h2>
        <p className="section-subheading">예술계 모든 구성원이 함께할 때 변화는 시작됩니다</p>

        {/* Image placeholder - in production, use an actual image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center bg-[url('/images/target-audience-img.jpg')] bg-cover bg-center">
            <p className="text-zinc-500"></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">현업·예비예술인</h3>
              <p className="text-zinc-600">창작, 실연, 기술지원 등 모든 예술 활동 종사자</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">예술사업자</h3>
              <p className="text-zinc-600">기획사, 제작사, 갤러리, 공연장 등 예술 관련 사업체</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">문화예술 유관기관 종사자</h3>
              <p className="text-zinc-600">예술지원기관, 문화재단, 예술협회 등</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">예술교육기관 종사자</h3>
              <p className="text-zinc-600">예술대학, 예술고등학교, 예술교육기관 교직원</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">예술 관련 학과</h3>
              <p className="text-zinc-600">중·고·대학 예술학과 - 취업지원팀, 학생지원센터, 단과대학</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-6">
              <div className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">문화예술 관련 기관, 단체</h3>
              <p className="text-zinc-600">예술 분야 모든 조직 (협회, 단체, 사업체 등)</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <blockquote className="bg-zinc-50 p-6 rounded-lg border-l-4 border-primary mb-8 text-center">
            <p className="text-base sm:text-lg font-medium mb-0">
              "예술인 권리보호는 창작의 자유와 예술적 가치를 지키는 토대입니다. 단체/학교/기관이 함께 참여하면 더 효과적인 변화를 이끌어낼 수 있습니다."
            </p>
          </blockquote>

          <div className="bg-zinc-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">최소 신청 인원</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                <span><strong>성희롱·성폭력 예방:</strong> 10인 이상</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary shrink-0 mt-1" />
                <span><strong>예술 계약:</strong> 20인 이상</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
