export function ProgressSteps({ steps, currentStep }) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-center gap-3">
        {steps.map(step => (
          <div key={step.id} className="flex items-center justify-center">
            <div className="relative">
              {/* Circle with Number (Hidden on Mobile) */}
              <div
                className={`relative z-10 hidden h-10 w-10 items-center justify-center rounded-full font-inter sm:flex ${
                  currentStep >= step.id
                    ? 'bg-[#04284F] text-white'
                    : 'border-2 border-[#BABABA] bg-[#BABABA] text-white'
                }`}
              >
                <span className="font-montserrat text-base font-bold">{step.id}</span>
              </div>
            </div>

            {/* Step Title (Always Visible) */}
            <span
              className={`text-lg font-extrabold sm:ml-[18px] sm:text-xl ${
                currentStep >= step.id ? 'text-[#04284F]' : 'text-[#BABABA]'
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
