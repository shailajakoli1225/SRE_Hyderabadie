import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Sparkles, Quote, Target, Zap, Heart, ArrowRight, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vinayProfileImg from '@/assets/vinay-profile.jpg';

export function FounderSection() {
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
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

        <motion.div
        className="section-container relative z-10"
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Meet Our Founder
              </span>
          </motion.div>

            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
              The Visionary Behind{' '}
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
                SRE @ Hyderabad
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative group/image">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl group-hover/image:from-primary/50 group-hover/image:via-accent/50 group-hover/image:to-primary/50 transition-all duration-500"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.95, 1.1, 0.95],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Image */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Inner Image Container */}
                  <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20">
                    <motion.img
                      src={vinayProfileImg}
                      alt="Vinay Gattu - Founder of SRE @ Hyderabad"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="high"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover/image:opacity-100 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                        boxShadow: '0 0 60px 30px hsl(var(--primary) / 0.4)',
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Animated Border on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover/image:opacity-100 pointer-events-none"
                      style={{
                        background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                        padding: '4px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 gap-4 mt-12"
              >
                {[
                  { label: 'Years Experience', value: '19+', icon: Target },
                  { label: 'Community Members', value: '500+', icon: Heart },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.08, y: -8 }}
                      className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border/50 shadow-lg overflow-hidden group/card"
                    >
                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))',
                          backgroundSize: '400% 400%',
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Rotating Border Glow */}
                      <motion.div
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover/card:opacity-100 pointer-events-none"
                        style={{
                          background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                          filter: 'blur(6px)',
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <Icon className="w-6 h-6 text-primary mb-3" />
                        <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                      
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
                          boxShadow: '0 0 40px 20px hsl(var(--primary) / 0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Name & Title */}
              <div>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                >
                  Vinay Gattu
                </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <p className="text-xl md:text-2xl font-semibold text-primary">
                    Sr. Principal SRE | Director of Software Engineering @ Optum
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Senior Principal Site Reliability Engineer and Engineering Director with 19+ years of experience building resilient, scalable, and human-centered systems. Founder of SRE@Hyderabadi, a thriving community advancing reliability culture and engineering excellence.
                  </p>
                </motion.div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
                <p className="text-xl md:text-2xl font-semibold text-foreground italic pl-8">
                  "Simplify the complex. Automate the routine. Elevate the human."
                </p>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Mission & Vision
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe SRE isn't just about uptime — it's about mindset, culture, and impact. My mission is to simplify complexity, empower engineers through automation, and keep the human element at the center of technology. By blending the dynamic spirit of Hyderabad with the structured discipline of Reliability Engineering, I strive to create ecosystems where builders thrive, systems scale, and innovation remains sustainable.
                </p>
              </motion.div>

              {/* Key Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Target, text: 'Simplify Complexity' },
                  { icon: Zap, text: 'Automate Routine' },
                  { icon: Heart, text: 'Elevate Human' },
                  { icon: Sparkles, text: 'Drive Innovation' },
                ].map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.text}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="relative flex items-center gap-3 p-4 rounded-xl bg-card/50 border-2 border-border/50 overflow-hidden group/value"
                    >
                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/value:opacity-100 pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)))',
                          backgroundSize: '300% 300%',
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-3">
                        <motion.div 
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/value:bg-primary/20 transition-colors"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </motion.div>
                        <span className="text-sm font-medium text-foreground">{value.text}</span>
                      </div>
                      
                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/value:opacity-100 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
                          boxShadow: '0 0 30px 15px hsl(var(--primary) / 0.2)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="pt-4"
              >
                <a
                  href="https://www.linkedin.com/in/vinaygattu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary group/btn w-full md:w-auto">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
            </div>
          </motion.div>
    </section>
  );
}
