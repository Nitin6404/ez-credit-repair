import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import AboutUs from '../components/asset/AboutUsbackground.png';
import { DataTable, TablePagination } from '../components/ui/DataTable';

export function Tradelines() {
  const [selectedInstitution, setSelectedInstitution] = useState('Select Institution');
  const [currentPage, setCurrentPage] = useState(1);

  const tradelineData = [
    {
      id: 1,
      logo: '/logos/amex.png',
      institution: 'American Express',
      monthYear: 'June 1976',
      creditAmount: '$2,499.00',
      reportingDate: '19th',
      price: '$17,000',
      status: 'Select',
    },
    {
      id: 2,
      logo: '/logos/boa.png',
      institution: 'Bank of America',
      monthYear: 'June 1994',
      creditAmount: '$60,000.00',
      reportingDate: '24th',
      price: '$23,000',
      status: 'Added',
    },
    {
      id: 3,
      logo: '/logos/chase.png',
      institution: 'Chase Bank',
      monthYear: 'Nov 2015',
      creditAmount: '$1,949.00',
      reportingDate: '19th',
      price: '$18,000',
      status: 'Select',
    },
    {
      id: 4,
      logo: '/logos/discover.png',
      institution: 'Discover Bank',
      monthYear: 'Apr 1993',
      creditAmount: '$1,199.00',
      reportingDate: '24th',
      price: '$20,000',
      status: 'Select',
    },
    {
      id: 5,
      logo: '/logos/capital-one.png',
      institution: 'Capital One Bank',
      monthYear: 'May 2011',
      creditAmount: '$2,499.00',
      reportingDate: '19th',
      price: '$11,000',
      status: 'Added',
    },
    {
      id: 6,
      logo: '/logos/citi.png',
      institution: 'Citi Bank',
      monthYear: 'Aug 1998',
      creditAmount: '$1,150.00',
      reportingDate: '24th',
      price: '$122,000',
      status: 'Select',
    },
    {
      id: 7,
      logo: '/logos/elan.png',
      institution: 'Elan Credit Card',
      monthYear: 'Aug 2013',
      creditAmount: '$1,099.00',
      reportingDate: '24th',
      price: '$19,000',
      status: 'Select',
    },
    {
      id: 8,
      logo: '/logos/fidelity.png',
      institution: 'Fidelity',
      monthYear: 'June 1994',
      creditAmount: '$1,149.00',
      reportingDate: '24th',
      price: '$22,000',
      status: 'Select',
    },
    {
      id: 9,
      logo: '/logos/penfed.png',
      institution: 'PenFed Credit Un.',
      monthYear: 'July 2017',
      creditAmount: '$975.00',
      reportingDate: '24th',
      price: '$39,000',
      status: 'Select',
    },
    {
      id: 10,
      logo: '/logos/td.png',
      institution: 'TD Bank',
      monthYear: 'June 1994',
      creditAmount: '$950.00',
      reportingDate: '24th',
      price: '$35,000',
      status: 'Select',
    },
    {
      id: 11,
      logo: '/logos/usbank.png',
      institution: 'US Bank',
      monthYear: 'Feb 2008',
      creditAmount: '$600.00',
      reportingDate: '24th',
      price: '$15,000',
      status: 'Select',
    },
    {
      id: 12,
      logo: '/logos/jpmorgan.png',
      institution: 'JP Morgan Bank',
      monthYear: 'June 2020',
      creditAmount: '$200.00',
      reportingDate: '24th',
      price: '$45,000',
      status: 'Select',
    },
  ];

  const columns = [
    {
      key: 'institution',
      name: 'Choose Institution',
      width: 250,
      formatter: ({ row }) => (
        <div className="flex items-center gap-4">
          <img src={row.logo} alt={row.institution} className="h-8 w-12 object-contain" />
          <span className="cursor-pointer font-medium text-[#04284F] hover:underline">
            {row.institution}
          </span>
        </div>
      ),
    },
    {
      key: 'monthYear',
      name: 'Month/Year',
      width: 150,
      formatter: ({ row }) => <div className="font-medium text-[#04284F]">{row.monthYear}</div>,
    },
    {
      key: 'creditAmount',
      name: 'Credit Amount',
      width: 150,
      formatter: ({ row }) => <div className="font-medium text-[#04284F]">{row.creditAmount}</div>,
    },
    {
      key: 'reportingDate',
      name: 'Reporting Date',
      width: 150,
      formatter: ({ row }) => <div className="font-medium text-[#04284F]">{row.reportingDate}</div>,
    },
    {
      key: 'price',
      name: 'Price',
      width: 150,
      formatter: ({ row }) => <div className="font-medium text-[#04284F]">{row.price}</div>,
    },
    {
      key: 'status',
      name: 'Select',
      width: 120,
      sortable: false,
      formatter: ({ row }) => (
        <div>
          <button
            className={`rounded-sm px-6 py-1.5 font-medium ${
              row.status === 'Added'
                ? 'bg-white text-[#46CC02]'
                : 'border border-[#04284F] bg-white text-[#04284F] hover:bg-[#04284F] hover:text-white'
            }`}
          >
            {row.status}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />

        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10">Home</span>
            <span className="mx-1">|</span>
            <span>Tradelines</span>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full bg-[#15549A] px-24 py-12 text-start font-inter text-white">
        <h1 className="mb-3 font-inter text-5xl font-bold">Tradeline Inventory</h1>
        <p className="mb-3 text-xl font-normal">
          Tradeline orders must be processed at least 5 days before the reporting date, except for
          American Express, which requires a <b>minimum of 10 days minimum of 10 days</b>. If the
          reporting date has already passed, the tradeline's first reporting date will shift to the
          following month.
        </p>
        <p className="text-xl font-normal">
          Note: Once an order is placed, we will verify tradeline availability and notify you when
          the tradeline order has been accepted. If the requested tradelines are unavailable,
          alternative options will be added to your user account for you to select to complete your
          application and place you as an authorized user. Otherwise, your payment will be refunded.
        </p>
      </div>

      <div className="mx-20 mb-14 mt-20">
        <div className="mb-6 flex flex-col items-center justify-end text-center font-inter">
          <div className="flex w-full justify-end">
            <button className="flex items-center bg-[#04284F] px-5 py-2.5 text-lg font-normal text-white">
              <span>Go to Checkout</span>
            </button>
          </div>
          <div className="mx-auto mt-5 flex flex-col items-center gap-4 rounded-none">
            <span className="mb-1 whitespace-nowrap text-2xl font-normal text-[#04284F]">
              Select Desired Tradeline and Reporting Date on your order:
            </span>
            <div className="flex w-[750px] gap-0">
              <div className="relative w-3/4 flex-1">
                <select
                  className="w-full appearance-none border bg-[#E3E3E3] px-4 py-2 text-[#173455]"
                  value={selectedInstitution}
                  onChange={e => setSelectedInstitution(e.target.value)}
                >
                  <option className="text-lg font-normal text-[#122F6D]">Select Institution</option>
                  {tradelineData.map(item => (
                    <option key={item.id} value={item.institution}>
                      {item.institution}
                    </option>
                  ))}
                </select>
                <button className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <ChevronDown className="h-5 w-5 text-[#04284F]" />
                </button>
              </div>
              <div className="relative w-1/4">
                <button className="w-full border bg-[#D9D9D9] py-2 pl-9 pr-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#04284F]" />
                  <p className="text-md font-normal text-[#04284F]">Find Tradeline</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <DataTable columns={columns} rows={tradelineData} style={{ height: 720 }} />

        <TablePagination currentPage={currentPage} totalPages={4} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}
