// Edit this file with your real info, projects, and links.

export const brand = {
  name: 'OGUNROMILA',
  tagline: 'Full-Stack Web Developer & Digital Craftsman',
  description:
    'Custom websites and digital experiences built from scratch for ambitious brands worldwide. Fast, modern, and designed to help your business grow.',
}

export const profile = {
  name: 'Ogunromila',
  role: 'Full-Stack Web Developer',
  headline: 'I build fast, modern websites',
  headlineAccent: 'that help businesses grow.',
  bio: `Self-taught full-stack web developer focused on creating clean, responsive, and high-performance websites. I handle design, development, and deployment — so you get a professional site that works perfectly on every device.`,
  email: 'ifeoluwaogunromila@gmail.com',
  phone: '08143010299',
  location: 'Available for remote work worldwide',
  availability: 'Open for new projects',
  fiverrUrl: 'https://www.fiverr.com/yourusername',
  social: {
    github: 'https://github.com/Ifestack404',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://x.com/Ogunromila9299',
    facebook: 'https://www.facebook.com/profile.php?id=61591598579306',
    whatsapp: 'https://wa.me/15551234567',
  },
}

export const navLinks = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export const pageMeta = {
  home: {
    title: `${brand.name} | Custom Website Developer`,
    description: brand.description,
  },
  about: {
    title: `About | ${brand.name}`,
    description: `Meet ${profile.name} — the developer behind ${brand.name}. Skills, process, and what makes my work different.`,
  },
  services: {
    title: `Services | ${brand.name}`,
    description:
      'Business websites, landing pages, e-commerce, and redesigns — professional web development services.',
  },
  projects: {
    title: `Portfolio | ${brand.name}`,
    description:
      'Browse websites I designed and developed from scratch — real projects for real clients.',
  },
  contact: {
    title: `Contact | ${brand.name}`,
    description: 'Start your project today. Get a quote for your business website or online store.',
  },
}

export const stats = [
  { value: '15+', label: 'Websites delivered' },
  { value: '100%', label: 'Client satisfaction' },
  { value: '2–4 wks', label: 'Typical turnaround' },
]

export const services = [
  {
    title: 'Business Websites',
    description:
      'Professional sites for brands, startups, and local businesses — built to convert visitors into customers.',
    icon: '◆',
  },
  {
    title: 'Landing Pages',
    description:
      'Focused single-page sites for campaigns, product launches, and lead generation with clear calls to action.',
    icon: '◇',
  },
  {
    title: 'E-Commerce & Stores',
    description:
      'Online shops with product catalogs, carts, and checkout flows tailored to your products.',
    icon: '▣',
  },
  {
    title: 'Redesign & Updates',
    description:
      'Refresh outdated sites with modern design, better performance, and mobile-first layouts.',
    icon: '↻',
  },
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'business', label: 'Business' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'landing', label: 'Landing Pages' },
]

/**
 * PROJECTS — Add every website you built so buyers can click and visit them.
 *
 * websiteUrl  → Your live site link (must start with https://)
 * image       → Optional screenshot in /public/projects/ e.g. '/projects/nova.png'
 * client      → Optional client or business name
 * featured    → true = shows on the home page
 * githubUrl   → Optional code repo, or null to hide
 */
export const projects = [
  {
    id: 1,
    title: 'Nova Consulting',
    category: 'business',
    client: 'Nova Consulting Ltd',
    description:
      'Corporate website for a consulting firm with service pages, team section, and contact funnel.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    websiteUrl: 'https://your-website-link-here.com',
    githubUrl: null,
    featured: true,
    accent: '#0ea5e9',
    // image: '/projects/nova-consulting.png',
  },
  {
    id: 2,
    title: 'FreshMart Grocery',
    category: 'ecommerce',
    client: 'FreshMart',
    description:
      'Online grocery store with category browsing, product cards, and streamlined checkout UX.',
    tech: ['React', 'CSS', 'JavaScript'],
    websiteUrl: 'https://your-second-website.com',
    githubUrl: null,
    featured: true,
    accent: '#10b981',
  },
  {
    id: 3,
    title: 'Pulse Fitness Launch',
    category: 'landing',
    client: 'Pulse Fitness',
    description:
      'High-converting landing page for a gym membership campaign with pricing and signup CTA.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    websiteUrl: 'https://your-third-website.com',
    githubUrl: null,
    featured: true,
    accent: '#f59e0b',
  },
  {
    id: 4,
    title: 'Artisan Café',
    category: 'business',
    description:
      'Restaurant site with menu, hours, gallery, and reservation contact — optimized for mobile.',
    tech: ['React', 'CSS'],
    websiteUrl: '',
    githubUrl: null,
    featured: false,
    accent: '#ec4899',
  },
  {
    id: 5,
    title: 'StyleHub Fashion',
    category: 'ecommerce',
    description:
      'Fashion boutique storefront with filters, wishlist UI, and responsive product grid.',
    tech: ['React', 'CSS', 'JavaScript'],
    websiteUrl: '',
    githubUrl: null,
    featured: false,
    accent: '#8b5cf6',
  },
  {
    id: 6,
    title: 'CloudSync SaaS',
    category: 'landing',
    description:
      'SaaS product landing with feature highlights, pricing table, and demo request form.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    websiteUrl: '',
    githubUrl: null,
    featured: false,
    accent: '#6366f1',
  },
  {
    id: 7,
    title: 'DonAI Cinematic Story',
    category: 'business',
    description:
      'Cinematic storytelling website with immersive visuals, motion, and modern layout for creative brands.',
    tech: ['React', 'CSS', 'JavaScript'],
    websiteUrl: 'https://donai-cinematic-story.vercel.app/',
    githubUrl: null,
    featured: false,
    accent: '#22c55e',
  },
]

export const skills = [
  'HTML5 & Semantic Markup',
  'CSS3 & Responsive Design',
  'JavaScript (ES6+)',
  'React',
  'Vite / Modern Tooling',
  'Git & Version Control',
  'Performance Optimization',
  'SEO Basics',
  'UI/UX Principles',
  'Cross-Browser Testing',
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your goals, audience, and what success looks like for your site.',
  },
  {
    step: '02',
    title: 'Design & Plan',
    description: 'I outline structure, pages, and visual direction before writing code.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'I build your site with clean code, responsive layouts, and fast load times.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'After testing and your approval, we go live. Revisions and support included.',
  },
]

export const testimonials = [
  {
    quote:
      'Delivered exactly what we needed — a professional site that our customers actually use. Communication was clear throughout.',
    name: 'Sarah K.',
    role: 'Small Business Owner',
  },
  {
    quote:
      'Fast turnaround and great attention to detail. Our landing page conversion improved noticeably after launch.',
    name: 'James M.',
    role: 'Marketing Lead',
  },
  {
    quote:
      'He understood our vision quickly and built a modern store that works perfectly on phones. Highly recommend.',
    name: 'Priya R.',
    role: 'E-Commerce Founder',
  },
]

export const whyHire = [
  'Built from scratch — no bloated templates',
  'Mobile-first, tested on real devices',
  'Clear timelines and regular updates',
  'Source code handed over to you',
]
