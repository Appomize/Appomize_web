'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Technology', 'Design', 'Business', 'Development', 'Marketing'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    category: 'Technology',
    image: '/images/blog/web-dev-future.jpg',
    excerpt: 'Explore the upcoming trends and technologies that will shape the future of web development.',
    author: {
      name: 'John Smith',
      role: 'CTO',
      avatar: '/images/team-1.jpg'
    },
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Designing for Accessibility: Best Practices and Guidelines',
    category: 'Design',
    image: '/images/blog/accessibility.jpg',
    excerpt: 'Learn how to create inclusive digital experiences that work for everyone.',
    author: {
      name: 'Emily Chen',
      role: 'Lead Designer',
      avatar: '/images/team-2.jpg'
    },
    date: 'March 12, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Digital Transformation: A Guide for Business Leaders',
    category: 'Business',
    image: '/images/blog/digital-transformation.jpg',
    excerpt: 'Navigate the challenges and opportunities of digital transformation in your organization.',
    author: {
      name: 'Sarah Wilson',
      role: 'Digital Strategist',
      avatar: '/images/team-4.jpg'
    },
    date: 'March 10, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Building Scalable Applications with Microservices',
    category: 'Development',
    image: '/images/blog/microservices.jpg',
    excerpt: 'Discover the benefits and challenges of implementing a microservices architecture.',
    author: {
      name: 'David Kumar',
      role: 'Lead Developer',
      avatar: '/images/team-3.jpg'
    },
    date: 'March 8, 2024',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'The Impact of AI on Digital Marketing',
    category: 'Marketing',
    image: '/images/blog/ai-marketing.jpg',
    excerpt: 'How artificial intelligence is revolutionizing digital marketing strategies.',
    author: {
      name: 'Sarah Wilson',
      role: 'Marketing Director',
      avatar: '/images/team-4.jpg'
    },
    date: 'March 5, 2024',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Mobile-First Design: Why It Matters',
    category: 'Design',
    image: '/images/blog/mobile-first.jpg',
    excerpt: "Understanding the importance of mobile-first design in today's digital landscape.",
    author: {
      name: 'Emily Chen',
      role: 'Lead Designer',
      avatar: '/images/team-2.jpg'
    },
    date: 'March 3, 2024',
    readTime: '5 min read'
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto opacity-90"
          >
            Insights, updates, and stories about technology, design, and digital innovation.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
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

          {/* Featured Post */}
          {selectedCategory === 'All' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-primary-600 text-sm font-medium mb-2">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={blogPosts[0].author.avatar}
                          alt={blogPosts[0].author.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium">{blogPosts[0].author.name}</p>
                          <p className="text-sm text-gray-600">{blogPosts[0].author.role}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>{blogPosts[0].date}</p>
                        <p>{blogPosts[0].readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              index === 0 && selectedCategory === 'All' ? null : (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary-600">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>{post.date}</p>
                        <p>{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 