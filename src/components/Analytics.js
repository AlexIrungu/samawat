import React from 'react';
import { FaChartLine, FaListUl } from 'react-icons/fa'; // Importing icons

const Analytics = () => {
  return (
    <div id="analytics" className="bg-primary text-white py-8 px-4 border-2 border-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">ANALYTICS THAT MATTER</h2>
      <div className="">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaChartLine className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Daily Insights</h3>
          <p className="text-sm text-center">Comprehensive daily metrics that help inform your marketing decisions and give you clarity on your project</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaListUl className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Playlist Performance</h3>
          <p className="text-sm text-center">See how editorial and user-generated playlists are impacting your campaign over time</p>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Data That Informs</h3>
          <p className="text-sm text-center">Re-strategize future campaigns based on the rich data you can visualize in our platform</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
