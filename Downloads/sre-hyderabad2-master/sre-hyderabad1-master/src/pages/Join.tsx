import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JoinSection } from '@/components/sections/JoinSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import sreVideo3 from '@/assets/sre3.mp4';
import { Counter } from '@/components/ui/Counter';

const Join = () => {
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
              <source src={sreVideo3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Color Gradient Overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-green/80 via-emerald/70 to-teal/80" />
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
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Join Us Today</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Join the
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  SRE Community
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Become part of Hyderabad's premier Site Reliability Engineering community.
                Connect, learn, and grow with industry experts and fellow engineers.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <Link to="/events">
                  <Button className="btn-primary text-lg px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white">
                    <UserPlus className="mr-2 w-5 h-5" />
                    Join Events
                  </Button>
                </Link>
                <Link to="/community">
                  <Button className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white">
                    <Zap className="mr-2 w-5 h-5" />
                    Explore Community
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <UserPlus className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="500+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Sparkles className="w-8 h-8 text-emerald-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="50+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Zap className="w-8 h-8 text-teal-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <JoinSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Join;

