import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { BatteryCharging, Plug, User, DollarSign, Activity, AlertTriangle } from 'lucide-react';

const dataTrend = [
  { name: 'Paz', kWh: 1800, Gelir: 15000 },
  { name: 'Pts', kWh: 1600, Gelir: 13200 },
  { name: 'Sal', kWh: 1700, Gelir: 13800 },
  { name: 'Çar', kWh: 1500, Gelir: 12500 },
  { name: 'Per', kWh: 1650, Gelir: 13000 },
  { name: 'Cum', kWh: 1750, Gelir: 14000 },
  { name: 'Cmt', kWh: 1900, Gelir: 15500 },
];

const pieData = [
  { name: 'Roaming', value: 33 },
  { name: 'White-label', value: 67 },
];

const COLORS = ['#007aff', '#3b8ef0'];

export default function DoldurDashboard() {
  const kpis = [
    { icon: <BatteryCharging />, label: 'Toplam Doluşlar', value: '950' },
    { icon: <Plug />, label: 'Toplam Soket', value: '1,500' },
    { icon: <User />, label: 'Kullanıcı Sayısı', value: '12,378' },
    { icon: <DollarSign />, label: 'Bugünkü Gelir', value: '₺32,240' },
    { icon: <Activity />, label: 'Bugünkü kWh', value: '1,800' },
    { icon: <AlertTriangle />, label: 'Aktif Arıza', value: '3' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">🔋 Doldur Premium Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-4 shadow hover:shadow-lg transition">
            <div className="text-blue-600">{kpi.icon}</div>
            <div className="text-sm mt-2">{kpi.label}</div>
            <div className="text-lg font-bold">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="font-semibold mb-2">Günlük Gelir & kWh</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataTrend}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Gelir" stroke="#007aff" />
              <Line type="monotone" dataKey="kWh" stroke="#3b8ef0" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="font-semibold mb-2">Haftalık Doluluk Oranı</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dataTrend}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Gelir" fill="#007aff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="font-semibold mb-2">Roaming / White-label Oranı</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow text-center">
        <p className="font-semibold mb-2">Canlı Harita (Dummy)</p>
        <img src="https://via.placeholder.com/800x300?text=Harita+Görseli" alt="Map Placeholder" className="rounded-lg mx-auto" />
      </div>
    </div>
  );
}