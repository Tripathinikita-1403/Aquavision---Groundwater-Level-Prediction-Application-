import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function GroundwaterDashboard() {
  const [predictions] = useState([
    { date: 'Jan', level: 25 },
    { date: 'Feb', level: 23 },
    { date: 'Mar', level: 20 },
    { date: 'Apr', level: 18 },
    { date: 'May', level: 17 },
    { date: 'Jun', level: 15 },
    { date: 'Jul', level: 13 },
    { date: 'Aug', level: 12 },
    { date: 'Sep', level: 14 },
    { date: 'Oct', level: 16 },
    { date: 'Nov', level: 19 },
    { date: 'Dec', level: 22 },
  ]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Groundwater Level Predictions (m)</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={predictions}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="level" stroke="#3182ce" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      <p className="mt-4 text-gray-600">
        Data shows predicted groundwater level trends over the next 12 months to help plan sustainable usage.
      </p>
    </div>
  );
}

export default GroundwaterDashboard;
