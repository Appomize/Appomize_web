'use client';

import { Suspense, lazy, memo } from 'react';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const HeroSection = lazy(() => import('@/components/HeroSection'));
const StatsSection = lazy(() => import('@/components/StatsSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));

// Loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

// Optimized main page component
const HomePage = memo(() => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Critical, load immediately */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      {/* Statistics Section - Load after hero */}
      <Suspense fallback={<SectionLoader />}>
        <StatsSection />
      </Suspense>

      {/* Services Section - Load after stats */}
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      {/* Why Choose Us Section */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUsSection />
      </Suspense>

      {/* Process Section */}
      <Suspense fallback={<SectionLoader />}>
        <ProcessSection />
      </Suspense>

      {/* Technologies Section */}
      <Suspense fallback={<SectionLoader />}>
        <TechnologiesSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
    </main>
  );
});

HomePage.displayName = 'HomePage';

// Why Choose Us Section Component
const WhyChooseUsSection = memo(() => {
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

const features = [
  {
      icon: '🏆',
      title: 'Deep Industry Expertise',
      description: 'Our team brings years of experience in web development, mobile apps, SEO, and digital marketing with proven track records of success.'
    },
    {
      icon: '👥',
      title: 'Proven Methodologies',
      description: 'We follow industry best practices and proven methodologies that have delivered exceptional results for businesses across various sectors.'
    },
    {
      icon: '⭐',
      title: '100% Client Satisfaction',
      description: 'Our commitment to excellence and attention to detail has earned us the trust and satisfaction of every client we\'ve worked with.'
    },
    {
      icon: '🕒',
      title: 'Ongoing Support & Optimization',
      description: 'We don\'t just build your solution - we maintain it, optimize it, and ensure it continues to drive results for your business.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Leading Businesses Choose Appomize
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="p-2 bg-primary-100 rounded-lg mr-4 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Success Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Average Traffic Increase</span>
                  <span className="text-2xl font-bold">200%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Conversion Rate Improvement</span>
                  <span className="text-2xl font-bold">150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">SEO Ranking Improvement</span>
                  <span className="text-2xl font-bold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Mobile App Performance</span>
                  <span className="text-2xl font-bold">4.8★</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';

// Process Section Component
const ProcessSection = memo(() => {
  const { processSteps } = require('@/constants/homeData');

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach that ensures your project's success from concept to launch and beyond.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step: any) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-sm font-bold text-primary-600 mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
  );
});

ProcessSection.displayName = 'ProcessSection';

// Technologies Section Component
const TechnologiesSection = memo(() => {
  const { technologies } = require('@/constants/homeData');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technologies
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            We stay ahead of the curve with the latest technologies and frameworks to deliver exceptional results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
          >
          {technologies.map((tech: string, index: number) => (
              <motion.div
              key={tech}
                variants={itemVariants}
              className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-primary-100 hover:text-primary-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
});

TechnologiesSection.displayName = 'TechnologiesSection';

// Testimonials Section Component
const TestimonialsSection = memo(() => {
  const { testimonials } = require('@/constants/homeData');
  
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

  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients who've achieved remarkable results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
          {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

// CTA Section Component
const CTASection = memo(() => {
  return (
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
            Join businesses that have achieved remarkable digital success with our expertise. Let's discuss how we can help you reach your goals.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </div>
          </motion.div>
        </div>
      </section>
  );
});

CTASection.displayName = 'CTASection';

export default HomePage; 