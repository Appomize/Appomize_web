'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden py-20">
      {/* Background Watermark */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 z-0 pointer-events-none w-full flex justify-center" style={{height: '0', minHeight: 0}}>
        <Image
          src="/images/water-mark.jpeg"
          alt="Company watermark"
          width={800}
          height={600}
          className="h-[100vh] w-auto object-contain opacity-50"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 z-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm tracking-wider shadow-sm animate-pulse"
          >
            Empowering Digital Growth
          </motion.span>
          
          {/* Main Heading */}
          <div className="w-full mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold leading-relaxed tracking-tight text-center md:text-left relative mb-4"
              style={{
                letterSpacing: '-0.03em',
                backgroundImage: 'linear-gradient(90deg,rgb(0, 39, 122) 0%, #60A5FA 50%, #FFD600 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.1',
                paddingBottom: '0.1em',
              }}
            >
              Transforming Ideas Into Digital Excellence
            </motion.h1>
          </div>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-primary-400 to-purple-400 mb-5 mx-auto md:mx-0"
          />
          
          {/* Description Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 font-light mb-5 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            style={{ lineHeight: 1.6 }}
          >
            We are a leading digital transformation company specializing in <span className="font-bold text-primary-600">Application Development</span>, <span className="font-bold text-primary-600">Digital Marketing</span>, <span className="font-bold text-primary-600">SEO</span>, and <span className="font-bold text-primary-600">Google Analytics</span> solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 font-light mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            style={{ lineHeight: 1.6 }}
          >
            Our passion for innovation and commitment to excellence drives us to deliver exceptional results for our clients.
          </motion.p>
          
          {/* Feature Badges */}
          <FeatureBadges />
          
          {/* CTA Buttons */}
          <CTAButtons />
        </div>
      </div>
    </section>
  );
};

// Feature Badges Component
const FeatureBadges = () => {
  const badges = [
    { text: 'Expert Team', color: 'primary', animation: 'pulse' },
    { text: 'Proven Results', color: 'green', animation: 'bounce' },
    { text: 'Modern Tech', color: 'purple', animation: 'spin' },
    { text: '24/7 Support', color: 'orange', animation: 'ping' }
  ];

  const getBadgeClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          container: 'flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl px-4 py-3 shadow-sm',
          dot: 'w-2 h-2 bg-primary-500 rounded-full',
          text: 'text-sm font-semibold text-primary-700'
        };
      case 'green':
        return {
          container: 'flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-4 py-3 shadow-sm',
          dot: 'w-2 h-2 bg-green-500 rounded-full',
          text: 'text-sm font-semibold text-green-700'
        };
      case 'purple':
        return {
          container: 'flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl px-4 py-3 shadow-sm',
          dot: 'w-2 h-2 bg-purple-500 rounded-full',
          text: 'text-sm font-semibold text-purple-700'
        };
      case 'orange':
        return {
          container: 'flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl px-4 py-3 shadow-sm',
          dot: 'w-2 h-2 bg-orange-500 rounded-full',
          text: 'text-sm font-semibold text-orange-700'
        };
      default:
        return {
          container: 'flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 rounded-xl px-4 py-3 shadow-sm',
          dot: 'w-2 h-2 bg-primary-500 rounded-full',
          text: 'text-sm font-semibold text-primary-700'
        };
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
      {badges.map((badge, index) => {
        const classes = getBadgeClasses(badge.color);
        return (
          <motion.div
            key={badge.text}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className={classes.container}
          >
            <div className={`${classes.dot} animate-${badge.animation}`}></div>
            <span className={classes.text}>{badge.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

// CTA Buttons Component
const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-md group"
        >
          <span className="relative overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="ml-2 -mr-1"
          >
            <ArrowRightIcon className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          View Our Work
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection; 