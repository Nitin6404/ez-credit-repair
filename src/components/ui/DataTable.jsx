import React from 'react';
import DataGrid from 'react-data-grid';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export const DataTable = ({
  columns: userColumns,
  rows,
  rowHeight = 72,
  headerRowHeight = 48,
  className = '',
  style = {},
}) => {
  const headerRenderer = ({ column }) => (
    <div className="flex items-center justify-between px-6 py-2 font-medium text-white">
      <span>{column.name}</span>
      {column.sortable !== false && <ChevronDown className="h-4 w-4" />}
    </div>
  );

  // Add headerRenderer to each column unless specifically overridden
  const columns = userColumns.map(column => ({
    headerRenderer,
    ...column,
  }));

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-lg">
      <div
        className={`[&_.rdg-cell]:border-r [&_.rdg-cell]:border-[#0EA5E9] [&_.rdg-cell]:px-6 [&_.rdg-cell]:py-4 [&_.rdg-header-cell]:border-r [&_.rdg-header-cell]:border-[rgba(255,255,255,0.2)] [&_.rdg-header-cell]:px-6 [&_.rdg-header-row]:h-12 [&_.rdg-header-row]:bg-[#04284F] [&_.rdg-row:last-child]:border-b-0 [&_.rdg-row:nth-child(even)]:bg-[#F8FAFC] [&_.rdg-row]:border-b [&_.rdg-row]:border-[#0EA5E9] [&_.rdg-row]:bg-white hover:[&_.rdg-row]:bg-[#F0F9FF] [&_.rdg]:border-none ${className} `}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          className="rdg-light select-none font-inter"
          style={{ height: style.height || 720, ...style }}
          rowHeight={rowHeight}
          headerRowHeight={headerRowHeight}
          enableVirtualization={false}
        />
      </div>
    </div>
  );
};

export const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        className="rounded-full p-2 hover:bg-[#E3E3E3] disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft color="#04284F" size={50} className="text-[#04284F]" />
      </button>
      <div className="flex gap-2">
        {pages.map(page => (
          <button
            key={page}
            className={`h-8 w-8 rounded-full font-bold ${
              page === currentPage
                ? 'bg-[#E3E3E3] text-[#04284F]'
                : 'text-[#969696] hover:bg-[#E3E3E3]'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="rounded-full p-2 hover:bg-[#E3E3E3] disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight color="#04284F" size={50} className="text-[#04284F]" />
      </button>
    </div>
  );
};
