import { useState } from 'react';
import { Server, Lock, ShieldCheck, ArrowDown } from 'lucide-react';
import PrivacyPolicyBg1 from '../components/asset/privacy-policy-bg-1.svg';
import PrivacyPolicyHero from '../components/asset/privacy-policy-hero-image.svg';
import PrivacyPolicyBg2 from '../components/asset/privacy-policy-bg-2.svg';
import PropTypes from 'prop-types';

// Update the CollapsibleSection component
function CollapsibleSection({ title, children, isActive, onClick }) {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`flex w-[641px] items-center justify-between rounded-xl bg-white p-4 text-left transition-all hover:bg-[#F4F4F4] ${
          isActive ? 'h-[170px]' : 'h-[68px]'
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-[#04080C]">{title}</h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#04284F]">
              <ArrowDown
                className={`h-6 w-6 flex-shrink-0 transform text-white transition-transform ${
                  isActive ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
          {isActive && (
            <>
              <div className="my-4 h-0.5 w-full bg-[#535353]"></div>
              <p className="text-md font-bold text-[#04080C]">{children}</p>
            </>
          )}
        </div>
      </button>
    </div>
  );
}

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Card Component
function SecurityCard({ icon: Icon, title, description }) {
  return (
    <div className="flex h-[620px] w-[390px] flex-1 flex-col items-center bg-[#F5F8FF] p-4 text-center drop-shadow-lg">
      <div className="mx-auto mb-2 mt-10">
        <Icon className="h-32 w-32 text-[#04284F]" />
      </div>
      <h3 className="mb-10 text-2xl font-bold text-[#04080C]">{title}</h3>
      <div className="mb-2 h-0.5 w-[330px] bg-[#535353]"></div>
      <p className="text-start text-[19px] font-medium leading-10 text-[#04080C]">{description}</p>
    </div>
  );
}

SecurityCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Card Data
const securityCards = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Security',
    description:
      'Your safety is our priority. Our site is safeguarded with advanced encryption provided by GeoTrust and undergoes regular TrustedSite scans to protect against malware, viruses, and other online threats. You can interact with confidence knowing your experience is secure.',
  },
  {
    icon: Server,
    title: 'Secure Data Storage',
    description:
      'We employ state-of-the-art firewalls and cutting-edge data encryption to protect your personal information. Our customer portal, network, and servers are built to ensure maximum security at all times.',
  },
  {
    icon: Lock,
    title: 'Your Privacy Matters',
    description:
      'We are committed to safeguarding your privacy. Your personal information is never shared or sold, and your communication with us remains strictly confidential. We use your information only as you intend, with no exceptions.',
  },
];

