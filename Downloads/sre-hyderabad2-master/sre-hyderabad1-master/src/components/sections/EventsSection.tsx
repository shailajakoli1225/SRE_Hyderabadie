import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import sreVideo2 from '@/assets/sre2.mp4';
import workshopImg from '@/assets/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-work-with-laptops-together-using-various-gadgets-having-conversation.jpg';
import conferenceImg from '@/assets/creative-designers-team-working-project (1).jpg';
import techTalkImg from '@/assets/person-using-tablet.jpg';


export function EventsSection() {

  return (
    <section id="events" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ willChange: 'auto' }}
        >
          <source src={sreVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-card/80" />
      </div>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Learn together, grow together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            From hands-on workshops to insightful talks, our events bring the best of 
            SRE knowledge directly to Hyderabad. Join us for monthly meetups, quarterly 
            workshops, and annual conferences featuring industry leaders.
          </p>
          {/* Event Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">25+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">2,500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Speakers</div>
            </div>
          </div>
        </motion.div>

        {/* Visual Showcase */}
        <div className="space-y-12">
          {/* Featured Event Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border">
              {/* Background Video/Image */}
              <div className="absolute inset-0">
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
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 left-4 sm:top-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-6 sm:bottom-16 sm:left-8 md:bottom-20 md:left-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-success/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-success" />
              </motion.div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center">
                <div className="section-container">
                  <div className="max-w-2xl px-4 sm:px-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
                    >
                      <motion.span
                        className="w-3 h-3 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-sm font-medium text-primary">Next Event</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
                    >
                      SRE Deep Dive: Incident Management at Scale
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl"
                    >
                      Join us for an immersive session where industry veterans share real production incidents,
                      post-mortem analysis techniques, and battle-tested frameworks for building resilient systems.
                    </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8"
        >
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm">Feb 15, 2026</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm">Microsoft Campus, Hyderabad</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm">Priya Sharma, Rakesh Kumar</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
                      <Link to="/join">
                        <Button className="btn-primary flex items-center">
                          Register Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to="/events">
                        <Button className="btn-secondary">
                          View All Events
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

            </div>
        </motion.div>

          {/* Event Gallery Grid */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {[
              {
                id: '2',
                title: 'Kubernetes SRE Practices Workshop',
                image: workshopImg,
                date: 'March 8, 2026',
                location: 'T-Hub 2.0',
                description: 'Master advanced Kubernetes SRE practices with hands-on exercises',
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                id: '3',
                title: 'Platform Engineering Meetup',
                image: conferenceImg,
                date: 'March 22, 2026',
                location: 'Google Office',
                description: 'Building Internal Developer Platforms that scale',
                gradient: 'from-green-500/20 to-emerald-500/20',
              },
              {
                id: '4',
                title: 'Chaos Engineering in Production',
                image: techTalkImg,
                date: 'December 10, 2025',
                location: 'Amazon Campus',
                description: 'Live demonstrations using industry-leading chaos tools',
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
            ].map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-border"
              >
                {/* Image */}
                      <motion.img
                  src={event.image}
                        alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} via-transparent to-transparent`} />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                      >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {event.title}
                    </h4>

                    <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/80 text-xs">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>

                      <Link to="/events">
                        <motion.button 
                          className="text-white/80 hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                  </div>

                </motion.div>
              ))}
            </motion.div>

              </div>
      </div>
    </section>
  );
}
