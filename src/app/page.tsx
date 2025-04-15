import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { WhySection } from "@/components/sections/why-section";
import { CurriculumSection } from "@/components/sections/curriculum";
import { TargetAudienceSection } from "@/components/sections/target-audience";
import { EducationMethodSection } from "@/components/sections/education-method";
import { InstructorsSection } from "@/components/sections/instructors";
import { ReviewsSection } from "@/components/sections/reviews";
import { FaqSection } from "@/components/sections/faq";
import { ApplicationProcessSection } from "@/components/sections/application-process";
import { ContactSection } from "@/components/sections/contact";
import { SponsorsSection } from "@/components/sections/sponsors";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhySection />
      <CurriculumSection />
      <TargetAudienceSection />
      <EducationMethodSection />
      <InstructorsSection />
      <ReviewsSection />
      <FaqSection />
      <ApplicationProcessSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
