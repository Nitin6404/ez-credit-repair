import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#15549A] pb-32 pt-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-4 text-4xl font-bold text-white">
                Secure Connection and Your Data
              </h1>
            </div>
            <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
              <img
                src="https://placehold.co/600x400/15549A/FFFFFF/png?text=Privacy+Hero+Image"
                alt="Privacy Hero"
                className="mx-auto w-full max-w-[400px]"
              />
            </div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 h-32 w-full overflow-hidden">
          <div
            className="absolute bottom-0 h-full w-full bg-white"
            style={{
              borderTopLeftRadius: '50% 100%',
              borderTopRightRadius: '50% 100%',
            }}
          ></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto -mt-16 max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <img
              src="https://placehold.co/80/46CC02/FFFFFF/png?text=Security"
              alt="Guaranteed Security"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="mb-2 text-xl font-semibold text-[#15549A]">Guaranteed Security</h3>
            <p className="text-[#4B4B4B]">
              Your data is protected through advanced encryption and security protocols
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <img
              src="https://placehold.co/80/46CC02/FFFFFF/png?text=Storage"
              alt="Secure Data Storage"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="mb-2 text-xl font-semibold text-[#15549A]">Secure Data Storage</h3>
            <p className="text-[#4B4B4B]">
              All your information is stored in secure, encrypted databases
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <img
              src="https://placehold.co/80/46CC02/FFFFFF/png?text=Privacy"
              alt="Your Privacy Matters"
              className="mx-auto mb-4 h-20 w-20"
            />
            <h3 className="mb-2 text-xl font-semibold text-[#15549A]">Your Privacy Matters</h3>
            <p className="text-[#4B4B4B]">
              We prioritize your privacy and never share your data without consent
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-xl font-semibold text-[#15549A]">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#46CC02] text-white">
                  1
                </span>
                Our Commitment to Your Privacy
              </h2>
              <p className="text-[#4B4B4B]">
                We are dedicated to protecting your personal information and ensuring your data
                security.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-xl font-semibold text-[#15549A]">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#46CC02] text-white">
                  2
                </span>
                Sharing of Information
              </h2>
              <p className="text-[#4B4B4B]">
                We never sell or share your personal information with third parties without your
                explicit consent.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-xl font-semibold text-[#15549A]">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#46CC02] text-white">
                  3
                </span>
                Security of Information
              </h2>
              <p className="text-[#4B4B4B]">
                We employ industry-standard security measures to protect your data from unauthorized
                access.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://placehold.co/800x600/15549A/FFFFFF/png?text=Privacy+Protection"
              alt="Privacy Protection"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 right-0 -mb-4 -mr-4">
              <img
                src="https://placehold.co/120/46CC02/FFFFFF/png?text=Shield"
                alt="Security Shield"
                className="h-32 w-32"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#15549A]">Information We Collect</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <ul className="list-inside list-disc space-y-2 text-[#4B4B4B]">
                <li>Basic account information (name, email, phone)</li>
                <li>Credit report and score information</li>
                <li>Financial history and documentation</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#15549A]">Usage Tracking</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-[#4B4B4B]">
                We collect anonymous usage data to improve our services and enhance your experience.
                This includes website analytics and interaction patterns.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[#15549A]">Your Consent</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-[#4B4B4B]">
                By using our services, you consent to our privacy policy and agree to its terms. You
                can withdraw consent at any time by contacting our support team.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
