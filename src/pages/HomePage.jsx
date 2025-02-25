import { FAQSection } from '../components/faq/FaqSection';
import { NewsAndBlog } from '../components/common/NewsAndBlog';
import { Program } from '../components/common/ProgressiveCorrective';
import { Testimonial } from '../components/common/Testimonial';
import { Contactform } from '../components/ui/ContactForm';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { AboutSection } from '../components/home/AboutSection';
import { GetStartedSection } from '../components/home/GetStartedSection';
import { HeroSection } from '../components/home/HeroSection';

export function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative">
        <HeroSection />
        <GetStartedSection />
        <AboutSection />
        <WhatWeDoSection />
        <FAQSection />
        <Contactform />
        <Program />
        <Testimonial />
        <NewsAndBlog />
      </div>
    </div>
  );
}
