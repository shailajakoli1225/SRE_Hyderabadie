import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { events } from '@/data/siteData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { SREStoriesSection } from '@/components/sections/SREStoriesSection';
import { Link } from 'react-router-dom';
import sreVideo2 from '@/assets/sre2.mp4';
import upcomingEventImg from '@/assets/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-work-with-laptops-together-using-various-gadgets-having-conversation.jpg';
import pastEventImg from '@/assets/people-business-connection-social-network-communication.jpg';
import collaborationImg from '@/assets/portrait-professional-business-people-working-together.jpg';
import startupImg from '@/assets/3d-flat-vector-as-marketing-team-collaborating-product-launch-concept-as-vector-illustration.jpg';
import networkingImg from '@/assets/people-holding-linkedin-logo.jpg';
import careerImg from '@/assets/happiness-power-smile-opportunity-graph-growth.jpg';
import donationImg from '@/assets/donation-community-service-volunteer-support.jpg';
import teamImg from '@/assets/creative-designers-team-working-project (1).jpg';
import { Counter } from '@/components/ui/Counter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Smart image selector based on event title and type
const getEventImage = (title: string, eventType: 'upcoming' | 'past', index: number): string => {
  const lowerTitle = title.toLowerCase();
  
  // Startup-related events
  if (lowerTitle.includes('startup') || lowerTitle.includes('pitch')) {
    return startupImg;
  }
  
  // Business/Economics/ROI events
  if (lowerTitle.includes('business') || lowerTitle.includes('economics') || lowerTitle.includes('roi')) {
    return teamImg;
  }
  
  // Career/Growth/Mentorship events
  if (lowerTitle.includes('career') || lowerTitle.includes('growth') || lowerTitle.includes('leadership') || lowerTitle.includes('mentorship')) {
    return careerImg;
  }
  
  // Networking/Connection events
  if (lowerTitle.includes('networking') || lowerTitle.includes('round table') || lowerTitle.includes('brunch') || lowerTitle.includes('connect')) {
    return networkingImg;
  }
  
  // Community/Open Source events
  if (lowerTitle.includes('open source') || lowerTitle.includes('community') || lowerTitle.includes('women in')) {
    return donationImg;
  }
  
  // Technical workshops and deep dives
  if (lowerTitle.includes('workshop') || lowerTitle.includes('deep dive') || lowerTitle.includes('observability') || lowerTitle.includes('kubernetes')) {
    return upcomingEventImg;
  }
  
  // Default alternating pattern
  return eventType === 'upcoming' 
    ? (index % 2 === 0 ? collaborationImg : upcomingEventImg)
    : (index % 2 === 0 ? pastEventImg : collaborationImg);
};

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const upcomingEvents = events.filter(e => e.type === 'upcoming');
  const pastEvents = events.filter(e => e.type === 'past');

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.toLocaleDateString('en-US', { day: 'numeric' }),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.toLocaleDateString('en-US', { year: 'numeric' }),
      full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
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
            {/* Enhanced Color Gradient Overlay for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange/80 via-red/70 to-pink/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

          <div className="section-container relative">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
              >
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Events Calendar</span>
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span>Learn, Connect, </span>
                <span className="bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">Grow</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                From hands-on workshops to insightful talks, our events bring the best of 
                SRE knowledge directly to Hyderabad. Join us and level up your skills.
              </p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-12"
              >
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">
                    <Counter value={upcomingEvents.length} duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Upcoming</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">
                    <Counter value={pastEvents.length} duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Past Events</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">
                    <Counter value="25+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Total Events</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Events List Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-12"
            >
              <div className="inline-flex p-1.5 rounded-2xl bg-secondary/50 border border-border">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`relative px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === 'upcoming' && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <CalendarPlus className="w-4 h-4" />
                    Upcoming ({upcomingEvents.length})
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`relative px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === 'past' && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Past ({pastEvents.length})
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Events Grid */}
            <AnimatePresence mode="wait">
              {activeTab === 'upcoming' ? (
                <motion.div
                  key="upcoming"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  className="grid gap-6"
                >
                  {upcomingEvents.map((event, index) => {
                    const date = formatDate(event.date);
                    return (
                      <motion.div
                        key={event.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        className="group"
                      >
                        <div className="relative rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                          {/* Event Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={getEventImage(event.title, 'upcoming', index)}
                              alt={event.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-20 h-20 rounded-2xl bg-primary/90 backdrop-blur-sm border border-primary/20 flex flex-col items-center justify-center shadow-lg"
                              >
                                <span className="text-2xl font-bold text-primary-foreground">{date.day}</span>
                                <span className="text-xs font-medium text-primary-foreground/80">{date.month}</span>
                              </motion.div>
                            </div>
                          </div>
                          
                          <div className="relative p-6 md:p-8">
                          <div className="relative flex flex-col gap-6">

                            {/* Content */}
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 max-w-2xl">
                                {event.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex flex-wrap gap-4 mb-4">
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground"
                                >
                                  <Clock className="w-4 h-4 text-primary" />
                                  {event.time}
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground"
                                >
                                  <MapPin className="w-4 h-4 text-primary" />
                                  {event.location}
                                </motion.div>
                                {event.speakers && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground"
                                  >
                                    <Users className="w-4 h-4 text-primary" />
                                    {event.speakers.join(', ')}
                                  </motion.div>
                                )}
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="flex items-center">
                              <Link to="/join">
                                <Button className="btn-primary group/btn">
                                  Register Now
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="past"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {pastEvents.map((event, index) => {
                    const date = formatDate(event.date);
                    return (
                      <motion.div
                        key={event.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <div className="h-full rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 overflow-hidden">
                          {/* Event Image */}
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={getEventImage(event.title, 'past', index)}
                              alt={event.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                            <div className="absolute top-3 left-3">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/90 backdrop-blur-sm text-muted-foreground text-sm font-medium">
                                <Calendar className="w-4 h-4" />
                                {date.full}
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-6">
                          {/* Title */}
                          <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground mb-4">
                            {event.description}
                          </p>

                          {/* Resources */}
                          {event.resources && (
                            <div className="flex flex-wrap gap-2">
                              {event.resources.map((resource) => (
                                <motion.a
                                  key={resource.label}
                                  href={resource.url}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  {resource.label}
                                </motion.a>
                              ))}
                            </div>
                          )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* SRE Stories Section */}
        <SREStoriesSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to speak at our events?
              </h2>
              <p className="text-muted-foreground mb-8">
                Share your expertise with Hyderabad's SRE community. We're always looking for 
                passionate engineers to share their war stories and knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  Submit a Talk Proposal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Link to="/join">
                  <Button className="btn-secondary">
                    Join the Community
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
