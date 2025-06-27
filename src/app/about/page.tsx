'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Rishabh Dixit',
    role: 'Founder & CEO',
    shortForm: 'RD',
    character: '👨‍💼',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'Harshvardhan Singh Chauhan',
    role: 'CPO',
    shortForm: 'HSC',
    character: '🎯',
    color: 'from-purple-500 to-pink-400'
  },
  {
    name: 'Abhay Kanaujiya',
    role: 'Engineering',
    shortForm: 'AK',
    character: '⚡',
    color: 'from-green-500 to-emerald-400'
  },
  {
    name: 'Deepankar Dubey',
    role: 'CMO',
    shortForm: 'DD',
    character: '🚀',
    color: 'from-orange-500 to-red-400'
  },
  {
    name: 'Devesh Agnihotri',
    role: 'CTO',
    shortForm: 'DA',
    character: '🧠',
    color: 'from-indigo-500 to-blue-400'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions.',
    icon: '💡'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project and exceed expectations.',
    icon: '⭐'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to ensure their success.',
    icon: '🤝'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professionalism and transparency.',
    icon: '🎯'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const nameVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    x: [0, 10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const characterVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    rotate: [0, 3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              About Appomize
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              We're a team of passionate innovators dedicated to transforming businesses through technology.
              Our mission is to help companies thrive in the digital age with cutting-edge solutions and
              exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/about-image.jpg"
                alt="Our Story"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Appomize emerged from a vision to make digital transformation accessible
                to businesses of all sizes. What started as a small team of developers has grown into
                a full-service digital agency with a track record of successful projects across various
                industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what's possible in digital technology,
                helping our clients stay ahead in an ever-evolving digital landscape. Our commitment
                to innovation and excellence has made us a trusted partner for businesses worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
              Our Values
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Revolutionary Design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Leadership</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visionary minds driving innovation and excellence
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Main Container */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Rounded Profile Container */}
                  <div className="relative mb-6">
                    {/* Glowing Background Ring */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110`}></div>
                    
                    {/* Profile Circle */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 overflow-hidden group-hover:border-white/60 transition-all duration-500">
                      
                      {/* Character Display */}
                      <motion.div
                        variants={characterVariants}
                        className="w-full h-full flex items-center justify-center text-6xl group-hover:text-7xl transition-all duration-500"
                      >
                        {member.character}
                      </motion.div>
                      
                      {/* Floating Short Form Badge */}
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white"
                      >
                        {member.shortForm}
                      </motion.div>
                      
                      {/* Animated Particles */}
                      <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.3s'}}></div>
                    </div>
                  </div>
                  
                  {/* Animated Name */}
                  <motion.div
                    variants={nameVariants}
                    className="text-center mb-2"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                      {member.name}
                    </h3>
                  </motion.div>
                  
                  {/* Role Badge */}
                  <div className="relative">
                    <div className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-cyan-300 text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    
                    {/* Animated Underline */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-500"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
                  <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 