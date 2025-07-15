'use client';

import { motion } from 'framer-motion';
import { memo, useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { services } from '@/constants/homeData';

// Debug mode - set to true to enable mobile debugging
const DEBUG_MODE = false;

// Mobile-optimized animation variants
const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Mobile-optimized viewport options
const mobileViewportOptions = {
  once: true,
  margin: '-50px',
  amount: 0.2,
};

// Fallback ServiceCard without Framer Motion
const FallbackServiceCard = memo(({ service, index }: { service: typeof services[0], index: number }) => (
  <div 
    className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 group opacity-0 animate-fadeIn mobile-optimized"
    style={{ 
      animationDelay: `${index * 200}ms`,
      animationFillMode: 'forwards'
    }}
  >
    <div className="flex items-start mb-6">
      <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0`}>
        {service.icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
      </div>
    </div>
    <ul className="space-y-2 md:space-y-3">
      {service.features.map((feature, idx) => (
        <li 
          key={idx} 
          className="flex items-center text-gray-700 text-sm md:text-base"
        >
          <CheckIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-500 mr-2 md:mr-3 flex-shrink-0" />
          <span className="break-words">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
));

FallbackServiceCard.displayName = 'FallbackServiceCard';

const ServiceCard = memo(({ service, index }: { service: typeof services[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback for mobile devices that might not support Intersection Observer
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      variants={mobileItemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group mobile-optimized"
      whileHover={{ y: -2 }}
      style={{ 
        // Ensure proper rendering on mobile
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="flex items-start mb-6">
        <motion.div 
          className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {service.icon}
        </motion.div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
        </div>
      </div>
      <ul className="space-y-2 md:space-y-3">
        {service.features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-center text-gray-700 text-sm md:text-base"
            initial={{ opacity: 0, x: -5 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
            transition={{ duration: 0.3, delay: (idx * 0.1) + (index * 0.1) }}
          >
            <CheckIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-500 mr-2 md:mr-3 flex-shrink-0" />
            <span className="break-words">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Debug component for mobile issues
const DebugInfo = ({ isMobile, useFallback, servicesCount }: { 
  isMobile: boolean; 
  useFallback: boolean; 
  servicesCount: number;
}) => {
  if (!DEBUG_MODE) return null;

  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg z-50 text-xs">
      <div>Mobile: {isMobile ? 'Yes' : 'No'}</div>
      <div>Fallback: {useFallback ? 'Yes' : 'No'}</div>
      <div>Services: {servicesCount}</div>
      <div>Width: {window.innerWidth}px</div>
      <div>User Agent: {navigator.userAgent.substring(0, 50)}...</div>
    </div>
  );
};

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile device and potential issues
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
      
      // Use fallback for older mobile browsers or if Framer Motion fails
      if (isMobileDevice && (window.innerWidth < 768 || !window.IntersectionObserver)) {
        setUseFallback(true);
      }

      // Log debug info
      if (DEBUG_MODE) {
        console.log('ServicesSection Debug:', {
          isMobile: isMobileDevice,
          width: window.innerWidth,
          userAgent: userAgent,
          hasIntersectionObserver: !!window.IntersectionObserver,
          servicesCount: services?.length || 0
        });
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Fallback timer in case animations don't work
    const fallbackTimer = setTimeout(() => {
      if (isMobile && !isLoaded) {
        setUseFallback(true);
        if (DEBUG_MODE) console.log('ServicesSection: Using fallback due to timeout');
      }
    }, 3000);

    // Mark as loaded after initial render
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(fallbackTimer);
      clearTimeout(loadTimer);
    };
  }, [isMobile, isLoaded]);

  // Error boundary for services data
  if (!services || services.length === 0) {
    console.error('Services data is missing or empty');
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are currently loading. Please refresh the page.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Use fallback rendering for mobile or if there are issues
  if (useFallback) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <DebugInfo isMobile={isMobile} useFallback={useFallback} servicesCount={services.length} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From web development to digital marketing, we provide end-to-end solutions that drive real business results. Our expertise ensures your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <FallbackServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <DebugInfo isMobile={isMobile} useFallback={useFallback} servicesCount={services.length} />
      <div className="container mx-auto px-4">
        <motion.div
          variants={mobileContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={mobileViewportOptions}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            variants={mobileItemVariants} 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            variants={mobileItemVariants} 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            From web development to digital marketing, we provide end-to-end solutions that drive real business results. Our expertise ensures your success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={mobileContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={mobileViewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ServicesSection); 