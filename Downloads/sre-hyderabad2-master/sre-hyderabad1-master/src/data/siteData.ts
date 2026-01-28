// SRE @ Hyderabad - Site Data

// Import member avatars
import adityaAvatar from '@/assets/Flux_Dev_A_photorealistic_portrait_of_a_35yearold_Indian_male__1.jpeg';
import snehaAvatar from '@/assets/Flux_Dev_A_photorealistic_portrait_of_a_40yearold_Indian_busin_3.jpeg';
import vikramAvatar from '@/assets/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-work-with-laptops-together-using-various-gadgets-having-conversation.jpg';
import priyaAvatar from '@/assets/portrait-professional-business-people-working-together.jpg';
import rahulAvatar from '@/assets/people-holding-linkedin-logo.jpg';
import kavyaAvatar from '@/assets/person-using-tablet.jpg';
import arjunAvatar from '@/assets/creative-designers-team-working-project (1).jpg';
import meeraAvatar from '@/assets/innovative-futuristic-classroom-students.jpg';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  description: string;
  speakers?: string[];
  resources?: { label: string; url: string }[];
}

export interface Member {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  skills: string[];
  linkedin: string;
  openToWork: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  postedDate: string;
  applyUrl: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'SRE Deep Dive: Incident Management at Scale',
    date: '2026-02-15',
    time: '10:00 AM - 1:00 PM',
    location: 'Microsoft Campus, Hyderabad',
    type: 'upcoming',
    description: 'Learn how top tech companies manage incidents at scale. Real war stories and actionable frameworks.',
    speakers: ['Priya Sharma', 'Rakesh Kumar'],
  },
  {
    id: '2',
    title: 'Kubernetes SRE Practices Workshop',
    date: '2026-03-08',
    time: '9:00 AM - 5:00 PM',
    location: 'T-Hub 2.0, Hyderabad',
    type: 'upcoming',
    description: 'Hands-on workshop covering observability, autoscaling, and disaster recovery in Kubernetes.',
    speakers: ['Amit Patel'],
  },
  {
    id: '3',
    title: 'Platform Engineering Meetup',
    date: '2026-03-22',
    time: '6:00 PM - 9:00 PM',
    location: 'Google Office, Gachibowli',
    type: 'upcoming',
    description: 'Building Internal Developer Platforms - patterns, anti-patterns, and real implementations.',
  },
  {
    id: '4',
    title: 'Chaos Engineering in Production',
    date: '2025-12-10',
    time: '10:00 AM - 2:00 PM',
    location: 'Amazon Campus, Hyderabad',
    type: 'past',
    description: 'Introduction to chaos engineering principles with live demos using Litmus and Gremlin.',
    resources: [
      { label: 'Slides', url: '#' },
      { label: 'Recording', url: '#' },
    ],
  },
  {
    id: '5',
    title: 'SRE Career Growth Panel',
    date: '2025-11-18',
    time: '5:00 PM - 8:00 PM',
    location: 'WeWork, Hitech City',
    type: 'past',
    description: 'Panel discussion with SRE leaders from Google, Microsoft, and startups on career progression.',
    resources: [
      { label: 'Recording', url: '#' },
    ],
  },
  {
    id: '6',
    title: 'Observability Stack Deep Dive',
    date: '2025-10-05',
    time: '10:00 AM - 4:00 PM',
    location: 'Uber Office, Hyderabad',
    type: 'past',
    description: 'Comprehensive workshop on building observability with Prometheus, Grafana, and OpenTelemetry.',
    resources: [
      { label: 'Slides', url: '#' },
      { label: 'Code', url: '#' },
      { label: 'Recording', url: '#' },
    ],
  },
  {
    id: '7',
    title: 'Startup SRE: Building Reliability on a Budget',
    date: '2026-02-28',
    time: '5:00 PM - 8:00 PM',
    location: 'T-Hub Startup Ecosystem, Hyderabad',
    type: 'upcoming',
    description: 'How startups can implement SRE practices without enterprise budgets. Cost-effective tools, automation strategies, and scaling patterns that work for early-stage companies.',
    speakers: ['Arjun Verma - Swiggy', 'Neha Singh - Unacademy'],
  },
  {
    id: '8',
    title: 'Business Meetup: DevOps Economics & ROI',
    date: '2026-03-15',
    time: '10:00 AM - 1:00 PM',
    location: 'CII Conference Hall, Hyderabad',
    type: 'upcoming',
    description: 'Understanding the business impact of reliability engineering. Learn how to calculate ROI on SRE investments, present reliability metrics to stakeholders, and align technical decisions with business goals.',
    speakers: ['Rajesh Patel - Director of Engineering', 'Meera Gupta - VP Operations'],
  },
  {
    id: '9',
    title: 'Career Growth Masterclass: SRE to Leadership',
    date: '2026-04-05',
    time: '9:00 AM - 12:30 PM',
    location: 'Hyatt Centric, Gachibowli',
    type: 'upcoming',
    description: 'A comprehensive guide to advancing your SRE career. From IC to manager to director paths, negotiation tips, skill development, and mentorship opportunities in the reliability engineering field.',
    speakers: ['Vikram Sharma - Senior Director, Platform Engineering', 'Priya Desai - HR Head, Tech Companies'],
  },
  {
    id: '10',
    title: 'Tech Networking Brunch: SRE Leaders Connect',
    date: '2026-02-22',
    time: '9:30 AM - 12:00 PM',
    location: 'Radisson Blu, Hyderabad',
    type: 'upcoming',
    description: 'Exclusive networking event for SRE professionals, engineering managers, and tech leaders. Build relationships, explore collaborations, and discuss industry trends over coffee and breakfast.',
  },
  {
    id: '11',
    title: 'Open Source SRE: Contributing & Building Community',
    date: '2026-03-29',
    time: '2:00 PM - 6:00 PM',
    location: 'GitHub Office, Hitech City',
    type: 'upcoming',
    description: 'Learn how to contribute to SRE open-source projects like Prometheus, Grafana, and Kubernetes. Understand community-driven development and how your contributions can impact the ecosystem.',
    speakers: ['Sanjay Nambiar - Open Source Contributor', 'Divya Sharma - Kubernetes Community Lead'],
  },
  {
    id: '12',
    title: 'Women in SRE: Success Stories & Mentorship',
    date: '2026-04-12',
    time: '4:00 PM - 7:00 PM',
    location: 'WeWork, Madhapur',
    type: 'upcoming',
    description: 'Inspiring stories from women SRE engineers, breaking barriers, and building successful careers in tech. Interactive mentorship sessions with industry leaders.',
    speakers: ['Anjali Gupta', 'Shreya Patel', 'Dr. Riddhima Sharma'],
  },
  {
    id: '13',
    title: 'Startup Pitch Night: Tech Infrastructure Ideas',
    date: '2025-09-20',
    time: '6:00 PM - 9:00 PM',
    location: 'T-Hub, Hyderabad',
    type: 'past',
    description: 'Early-stage startups pitching innovative infrastructure and reliability solutions. Great networking opportunity with investors and tech professionals.',
    resources: [
      { label: 'Event Photos', url: '#' },
      { label: 'Winning Pitches', url: '#' },
    ],
  },
  {
    id: '14',
    title: 'Business Skills for Engineers Workshop',
    date: '2025-08-15',
    time: '10:00 AM - 3:00 PM',
    location: 'T-Hub 2.0, Hyderabad',
    type: 'past',
    description: 'Essential business skills for technical professionals: communication, negotiation, financial literacy, and strategic thinking.',
    resources: [
      { label: 'Course Materials', url: '#' },
      { label: 'Recording', url: '#' },
    ],
  },
  {
    id: '15',
    title: 'Career Advancement Summit 2025',
    date: '2025-07-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Hyatt Regency, Hyderabad',
    type: 'past',
    description: 'Full-day summit covering resume building, interview prep, salary negotiation, and career planning with guidance from tech industry veterans.',
    resources: [
      { label: 'Session Videos', url: '#' },
      { label: 'Networking Guide', url: '#' },
      { label: 'Resources List', url: '#' },
    ],
  },
  {
    id: '16',
    title: 'Tech Hiring Round Table Discussion',
    date: '2025-06-10',
    time: '5:00 PM - 8:00 PM',
    location: 'Taj Falaknuma Palace, Hyderabad',
    type: 'past',
    description: 'HR heads and tech recruiters sharing insights on hiring SRE talents, what companies look for, and how candidates can prepare.',
    resources: [
      { label: 'Recording', url: '#' },
    ],
  },
];

