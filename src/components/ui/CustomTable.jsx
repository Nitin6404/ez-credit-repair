import React from 'react';
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
        <ChevronLeft className="h-5 w-5 text-[#04284F]" />
      </button>
      <div className="flex gap-2">
        {pages.map(page => (
          <button
            key={page}
            className={`h-8 w-8 rounded-full ${
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
        <ChevronRight className="h-5 w-5 text-[#04284F]" />
      </button>
    </div>
  );
}

function Separator({ isGray }) {
  return (
    <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 py-[3px]">
      <img src={isGray ? graySeparator : whiteSeparator} alt="" className="h-[60px] w-1" />
    </div>
  );
}

export function CustomTable({ data, onSort, currentPage, totalPages, onPageChange }) {
  return (
    <div className="w-[1250px]">
      {/* Header */}
      <div className="grid grid-cols-[340px_180px_200px_195px_150px_160px] bg-[#04284F] text-center font-inter text-xl font-normal text-white">
        <div className="relative flex h-[60px] items-center p-4">
          <ChevronDown size={30} className="" />
          <span className="flex-1 text-center">Choose Institution</span>
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 whitespace-nowrap text-center">Month/Year</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 whitespace-nowrap text-center">Credit Amount</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 whitespace-nowrap text-center">Reporting Date</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center p-4">
          <span className="flex-1 whitespace-nowrap text-center">Price</span>
          <ChevronsUpDown width={16} height={24} className="" />
          <Separator isGray={false} />
        </div>
        <div className="relative flex h-[60px] items-center justify-center p-4">
          <div className="ml-5 flex items-center justify-center gap-2">
            <span className="text-center">Select</span>
            <div className="relative">
              <ShoppingCart size={24} className="text-white" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#32B100] text-sm font-bold text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div>
        {data.map((row, index) => (
          <div
            key={row.id}
            className={`grid h-[80px] grid-cols-[340px_180px_200px_195px_150px_160px] ${
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
              <span className="font-inter text-xl font-normal text-[#04284F]">
                {row.institution}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Month/Year Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-2xl font-bold text-[#04284F]">
                {row.monthYear}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Credit Amount Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-2xl font-bold text-[#04284F]">
                {row.creditAmount}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Reporting Date Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-2xl font-bold text-[#04284F]">
                {row.reportingDate}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Price Column */}
            <div className="relative flex items-center p-4">
              <span className="flex-1 text-center font-inter text-2xl font-bold text-[#04284F]">
                {row.price}
              </span>
              <Separator isGray={index % 2 !== 0} />
            </div>

            {/* Status Column */}
            <div className="relative flex items-center p-4">
              <span
                className={`flex-1 text-center font-inter text-2xl font-bold ${
                  row.status === 'Added' ? 'text-[#32B100]' : 'text-[#04284F]'
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
