import React from 'react';

const verifications = [
  { id: '#834759', name: 'David John', business: 'Taco Express', date: 'Jul 10, 2026' },
  { id: '#834754', name: 'Marvin McKinney', business: 'Burger Barn', date: 'Jul 10, 2026' },
  { id: '#834454', name: 'Esther Howard', business: 'Pizza Palace', date: 'Jul 09, 2026' },
  { id: '#832454', name: 'Darlene Robertson', business: 'Noodle House', date: 'Jul 09, 2026' },
  { id: '#332454', name: 'Kathryn Murphy', business: 'Sushi Station', date: 'Jul 08, 2026' },
];

export default function PendingVendorVerifications() {
  return (
    <div className="flex flex-col w-full rounded-2xl border border-purple-100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between w-full p-6 border-b border-purple-50">
        <div>
          <h2 className="section-title">Pending Verifications</h2>
          <p className="text-[#64748b] text-sm mt-1">Review vendor applications</p>
        </div>
        <button className="text-sm font-semibold text-[#4C1D95] hover:underline px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
          View All
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-purple-50/50 px-6 py-3">
        <span className="text-sm font-semibold text-[#4C1D95]">Vendor</span>
        <span className="text-sm font-semibold text-[#4C1D95]">Business</span>
        <span className="text-sm font-semibold text-[#4C1D95]">Date</span>
        <span className="text-sm font-semibold text-[#4C1D95] text-right">Action</span>
      </div>

      {/* Table Body */}
      <div className="flex flex-col">
        {verifications.map((vendor, index) => (
          <div
            key={vendor.id}
            className="grid grid-cols-4 items-center px-6 py-4 border-b border-purple-50 last:border-0 hover:bg-purple-50/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] flex items-center justify-center text-white text-sm font-bold">
                {vendor.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#2A3542]">{vendor.name}</span>
                <span className="text-xs text-[#94a3b8]">{vendor.id}</span>
              </div>
            </div>

            <div className="text-sm text-[#475569]">
              {vendor.business}
            </div>

            <div className="text-sm text-[#475569]">
              {vendor.date}
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-2 rounded-xl font-medium text-white text-sm bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] shadow-sm hover:shadow-md hover:shadow-purple-500/20 transition-all">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
