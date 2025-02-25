import about from '../components/asset/about.png';

export const questions = [
  {
    id: 1,
    question: 'Can any credit be repaired?',
    answer:
      'Credit repair involves resolving any questionable negative items that may be damaging your credit profile. If the credit bureaus or your creditors cannot provide proof that these items are fair, accurate, and verified, they are legally required to remove them.',
  },
  {
    id: 2,
    question: 'How long can this process take?',
    answer:
      'The time varies depending on your unique credit situation, but results can often be seen within a few months.',
  },
  {
    id: 3,
    question: 'What type of items can be removed on my credit report?',
    answer:
      'Items such as late payments, collections, charge-offs, and other inaccurate or unfair items may be disputed and removed if applicable.',
  },
  {
    id: 4,
    question: 'If I just pay off my bills will that restore my good credit?',
    answer:
      'Paying off bills can help, but removing negative items and building positive credit history are key for credit restoration.',
  },
  {
    id: 5,
    question: 'What is a good credit score?',
    answer:
      'A good credit score typically ranges from 700 to 749, with higher scores reflecting better creditworthiness.',
  },
];

export const accordionDataFaqSection = [
  {
    title: 'Can any credit be repaired?',
    content: (
      <>
        <img
          src={about}
          alt="Recovery Icon"
          className="absolute mb-4 h-[60px] w-[80px] md:h-[100px] md:w-[120px]"
        />
        <p className="ml-[100px] font-montserrat text-[16px] font-semibold leading-[22px] md:ml-[140px] md:text-[22px] md:leading-[27px]">
          Credit repair involves resolving any questionable negative items that may be damaging your
          credit profile. If the credit bureaus or your creditors cannot provide proof that these
          items are fair, accurate, and verified, they are legally required to remove them.
        </p>
      </>
    ),
  },
  {
    title: 'How long can this process take?',
    content:
      "Opportunities often arise unexpectedly, requiring timely action. Unfortunately, there's no way to predict exactly how long credit repair will take without understanding the specific roadblocks affecting your score. However, we work quickly to position you for success, often within 30 to 90 days.",
  },
  {
    title: 'What type of items can be removed on my credit report?',
    content:
      'Any negative item that is inaccurate, unfair, or unverified can be disputed with the credit bureaus and your creditors. This includes collections, late payments, charge-offs, liens, bankruptcies, repossessions, and more.',
  },
  {
    title: 'If I just pay off my bills will that restore my good credit?',
    content:
      'Paying off your bills doesn’t automatically boost your credit score. Once the damage is done, further action is required to improve it. You’re history will be marked as a paid delinquency, charge-off, or collection. If your goal is to repair your credit, paying debts alone won’t be enough. Credit repair is a challenge for many, but we’re here to help. We offer a proven path to recovery and will teach you how to maintain your score once you reach your target.',
  },
  {
    title: 'What is a good credit score?',
    content: 'Credit bureaus typically consider a good credit score to be anything above 650.',
  },
];

export const accordionDataFaqAbout = [
  {
    title: 'Can any credit be repaired?',
    content: (
      <>
        <img
          src={about}
          alt="Recovery Icon"
          className="absolute mb-4 h-[60px] w-[80px] md:h-[102px] md:w-[136px]"
        />
        <p className="ml-[100px] font-montserrat text-[16px] font-semibold leading-[22px] md:ml-[170px] md:text-[22px] md:leading-[27px]">
          Credit repair involves resolving any questionable negative items that may be damaging your
          credit profile. If the credit bureaus or your creditors cannot provide proof that these
          items are fair, accurate, and verified, they are legally required to remove them.
        </p>
      </>
    ),
  },
  {
    title: 'How long can this process take?',
    content:
      'Opportunities often arise unexpectedly, requiring timely action. Unfortunately, theres no way to predict exactly how long credit repair will take without understanding the specific roadblocks affecting your score. However, we work quickly to position you for success, often within 30 to 90 days.',
  },
  {
    title: 'What type of items can be removed on my credit report?',
    content:
      'Any negative item that is inaccurate, unfair, or unverified can be disputed with the credit bureaus and your creditors. This includes collections, late payments, charge-offs, liens, bankruptcies, repossessions, and more.',
  },
  {
    title: 'If I just pay off my bills will that restore my good credit?',
    content:
      'Paying off your bills doesn’t automatically boost your credit score. Once the damage is done, further action is required to improve it. You’re history will be marked as a paid delinquency, charge-off, or collection. If your goal is to repair your credit, paying debts alone won’t be enough. Credit repair is a challenge for many, but we’re here to help. We offer a proven path to recovery and will teach you how to maintain your score once you reach your target.',
  },
  {
    title: 'What is a good credit score?',
    content: 'Credit bureaus typically consider a good credit score to be anything above 650.',
  },
];
