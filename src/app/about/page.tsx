'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/team-1.jpg',
    bio: 'With over 15 years of experience in tech leadership, John leads our vision for digital innovation.'
  },
  {
    name: 'Emily Chen',
    role: 'CTO',
    image: '/images/team-2.jpg',
    bio: 'Emily brings deep technical expertise and a passion for cutting-edge technology solutions.'
  },
  {
    name: 'David Kumar',
    role: 'Head of Design',
    image: '/images/team-3.jpg',
    bio: 'David leads our design team with a focus on creating beautiful, user-centric experiences.'
  },
  {
    name: 'Sarah Wilson',
    role: 'Marketing Director',
    image: '/images/team-4.jpg',
    bio: 'Sarah drives our marketing strategy with data-driven insights and creative campaigns.'
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

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Appomize</h1>
            <p className="text-xl opacity-90">
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
              <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/about-image.jpg"
                alt="Our Story"
                className="relative rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Appomize emerged from a vision to make digital transformation accessible
                to businesses of all sizes. What started as a small team of developers has grown into
                a full-service digital agency with a track record of successful projects across various
                industries.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of what's possible in digital technology,
                helping our clients stay ahead in an ever-evolving digital landscape. Our commitment
                to innovation and excellence has made us a trusted partner for businesses worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
              Meet Our Team
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of experts is passionate about delivering exceptional results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 