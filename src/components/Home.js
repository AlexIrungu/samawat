import React from 'react';
// import './Home.css'
import AudioPackages from './AudioPackages';
import { Link } from 'react-router-dom'
import logo from './assets/2.png'

const Home = () => {
  return (
    <div id="/" className="py-8">
       <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#5f00ff] to-[#1649ff]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Sound
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Samawati Studios offers state-of-the-art equipment and experienced engineers to bring your musical
                    vision to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#5f00ff] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book a Session
                  </Link>
                </div>
              </div>
              <div className='logo'>
              <img
                src={logo}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              </div>
            </div>
          </div>
        </section>
      <div className='container mx-auto py-12 px-4'>
        {/* <h2 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to Our Music Site</h2>
        <p className="text-lg mb-8 text-gray-700">Explore our featured content and audio packages!</p> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div>
          {/* <FeaturedContent /> */}
          <AudioPackages />
        </div>
      </div>
    </div>
  );
};

export default Home;