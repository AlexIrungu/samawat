import React from 'react';
import record from './assets/record.png';

const About = () => {
  return (
    <div id="about" className="container mx-auto mt-8 flex justify-between py-8">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">State-of-the-Art Studio</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Samawati Studios is equipped with the latest professional audio gear, from high-end microphones and
                  preamps to industry-leading DAWs and monitoring systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src={record}
                width="550"
                height="310"
                alt="Studio"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1 bg-white">
                      <h3 className="text-xl font-bold">Recording Gear</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our studio is equipped with the latest professional microphones, preamps, and audio interfaces.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1 bg-white">
                      <h3 className="text-xl font-bold">Mixing & Mastering</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our experienced engineers use industry-leading DAWs and monitoring systems to ensure your tracks
                        are polished to perfection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1 bg-white">
                      <h3 className="text-xl font-bold">Soundproofing</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our studio is designed with advanced soundproofing techniques to provide a quiet,
                        distraction-free environment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      {/* <div className="flex flex-col justify-center w-1/2 pr-4">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nec mauris ut maximus. Ut vel diam magna. Cras sed feugiat magna, eget fermentum eros. Aenean vel risus sed velit scelerisque volutpat.
        </p>
      </div>
      <div className="flex justify-center w-1/2">
        <img src={record} alt="Record Pack" className="h-auto w-auto rounded-full shadow-lg" />
      </div> */}
    </div>
  );
};

export default About;
