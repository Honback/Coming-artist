import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-purple-900 text-purple-50">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">한국예술인복지재단</h3>
            <address className="not-italic text-sm space-y-2">
              <p>(04637) 서울특별시 중구 한강대로 416 서울스퀘어 3층</p>
              <p>Tel: 02-3668-0200</p>
              {/* <p>Fax: 02-739-7111</p> */}
              <p>Email: contract@kawf.kr</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">신청 및 운영 문의</h3>
            <div className="text-sm space-y-2">
              <p>
                <strong>카톡 문의 : </strong>
                  <Link href="http://pf.kakao.com/_xkexdLG/chat" target="_blank" rel="noopener noreferrer" className="text-primary text-yellow-400 no-underline hover:text-purple-300 hover:underline">바로가기</Link>
               </p>
              <p><strong>전화 : </strong>02-6342-2801</p>
              <li className="flex flex-col">
                <span className="font-semibold mb-1">이메일 : phh@parancompany.co.kr</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold mb-1">운영시간 : 평일 9:00-18:00</span>
                <span className="text-sm text-zinc-500">(12:00-13:00 점심시간 제외)</span>
              </li>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold mb-4">권리 침해 신고·상담</h3>
            <div className="text-sm space-y-2">
              <p>예술인 권리침해 신고·상담 핫라인:</p>
              <p className="font-bold">02-3668-0200</p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="#apply"
                  className="poster-button-primary"
                >
                  교육 신청하기
                </Link>
                <Link
                  href="#download"
                  className="poster-button-secondary"
                >
                  자료 다운로드
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="https://www.kawf.kr/utility/sub02.do" className="text-sm hover:text-purple-200 transition-colors">
              개인정보처리방침
            </Link>
            {/* <Link href="#" className="text-sm hover:text-purple-200 transition-colors">
              이용약관
            </Link> */}
            <Link href="https://www.kawf.kr/utility/sub01.do" className="text-sm hover:text-purple-200 transition-colors">
              사이트맵
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="한국예술인복지재단 로고"
              className="h-16 rounded-md p-1"
            />
            <div className="text-sm text-purple-200">
              Copyright(c) Korean Artist Welfare Foundation. All rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
