// Ensure this name is exactly 'clients' and it has the 'export' keyword
export const clients = [
  { name: 'Angel One', logo: 'portfolio/c1.jpg' },
  { name: 'Cipla', logo: 'portfolio/c2.jpg' },
  { name: 'Dabur', logo: 'portfolio/c3.jpg' },
  { name: 'HDFC', logo: 'portfolio/c4.jpg' },
  { name: 'Paytm', logo: 'portfolio/Paytm_logo.svg.png' },
  { name: 'Indofast Energy', logo: 'portfolio/c5.jpg' },
  { name: 'Moneyview', logo: 'portfolio/c6.jpg' },
  { name: 'Share market', logo: 'portfolio/c7.jpg' },
  { name: 'Sun Mobility', logo: 'portfolio/c8.jpg' },
  { name: 'Tata Digital', logo: 'portfolio/c9.jpg' },
  { name: 'Tata Neu', logo: 'portfolio/c10.jpg' },
  { name: 'One97 Comms', logo: 'portfolio/One97.png' },
  { name: 'Paytm Mall', logo: 'portfolio/paytm-mall.jpg' },
  { name: 'Paytm Payments Bank', logo: 'portfolio/Paytm_logo.svg.png' },
  { name: 'BARC India', logo: 'portfolio/item4.jpg' },
  { name: 'SquadStack', logo: 'portfolio/SquadStack_light-mode-1.webp' },
  { name: 'Sunstone', logo: 'portfolio/Sunstone Team.jpg' },
  { name: 'SRComSoft Survey', logo: 'portfolio/item1.jpg' }
];
// --- TEAM SECTION --- (UPDATED with photo paths)
export const teamMembers = [
  {
    avatar: 'RK',
    name: 'Ramendra Karsoliya',
    role: 'Managing Director',
    photo: 'portfolio/r_karsoliya.png', // Add this line
    bio: 'Serial entrepreneur with 13+ years in IT. Founded and managed multiple IT projects. Vice Chairman, Shri Ram Group Jabalpur (est. 2001). B.E. in Computer Sciences.'
  },
  {
    avatar: 'AK',
    name: 'Anshul Khurana',
    role: 'Technology Lead',
    photo: 'portfolio/anshul_khurana.jpg', // Add this line
    bio: 'M.Tech from IIT Bombay in Computer Science. 14+ years in multinational environments. Logical, practical problem-solver with deep technical expertise.'
  },
  {
    avatar: 'AP',
    name: 'Atul Pachouri',
    role: 'Technical Director',
    photo: 'portfolio/atul_pachouri.jpeg', // Add this line
    bio: 'M.Tech from BITS Pilani in Software Systems. 12+ years in multi-national companies. Known for mature, methodical approaches to complex technical challenges.'
  }
];
// Also ensure these are exported for your other components
export const navLinks = [
  { href: '/', label: 'Home', external: false },
  { href: '/services', label: 'Services', external: false },
  { href: '/career', label: 'Career', external: false },
  { href: 'https://srcomsoft.com/Policies-SRComSoft.pdf', label: 'Policies', external: true },
  { href: 'https://srcomsoft.com/Code_of_Conduct_SRComSoft.pdf', label: 'Code of Conduct', external: true },
];

export const aboutListItems = [
  'Customized Business Process Outsourcing (BPO) solutions tailored to your unique requirements.',
  'Specialized Knowledge Process Outsourcing (KPO) and deep domain expertise across BFSI, Healthcare, and E-commerce.',
  'Data-driven insights and analytics for a strategic operational edge.',
  '24/7 dedicated, multi-channel customer support to ensure continuous service excellence.'
];

export const testimonials = [
  { rating: 5, text: '"SRComSoft transformed our back-office, significantly cutting costs and boosting processing speed. Their expertise is unmatched."', author: 'Sarah Jenkins', role: 'COO, FinTech Startup', avatar: 'SJ' },
  { rating: 5, text: '"A highly reliable KPO partner. The data insights they provided helped us pivot our strategy and increase Q4 sales considerably."', author: 'David Chen', role: 'Director of Analytics, E-commerce', avatar: 'DC' },
  { rating: 5, text: '"Their 24/7 customer support team operates seamlessly as an extension of our brand. Our CSAT scores have never been higher."', author: 'Emily Rodriguez', role: 'Head of CX, HealthTech', avatar: 'ER' }
];

export const processSteps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your specific bottlenecks and defining project scope.' },
  { num: '02', title: 'Design & Setup', desc: 'Creating custom workflows, selecting tech stacks, and team assembly.' },
  { num: '03', title: 'Onboarding & Training', desc: 'Immersing our specialists into your domain and processes.' },
  { num: '04', title: 'Execution & Monitoring', desc: 'Live operations with continuous QA and agile adjustments.' }
];

export const industries = [
  { name: 'Banking & Finance', desc: 'Secure data entry, KYC compliance, and loan processing.', icon: 'lock' },
  { name: 'FinTech & Payments', desc: 'Transaction monitoring, chargeback management, and tech support.', icon: 'card' },
  { name: 'E-Commerce & Retail', desc: 'Catalog management, order fulfillment, and customer care.', icon: 'shopping' },
  { name: 'Healthcare', desc: 'Medical billing, records digitization, and claims processing.', icon: 'health' },
  { name: 'Insurance', desc: 'Policy administration, claims adjustment support, and underwriting assistance.', icon: 'file' },
  { name: 'IT & Software', desc: 'L1/L2 tech support, data annotation, and quality assurance testing.', icon: 'monitor' }
];