import React from 'react';
// import FeaturedContent from './FeaturedContent';
// import MusicRecommendations from './MusicRecommendations.js';
// import UpcomingEvents from './UpcomingEvents';
// import AudioPackages from './AudioPacakges.js';

const Home = () => {
  return (
    <div id="/" >
      <div className='container mx-auto'>
        <h2 className="text-3xl font-bold mb-4">Home</h2>
        <p className="text-lg">Welcome to the Home Page!</p>
        <div className="flex flex-wrap justify-center">
          {/* <FeaturedContent />
          <MusicRecommendations />
          <AudioPackages />
          <UpcomingEvents /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
