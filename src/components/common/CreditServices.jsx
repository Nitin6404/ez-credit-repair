export function CreditServices() {
  const services = [
    {
      title: "Credit Line Recommendations:",
      description:
        "Guidance on securing credit lines that positively impact your score.",
    },
    {
      title: "Authorized User Tradelines:",
      description: "Add tradelines to your credit report for a quick boost.",
    },
    {
      title: "Credit Utilization Strategy:",
      description:
        "Tailored advice on managing credit limits for optimal score improvement.",
    },
    {
      title: "Secured Credit Card Options:",
      description:
        "Access to secured credit cards to build positive credit history.",
    },
    {
      title: "Score Monitoring Tools:",
      description:
        "Ongoing monitoring services to track your credit score improvements.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#15549A] mb-4">
        Our Credit Services
      </h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start">
            <div className="text-green-500 text-2xl mr-2">|</div>
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
