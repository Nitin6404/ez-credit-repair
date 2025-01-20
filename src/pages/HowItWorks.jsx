import { Link } from 'react-router-dom';
import register from '../components/asset/step-1-register.svg';
import audit from '../components/asset/step-2-audit.svg';
import dispute from '../components/asset/step-3-dispute.svg';
import boost from '../components/asset/step-4-boost.svg';

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-[#041E3E] p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center space-x-4 text-white">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <span>|</span>
            <span>How It Works</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Step One */}
        <div className="mb-16 flex items-start justify-between gap-8">
          <div className="flex-1">
            <h2 className="mb-2 text-lg font-bold text-[#15549A]">STEP ONE</h2>
            <h3 className="mb-4 text-2xl font-bold text-[#4CAF50]">Register</h3>
            <p className="mb-4 text-gray-600">
              Get'n'go started is simple! Just complete our easy sign-up form. Here's all the prep
              need to submit your free credit repair consultation with our system.
            </p>
            <button className="rounded bg-[#4CAF50] px-6 py-2 text-white hover:bg-[#45a049]">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 text-center">
                <img src="/src/components/asset/logo.png" alt="E2E Logo" className="mx-auto h-12" />
                <p className="mt-2 text-sm text-gray-600">Sign Up | Step 1</p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded border border-gray-300 p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded border border-gray-300 p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border border-gray-300 p-2"
                />
                <button className="w-full rounded bg-[#4CAF50] py-2 text-white hover:bg-[#45a049]">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Step Two */}
        <div className="mb-16 flex items-center justify-between gap-8">
          <div className="flex-1">
            <img src={audit} alt="Audit Process" className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="mb-2 text-lg font-bold text-[#15549A]">STEP TWO</h2>
            <h3 className="mb-4 text-2xl font-bold text-[#4CAF50]">Audit & Assessment</h3>
            <p className="text-gray-600">
              We will:
              <br />- Conduct a free by line review and assessment of your credit report.
              <br />- Document a detailed plan how to identify and resolve all surprise facts.
              <br />- Schedule a consultation to review our findings with you.
              <br />
              <br />
              With this comprehensive roadmap to recovery, we will also provide personalized,
              practical tips for score optimization and rebuilding tailored to your situation.
            </p>
          </div>
        </div>

        {/* Step Three */}
        <div className="mb-16 flex items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="mb-2 text-lg font-bold text-[#15549A]">STEP THREE</h2>
            <h3 className="mb-4 text-2xl font-bold text-[#4CAF50]">The Dispute Process</h3>
            <p className="text-gray-600">
              We will handle the process of challenging inaccurate and questionable items on your
              behalf. Our experts will communicate with credit bureaus and creditors to resolve any
              inaccuracies. We will automatically send customized e-disputes verified in accordance
              with your rights under the FCRA.
              <br />
              <br />
              This entire process is managed for you, including sending certified mail to the
              bureaus and providing digital updates through your client dashboard. Throughout the
              process, we will monitor responses from the bureaus, and we will periodically update
              credit reports.
            </p>
          </div>
          <div className="flex-1">
            <img src={dispute} alt="Dispute Process" className="w-full" />
          </div>
        </div>

        {/* Step Four */}
        <div className="mb-16 flex items-center justify-between gap-8">
          <div className="flex-1">
            <img src={boost} alt="Boost Score" className="w-full" />
          </div>
          <div className="flex-1">
            <h2 className="mb-2 text-lg font-bold text-[#15549A]">STEP FOUR</h2>
            <h3 className="mb-4 text-2xl font-bold text-[#4CAF50]">Boost Your Score</h3>
            <p className="text-gray-600">
              Every 30-45 days, you'll likely continue to see an increase in your score as negative
              items are removed. We'll continue to communicate with you, and even share your updated
              documents immediately with us, and even share your score improvement tips.
              <br />
              <br />
              Removing inaccuracies and errors from your credit report can help you achieve the
              credit score you need. We provide personalized guidance and strategies to put you on
              the path toward better credit. Our proven credit repair process is designed to help
              you raise your score even faster!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg bg-[#041E3E] p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Are you ready to take action?
            <br />
            We are ready to help.
          </h2>
          <button className="rounded bg-[#4CAF50] px-8 py-3 font-semibold hover:bg-[#45a049]">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
