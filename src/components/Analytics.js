import React from 'react';
import { FaChartLine, FaListUl, FaChartPie, FaUsers, FaRegLightbulb } from 'react-icons/fa';

const Analytics = () => {
  return (
    <div id="analytics" className="w-full bg-gradient-to-b from-indigo-900 to-purple-900 py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Data-Driven Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ANALYTICS THAT MATTER</h2>
          <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full mb-6"></div>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            Get comprehensive analytics to track your music's performance and make informed decisions for your career.
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 transform hover:-translate-y-1 transition duration-300 border border-indigo-400 border-opacity-20">
            <div className="bg-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <FaChartLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Daily Insights</h3>
            <p className="text-indigo-200 mb-4">
              Comprehensive daily metrics that help inform your marketing decisions and give you clarity on your project's reach and engagement.
            </p>
            <div className="mt-auto">
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full w-1/2 mb-4"></div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-200">Detailed metrics</span>
                <span className="text-indigo-400 font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 transform hover:-translate-y-1 transition duration-300 border border-indigo-400 border-opacity-20">
            <div className="bg-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <FaListUl className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Playlist Performance</h3>
            <p className="text-indigo-200 mb-4">
              See how editorial and user-generated playlists are impacting your campaign over time with our advanced tracking tools.
            </p>
            <div className="mt-auto">
              <div className="h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full w-3/4 mb-4"></div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-200">Real-time updates</span>
                <span className="text-indigo-400 font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 transform hover:-translate-y-1 transition duration-300 border border-indigo-400 border-opacity-20">
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <FaChartPie className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Data That Informs</h3>
            <p className="text-indigo-200 mb-4">
              Re-strategize future campaigns based on the rich data you can visualize in our platform with customizable dashboards.
            </p>
            <div className="mt-auto">
              <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-2/3 mb-4"></div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-200">Strategic insights</span>
                <span className="text-indigo-400 font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-5 rounded-xl p-6 text-center border border-indigo-400 border-opacity-10">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-indigo-200">Accuracy Rate</p>
          </div>

          <div className="bg-white bg-opacity-5 rounded-xl p-6 text-center border border-indigo-400 border-opacity-10">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-indigo-200">Real-time Updates</p>
          </div>

          <div className="bg-white bg-opacity-5 rounded-xl p-6 text-center border border-indigo-400 border-opacity-10">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <p className="text-indigo-200">Data Points</p>
          </div>

          <div className="bg-white bg-opacity-5 rounded-xl p-6 text-center border border-indigo-400 border-opacity-10">
            <div className="text-4xl font-bold text-white mb-2">500K+</div>
            <p className="text-indigo-200">Tracks Analyzed</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics Features</h3>
            <p className="text-indigo-200 max-w-2xl mx-auto">
              Our platform offers detailed analytics tools to help you understand your audience and grow your music career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-600 bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                <FaUsers className="text-2xl text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Audience Demographics</h4>
                <p className="text-indigo-200">
                  Understand your listener base with detailed demographic data including age, location, and listening habits.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-600 bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                <FaRegLightbulb className="text-2xl text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Smart Recommendations</h4>
                <p className="text-indigo-200">
                  Receive AI-powered recommendations to optimize your promotional strategy based on your analytics data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            Get Started with Analytics
          </button>
          <p className="text-indigo-300 mt-4 text-sm">No credit card required. Free 14-day trial available.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;