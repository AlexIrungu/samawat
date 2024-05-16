import React from 'react';
import record from './assets/record.png';

const About = () => {
  return (
    <div id="about" className="container mx-auto mt-8 grid grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-lg leading-relaxed text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nec mauris ut maximus. Ut vel diam magna. Cras sed feugiat magna, eget fermentum eros. Aenean vel risus sed velit scelerisque volutpat.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={record} alt="Record Pack" className="h-16 w-auto rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default About;
