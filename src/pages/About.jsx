import { FaqAbout } from '../components/common/FAQSection';
import { Testimonial } from '../components/common/Testimonial';
import { IntroSection } from '../components/about/IntroSection';
import { AboutHeader } from '../components/about/AboutHeader';
import { ProgramSection } from '../components/about/ProgramSection';

// Main About component
export function About() {
  return (
    <div>
      <AboutHeader />
      <div className="mx-4 flex flex-col items-center justify-center bg-white lg:mx-16">
        <IntroSection />
        <ProgramSection />
      </div>
      <FaqAbout />
      <Testimonial />
    </div>
  );
}
