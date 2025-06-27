'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { companyInfo } from '@/constants/data';

const features = [
  {
    title: 'Custom App Development',
    description: 'We build tailored applications that perfectly match your business needs and goals.',
    icon: '🚀'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to boost your online presence and drive growth.',
    icon: '📈'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and enhance their experience.',
    icon: '🎨'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure to power your applications and services.',
    icon: '☁️'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    content: 'Appomize transformed our business with their innovative solutions. Their team went above and beyond our expectations.',
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Founder of GrowthLabs',
    content: 'The expertise and professionalism of the Appomize team are unmatched. They delivered our project on time and within budget.',
    image: '/images/testimonial-2.jpg'
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
        {/* Watermark background below header, centered and fully visible */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 z-0 pointer-events-none w-full flex justify-center" style={{height: '0', minHeight: 0}}>
          <img
            src="/images/water-mark.jpeg"
            alt="Company watermark"
            className="h-[100vh] w-auto object-contain opacity-50"
            // style={{ filter: 'blur(1px)' }}
          />
        </div>
        {/* Soft gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-primary-50/80 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm tracking-wider shadow-sm animate-pulse">
              Empowering Digital Growth
            </span>
            {/* Modern, clean tagline with animated accent */}
            <div className="w-full mb-5">
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-center md:text-left relative mb-2"
                style={{
                  letterSpacing: '-0.03em',
                  backgroundImage: 'linear-gradient(90deg,rgb(0, 39, 122) 0%, #60A5FA 50%, #FFD600 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Transforming Ideas into Digital Reality
              </h1>
            </div>
            <div className="w-24 h-2 rounded-full bg-gradient-to-r from-blue-400 via-primary-400 to-purple-400 mb-6 mx-auto md:mx-0 animate-fade-in" />
            <p
              className="text-lg md:text-2xl text-gray-700 font-light mb-10 max-w-2xl mx-auto md:mx-0 text-center md:text-left animate-fade-in"
              style={{ lineHeight: 1.6 }}
            >
              We are a leading digital transformation company specializing in <span className="font-semibold text-primary-600">application development</span> and <span className="font-semibold text-primary-600">digital marketing solutions</span>. Our passion for innovation and commitment to excellence drives us to deliver exceptional results for our clients.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <span className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-medium shadow hover:bg-primary-700 transition">Custom Solutions</span>
              <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium shadow hover:bg-primary-200 transition">Fast Delivery</span>
              <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium shadow hover:bg-primary-200 transition">Expert Team</span>
              <span className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium shadow hover:bg-primary-200 transition">24/7 Support</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Let's Talk
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              {/* <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Our Services
              </Link> */}
            </div>
            {/* <div className="flex flex-col items-center md:items-start gap-2 mt-2">
              <span className="text-gray-500 text-sm mb-1">Trusted by leading brands</span>
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
                <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
                <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
                <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
                <span className="inline-block w-8 h-8 bg-gray-200 rounded-full"></span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* New centered block below hero content */}
      {/* <div className="flex flex-col items-center justify-center gap-4 mt-10 mb-8 w-full">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-primary-500 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-lg">
          Local roots, <br className="hidden md:block" />digital wings
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 font-light text-center max-w-xl">
          Empowering your business to grow online <br className="hidden md:block" />with web, marketing & digital tools.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Let's Talk
        </Link>
      </div> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Appomize?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovation with expertise to deliver exceptional digital solutions for your business.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                <img
                  src={`/images/icons/feature${index+1}.svg`}
                  alt={feature.title + ' icon'}
                  className="w-20 h-20 mb-4 object-contain rounded-full bg-primary-50 shadow"
                />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={`/images/testimonials/ai-avatar-${index+1}.svg`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-200 shadow"
                  />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. Contact us today to get started.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 