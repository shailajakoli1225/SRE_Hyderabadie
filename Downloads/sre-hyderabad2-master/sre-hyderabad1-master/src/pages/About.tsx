import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { LeadersSection } from '@/components/sections/LeadersSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';
import sreVideo3 from '@/assets/sre3.mp4';
import { Counter } from '@/components/ui/Counter';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Video */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={sreVideo3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Reduced Color Gradient Overlay for subtle better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
          
          {/* Content Overlay */}
          <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Users className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">About Us</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
              >
                Building the Future of
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Site Reliability Engineering
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              >
                We're a community of engineers dedicated to learning from real production systems,
                sharing knowledge, and advancing the practice of reliability engineering in Hyderabad.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    <Counter value="500+" duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">Active Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    <Counter value="50+" duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">Events Hosted</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    <Counter value="100+" duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">Companies</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <FounderSection />
        <LeadersSection />
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;

