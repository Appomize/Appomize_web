'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'UI/UX Design', href: '/services#design' },
    { name: 'Digital Marketing', href: '/services#marketing' },
    { name: 'Cloud Solutions', href: '/services#cloud' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/appomize', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/appomize', icon: 'in' },
    // { name: 'GitHub', href: 'https://github.com/appmize', icon: '⌘' },
    { name: 'Instagram', href: 'https://instagram.com/appomize', icon: '📸' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            {/* <p className="text-gray-400">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p> */}
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="font-medium">Address</p>
                <p>1404 The HydePark</p>
                <p>Noida, Uttar Pradesh 201301</p>
              </li>
              <li>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:info@appomize.com "
                  className="hover:text-white transition-colors duration-300"
                >
                  info@appomize.com 
                </a>
              </li>
              <li>
                <p className="font-medium">Phone</p>
                <a
                  href="tel:+918090276841"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 80902 76841
                </a> {","}
                <a
                  href="tel:+91902633332"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 90263 33332
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Appomize. All rights reserved.
            </p>
            <ul className="flex space-x-6">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 