import { Footer } from '../common/Footer';
import AboutUs from '../asset/AboutUsbackground.png';
import register from '../asset/register.png';
import audit from '../asset/audit.png';
import dispute from '../asset/dispute.png';
import boost from '../asset/boost.png';

export function HowItWorks() {
  const steps = [
    {
      number: 'STEP ONE',
      title: 'Register',
      description:
        "Getting started is simple! Just complete our easy sign-up form. Here's all the prep need to submit your free credit repair consultation with our system.",
      image: register,
    },
    {
      number: 'STEP TWO',
      title: 'Audit & Assessment',
      description:
        'We will conduct a detailed audit and assessment of your credit report to identify areas for improvement. Our experts will create a customized plan based on your unique situation.',
      image: audit,
    },
    {
      number: 'STEP THREE',
      title: 'The Dispute Process',
      description:
        'We will handle the process of challenging inaccurate and questionable items on your behalf. Our team will communicate with credit bureaus and creditors to resolve any inaccuracies.',
      image: dispute,
    },
    {
      number: 'STEP FOUR',
      title: 'Boost Your Score',
      description:
        "Watch your credit score improve as negative items are removed. We'll provide ongoing support and guidance to help maintain and improve your credit score over time.",
      image: boost,
    },
  ];

  return (
    <div className="w-full">
      <div className="relative p-2 mt-3">
        {/* Background Image */}
        <img
          src={AboutUs}
          alt="How It Works Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 mt-[30px]"
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-center text-[#15549A] mb-12">How It Works</h1>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <h3 className="text-[#4CAF50] font-bold mb-2">{step.number}</h3>
                  <h2 className="text-2xl font-bold text-[#15549A] mb-4">{step.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-[#15549A] mb-4">
              Are you ready to take action?
              <br />
              We are ready to help.
            </h2>
            <button className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
