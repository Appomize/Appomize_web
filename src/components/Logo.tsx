'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.98 }}
      animate={{ scale: 1 }}
      className="flex items-center space-x-2"
      style={{ height: 40 }}
    >
      <div className="relative w-15 h-15 flex items-center justify-center">
        <Image
          src="/images/logos.png"
          alt="Appomize Logo"
          width={40}
          height={40}
          className="object-contain drop-shadow-md"
          priority
        />
      </div>
      <span
        className="text-2xl font-bold"
        style={{
          backgroundImage:
            'linear-gradient(90deg,rgb(0, 39, 122) 0%, #60A5FA 50%, #FFD600 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Appomize
      </span>
    </motion.div>
  );
} 