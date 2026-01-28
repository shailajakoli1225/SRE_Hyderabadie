import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, GitBranch, Server, TrendingUp, type LucideIcon } from 'lucide-react';
import { features } from '@/data/siteData';
import sreVideo1 from '@/assets/sre1.mp4';
import teamCollaborationImg from '@/assets/creative-designers-team-working-project (1).jpg';
import businessMeetingImg from '@/assets/people-meeting-seminar-office-concept.jpg';
import { ShimmerEffect } from '@/components/animations/ShimmerEffect';
import { Counter } from '@/components/ui/Counter';

const iconMap: Record<string, LucideIcon> = {
  Users,
  GitBranch,
  Server,
  TrendingUp,
};

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0 dot-pattern opacity-20"
        style={{ opacity }}
      />
      
      <motion.div 
        className="section-container relative"
        style={{ opacity, y }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            What makes SRE @ Hyderabad unique
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another tech community. We're a movement of engineers 
            who believe in learning from real production systems.
          </p>
        </motion.div>

        {/* Feature Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border card-hover relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <ShimmerEffect />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <motion.div
                      animate={{
                        filter: [
                          'drop-shadow(0 0 0px hsl(var(--primary)))',
                          'drop-shadow(0 0 8px hsl(var(--primary)))',
                          'drop-shadow(0 0 0px hsl(var(--primary)))',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-border group"
            >
            <motion.img
              src={teamCollaborationImg}
              alt="SRE team collaboration"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.6 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">Engineers working together to solve complex reliability challenges</p>
            </motion.div>
          </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-border group"
            >
            <motion.img
              src={businessMeetingImg}
              alt="SRE community meeting"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.6 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Knowledge Sharing</h3>
              <p className="text-sm text-muted-foreground">Monthly meetups and workshops fostering continuous learning</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Built by Engineers - New Modern Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Side - Content Cards */}
            <div className="space-y-6">
              {/* Main Content Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-cyan/10 border-2 border-primary/20 overflow-hidden group"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                    <span className="text-sm font-semibold text-primary">Engineer-Led</span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
                  >
                    Built by engineers
                    <br />
                    <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">
                      who've been in the trenches
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
                  >
                    Born from late-night incident calls, post-mortems, and the shared experience 
                    of keeping systems running at scale. We understand the challenges because we've lived them.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    Since 2018, we've grown from a small group of 15 engineers meeting in coffee shops 
                    to a thriving community of 500+ SREs from companies like Google, Microsoft, Amazon, 
                    and Uber. Our mission remains the same: share knowledge, learn from failures, and 
                    build careers together.
                  </motion.p>
                </div>
              </motion.div>

              {/* Stats Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
                {[
                  { value: '2018', label: 'Founded', color: 'from-blue-500 to-cyan-500' },
                  { value: '15', label: 'Started With', color: 'from-purple-500 to-pink-500' },
                  { value: '500+', label: 'Members Now', color: 'from-green-500 to-emerald-500' },
                  { value: '100+', label: 'Companies', color: 'from-orange-500 to-red-500' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden group cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative z-10">
                      <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                        <Counter value={stat.value} duration={2} />
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Video with Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-border/50 shadow-xl"
            >
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
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-accent/60 to-cyan/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent" />

              {/* Features List Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 sm:space-y-3 md:space-y-4"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">What We Offer</h3>
                  {[
                    { icon: '📅', text: 'Monthly meetups with hands-on workshops' },
                    { icon: '💬', text: 'Private Slack community with 500+ active members' },
                    { icon: '💼', text: 'Exclusive job board with 50+ companies' },
                    { icon: '🤝', text: 'Mentorship programs for career growth' },
                    { icon: '⚡', text: 'Quarterly hackathons and challenges' },
                    { icon: '🎥', text: 'Access to recorded sessions and deep-dives' },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl">{feature.icon}</div>
                      <span className="text-white font-medium flex-1 text-xs sm:text-sm md:text-base">{feature.text}</span>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-white/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-lg"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
