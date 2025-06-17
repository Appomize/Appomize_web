'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'UI/UX Design'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/ecommerce.jpg',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    client: 'Fashion Retail Co.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    results: ['50% increase in online sales', '30% improvement in user engagement']
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile Apps',
    image: '/images/portfolio/fitness-app.jpg',
    description: 'A comprehensive fitness tracking application for iOS and Android.',
    client: 'HealthFirst',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    results: ['100,000+ downloads', '4.8/5 average rating']
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    image: '/images/portfolio/marketing.jpg',
    description: 'Multi-channel digital marketing campaign for product launch.',
    client: 'Tech Innovators Inc.',
    technologies: ['Google Ads', 'Social Media', 'Email Marketing'],
    results: ['200% ROI', '1M+ impressions']
  },
  {
    id: 4,
    title: 'Banking Dashboard',
    category: 'UI/UX Design',
    image: '/images/portfolio/banking.jpg',
    description: 'User-friendly dashboard design for a digital banking platform.',
    client: 'Modern Bank',
    technologies: ['Figma', 'Adobe XD', 'Protopie'],
    results: ['90% user satisfaction', '40% reduction in support tickets']
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Development',
    image: '/images/portfolio/restaurant.jpg',
    description: 'Online reservation system with real-time availability.',
    client: 'Fine Dining Group',
    technologies: ['React', 'Express', 'PostgreSQL'],
    results: ['60% increase in bookings', '25% reduction in no-shows']
  },
  {
    id: 6,
    title: 'Delivery Tracking App',
    category: 'Mobile Apps',
    image: '/images/portfolio/delivery.jpg',
    description: 'Real-time delivery tracking application with driver management.',
    client: 'Logistics Pro',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    results: ['30% faster deliveries', '95% customer satisfaction']
  }
];

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

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto opacity-90"
          >
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Client</h4>
                  <p className="text-gray-600">{selectedProject.client}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Results</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 