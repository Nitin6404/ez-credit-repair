export const bankLogos = {
  amex: new URL('../images/banks/american-express.svg', import.meta.url).href,
  bofa: new URL('../images/banks/bank-of-america.svg', import.meta.url).href,
  chase: new URL('../images/banks/chase-bank.svg', import.meta.url).href,
  // ... rest of your bank logos
};

export const tradelineData = [
  {
    id: 1,
    logo: bankLogos.amex,
    institution: 'American Express',
    monthYear: 'June 1976',
    creditAmount: '$2,499.00',
    reportingDate: '19th',
    price: '$17,000',
    status: 'Select',
  },
  // ... rest of your tradeline data
];
