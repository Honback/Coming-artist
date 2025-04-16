export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">문의 및 상담</h2>
        <p className="section-subheading">궁금한 점이 있으시면 언제든지 연락주세요</p>

        {/* Image placeholder - in production, use an actual image */}
        {/* <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
            <p className="text-zinc-500">문의 이미지: 상담 안내</p>
          </div>
        </div> */}

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                교육 운영 문의
              </h3>

              <ul className="space-y-4 text-zinc-700 pl-9">
                <li className="flex flex-col">
                  <span className="font-semibold mb-1">전화:</span>
                  <span>02-3668-0200, 0267, 0362</span>
                  <span className="text-sm text-zinc-500">(한국예술인복지재단 권리보장팀)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold mb-1">이메일:</span>
                  <a href="mailto:education@kawf.kr" className="text-primary hover:underline">education@kawf.kr</a>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold mb-1">운영시간:</span>
                  <span>평일 9:00-17:30</span>
                  <span className="text-sm text-zinc-500">(12:00-13:00 점심시간 제외)</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                  <path d="M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                예술인 권리 침해 신고·상담
              </h3>

              <div className="pl-9">
                <p className="mb-2 text-zinc-700">예술인 권리침해 신고·상담 핫라인:</p>
                <p className="font-bold text-xl text-primary">02-3668-0200</p>

                <div className="mt-6 p-4 bg-zinc-100 rounded-lg">
                  <p className="text-sm text-zinc-700">
                    예술 활동 중 부당한 대우, 불공정 계약, 성희롱·성폭력 등 권리 침해 사항이 있는 경우 신고 및 상담을 요청하실 수 있습니다. 모든 상담 내용은 비밀이 보장됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-zinc-800 text-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold">한국예술인복지재단</h3>
                <address className="not-italic mt-2 text-zinc-300">
                  (04637) 서울특별시 중구 한강대로 416 서울스퀘어 3층
                </address>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <p className="font-medium">Tel: 02-3668-0200</p>
                  <p className="text-zinc-300">Fax: 02-739-7111</p>
                </div>
              </div>

              <a
                href="http://www.kawf.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white py-2 px-5 rounded-full font-medium transition-colors"
              >
                재단 홈페이지 방문
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
