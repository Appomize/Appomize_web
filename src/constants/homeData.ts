import { TrophyIcon, UsersIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline';

export const stats = [
  { number: '5+', label: 'Years Industry Experience', icon: TrophyIcon },
  { number: '50+', label: 'Projects Delivered', icon: UsersIcon },
  { number: '100%', label: 'Client Satisfaction', icon: StarIcon },
  { number: '24/7', label: 'Support Available', icon: ClockIcon }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.',
    icon: '💻',
    features: ['React/Next.js', 'Node.js/Express', 'E-commerce Solutions', 'Progressive Web Apps'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'iOS/Android Native', 'App Store Optimization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Comprehensive SEO strategies and digital marketing campaigns to boost your online presence.',
    icon: '📈',
    features: ['Technical SEO', 'Content Marketing', 'Local SEO', 'Link Building'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Google Analytics & Analytics',
    description: 'Data-driven insights and analytics implementation to track and optimize your digital performance.',
    icon: '📊',
    features: ['Google Analytics 4', 'Conversion Tracking', 'Custom Dashboards', 'Performance Reports'],
    color: 'from-orange-500 to-red-500'
  }
];

export const testimonials = [
  {
    name: 'Dinesh',
    role: 'CEO at Globle Eye Solutions',
    company: 'Globle Eye Solutions',
    content: 'The team at Appomize delivered exceptional results for our web development project. Their expertise in modern technologies and attention to detail exceeded our expectations. We saw a 200% increase in online conversions.',
    rating: 5,
    image: '/images/testimonials/ai-avatar-1.svg'
  },
  {
    name: 'Devesh',
    role: 'Founder of FrontendSchool',
    company: 'FrontendSchool',
    content: 'The expertise and professionalism of the Appomize team are unmatched. They delivered our project on time and within budget. Their SEO and digital marketing expertise helped us achieve first-page rankings for all our target keywords. The Google Analytics implementation provided valuable insights that improved our marketing ROI by 150%.',
    rating: 5,
    image: '/images/testimonials/ai-avatar-2.svg'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business goals, target audience, and market position to create a comprehensive digital strategy.',
    icon: '🔍'
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our expert team builds your solution using the latest technologies and best practices for optimal performance.',
    icon: '⚡'
  },
  {
    step: '03',
    title: 'Testing & Optimization',
    description: 'Rigorous testing ensures your solution works flawlessly across all devices and platforms.',
    icon: '✅'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support, maintenance, and optimization services.',
    icon: '🚀'
  }
];

export const technologies = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Django', 'React Native', 'Flutter',
  'Firebase', 'AWS', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes'
];

export const featureBadges = [
  { text: 'Expert Team', color: 'primary', animation: 'pulse' },
  { text: 'Proven Results', color: 'green', animation: 'bounce' },
  { text: 'Modern Tech', color: 'purple', animation: 'spin' },
  { text: '24/7 Support', color: 'orange', animation: 'ping' }
];

export const colorClasses = {
  primary: 'from-primary-50 to-blue-50 border-primary-200 text-primary-700 bg-primary-500',
  green: 'from-green-50 to-emerald-50 border-green-200 text-green-700 bg-green-500',
  purple: 'from-purple-50 to-pink-50 border-purple-200 text-purple-700 bg-purple-500',
  orange: 'from-orange-50 to-red-50 border-orange-200 text-orange-700 bg-orange-500'
}; 