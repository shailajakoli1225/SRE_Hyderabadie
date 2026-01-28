import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ExternalLink, X, Sparkles, Award, TrendingUp, Users } from 'lucide-react';

// Preload images for better performance
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

interface Leader {
  id: string;
  name: string;
  title: string;
  description: string;
  detailedDescription: string;
  linkedin: string;
  image?: string;
  tagline?: string;
  testimonial?: string; // What they say about SRE Hyderabad
}

// Import leader images
import prasadImage from '@/assets/prasad  tataaverrty.jpeg';
import pavanBandaruImage from '@/assets/pavan kumar bandaru.jpeg';
import pavanBandaryImage from '@/assets/pavan kumar bandary.jpeg';
import kiranImage from '@/assets/kiran-kuchimanchi.jpeg';

const leaders: Leader[] = [
  {
    id: '1',
    name: 'Prasad Tataaverrty',
    title: 'Entrepreneur | Leadership Hiring Expert',
    description: 'Builder of Data & AI Talent Ecosystems. Expert in Global Leadership Hiring with 15+ years of experience.',
    detailedDescription: 'Prasad brings deep expertise in identifying and placing top-tier leadership talent in Data & AI spaces. His network spans Fortune 500 companies and emerging tech leaders across the globe. With a proven track record of building high-performing teams, Prasad has been instrumental in shaping the talent landscape of Hyderabad\'s tech ecosystem.',
    linkedin: 'https://www.linkedin.com/in/prasadtataverty/',
    image: prasadImage,
    tagline: 'Leadership Hiring Visionary',
    testimonial: 'SRE Hyderabad is revolutionizing how we approach reliability engineering in India. The community brings together the finest minds, creating an ecosystem where innovation thrives and careers flourish. It\'s a movement that will redefine India\'s tech leadership.',
  },
  {
    id: '2',
    name: 'Pavan Kumar Bandaru',
    title: 'GCC Leader | Strategic Operations',
    description: 'Experienced GCC leader driving strategic operations and global capability center excellence.',
    detailedDescription: 'Pavan brings extensive experience in scaling GCC operations, driving innovation, and building high-performing teams that deliver global impact from Hyderabad. His strategic vision has helped multiple organizations establish world-class capability centers, creating thousands of jobs and fostering innovation in the region.',
    linkedin: 'https://www.linkedin.com/in/pavankumarbandaru/',
    image: pavanBandaruImage,
    tagline: 'Strategic Operations Leader',
    testimonial: 'The SRE Hyderabad community is building the backbone of India\'s digital infrastructure. Their commitment to excellence, knowledge sharing, and mentorship is unparalleled. This community is the future of India\'s tech ecosystem.',
  },
  {
    id: '3',
    name: 'Kiran Kuchimanchi',
    title: 'Technology Leader | Innovation Driver',
    description: 'Technology leader focused on driving innovation and building world-class engineering capabilities.',
    detailedDescription: 'Kiran is a technology visionary who has consistently driven innovation in GCC environments, building teams and capabilities that shape the future of global technology delivery. With expertise spanning cloud infrastructure, AI/ML, and platform engineering, Kiran has been at the forefront of digital transformation initiatives.',
    linkedin: 'https://www.linkedin.com/in/kirankuchimanchi/',
    image: kiranImage,
    tagline: 'Innovation Catalyst',
    testimonial: 'SRE Hyderabad isn\'t just a community—it\'s a movement. It represents the culmination of years of expertise, passion, and a shared vision to make Hyderabad the global SRE capital. The energy and commitment here are truly inspiring.',
  },
  {
    id: '4',
    name: 'Pavan Kumar Bandaru',
    title: 'GCC Executive | Ecosystem Builder',
    description: 'GCC executive building strategic partnerships and driving ecosystem growth in Hyderabad.',
    detailedDescription: 'Pavan plays a crucial role in building strategic partnerships and driving the growth of Hyderabad\'s GCC ecosystem through collaboration and innovation. His efforts have connected hundreds of companies, facilitated knowledge sharing, and created a thriving community of technology leaders committed to excellence.',
    linkedin: 'https://www.linkedin.com/in/pavankumarbandaru/',
    image: pavanBandaryImage,
    tagline: 'Ecosystem Builder',
    testimonial: 'Being part of SRE Hyderabad means being part of something bigger than oneself. It\'s about collective growth, shared knowledge, and building world-class infrastructure together. This community truly makes a difference.',
  },
];