export const members: Member[] = [
  {
    id: '1',
    name: 'Aditya Reddy',
    role: 'Staff SRE',
    company: 'Google',
    avatar: adityaAvatar,
    skills: ['Kubernetes', 'GCP', 'SLO Design', 'Go'],
    linkedin: 'https://linkedin.com/in/aditya-reddy-sre',
    openToWork: false,
  },
  {
    id: '2',
    name: 'Sneha Iyer',
    role: 'SRE Manager',
    company: 'Microsoft',
    avatar: snehaAvatar,
    skills: ['Azure', 'Incident Management', 'Team Building'],
    linkedin: 'https://linkedin.com/in/sneha-iyer-sre',
    openToWork: false,
  },
  {
    id: '3',
    name: 'Vikram Desai',
    role: 'Platform Engineer',
    company: 'Razorpay',
    avatar: vikramAvatar,
    skills: ['AWS', 'Terraform', 'Python', 'Observability'],
    linkedin: 'https://linkedin.com/in/vikram-desai-platform',
    openToWork: true,
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'Senior SRE',
    company: 'Amazon',
    avatar: priyaAvatar,
    skills: ['AWS', 'Java', 'Chaos Engineering', 'DynamoDB'],
    linkedin: 'https://linkedin.com/in/priya-sharma-sre',
    openToWork: false,
  },
  {
    id: '5',
    name: 'Rahul Menon',
    role: 'DevOps Lead',
    company: 'Swiggy',
    avatar: rahulAvatar,
    skills: ['Docker', 'CI/CD', 'Monitoring', 'Kafka'],
    linkedin: 'https://linkedin.com/in/rahul-menon-devops',
    openToWork: true,
  },
  {
    id: '6',
    name: 'Kavya Nair',
    role: 'SRE',
    company: 'Flipkart',
    avatar: kavyaAvatar,
    skills: ['Kubernetes', 'Prometheus', 'Grafana', 'Python'],
    linkedin: 'https://linkedin.com/in/kavya-nair-sre',
    openToWork: false,
  },
  {
    id: '7',
    name: 'Arjun Krishnan',
    role: 'Principal SRE',
    company: 'Uber',
    avatar: arjunAvatar,
    skills: ['Distributed Systems', 'Go', 'Kafka', 'Leadership'],
    linkedin: 'https://linkedin.com/in/arjun-krishnan-sre',
    openToWork: false,
  },
  {
    id: '8',
    name: 'Meera Rao',
    role: 'Cloud Engineer',
    company: 'Thoughtworks',
    avatar: meeraAvatar,
    skills: ['Multi-cloud', 'IaC', 'Security', 'Consulting'],
    linkedin: 'https://linkedin.com/in/meera-rao-cloud',
    openToWork: true,
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Site Reliability Engineer',
    company: 'Google',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '5+ years',
    postedDate: '2026-01-15',
    applyUrl: '#',
  },
  {
    id: '2',
    title: 'SRE Manager',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '8+ years',
    postedDate: '2026-01-12',
    applyUrl: '#',
  },
  {
    id: '3',
    title: 'Platform Engineer',
    company: 'Razorpay',
    location: 'Hyderabad / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    postedDate: '2026-01-18',
    applyUrl: '#',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'PhonePe',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '2-4 years',
    postedDate: '2026-01-20',
    applyUrl: '#',
  },
  {
    id: '5',
    title: 'Cloud Infrastructure Engineer',
    company: 'Atlassian',
    location: 'Remote',
    type: 'Remote',
    experience: '4+ years',
    postedDate: '2026-01-10',
    applyUrl: '#',
  },
  {
    id: '6',
    title: 'Staff SRE',
    company: 'Uber',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '7+ years',
    postedDate: '2026-01-22',
    applyUrl: '#',
  },
  {
    id: '7',
    title: 'Principal SRE',
    company: 'Amazon',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '10+ years',
    postedDate: '2026-01-19',
    applyUrl: '#',
  },
  {
    id: '8',
    title: 'SRE - Kubernetes Specialist',
    company: 'Flipkart',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '4-6 years',
    postedDate: '2026-01-21',
    applyUrl: '#',
  },
];

