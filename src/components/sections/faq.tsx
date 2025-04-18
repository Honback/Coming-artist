import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">자주 묻는 질문 (FAQ)</h2>
        <p className="section-subheading">더 알고 싶은 내용이 있나요?</p>

        {/* Image placeholder - in production, use an actual image */}
        {/* <div className="rounded-xl overflow-hidden shadow-lg mb-10 aspect-video max-w-3xl mx-auto">
          <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
            <p className="text-zinc-500">FAQ 이미지: 질문과 답변</p>
          </div>
        </div> */}

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-zinc-200 py-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                이 교육은 비용이 어떻게 되나요?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-4 pt-2">
                네, 한국예술인복지재단의 지원으로 예술인들에게 무료로 제공됩니다. 단, 연간 예산 소진 시 조기 마감될 수 있으니 서둘러 신청하세요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-zinc-200 py-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                성희롱·성폭력 예방교육은 법정의무교육으로 인정받을 수 있나요?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-4 pt-2">
                네, 본 교육은 공식 법정의무교육으로 인정되며, 참가자 전원에게 수료증이 발급됩니다. 기관의 성희롱·성폭력 예방교육 의무를 이행하는 데 활용하실 수 있습니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-zinc-200 py-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                최소 인원에 미치지 못하는 소규모 단체는 신청할 수 없나요?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-4 pt-2">
                교육의 효율성을 위해 계약 교육은 20인 이상, 성희롱·성폭력 예방교육은 10인 이상을 기준으로 하고 있습니다. 기준 미만의 단체 및 개인은 별도의 특강 프로그램이나 온라인 교육이 준비되어 있습니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-zinc-200 py-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                교육 내용은 어떻게 구성되나요?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-4 pt-2">
                신청 단체의 예술 분야, 참가자 연령대, 요청사항 등을 고려해 맞춤형으로 구성됩니다. 사전에 특별히 다루어주었으면 하는 내용이 있다면 신청 시 기재해주세요.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-zinc-200 py-2">
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                비대면 교육도 수료증이 발급되나요?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-4 pt-2">
                네, 실시간으로 참여한 교육생에 한해 동일하게 수료증이 발급됩니다. 단, 비대면 교육의 경우 참가자 출석 확인을 위한 절차가 필요하니 안내에 따라주세요.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
