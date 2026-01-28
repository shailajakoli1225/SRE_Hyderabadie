import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, User, Building2, TrendingUp, Award, Target, CheckCircle, Star, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { jobs, members } from '@/data/siteData';
import { AutoScrollContainer } from '@/components/ui/AutoScrollContainer';
import professionalTeamImg from '@/assets/portrait-professional-business-people-working-together.jpg';
import growthImg from '@/assets/happiness-power-smile-opportunity-graph-growth.jpg';
import teamCollaborationImg from '@/assets/creative-designers-team-working-project (1).jpg';
import networkingImg from '@/assets/people-business-connection-social-network-communication.jpg';
import meetingImg from '@/assets/people-meeting-seminar-office-concept.jpg';
import { Counter } from '@/components/ui/Counter';

export function CareersSection() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'talent'>('jobs');
  const openToWorkMembers = members?.filter(m => m.openToWork) || [];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <section id="careers" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-card to-secondary/20" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative">
        {/* Enhanced Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Career Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Build your <span className="gradient-text">SRE career</span> in Hyderabad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Join Hyderabad's premier SRE community and unlock career opportunities with top tech companies.
            Whether you're looking for your next role or seeking exceptional talent, we connect the best
            SRE professionals with leading organizations in India's tech capital.
          </motion.p>

          {/* Enhanced Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text">
                <Counter value="50+" duration={2} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Companies Hiring</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold gradient-text">
                <Counter value="200+" duration={2} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Jobs Posted</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="text-3xl font-bold gradient-text">
                <Counter value="85%" duration={2} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Placement Rate</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <div className="text-3xl font-bold gradient-text">
                <Counter value="500+" duration={2} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Career Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-80 rounded-3xl overflow-hidden border border-border cursor-pointer"
          >
            <motion.img
              src={professionalTeamImg}
              alt="Professional SRE team"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <motion.div
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Career Growth
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-white/90 text-sm leading-relaxed"
              >
                Join top SRE teams from Google, Microsoft, Amazon, and Uber. Accelerate your career with mentorship,
                skill development, and networking opportunities that open doors to senior roles.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-80 rounded-3xl overflow-hidden border border-border cursor-pointer"
          >
            <motion.img
              src={growthImg}
              alt="Career opportunities"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <motion.div
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Exclusive Opportunities
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-white/90 text-sm leading-relaxed"
              >
                Access 200+ exclusive SRE job openings in Hyderabad. Our job board connects you directly
                with hiring managers from top companies actively seeking SRE talent.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-80 rounded-3xl overflow-hidden border border-border cursor-pointer"
          >
            <motion.img
              src={teamCollaborationImg}
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <motion.div
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Award className="w-6 h-6 text-white" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Professional Network
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-white/90 text-sm leading-relaxed"
              >
                Connect with 500+ SRE professionals, mentors, and industry leaders. Build relationships
                that advance your career and open doors to opportunities you never knew existed.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Choose SRE Careers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary/50 to-card border border-border"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                Your career journey starts here
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground mb-8 leading-relaxed"
              >
                Hyderabad is India's fastest-growing tech hub, and SRE roles are in high demand.
                Our community connects you with the best opportunities, mentors, and resources
                to build a successful career in Site Reliability Engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                {[
                  'Direct access to hiring managers from top tech companies',
                  'Mentorship programs with senior SREs from FAANG companies',
                  'Exclusive job board with 200+ verified SRE positions',
                  'Career workshops and interview preparation sessions',
                  'Networking events with industry leaders',
                  'Salary negotiation guidance and career counseling',
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden border border-border shadow-xl"
            >
              <img
                src={networkingImg}
                alt="SRE networking and career growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-2xl font-bold gradient-text">85%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <div className="text-2xl font-bold gradient-text">200+</div>
                <div className="text-xs text-muted-foreground">Jobs Available</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-secondary">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'jobs'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              SRE Jobs
            </button>
            <button
              onClick={() => setActiveTab('talent')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'talent'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              Open-to-Work Talent
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'jobs' ? (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <AutoScrollContainer scrollSpeed={40} containerHeight="max-h-[700px]">
                {jobs && jobs.length > 0 ? jobs.map((job, index) => {
                const companyColors: Record<string, string> = {
                  'Google': 'from-blue-500/20 to-red-500/20',
                  'Microsoft': 'from-blue-600/20 to-orange-500/20',
                  'Amazon': 'from-orange-500/20 to-yellow-500/20',
                  'Uber': 'from-gray-900/20 to-gray-700/20',
                  'Razorpay': 'from-blue-600/20 to-indigo-600/20',
                  'PhonePe': 'from-purple-500/20 to-pink-500/20',
                  'Atlassian': 'from-blue-500/20 to-blue-700/20',
                  'Flipkart': 'from-blue-500/20 to-yellow-500/20',
                };
                const gradient = companyColors[job.company] || 'from-primary/20 to-accent/20';

                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group"
                  >
                    <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-3">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Building2 className="w-7 h-7 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                {job.title}
                              </h3>
                              <p className="text-base font-medium text-muted-foreground mb-2">{job.company}</p>
                              <p className="text-sm text-muted-foreground/80">
                                {job.company === 'Google' && 'Work on infrastructure that serves billions of users worldwide. Build scalable systems with cutting-edge technology.'}
                                {job.company === 'Microsoft' && 'Lead reliability initiatives for Azure cloud services. Collaborate with world-class engineers on mission-critical systems.'}
                                {job.company === 'Amazon' && 'Ensure 99.99% uptime for AWS services. Work on distributed systems at unprecedented scale.'}
                                {job.company === 'Uber' && 'Maintain reliability for ride-sharing platform serving millions globally. Solve complex distributed systems challenges.'}
                                {job.company === 'Razorpay' && 'Build payment infrastructure that processes billions in transactions. Work on high-availability financial systems.'}
                                {job.company === 'PhonePe' && 'Ensure reliability for India\'s leading digital payments platform. Work on systems handling millions of transactions daily.'}
                                {job.company === 'Atlassian' && 'Maintain reliability for collaboration tools used by millions. Work remotely with a global team.'}
                                {job.company === 'Flipkart' && 'Build and maintain e-commerce infrastructure at scale. Work on systems handling peak traffic during sales events.'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-3 mt-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground border border-border/50">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground border border-border/50">
                              <Briefcase className="w-4 h-4" />
                              {job.experience}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground border border-border/50">
                              <Clock className="w-4 h-4" />
                              {formatDate(job.postedDate)}
                            </span>
                            <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20">
                              {job.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          {job.applyUrl && job.applyUrl !== '#' ? (
                            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                              <Button className="btn-primary group/btn w-full md:w-auto">
                                Apply Now
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </a>
                          ) : (
                            <Link to="/join">
                              <Button className="btn-primary group/btn w-full md:w-auto">
                                Apply Now
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
                }) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No jobs available at the moment. Check back soon!</p>
                  </div>
                )}
              </AutoScrollContainer>

              {/* Post Job CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center pt-8"
              >
                <p className="text-muted-foreground mb-4">
                  Hiring SREs in Hyderabad? Post your job for free.
                </p>
                <Link to="/join">
                  <Button className="btn-primary">
                    Post a Job
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="talent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {openToWorkMembers && openToWorkMembers.length > 0 ? openToWorkMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-success/30 transition-all">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success border-2 border-background flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-success-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.role} @ {member.company}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span key={skill} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                    >
                      View Profile
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No open-to-work members at the moment.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from SRE professionals who found their dream roles through our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Senior SRE @ Microsoft',
                story: 'Found my current role through the community job board. The mentorship I received helped me negotiate a 40% salary increase.',
                image: professionalTeamImg,
              },
              {
                name: 'Anjali Patel',
                role: 'Platform Engineer @ Google',
                story: 'The networking events connected me with the right people. Within 3 months, I had multiple offers from top companies.',
                image: meetingImg,
              },
              {
                name: 'Vikram Singh',
                role: 'SRE Manager @ Amazon',
                story: 'The community helped me transition from DevOps to SRE. The career guidance was invaluable in my journey.',
                image: teamCollaborationImg,
              },
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative h-96 rounded-2xl overflow-hidden border border-border"
              >
                <motion.img
                  src={story.image}
                  alt={story.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Star className="w-6 h-6 text-primary" />
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="text-white/90 text-sm mb-4 leading-relaxed italic"
                  >
                    "{story.story}"
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <h4 className="font-bold text-white mb-1">{story.name}</h4>
                    <p className="text-white/80 text-sm">{story.role}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-96 rounded-3xl overflow-hidden border border-border"
        >
          <div className="absolute inset-0">
            <img
              src={networkingImg}
              alt="Join SRE community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="section-container">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
                >
                  <Rocket className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Get Started Today</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  Ready to advance your SRE career?
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-muted-foreground mb-8"
                >
                  Join 500+ SRE professionals in Hyderabad. Get exclusive access to job opportunities,
                  mentorship programs, and networking events that will accelerate your career.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/join">
                    <Button className="btn-primary text-lg px-8 py-4 flex items-center">
                      Join Community
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/careers">
                    <Button className="btn-secondary text-lg px-8 py-4">
                      Browse Jobs
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