export const features = [
  {
    title: 'Community-led',
    description: 'Run by engineers, for engineers. No corporate agenda. Our community is built by SREs who understand the real challenges of keeping systems reliable at scale.',
    icon: 'Users',
  },
  {
    title: 'Open-source first',
    description: 'We believe in sharing knowledge and contributing back. From custom monitoring tools to incident response frameworks, we share everything we build.',
    icon: 'GitBranch',
  },
  {
    title: 'Production-focused',
    description: 'Real stories from real production systems. No fluff. Learn from actual outages, scaling challenges, and the hard-won lessons that keep services running.',
    icon: 'Server',
  },
  {
    title: 'Career-driven',
    description: 'Grow your skills, network, and career opportunities. Connect with hiring managers, get mentored by senior SREs, and advance your reliability engineering career.',
    icon: 'TrendingUp',
  },
];

export const founderQuote = {
  name: 'Community Founders',
  quote: 'Simplify the complex. Automate the simple. Elevate the human.',
  role: 'SRE @ Hyderabad',
};

export const socialLinks = {
  linkedin: 'https://linkedin.com/groups/sre-hyderabad',
  twitter: 'https://twitter.com/sre_hyderabad',
  github: 'https://github.com/sre-hyderabad',
  youtube: 'https://youtube.com/@sre-hyderabad',
  meetup: 'https://meetup.com/sre-hyderabad',
};

export const partners = [
  'Google Cloud',
  'AWS',
  'Microsoft Azure',
  'CNCF',
  'T-Hub',
];
