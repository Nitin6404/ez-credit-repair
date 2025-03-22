import { newTradeLinesData, bankLogos } from '../data/tradelinesData.js';

// Function to convert Excel date number to Month Year string
function excelDateToMonthYear(excelDate) {
  if (excelDate === 'Inquire') return excelDate;
  const date = new Date((excelDate - 25569) * 86400 * 1000);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

// Function to get bank logo based on institution name
function getBankLogo(institution) {
  const institutionLower = institution.toLowerCase().trim();
  if (institutionLower.includes('american express') || institutionLower.includes('amex'))
    return bankLogos.amex;
  if (institutionLower.includes('bank of america') || institutionLower.includes('bofa'))
    return bankLogos.bofa;
  if (institutionLower.includes('chase')) return bankLogos.chase;
  if (institutionLower.includes('citi')) return bankLogos.citi;
  if (institutionLower.includes('discover')) return bankLogos.discover;
  if (institutionLower.includes('elan')) return bankLogos.elan;
  if (institutionLower.includes('fidelity')) return bankLogos.fidelity;
  if (institutionLower.includes('penfed')) return bankLogos.penfed;
  if (institutionLower.includes('td')) return bankLogos.td;
  if (institutionLower.includes('us bank')) return bankLogos.us;
  if (institutionLower.includes('jp morgan')) return bankLogos.jp;
  if (institutionLower.includes('capital one')) return bankLogos.capitalOne;
  return ''; // Default empty string if no match found
}

// Convert the data
const convertedData = newTradeLinesData.map((item, index) => ({
  id: index + 1,
  logo: getBankLogo(item.institution),
  institution: item.institution.trim(),
  monthYear: excelDateToMonthYear(item.monthYear),
  creditAmount:
    typeof item.creditAmount === 'number'
      ? `$${item.creditAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : '$0.00',
  reportingDate: '24th', // Default reporting date
  price:
    typeof item.price === 'number'
      ? `$${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : '$0.00',
  status: 'Select', // Default status
}));

// Output the converted data
console.log(JSON.stringify(convertedData, null, 2));
