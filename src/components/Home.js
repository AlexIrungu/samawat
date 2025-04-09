import React, { useEffect } from 'react';
import AudioPackages from './AudioPackages';
import { Link } from 'react-router-dom';
import logo from './assets/2.png';
import { motion } from 'framer-motion';

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home" className="w-full min-h-screen bg-gray-50">
      {/* Hero Section with Enhanced Gradient */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-[#5f00ff] to-[#1649ff] overflow-hidden relative">
        {/* Background subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyLTJjLTcuNzMyIDAtMTQgNi4yNjgtMTQgMTRzNi4yNjggMTQgMTQgMTQgMTQtNi4yNjggMTQtMTQtNi4yNjgtMTQtMTQtMTR6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6 text-white"
            >
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400">Sound</span>
                </h1>
                <p className="max-w-[600px] text-lg text-gray-100 md:text-xl leading-relaxed">
                  Samawati Studios offers state-of-the-art equipment and experienced engineers to bring your musical
                  vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/booking"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-[#5f00ff] shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl focus:ring-2 focus:ring-white/50 focus:outline-none"
                  >
                    Book a Session
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/services"
                    className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/80 px-8 text-base font-medium text-white transition-all duration-200 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right side image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
              <img
                src={logo}
                alt="Samawati Studios"
                className="relative mx-auto w-full max-w-md lg:max-w-full rounded-xl shadow-2xl object-cover transform lg:hover:scale-[1.02] transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Audio <span className="text-indigo-600">Packages</span>
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect audio solution for your project with our professionally designed packages.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AudioPackages />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold text-indigo-400 mb-2">500+</p>
              <p className="text-sm uppercase tracking-wider">Projects Completed</p>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold text-indigo-400 mb-2">50+</p>
              <p className="text-sm uppercase tracking-wider">Award Winning</p>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold text-indigo-400 mb-2">12+</p>
              <p className="text-sm uppercase tracking-wider">Years Experience</p>
            </motion.div>
            <motion.div 
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold text-indigo-400 mb-2">300+</p>
              <p className="text-sm uppercase tracking-wider">Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyLTJjLTcuNzMyIDAtMTQgNi4yNjgtMTQgMTRzNi4yNjggMTQgMTQgMTQgMTQtNi4yNjggMTQtMTQtNi4yNjgtMTQtMTQtMTR6Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              Ready to Create Something Amazing?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-white/90 mb-8"
            >
              Take the first step towards bringing your musical vision to life with Samawati Studios.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-indigo-600 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/booking"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white px-8 text-base font-medium text-white transition-all duration-200 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none w-full sm:w-auto"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;