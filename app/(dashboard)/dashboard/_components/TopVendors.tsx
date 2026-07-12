import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const salesData = [
  { name: 'Jane Cooper', value: 98450, color: '#7C3AED' },
  { name: 'Esther Howard', value: 42300, color: '#A78BFA' },
  { name: 'Leslie Alexander', value: 28700, color: '#C4B5FD' },
  { name: 'Guy Hawkins', value: 15200, color: '#DDD6FE' },
  { name: 'Robert Fox', value: 8900, color: '#EDE9FE' },
];

const revenueData = [
  { name: 'Jane Cooper', value: 121799, color: '#7C3AED' },
  { name: 'Esther Howard', value: 50799, color: '#A78BFA' },
  { name: 'Leslie Alexander', value: 25567, color: '#C4B5FD' },
  { name: 'Guy Hawkins', value: 5789, color: '#DDD6FE' },
  { name: 'Robert Fox', value: 1789, color: '#EDE9FE' },
];

export default function TopVendors() {
  const [activeTab, setActiveTab] = useState('revenue');
  const currentData = activeTab === 'sales' ? salesData : revenueData;

  const domainMax = 150000;

  return (
    <div className="w-full h-full p-6 bg-white rounded-2xl border border-purple-100 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="section-title">Top 5 Vendors</h3>
        <div className="flex bg-purple-50 p-1 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab('sales')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'sales' ? 'bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white shadow-sm' : 'text-[#64748b] hover:text-[#2A3542]'
              }`}
          >
            By Sales
          </button>
          <button
            onClick={() => setActiveTab('revenue')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'revenue' ? 'bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white shadow-sm' : 'text-[#64748b] hover:text-[#2A3542]'
              }`}
          >
            By Revenue
          </button>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-5">
        {currentData.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-100 text-[#4C1D95] text-xs font-bold">
                  {index + 1}
                </span>
                <span className="font-medium text-[#2A3542]">{item.name}</span>
              </div>
              <span className={`font-semibold ${index === 0 ? 'text-[#4C1D95]' : 'text-[#64748b]'}`}>
                {activeTab === 'sales' ? `${item.value.toLocaleString()} orders` : `$${item.value.toLocaleString()}`}
              </span>
            </div>

            <div className="h-4 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[item]}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <XAxis type="number" domain={[0, domainMax]} hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Bar
                    dataKey="value"
                    radius={[10, 10, 10, 10]}
                    background={{ fill: '#F1F5F9', radius: 10 }}
                    barSize={16}
                  >
                    <Cell fill={item.color} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between px-1 mt-6 text-[11px] text-[#94a3b8] font-medium border-t border-purple-50 pt-4">
        <span>0</span>
        <span>25k</span>
        <span>50k</span>
        <span>75k</span>
        <span>150k</span>
      </div>
    </div>
  );
}