export function LeadersSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const animationRef = useRef<number>();

  // Preload images on mount
  useEffect(() => {
    const imageUrls = leaders
      .map((leader) => leader.image)
      .filter((img): img is string => Boolean(img));
    preloadImages(imageUrls);
  }, []);

  // Auto-scroll functionality - much faster speed
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isHovered || expandedCard) return; // Pause when hovering or card is expanded

      scrollContainer.scrollLeft += 3.5; // Much faster scroll speed

      // Reset to beginning when reaching the end (for seamless loop)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1) {
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
  }, [isHovered, expandedCard]);

  // Center card on hover with smooth animation
  useEffect(() => {
    if (hoveredCard && scrollRef.current) {
      const cardElement = cardRefs.current.get(hoveredCard);
      if (cardElement) {
        const container = scrollRef.current;
        const cardLeft = cardElement.offsetLeft;
        const cardWidth = cardElement.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        // Calculate center position - account for the slight scale increase
        const scaleFactor = 1.05; // Match the hover scale
        const scaledWidth = cardWidth * scaleFactor;
        const targetScroll = cardLeft - (containerWidth / 2) + (scaledWidth / 2);
        
        // Smooth scroll with easing
        const startScroll = container.scrollLeft;
        const distance = targetScroll - startScroll;
        const duration = 500; // 500ms for smooth centering
        let startTime: number | null = null;
        
        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const ease = (t: number) => t * (2 - t); // ease-out
          
          container.scrollLeft = startScroll + distance * ease(progress);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
    }
  }, [hoveredCard]);

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setIsHovered(false);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 dot-pattern opacity-10"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Core Team
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Meet Our Core Team of{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Visionary Leaders
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Our community brings together visionary leaders who are driving innovation, building ecosystems, 
            and shaping the future of Global Capability Centres from Hyderabad.
          </motion.p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div className="relative">

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleCardLeave}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {[...leaders, ...leaders].map((leader, index) => {
              const cardId = `${leader.id}-${index}`;
              const isExpanded = expandedCard === cardId;
              const isHovered = hoveredCard === cardId;
              
              return (
              <motion.div
                key={cardId}
                ref={(el) => {
                  if (el) cardRefs.current.set(cardId, el);
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                onMouseEnter={() => handleCardHover(cardId)}
                onMouseLeave={handleCardLeave}
                onClick={() => setExpandedCard(isExpanded ? null : cardId)}
                className="flex-shrink-0 w-[260px] md:w-[300px]"
                style={{
                  opacity: isExpanded ? 0 : 1,
                  pointerEvents: isExpanded ? 'none' : 'auto',
                }}
              >
                <motion.div
                  data-leader-card
                  className="relative h-full bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -8 : 0,
                    zIndex: isHovered ? 20 : 1,
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.16, 1, 0.3, 1],
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                  style={{
                    position: 'relative',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                  }}
                >
                  {/* Card Background Gradient with Animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-card via-card to-border/20"
                    animate={{
                      opacity: isHovered || isExpanded ? [0.3, 0.6, 0.3] : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Image Section */}
                  <div className="relative h-56 md:h-64 overflow-hidden bg-card">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        style={{
                          imageRendering: 'auto',
                          willChange: 'auto',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          WebkitTransform: 'translateZ(0)',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          width: '100%',
                          height: '100%',
                          minWidth: '100%',
                          minHeight: '100%',
                        }}
                        loading="eager"
                        decoding="async"
                        draggable={false}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/50 via-accent/40 to-secondary/50 flex items-center justify-center shadow-2xl border-4 border-white/20"
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                              },
                              scale: {
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              },
                            }}
                          >
                            <span className="text-4xl font-bold text-white drop-shadow-lg">
                              {leader.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient Overlay - Reduced opacity for better image clarity */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-card/50 via-card/10 to-transparent"
                      animate={{
                        opacity: isHovered ? 0.3 : 0.4,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Tagline Badge */}
                    {leader.tagline && (
                      <motion.div
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm border border-primary/50">
                          <Award className="w-3 h-3 text-white" />
                          <span className="text-xs font-semibold text-white">{leader.tagline}</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* LinkedIn Icon Overlay */}
                    <motion.a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 shadow-xl border-2 border-white/50"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          '0 4px 12px rgba(0,0,0,0.1)',
                          '0 8px 24px rgba(37, 99, 235, 0.4)',
                          '0 4px 12px rgba(0,0,0,0.1)',
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </motion.a>

                    {/* Decorative Animated Elements */}
                    <motion.div
                      className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 20, 0],
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-4 md:p-6 bg-card">
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
                      animate={{
                        color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                      }}
                    >
                      {leader.name}
                    </motion.h3>

                    <motion.p
                      className="text-xs md:text-sm text-primary font-semibold mb-2"
                    >
                      {leader.title}
                    </motion.p>

                    {/* Testimonial - appears on hover */}
                    <AnimatePresence mode="wait">
                      {isHovered && leader.testimonial ? (
                        <motion.div
                          key={`testimonial-${cardId}`}
                          initial={{ opacity: 0, y: 10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20">
                            <div className="flex items-start gap-2.5">
                              <span className="text-primary text-lg leading-none mt-0.5 font-bold">"</span>
                              <p className="text-xs text-muted-foreground leading-relaxed italic">
                                {leader.testimonial}
                              </p>
                              <span className="text-primary text-lg leading-none font-bold">"</span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.p
                          key={`description-${cardId}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2"
                        >
                          {leader.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* LinkedIn Button */}
                    <motion.a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-xs transition-all group/link"
                      whileHover={{ x: 3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:rotate-12 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Animated Glow Effect - Subtle on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                      boxShadow: isHovered
                        ? '0 0 20px 5px rgba(var(--primary-rgb), 0.2)'
                        : '0 0 0px 0px rgba(var(--primary-rgb), 0)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </motion.div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>

      {/* Modal Backdrop for Expanded Card */}
      <AnimatePresence>
        {expandedCard && (() => {
          const [leaderId] = expandedCard.split('-');
          const leader = leaders.find(l => l.id === leaderId);
          if (!leader) return null;
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-[45] pointer-events-auto flex items-center justify-center p-4"
              onClick={() => setExpandedCard(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[260px] md:w-[300px] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl z-[50]"
              >
                {/* Card Background Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-card via-card to-border/20"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Image Section - Larger and clearer */}
                <div className="relative h-72 md:h-80 overflow-hidden bg-card">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        imageRendering: 'high-quality',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                      }}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/50 via-accent/40 to-secondary/50 flex items-center justify-center shadow-2xl border-4 border-white/20"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: {
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            },
                            scale: {
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            },
                          }}
                        >
                          <span className="text-4xl font-bold text-white drop-shadow-lg">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  
                  {/* Minimal Gradient Overlay - Reduced opacity for clearer face */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
                  
                  {/* LinkedIn Icon Overlay */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 shadow-xl border-2 border-white/50 hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                </div>

                {/* Content Section - Simplified */}
                <div className="relative p-4 md:p-6 bg-card">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                    {leader.name}
                  </h3>

                  <p className="text-xs md:text-sm text-primary font-semibold mb-3">
                    {leader.title}
                  </p>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {leader.description}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-xs transition-all"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    opacity: 0.4,
                    boxShadow: '0 0 30px 8px rgba(var(--primary-rgb), 0.25)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.div>

              {/* Close Button */}
              <motion.div
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center cursor-pointer border border-border z-[55]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedCard(null);
                }}
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <style jsx={true}>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* High-quality image rendering */
        img {
          image-rendering: auto;
          image-rendering: -webkit-optimize-contrast;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
          image-rendering: auto;
        }
        
        /* GPU acceleration for smooth zoom */
        [data-leader-card] {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          will-change: transform;
        }
        
        /* Ensure images render at full quality */
        [data-leader-card] img {
          image-rendering: auto !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
        }
      `}</style>
    </section>
  );
}
