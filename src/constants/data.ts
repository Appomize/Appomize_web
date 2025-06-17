import { StaticImageData } from 'next/image';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  results: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  feedback: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Create powerful, scalable mobile applications for iOS and Android platforms",
    icon: "📱",
    features: [
      "Native and Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance and Support"
    ]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Build responsive and dynamic web applications using cutting-edge technologies",
    icon: "💻",
    features: [
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "Progressive Web Apps"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing services",
    icon: "📈",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Campaigns"
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    description: "Helped a retail client increase online sales by 200% through digital transformation",
    image: "/images/case-studies/ecommerce.jpg",
    category: "Web Development",
    results: [
      "200% increase in online sales",
      "50% improvement in page load time",
      "40% increase in mobile conversions"
    ]
  },
  {
    id: 2,
    title: "Healthcare App Innovation",
    description: "Developed a telemedicine app that connects patients with healthcare providers",
    image: "/images/case-studies/healthcare.jpg",
    category: "Mobile Development",
    results: [
      "100,000+ app downloads",
      "4.8/5 user rating",
      "30% reduction in wait times"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    image: "/images/testimonials/sarah.jpg",
    feedback: "Working with the team was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Global Solutions",
    image: "/images/testimonials/michael.jpg",
    feedback: "Their digital marketing expertise helped us achieve our goals within budget. Highly recommended!",
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Mobile App Development",
    excerpt: "Explore the latest trends and technologies shaping the future of mobile applications.",
    content: "Lorem ipsum dolor sit amet...",
    author: "John Smith",
    date: "2024-03-15",
    image: "/images/blog/mobile-dev.jpg",
    category: "Technology"
  },
  {
    id: 2,
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Learn about effective digital marketing strategies that will dominate in 2024.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Emma Davis",
    date: "2024-03-10",
    image: "/images/blog/digital-marketing.jpg",
    category: "Marketing"
  }
];

export const companyInfo = {
  name: "Appomize",
  tagline: "Transforming Ideas into Digital Reality",
  description: "We are a leading digital transformation company specializing in application development and digital marketing solutions. Our passion for innovation and commitment to excellence drives us to deliver exceptional results for our clients.",
  founded: "2020",
  location: "Silicon Valley, CA",
  contact: {
    email: "contact@appmize.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Park, Silicon Valley, CA 94025"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/appmize",
    twitter: "https://twitter.com/appmize",
    facebook: "https://facebook.com/appmize",
    instagram: "https://instagram.com/appmize"
  }
}; 