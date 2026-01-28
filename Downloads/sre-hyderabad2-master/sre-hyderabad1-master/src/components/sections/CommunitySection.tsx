import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, X, Users, Award, MessageSquare, Briefcase } from 'lucide-react';
import { members } from '@/data/siteData';
import type { Member } from '@/data/siteData';
import networkingImg from '@/assets/people-business-connection-social-network-communication.jpg';
import teamMeetingImg from '@/assets/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-work-with-laptops-together-using-various-gadgets-having-conversation.jpg';
import sreHyderabadImg from '@/assets/sre hyderabad.jpeg';

export function CommunitySection() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isHovered) return; // Pause when hovering

      scrollContainer.scrollLeft += 1; // Slow, smooth scroll

      // Reset to beginning when reaching the end (for seamless loop)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section id="community" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={sreHyderabadImg}
          alt="SRE Hyderabad Community"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="section-container relative">
        {/* Enhanced Section Header */}
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
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Network</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Meet our network of <span className="gradient-text">SREs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Connect with Hyderabad's most experienced Site Reliability Engineers.
            Our community brings together professionals from FAANG companies, startups,
            and everything in between, creating a powerful network for knowledge sharing
            and career growth in the world of infrastructure reliability.
          </motion.p>

          {/* Enhanced Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-accent" />
            </div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Companies</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-success" />
            </div>
              <div className="text-3xl font-bold gradient-text">30+</div>
              <div className="text-sm text-muted-foreground mt-1">Mentors</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-cyan-500" />
            </div>
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground mt-1">Events Hosted</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Community Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-border cursor-pointer"
            >
            <motion.img
              src={networkingImg}
              alt="SRE community networking"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Professional Networking</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Connect with SRE professionals from top companies like Google, Microsoft, Amazon, and Uber.
                  Build relationships that last beyond the event and open doors to new opportunities.
                </p>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Active networking community
                </div>
              </motion.div>
            </div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 70%)',
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-border cursor-pointer"
            >
            <motion.img
              src={teamMeetingImg}
              alt="SRE team collaboration"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Collaborative Learning</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  Work together on real-world SRE challenges. From incident simulations to architecture reviews,
                  learn by doing alongside experienced engineers in hands-on workshops.
                </p>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Hands-on learning experiences
                </div>
              </motion.div>
            </div>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at center, hsl(var(--accent) / 0.1), transparent 70%)',
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>

        {/* Auto-Scrolling Member Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Auto-Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredCard(null);
            }}
          >
            {/* Duplicate members for seamless infinite scroll */}
            {[...members, ...members, ...members].map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: hoveredCard === member.id ? 1.15 : 1.05,
                  y: -12,
                  zIndex: hoveredCard === member.id ? 50 : 10,
                  rotateY: hoveredCard === member.id ? 5 : 0,
                }}
                onHoverStart={() => setHoveredCard(member.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="flex-shrink-0 w-[280px] sm:w-72 h-[300px] sm:h-[320px] relative"
                style={{ perspective: '1000px' }}
              >
                <motion.button
                  onClick={() => setSelectedMember(member)}
                  className="w-full text-left group h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col relative overflow-hidden">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Status Indicator */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary z-10"
                    />

                    {/* Avatar with Enhanced Design */}
                    <motion.div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border-2 border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0 z-10 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {member.openToWork && (
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              '0 0 0 0 hsl(var(--success) / 0.6)',
                              '0 0 0 10px hsl(var(--success) / 0)',
                              '0 0 0 0 hsl(var(--success) / 0)',
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success border-3 border-card flex items-center justify-center"
                        >
                          <Briefcase className="w-3 h-3 text-white" />
                        </motion.div>
                      )}

                      {/* Avatar Glow Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Enhanced Info Section */}
                    <div className="text-center mb-3 sm:mb-4 flex-shrink-0">
                      <motion.h3
                        className="font-bold text-foreground group-hover:text-primary transition-colors text-base sm:text-lg mb-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.name}
                      </motion.h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {member.company}
                      </p>
                    </div>

                    {/* Open to Work Badge */}
                    <div className="mb-4 flex-shrink-0 min-h-[28px] flex justify-center">
                      {member.openToWork && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          className="open-to-work px-3 py-1"
                        >
                          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                          Available for opportunities
                        </motion.div>
                      )}
                    </div>

                    {/* Enhanced Skills Display */}
                    <div className="flex flex-wrap gap-2 mt-auto justify-center z-10">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            backgroundColor: 'hsl(var(--primary))',
                            color: 'hsl(var(--primary-foreground))',
                          }}
                          className="skill-chip text-xs px-2 py-1"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {member.skills.length > 3 && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="skill-chip text-xs px-2 py-1"
                        >
                          +{member.skills.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </div>
                </motion.button>

                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${hoveredCard === member.id ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--primary) / 0.1)'}, transparent)`,
                    boxShadow: hoveredCard === member.id ? '0 25px 50px -12px hsl(var(--primary) / 0.4)' : 'none',
                  }}
                  animate={{
                    opacity: hoveredCard === member.id ? 1 : 0,
                    scale: hoveredCard === member.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Particles on Hover */}
                {hoveredCard === member.id && (
                  <>
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 8, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent rounded-full"
                      animate={{
                        y: [0, 12, 0],
                        x: [0, -6, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-2 w-1 h-1 bg-success rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
              <span>Auto-scrolling • Hover to explore</span>
              <motion.div
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ←
              </motion.div>
        </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md mx-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Enhanced Avatar */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                  <img
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                  </motion.div>

                  {selectedMember.openToWork && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-success border-4 border-card flex items-center justify-center shadow-lg"
                    >
                      <Briefcase className="w-4 h-4 text-white" />
                    </motion.div>
                  )}

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent/20"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </motion.div>

              {/* Enhanced Info */}
              <motion.div
                className="text-center mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {selectedMember.name}
                </motion.h3>
                <p className="text-muted-foreground font-medium text-base sm:text-lg mb-1">
                  {selectedMember.role}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/80">
                  {selectedMember.company}
                </p>

                {selectedMember.openToWork && (
                  <motion.div
                    className="inline-flex mt-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="open-to-work px-4 py-2">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      Available for new opportunities
                    </span>
                  </motion.div>
                )}
              </motion.div>

              {/* Enhanced Skills Display */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
                  Expertise & Skills
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedMember.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        backgroundColor: 'hsl(var(--primary))',
                        color: 'hsl(var(--primary-foreground))',
                      }}
                      className="skill-chip px-3 py-2 text-sm font-medium"
                    >
                    {skill}
                    </motion.span>
                ))}
              </div>
              </motion.div>

              {/* Enhanced LinkedIn CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-3 text-lg py-4 relative overflow-hidden group"
              >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Linkedin className="w-5 h-5 relative z-10" />
                  <span className="relative z-10 font-semibold">Connect on LinkedIn</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
              </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
