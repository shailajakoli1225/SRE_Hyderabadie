import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { ContactForm } from '@/components/sections/ContactForm';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Network } from 'lucide-react';
import sreVideo2 from '@/assets/sre2.mp4';
import { Counter } from '@/components/ui/Counter';

const Community = () => {
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
              <source src={sreVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Color Gradient Overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/80 via-pink/70 to-orange/80" />
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
                <Heart className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Our Community</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Connect with
                <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300 bg-clip-text text-transparent">
                  SRE Professionals
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Join a vibrant community of Site Reliability Engineers, share experiences,
                learn from peers, and grow your career alongside industry leaders.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Users className="w-8 h-8 text-pink-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="500+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Network className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="200+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Connections</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Heart className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="100%" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Supportive</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CommunitySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Community;

