import { ChevronsUpDown, ChevronLeft, ChevronRight, ChevronDown, ShoppingCart } from 'lucide-react';
import whiteSeparator from '../asset/white-table-separator.svg';
import graySeparator from '../asset/gray-table-separator.svg';

export function TablePagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        className="rounded-full border p-2 hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4 text-[#04284F] md:h-5 md:w-5" />
      </button>
      <div className="flex gap-2">
        {pages.map(page => (
          <button
            key={page}
            className={`h-6 w-6 rounded-full text-xs md:h-8 md:w-8 md:text-base ${
              page === currentPage ? 'bg-[#04284F] text-white' : 'text-[#04284F] hover:bg-gray-100'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="rounded-full border p-2 hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4 text-[#04284F] md:h-5 md:w-5" />
      </button>
    </div>
  );
}

function Separator({ isGray }) {
  return (
    <div className="absolute -right-0.5 top-1/2 hidden -translate-y-1/2 py-[3px] md:block">
      <img src={isGray ? graySeparator : whiteSeparator} alt="" className="h-[60px] w-1" />
    </div>
  );
}

export function CustomTable({ data, onSort, currentPage, totalPages, onPageChange }) {
  return (
    <div className="w-full max-w-[1250px] overflow-hidden">
      {/* Header - Desktop */}
      <div className="hidden bg-[#04284F] text-center font-inter text-base font-normal text-white md:grid md:grid-cols-[340px_180px_200px_195px_150px_160px] lg:text-xl">
        <div className="relative flex h-[60px] items-center p-4">
          <ChevronDown size={24} className="md:block" />
          <span className="flex-1 text-center">Choose Institution</span>
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 text-center">Month / Year</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 text-center">Credit Amount</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 text-center">Reporting Date</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 text-center">Price</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center justify-center p-4">
          <div className="ml-5 flex items-center justify-center gap-2">
            <span className="text-center">Select</span>
            <div className="relative">
              <ShoppingCart size={24} className="text-white" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#32B100] text-xs font-bold text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header - Mobile */}
      <div className="sticky top-0 z-10 grid grid-cols-1 bg-[#04284F] text-center font-inter text-sm font-normal text-white md:hidden">
        <div className="flex h-[50px] items-center justify-between px-4">
          <div className="flex items-center">
            <ChevronDown size={20} className="mr-2" />
            <span>Institutions</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Select</span>
            <div className="relative">
              <ShoppingCart size={20} className="text-white" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#32B100] text-xs font-bold text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body - Desktop */}
      <div className="hidden max-h-screen overflow-auto md:block">
        {data.map((row, index) => (
          <div
            key={`desktop-${row.id}`}
            className={`grid grid-cols-[340px_180px_200px_195px_150px_160px] ${
              index % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'
            }`}
          >
            {/* Institution Column */}
            <div className="relative flex items-center gap-6 p-4">
              <div className="h-12 w-20 flex-shrink-0">
                <img
                  src={row.logo}
                  alt={row.institution}
                  className="h-full w-full object-contain"
                  onError={e => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-inter text-base font-normal text-[#04284F] lg:text-xl">
                {row.institution}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Month/Year Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-lg font-bold text-[#04284F] lg:text-2xl">
                {row.monthYear}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Credit Amount Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-lg font-bold text-[#04284F] lg:text-2xl">
                {row.creditAmount}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Reporting Date Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-lg font-bold text-[#04284F] lg:text-2xl">
                {row.reportingDate}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Price Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-lg font-bold text-[#04284F] lg:text-2xl">
                {row.price}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Status Column */}
            <div className="relative flex items-center p-4">
              <span
                className={`flex-1 text-center font-inter text-lg font-bold lg:text-2xl ${
                  row.status === 'Added' ? 'text-[#32B100]' : 'text-[#04284F]'
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Body - Mobile with fixed height and vertical scroll */}
      <div className="max-h-[60vh] overflow-y-auto md:hidden">
        {data.map((row, index) => (
          <div
            key={`mobile-${row.id}`}
            className={`p-4 ${index % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'}`}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    src={row.logo}
                    alt={row.institution}
                    className="h-full w-full object-contain"
                    onError={e => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-inter text-sm font-medium text-[#04284F]">
                  {row.institution}
                </span>
              </div>
              <span
                className={`text-xs font-bold ${
                  row.status === 'Added' ? 'text-[#32B100]' : 'text-[#04284F]'
                }`}
              >
                {row.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-500">Month / Year</span>
                <span className="font-bold text-[#04284F]">{row.monthYear}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Credit Amount</span>
                <span className="font-bold text-[#04284F]">{row.creditAmount}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Reporting Date</span>
                <span className="font-bold text-[#04284F]">{row.reportingDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500">Price</span>
                <span className="font-bold text-[#04284F]">{row.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="md:static sticky bottom-0 bg-white z-10">
        <TablePagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange}
        />
      </div> */}
    </div>
  );
}
