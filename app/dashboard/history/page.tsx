import React from 'react';
import HistoryList from '../_components/HistoryList';

const History = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* History Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-3">
          📜 Your History
        </h2>
        <p className="text-gray-600 text-lg">Track and review your previously generated content.</p>
      </div>

      {/* History Table */}
      <div className="mt-6">
        <HistoryList />
      </div>
    </div>
  );
};

export default History;
