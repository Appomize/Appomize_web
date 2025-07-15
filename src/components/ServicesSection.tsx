'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { services } from '@/constants/homeData';
import { animationVariants, viewportOptions } from '@/utils/performance';

const containerVariants = animationVariants.container;
const itemVariants = animationVariants.item;

const ServiceCard = memo(({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start mb-6">
      <motion.div 
        className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl mr-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {service.icon}
      </motion.div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
    <ul className="space-y-3">
      {service.features.map((feature, idx) => (
        <motion.li 
          key={idx} 
          className="flex items-center text-gray-700"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <CheckIcon className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
          {feature}
        </motion.li>
      ))}
    </ul>
  </motion.div>
));

ServiceCard.displayName = 'ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From web development to digital marketing, we provide end-to-end solutions that drive real business results. Our expertise ensures your success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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