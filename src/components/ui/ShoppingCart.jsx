import React from 'react';
import AboutUs from '../asset/AboutUsbackground.png';
import { CustomTable } from './CustomTable';
import { ShoppingCart as CartIcon } from 'lucide-react';

export function ShoppingCart({ items = [], onClose }) {
  const columns = [
    {
      key: 'institution',
      name: 'Choose Institution',
      width: 340,
      formatter: ({ row }) => (
        <div className="text-sm font-medium text-[#04284F]">
          <div className="flex items-center gap-6">
            <div className="h-12 w-20 flex-shrink-0">
              <img src={row.logo} alt={row.institution} className="h-full w-full object-contain" />
            </div>
            <span className="font-inter text-xl font-normal text-[#04284F]">{row.institution}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'monthYear',
      name: 'Month/Year',
      width: 180,
      formatter: ({ row }) => (
        <div className="text-center font-inter text-2xl font-bold text-[#04284F]">
          {row.monthYear}
        </div>
      ),
    },
    {
      key: 'creditAmount',
      name: 'Credit Amount',
      width: 200,
      formatter: ({ row }) => (
        <div className="text-center font-inter text-2xl font-bold text-[#04284F]">
          {row.creditAmount}
        </div>
      ),
    },
    {
      key: 'reportingDate',
      name: 'Reporting Date',
      width: 195,
      formatter: ({ row }) => (
        <div className="text-center font-inter text-2xl font-bold text-[#04284F]">
          {row.reportingDate}
        </div>
      ),
    },
    {
      key: 'price',
      name: 'Price',
      width: 150,
      formatter: ({ row }) => (
        <div className="text-center font-inter text-2xl font-bold text-[#04284F]">{row.price}</div>
      ),
    },
    {
      key: 'status',
      name: 'Select',
      width: 160,
      formatter: ({ row }) => (
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span
              className={`text-center font-inter text-2xl font-bold ${row.status === 'Added' ? 'text-[#32B100]' : 'text-[#04284F]'}`}
            >
              {row.status}
            </span>
            <div className="relative">
              <CartIcon size={24} className="text-[#04284F]" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#32B100] text-sm font-bold text-white">
                2
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const cartData = items.map((item, index) => ({
    id: index,
    logo: item.logo,
    institution: item.institution || 'American Express',
    monthYear: item.date,
    creditAmount: '$2,499.00',
    reportingDate: '19th',
    price: '$427.00',
    status: 'Added',
  }));

  return (
    <div className="flex w-full flex-col">
      {/* Header section with background image */}
      <div className="relative mt-3 p-2">
        <img
          src={AboutUs}
          alt="About Us Background"
          className="absolute inset-0 mt-[30px] h-full w-full object-cover opacity-100"
        />

        <div className="relative flex h-[130px] items-center p-2 text-white">
          <div className="ml-[80px] mt-[50px] flex max-w-screen-lg font-inter text-2xl font-bold leading-7">
            <span className="ml-10 cursor-pointer hover:underline" onClick={onClose}>
              Home
            </span>
            <span className="mx-1">|</span>
            <span className="cursor-pointer hover:underline" onClick={onClose}>
              Tradelines
            </span>
            <span className="mx-1">|</span>
            <span>Continue Shopping</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto mt-20 w-full max-w-[1250px]">
        <h1 className="mb-6 text-2xl font-bold text-[#04284F]">Shopping Cart</h1>

        <div className="w-full">
          <CustomTable
            data={cartData}
            columns={columns}
            currentPage={1}
            totalPages={1}
            onPageChange={() => {}}
          />

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-4">
              <input type="text" placeholder="Coupon Code" className="bg-[#E4E4E4] px-4 py-2" />
              <button className="bg-[#E32636] px-8 py-2 text-white">Apply Coupon</button>
              <button className="bg-[#04284F] px-8 py-2 text-white">Update Cart</button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-4 text-xl font-bold">Cart Totals</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$00,000</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>$00,000</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#04284F] py-3 text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
