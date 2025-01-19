import React from 'react';
import { Footer } from '../components/common/Footer';
import { Navbar } from '../components/common/Navbar';

export function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold text-[#15549A]">Privacy Policy</h1>
          <div className="space-y-6 text-[#4B4B4B]">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including when you create an
                account, request our services, or communicate with us. This may include your name,
                email address, phone number, and financial information necessary for credit repair
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services,
                communicate with you about our services, and comply with legal obligations. We may
                also use your information to personalize your experience and provide customer
                support.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your
                information with service providers who assist us in providing our services, or when
                required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may
                also request to restrict processing or object to processing of your information.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
