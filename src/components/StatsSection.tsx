'use client';

import { motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { stats } from '@/constants/homeData';
import { animationVariants, viewportOptions } from '@/utils/performance';

const containerVariants = {
  ...animationVariants.container,
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly slower stagger for better performance
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  ...animationVariants.item,
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Faster animation
      ease: 'easeOut',
    },
  },
};

// Optimized number animation to prevent layout thrashing
const NumberCounter = memo(({ number, index }: { number: string, index: number }) => {
  const isNumber = !isNaN(Number(number.replace(/[^0-9]/g, '')));
  
  if (!isNumber) {
    return (
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {number}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {number}
    </motion.div>
  );
});

NumberCounter.displayName = 'NumberCounter';

const StatItem = memo(({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const handleIconHover = useCallback(() => {
    // Optimized hover handler
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <div className="flex justify-center mb-4">
        <motion.div 
          className="p-3 bg-primary-100 rounded-full"
          whileHover={{ scale: 1.05, rotate: 2 }} // Reduced scale for better performance
          transition={{ duration: 0.2 }}
          onHoverStart={handleIconHover}
        >
          <stat.icon className="h-8 w-8 text-primary-600" />
        </motion.div>
      </div>
      <NumberCounter number={stat.number} index={index} />
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
});

StatItem.displayName = 'StatItem';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(StatsSection); 