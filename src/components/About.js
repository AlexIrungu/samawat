import React from 'react';
import record from './assets/record.png';

const About = () => {
  return (
    <div id="about" className="w-full bg-gray-50">
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-2">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              State-of-the-Art <span className="text-indigo-600">Studio</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Samawati Studios is equipped with the latest professional audio gear, from high-end microphones and
              preamps to industry-leading DAWs and monitoring systems.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="mx-auto grid max-w-6xl items-center gap-8 py-8 lg:grid-cols-2 lg:gap-16">
            {/* Left side image with decorative elements */}
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70 z-0"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-200 rounded-full opacity-60 z-0"></div>
              
              {/* Main image with shadow and border */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl bg-white p-2">
                <img
                  src={record}
                  alt="Professional Recording Studio"
                  className="w-full h-auto rounded-xl object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>
            
            {/* Right side features list */}
            <div className="flex flex-col justify-center space-y-8">
              <ul className="grid gap-8">
                <li className="transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Professional Recording Gear</h3>
                      <p className="text-gray-600">
                        Our studio is equipped with the latest professional microphones, preamps, and audio interfaces from brands like Neumann, API, and Universal Audio.
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Expert Mixing & Mastering</h3>
                      <p className="text-gray-600">
                        Our experienced engineers use industry-leading DAWs and monitoring systems to ensure your tracks are polished to perfection with crystal-clear sound.
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Advanced Soundproofing</h3>
                      <p className="text-gray-600">
                        Our studio is designed with advanced acoustic treatment and soundproofing techniques to provide a quiet, distraction-free environment for your creativity.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              
              {/* CTA button */}
              <div className="pt-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                  Schedule a Tour
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what artists who've worked with Samawati Studios have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-6">
                <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "Working with Samawati Studios was the best decision for my album. Their professional setup and experienced team brought my music to a whole new level."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Jane Doe</h4>
                    <p className="text-gray-500 text-sm">Independent Artist</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-6">
                <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "The sound quality and attention to detail at Samawati is unmatched. They truly understood my vision and helped me achieve the perfect sound."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                    MS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Mike Smith</h4>
                    <p className="text-gray-500 text-sm">Producer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-5 left-6">
                <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-4">
                  "From recording to mastering, every step of the process was smooth and professional. The team's expertise and studio equipment are top-notch."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                    AJ
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Alex Johnson</h4>
                    <p className="text-gray-500 text-sm">Band Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;