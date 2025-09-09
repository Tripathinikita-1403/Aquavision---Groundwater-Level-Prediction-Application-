import React from 'react';
import GroundwaterDashboard from './components/GroundwaterDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Aquavision - Groundwater Level Prediction
      </header>

      <main className="mt-6">
        <GroundwaterDashboard />
      </main>
    </div>
  );
}

export default App;
