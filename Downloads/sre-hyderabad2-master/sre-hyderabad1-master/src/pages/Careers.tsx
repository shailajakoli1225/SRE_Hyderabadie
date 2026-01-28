import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CareersSection } from '@/components/sections/CareersSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Rocket } from 'lucide-react';
import sreVideo1 from '@/assets/sre1.mp4';
import { Counter } from '@/components/ui/Counter';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Video */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            {/* Color Gradient Overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue/80 via-cyan/70 to-teal/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
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
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Career Opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Build Your
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                  SRE Career
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Discover exclusive job opportunities, connect with top companies,
                and accelerate your career in Site Reliability Engineering.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Briefcase className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="200+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Job Openings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <TrendingUp className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="85%" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Rocket className="w-8 h-8 text-teal-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="50+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Companies</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CareersSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
