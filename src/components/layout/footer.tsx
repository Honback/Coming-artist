import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">한국예술인복지재단</h3>
            <address className="not-italic text-sm space-y-2">
              <p>(04637) 서울특별시 중구 한강대로 416 서울스퀘어 3층</p>
              <p>Tel: 02-3668-0200</p>
              <p>Fax: 02-739-7111</p>
              <p>Email: kawf@kawf.kr</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">교육 운영 문의</h3>
            <div className="text-sm space-y-2">
              <p>전화: 02-3668-0200, 0267, 0362</p>
              <p>(한국예술인복지재단 권리보장팀)</p>
              <p>이메일: education@kawf.kr</p>
              <p>운영시간: 평일 9:00-17:30 (12:00-13:00 점심시간 제외)</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">권리 침해 신고·상담</h3>
            <div className="text-sm space-y-2">
              <p>예술인 권리침해 신고·상담 핫라인:</p>
              <p className="font-bold">02-3668-0200</p>
              <div className="flex space-x-4 mt-4">
                <Link
                  href="#apply"
                  className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded text-sm"
                >
                  교육 신청하기
                </Link>
                <Link
                  href="#download"
                  className="text-white bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded text-sm"
                >
                  자료 다운로드
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              이용약관
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              사이트맵
            </Link>
          </div>
          <div className="text-sm text-zinc-400">
            Copyright(c) Korean Artist Welfare Foundation. All rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