export function PrivacyPolicy() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      title: 'Our Commitment to Your Privacy',
      content:
        'EzeCredit LLC, the owner and operator of EzeCreditRepair.com, prioritizes your privacy online. This Privacy Policy explains the types of information we collect and how we use and protect it.',
    },
    {
      title: 'Sharing of Information',
      content:
        'We maintain strict confidentiality of your personal information and never share it with third parties without your explicit consent. Any sharing of information is done only when necessary to provide our services or when required by law.',
    },
    {
      title: 'Security of Information',
      content:
        'We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our systems are regularly updated and monitored to ensure the highest level of data security.',
    },
  ];

  return (
    <div className="bg-white font-inter">
      {/* Hero Section */}
      <div className="relative py-16">
        {/* Background SVG */}
        <div className="absolute inset-0 z-0">
          <img src={PrivacyPolicyBg1} alt="" className="h-[560px] w-full object-cover" />
        </div>

        <div className="relative z-10 mx-20 max-w-[1263px]">
          {/* Navigation Links */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-[22px] font-bold text-white">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <span>|</span>
              <span className="text-white">Privacy Policy</span>
            </nav>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2">
              <h1 className="mb-4 mt-16 text-6xl font-normal text-white">
                Secure Connection and Your Data
              </h1>
            </div>
            <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
              <img
                src={PrivacyPolicyHero}
                alt="Privacy Hero"
                className="ml-32 h-[524px] w-[551px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {securityCards.map((card, index) => (
            <SecurityCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Privacy Policy Section with Background */}
      <div className="relative mt-20 h-[622px] w-full">
        <div className="absolute inset-0 z-0">
          <img src={PrivacyPolicyBg2} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="relative z-10 mx-20 max-w-[1200px] px-4 pb-28 pt-[72px]">
          <h2 className="mb-12 text-5xl font-bold text-white">Privacy Policy</h2>

          <div className="max-w-[800px] space-y-4">
            {faqData.map((faq, index) => (
              <CollapsibleSection
                key={index}
                title={faq.title}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {faq.content}
              </CollapsibleSection>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="w-full">
        {/* Information We Collect Section */}
        <div className="-px-16 mx-auto w-full pt-16">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-5xl font-bold text-[#010810]">Information We Collect</h2>
            <p className="text-[22px] font-bold text-[#04284F]">
              EzeCredit gathers two types of information
            </p>
          </div>

          {/* Information You Provide */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <div className="flex items-center bg-[#04284F] p-4 px-24 text-white">
                <div className="mr-3 rounded-full border-[5px] border-white bg-[#04284F]">
                  <span className="flex h-8 w-8 items-center justify-center text-[31px] font-bold text-white">
                    1
                  </span>
                </div>
                <h3 className="text-[33px] font-bold">Information You Provide</h3>
              </div>
              <div className="bg-white px-24 pb-6 pt-3">
                <p className="text-[22px] font-bold text-[#04080C]">
                  This includes details provided through our website, such as the Enrollment Form,
                  Free Consultation Form, or Customer Account Interface (EzeCredit Portal).
                </p>
                <p className="mb-2 text-[22px] font-bold text-[#04080C]">
                  Collected data may include:
                </p>
                <div className="grid grid-cols-2 text-xl font-semibold text-[#04080C] md:grid-cols-3">
                  <div className="flex items-center">
                    <span className="mr-2">1.</span>
                    <span>Name</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">2.</span>
                    <span>Address</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">3.</span>
                    <span>Contact Information</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">4.</span>
                    <span>Social Security Number</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">5.</span>
                    <span>Date of Birth</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">6.</span>
                    <span>Billing Information</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information From Usage Tracking */}
            <div className="overflow-hidden">
              <div className="flex items-center bg-[#04284F] p-4 px-24 text-white">
                <div className="mr-3 rounded-full border-[5px] border-white bg-[#04284F]">
                  <span className="flex h-8 w-8 items-center justify-center text-[31px] font-bold text-white">
                    2
                  </span>
                </div>
                <h3 className="text-[33px] font-bold">Information From Usage Tracking</h3>
              </div>
              <div className="bg-white px-24 pb-6 pt-3">
                <p className="mb-8 ml-10 w-[1116px] text-[22px] font-bold text-[#04080C]">
                  We monitor page views and user interactions on our website to improve content and
                  understand our audience&apos;s needs. This data is aggregated and not linked to
                  individual users
                </p>

                {/* Usage Tracking */}
                <div className="mb-6 rounded-xl bg-[#666767] pb-2">
                  <div className="rounded-lg bg-[#F4F4F4] p-6">
                    <h4 className="mb-3 text-[33px] font-bold text-[#04284F]">Usage Tracking</h4>
                    <p className="text-[22px] font-medium text-[#02152B]">
                      We monitor page views and user interactions on our website to improve content
                      and understand our audience&apos;s needs. This data is aggregated and not
                      linked to individual users
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div className="mb-6 rounded-xl bg-[#666767] pb-2">
                  <div className="rounded-lg bg-[#F4F4F4] p-6">
                    <h4 className="mb-3 text-[33px] font-bold text-[#04284F]">Cookies</h4>
                    <p className="text-[22px] font-medium text-[#02152B]">
                      We may use cookies, which are small text files stored on your computer, to
                      track traffic patterns and improve site functionality. These cookies do not
                      contain personal information and cannot access data on your device. You can
                      choose to disable cookies in your browser settings, though some site
                      functionality may be affected
                    </p>
                  </div>
                </div>

                {/* Your Consent */}
                <div className="mb-6 rounded-xl bg-[#666767] pb-2">
                  <div className="rounded-lg bg-[#F4F4F4] p-6">
                    <h4 className="mb-3 text-[33px] font-bold text-[#04284F]">Your Consent</h4>
                    <p className="text-[22px] font-medium text-[#02152B]">
                      By using EzeCreditRepair.com, you consent to the collection and use of your
                      information as outlined in this policy. Any updates to our privacy practices
                      will be reflected on this page, ensuring you remain informed of how we handle
                      your data
                    </p>
                  </div>
                </div>

                {/* Public Safety and Legal Compliance */}
                <div className="mb-6 rounded-xl bg-[#666767] pb-2">
                  <div className="rounded-lg bg-[#F4F4F4] p-6">
                    <h4 className="mb-3 text-[33px] font-bold text-[#04284F]">
                      Public Safety and Legal Compliance
                    </h4>
                    <p className="text-[22px] font-medium text-[#02152B]">
                      EzeCredit will only disclose user information to third parties when required
                      to comply with applicable laws, legal processes, or to protect the safety of
                      our users and the public.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
