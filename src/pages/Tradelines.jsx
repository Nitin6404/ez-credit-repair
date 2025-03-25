import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import AboutUs from '../components/asset/AboutUsbackground.png';
import { CustomTable } from '../components/ui/CustomTable';
import { ShoppingCart } from '../components/ui/ShoppingCart';
import { newTradeLinesData } from '../data/tradelinesData';
import { Link } from 'react-router-dom';

export function Tradelines() {
  const [selectedInstitution, setSelectedInstitution] = useState('Select Institution');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [cartItems] = useState([]);

  const columns = [
    {
      key: 'institution',
      name: 'Choose Institution',
      width: 250,
      formatter: ({ row }) => (
        <div className="text-sm font-medium text-[#04284F]">{row.institution}</div>
      ),
    },
    {
      key: 'monthYear',
      name: 'Month/Year',
      width: 150,
      formatter: ({ row }) => (
        <div className="text-sm font-medium text-[#04284F]">{row.monthYear}</div>
      ),
    },
    {
      key: 'creditAmount',
      name: 'Credit Amount',
      width: 150,
      formatter: ({ row }) => (
        <div className="text-sm font-medium text-[#04284F]">{row.creditAmount}</div>
      ),
    },
    {
      key: 'reportingDate',
      name: 'Reporting Date',
      width: 150,
      formatter: ({ row }) => (
        <div className="text-sm font-medium text-[#04284F]">{row.reportingDate}</div>
      ),
    },
    {
      key: 'price',
      name: 'Price',
      width: 150,
      formatter: ({ row }) => <div className="text-sm font-medium text-[#04284F]">{row.price}</div>,
    },
    {
      key: 'status',
      name: 'Select',
      width: 120,
      sortable: false,
      formatter: ({ row }) => (
        <div>
          <button
            className={`rounded px-4 py-1 text-sm font-medium ${
              row.status === 'Added' ? 'text-[#46CC02]' : 'text-[#04284F] hover:text-[#0EA5E9]'
            }`}
          >
            {row.status}
          </button>
        </div>
      ),
    },
  ];

  const handleSort = column => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = newTradeLinesData.filter(item => {
    const matchesSearch =
      searchQuery === '' || item.institution.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesInstitution =
      selectedInstitution === 'Select Institution' || item.institution === selectedInstitution;
    return matchesSearch && matchesInstitution;
  });

  return (
    <div className="flex w-full flex-col overflow-hidden">
      {!showShoppingCart ? (
        <>
          <div className="relative mt-3 p-2">
            <img
              src={AboutUs}
              alt="About Us Background"
              className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
            />
            <div className="relative flex h-[130px] items-center p-2 text-white">
              <div className="ml-5 mt-[50px] flex max-w-screen-lg font-inter text-lg font-bold leading-7 sm:ml-[80px] sm:text-2xl">
                <span className="ml-3 sm:ml-10">
                  <Link to="/">Home</Link>
                </span>
                <span className="mx-1">|</span>
                <span>Tradelines</span>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full bg-[#15549A] px-5 py-6 text-start font-inter text-white lg:px-24 lg:py-12">
            <h1 className="mb-3 font-inter text-2xl font-bold lg:text-5xl">Tradeline Inventory</h1>
            <p className="mb-3 text-base font-normal lg:text-justify lg:text-xl">
              Tradeline orders must be processed at least 5 days before the reporting date, except
              for American Express, which requires a <b>minimum of 10 days</b>. If the reporting
              date has already passed, the tradeline&apos;s first reporting date will shift to the
              following month.
            </p>
            <p className="text-base font-normal lg:text-justify lg:text-xl">
              Note: Once an order is placed, we will verify tradeline availability and notify you
              when the tradeline order has been accepted. If the requested tradelines are
              unavailable, alternative options will be added to your user account for you to select
              to complete your application and place you as an authorized user. Otherwise, your
              payment will be refunded.
            </p>
          </div>

          <div className="mx-auto mb-0 mt-0 flex flex-col lg:mb-14 lg:mt-20 lg:w-[1250px]">
            <div className="mb-6 hidden flex-col items-center justify-end text-center font-inter lg:flex">
              <div className="flex w-full justify-end">
                <button
                  className="flex items-center bg-[#04284F] px-4 py-2 text-base font-normal text-white lg:px-5 lg:py-2.5 lg:text-lg"
                  onClick={() => setShowShoppingCart(true)}
                >
                  <span>Go to Checkout</span>
                </button>
              </div>
              <div className="mx-auto mt-5 flex flex-col items-center gap-4 rounded-none">
                <span className="mb-1 text-base font-normal text-[#04284F] md:whitespace-nowrap lg:text-2xl">
                  Select Desired Tradeline and Reporting Date on your order:
                </span>
                <div className="flex w-full gap-4">
                  <div className="relative flex-1">
                    <select
                      className="w-full appearance-none border bg-[#E3E3E3] px-4 py-2 text-[#173455]"
                      value={selectedInstitution}
                      onChange={e => setSelectedInstitution(e.target.value)}
                    >
                      <option className="text-lg font-normal text-[#122F6D]">
                        Select Institution
                      </option>
                      {[...new Set(newTradeLinesData.map(item => item.institution))].map(
                        institution => (
                          <option key={institution} value={institution}>
                            {institution}
                          </option>
                        )
                      )}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#04284F]" />
                  </div>
                  <div className="relative w-64">
                    <input
                      type="text"
                      placeholder="Find Tradeline"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="appearance-none border bg-[#E3E3E3] px-4 py-2 pl-10 text-[#173455] placeholder:text-[#04284F] lg:w-full"
                    />
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#04284F]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <CustomTable
                columns={columns}
                data={filteredData}
                onSort={handleSort}
                currentPage={currentPage}
                totalPages={Math.ceil(filteredData.length / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </>
      ) : (
        <ShoppingCart items={cartItems} onClose={() => setShowShoppingCart(false)} />
      )}
    </div>
  );
}
