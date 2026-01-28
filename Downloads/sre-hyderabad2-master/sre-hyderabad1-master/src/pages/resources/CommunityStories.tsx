import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  ArrowLeft,
  Heart,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Linkedin,
  Github,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Counter } from '@/components/ui/Counter';
import sreVideo1 from '@/assets/sre1.mp4';
import portrait1Img from '@/assets/Flux_Dev_A_photorealistic_portrait_of_a_35yearold_Indian_male__1.jpeg';
import portrait2Img from '@/assets/Flux_Dev_A_photorealistic_portrait_of_a_40yearold_Indian_busin_3.jpeg';
import communityImg from '@/assets/donation-community-service-volunteer-support.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const communityStories = [
  {
    id: '1',
    name: 'Aditya Reddy',
    currentRole: 'Staff SRE',
    currentCompany: 'Google',
    avatar: '👤',
    journey: 'Started as a DevOps Engineer → Senior SRE → Staff SRE',
    yearsInSRE: '6 years',
    location: 'Hyderabad',
    story: 'I joined the SRE Hyderabad community when I was struggling to transition from DevOps to SRE. The mentorship I received here was invaluable. Through community workshops and networking, I learned SLO design, error budgets, and incident management at scale. The connections I made led to my current role at Google.',
    achievements: [
      'Promoted to Staff SRE within 2 years',
      'Led reliability improvements for 50+ services',
      'Mentored 15+ engineers in the community',
      'Published 3 technical articles on SRE practices'
    ],
    communityImpact: 'Active mentor, organized 5 workshops, helped 20+ engineers transition to SRE',
    favoriteMemory: 'The first chaos engineering workshop where we safely broke production systems and learned resilience patterns.',
    linkedin: 'https://linkedin.com/in/aditya-reddy',
    github: 'https://github.com/aditya-reddy',
    featured: true,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    currentRole: 'Senior SRE',
    currentCompany: 'Amazon',
    avatar: '👤',
    journey: 'Software Engineer → DevOps → SRE → Senior SRE',
    yearsInSRE: '4 years',
    location: 'Hyderabad',
    story: 'As a woman in tech, finding a supportive community was crucial. SRE Hyderabad welcomed me with open arms. The community helped me build confidence, learn incident management, and eventually land my dream role at Amazon. I now pay it forward by mentoring other women engineers.',
    achievements: [
      'Reduced MTTR by 60% in previous role',
      'Implemented SLO framework for 30+ services',
      'Speaker at 3 community events',
      'Started Women in SRE initiative'
    ],
    communityImpact: 'Founded Women in SRE group, mentored 12 engineers, regular speaker',
    favoriteMemory: 'The career panel where I got advice that changed my approach to SRE interviews.',
    linkedin: 'https://linkedin.com/in/priya-sharma',
    github: 'https://github.com/priya-sharma',
    featured: true,
  },
  {
    id: '3',
    name: 'Vikram Desai',
    currentRole: 'Platform Engineer',
    currentCompany: 'Razorpay',
    avatar: '👤',
    journey: 'Backend Developer → DevOps → Platform Engineer',
    yearsInSRE: '3 years',
    location: 'Hyderabad',
    story: 'I was a backend developer who got interested in infrastructure. The community helped me understand platform engineering and build internal developer platforms. The hands-on workshops were game-changers for my career.',
    achievements: [
      'Built self-service platform serving 200+ developers',
      'Reduced deployment time by 70%',
      'Contributed to 5 open-source SRE tools',
      'Wrote popular blog on platform engineering'
    ],
    communityImpact: 'Organized 3 platform engineering workshops, active in discussions',
    favoriteMemory: 'The Kubernetes deep-dive workshop where I finally understood service meshes.',
    linkedin: 'https://linkedin.com/in/vikram-desai',
    github: 'https://github.com/vikram-desai',
    featured: false,
  },
  {
    id: '4',
    name: 'Sneha Iyer',
    currentRole: 'SRE Manager',
    currentCompany: 'Microsoft',
    avatar: '👤',
    journey: 'SRE → Senior SRE → Tech Lead → SRE Manager',
    yearsInSRE: '7 years',
    location: 'Hyderabad',
    story: 'The community helped me transition from individual contributor to leadership. Through mentorship and leadership workshops, I learned how to build and scale SRE teams. Now I manage a team of 12 SREs.',
    achievements: [
      'Built SRE team from 2 to 12 engineers',
      'Improved team on-call experience by 50%',
      'Established SRE practices across 3 product teams',
      'Regular speaker at SRE conferences'
    ],
    communityImpact: 'Leadership mentor, organized management workshops, helped 8 engineers become managers',
    favoriteMemory: 'The incident management simulation where we practiced handling a major outage as a team.',
    linkedin: 'https://linkedin.com/in/sneha-iyer',
    github: 'https://github.com/sneha-iyer',
    featured: false,
  },
  {
    id: '5',
    name: 'Rahul Menon',
    currentRole: 'DevOps Lead',
    currentCompany: 'Swiggy',
    avatar: '👤',
    journey: 'System Admin → DevOps Engineer → DevOps Lead',
    yearsInSRE: '5 years',
    location: 'Hyderabad',
    story: 'Coming from a traditional sysadmin background, SRE concepts were new to me. The community workshops on observability and reliability helped me modernize my skills. I now lead a team that practices SRE principles.',
    achievements: [
      'Migrated infrastructure to cloud with zero downtime',
      'Implemented comprehensive observability stack',
      'Reduced infrastructure costs by 40%',
      'Built CI/CD pipelines for 100+ services'
    ],
    communityImpact: 'Shared cost optimization strategies, helped 10+ engineers with cloud migrations',
    favoriteMemory: 'The observability workshop where I learned to build effective dashboards.',
    linkedin: 'https://linkedin.com/in/rahul-menon',
    github: 'https://github.com/rahul-menon',
    featured: false,
  },
  {
    id: '6',
    name: 'Kavya Nair',
    currentRole: 'SRE',
    currentCompany: 'Flipkart',
    avatar: '👤',
    journey: 'Fresh Graduate → Junior SRE → SRE',
    yearsInSRE: '2 years',
    location: 'Hyderabad',
    story: 'I joined the community right after college. The mentorship program paired me with experienced SREs who guided me through my first on-call rotations, incident responses, and SLO design. I couldn\'t have asked for a better start to my career.',
    achievements: [
      'Designed SLOs for 15+ microservices',
      'Reduced false alerts by 80%',
      'Improved service reliability to 99.9%',
      'Active contributor to community blog'
    ],
    communityImpact: 'Mentor for new grads, organized 2 beginner workshops, active in Discord',
    favoriteMemory: 'My first community meetup where I met my mentor who changed my career trajectory.',
    linkedin: 'https://linkedin.com/in/kavya-nair',
    github: 'https://github.com/kavya-nair',
    featured: false,
  },
  {
    id: '7',
    name: 'Arjun Krishnan',
    currentRole: 'Principal SRE',
    currentCompany: 'Uber',
    avatar: '👤',
    journey: 'SRE → Senior SRE → Staff SRE → Principal SRE',
    yearsInSRE: '9 years',
    location: 'Hyderabad',
    story: 'I\'ve been part of this community since its early days. Watching it grow from 20 members to 500+ has been incredible. The community has been my learning ground, networking hub, and source of inspiration. I\'ve made lifelong friends here.',
    achievements: [
      'Architected reliability systems for 1000+ services',
      'Published 10+ technical papers on distributed systems',
      'Keynote speaker at 5 international SRE conferences',
      'Mentored 50+ engineers throughout career'
    ],
    communityImpact: 'Community co-founder, organized 20+ events, mentored 30+ engineers',
    favoriteMemory: 'The first community meetup in 2018 where 15 of us gathered in a small co-working space.',
    linkedin: 'https://linkedin.com/in/arjun-krishnan',
    github: 'https://github.com/arjun-krishnan',
    featured: false,
  },
  {
    id: '8',
    name: 'Meera Rao',
    currentRole: 'Cloud Engineer',
    currentCompany: 'Thoughtworks',
    avatar: '👤',
    journey: 'Consultant → Cloud Engineer → SRE Consultant',
    yearsInSRE: '4 years',
    location: 'Hyderabad',
    story: 'As a consultant, I work with multiple clients. The community has been my knowledge base for learning new tools, patterns, and best practices. The diverse experiences shared here help me bring better solutions to my clients.',
    achievements: [
      'Helped 10+ companies adopt SRE practices',
      'Designed multi-cloud reliability strategies',
      'Published case studies on SRE transformations',
      'Certified in AWS, Azure, and GCP'
    ],
    communityImpact: 'Shared consulting experiences, helped startups adopt SRE, regular contributor',
    favoriteMemory: 'The multi-cloud reliability workshop where we discussed strategies for hybrid deployments.',
    linkedin: 'https://linkedin.com/in/meera-rao',
    github: 'https://github.com/meera-rao',
    featured: false,
  },
];

const CommunityStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={sreVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
              >
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Community Stories</span>
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Community Stories</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Real stories from real people. Discover how SRE Hyderabad community members
                have grown their careers, learned new skills, and made lasting connections.
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              >
                {[
                  { label: 'Members', value: '500+', icon: Users },
                  { label: 'Stories Shared', value: '100+', icon: MessageCircle },
                  { label: 'Mentorships', value: '200+', icon: GraduationCap },
                  { label: 'Career Growth', value: '85%', icon: TrendingUp },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-1">
                        <Counter value={stat.value} duration={2} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <Zap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Featured Community Stories</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {communityStories
                .filter(story => story.featured)
                .map((story) => (
                  <motion.div
                    key={story.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Story Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={story.id % 2 === 0 ? portrait1Img : portrait2Img}
                          alt={story.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="relative">
                        <div className="flex items-start gap-4 mb-4 mt-4">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl border-2 border-primary/20">
                            {story.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-2xl">{story.name}</CardTitle>
                              <Badge className="bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            </div>
                            <CardDescription className="text-base">
                              {story.currentRole} @ {story.currentCompany}
                            </CardDescription>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{story.yearsInSRE}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                <span>{story.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Career Journey
                          </h3>
                          <p className="text-muted-foreground text-sm">{story.journey}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-primary" />
                            My Story
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{story.story}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h3>
                          <ul className="space-y-2">
                            {story.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            Community Impact
                          </h3>
                          <p className="text-muted-foreground text-sm">{story.communityImpact}</p>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm">Favorite Community Memory</h3>
                          <p className="text-muted-foreground text-sm italic">"{story.favoriteMemory}"</p>
                        </div>
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                          <a
                            href={story.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={story.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* All Stories */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">More Community Stories</h2>
              <p className="text-muted-foreground">
                Discover how other members have grown through the community
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {communityStories
                .filter(story => !story.featured)
                .map((story) => (
                  <motion.div
                    key={story.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      {/* Story Image */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={story.id % 2 === 0 ? portrait2Img : portrait1Img}
                          alt={story.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl border-2 border-primary/20">
                            {story.avatar}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{story.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {story.currentRole} @ {story.currentCompany}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs mb-2">
                          {story.yearsInSRE} experience
                        </Badge>
                        <CardDescription className="line-clamp-3 text-sm">
                          {story.story}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="text-xs font-semibold text-foreground">Journey:</div>
                          <div className="text-xs text-muted-foreground">{story.journey}</div>
                        </div>
                        <div className="space-y-1 mb-4">
                          {story.achievements.slice(0, 2).map((achievement, index) => (
                            <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{achievement}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <a
                            href={story.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a
                            href={story.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                        <Button variant="outline" className="w-full group/btn">
                          Read Full Story
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Share Your Community Story
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have a story about how the SRE Hyderabad community has impacted your career?
                We'd love to hear from you and share your journey with others.
              </p>
              <Button className="btn-primary text-lg px-8 py-4">
                Share Your Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityStories;
