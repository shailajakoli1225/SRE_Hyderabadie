import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Video,
  FileText,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Filter,
  Search,
  PlayCircle,
  Download,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import sreVideo2 from '@/assets/sre2.mp4';
import seminarImg from '@/assets/people-meeting-seminar-office-concept.jpg';
import innovativeClassroomImg from '@/assets/innovative-futuristic-classroom-students.jpg';

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

const eventResources = [
  {
    id: '1',
    title: 'SRE Deep Dive: Incident Management at Scale',
    type: 'recording',
    date: '2025-12-10',
    duration: '2h 15m',
    speakers: ['Priya Sharma', 'Rakesh Kumar'],
    category: 'Workshop',
    description: 'Comprehensive workshop covering incident response frameworks, on-call best practices, and postmortem culture.',
    resources: [
      { type: 'video', label: 'Full Recording', url: '#' },
      { type: 'slides', label: 'Presentation Slides', url: '#' },
      { type: 'code', label: 'Code Examples', url: '#' },
    ],
    views: 3421,
    featured: true,
  },
  {
    id: '2',
    title: 'Kubernetes SRE Practices Workshop',
    type: 'recording',
    date: '2025-11-18',
    duration: '4h 30m',
    speakers: ['Amit Patel'],
    category: 'Workshop',
    description: 'Hands-on workshop covering observability, autoscaling, and disaster recovery in Kubernetes environments.',
    resources: [
      { type: 'video', label: 'Full Recording', url: '#' },
      { type: 'slides', label: 'Workshop Materials', url: '#' },
    ],
    views: 2890,
    featured: true,
  },
  {
    id: '3',
    title: 'Platform Engineering Meetup',
    type: 'recording',
    date: '2025-10-05',
    duration: '1h 45m',
    speakers: ['Aditya Reddy', 'Sneha Iyer'],
    category: 'Meetup',
    description: 'Building Internal Developer Platforms - patterns, anti-patterns, and real implementations from Google and Microsoft.',
    resources: [
      { type: 'video', label: 'Recording', url: '#' },
      { type: 'slides', label: 'Slides', url: '#' },
    ],
    views: 2156,
    featured: false,
  },
  {
    id: '4',
    title: 'Chaos Engineering in Production',
    type: 'recording',
    date: '2025-09-22',
    duration: '1h 30m',
    speakers: ['Vikram Desai'],
    category: 'Talk',
    description: 'Introduction to chaos engineering principles with live demos using Litmus and Gremlin.',
    resources: [
      { type: 'video', label: 'Recording', url: '#' },
      { type: 'slides', label: 'Slides', url: '#' },
    ],
    views: 1892,
    featured: false,
  },
  {
    id: '5',
    title: 'SRE Career Growth Panel',
    type: 'recording',
    date: '2025-08-15',
    duration: '1h 20m',
    speakers: ['Multiple Panelists'],
    category: 'Panel',
    description: 'Panel discussion with SRE leaders from Google, Microsoft, and startups on career progression.',
    resources: [
      { type: 'video', label: 'Recording', url: '#' },
    ],
    views: 1654,
    featured: false,
  },
  {
    id: '6',
    title: 'Observability Stack Deep Dive',
    type: 'recording',
    date: '2025-07-10',
    duration: '3h 00m',
    speakers: ['Kavya Nair'],
    category: 'Workshop',
    description: 'Comprehensive workshop on building observability with Prometheus, Grafana, and OpenTelemetry.',
    resources: [
      { type: 'video', label: 'Full Recording', url: '#' },
      { type: 'slides', label: 'Slides', url: '#' },
      { type: 'code', label: 'Code', url: '#' },
    ],
    views: 2034,
    featured: false,
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'SRE Deep Dive: Incident Management at Scale',
    date: '2026-02-15',
    time: '10:00 AM - 1:00 PM',
    location: 'Microsoft Campus, Hyderabad',
    type: 'Workshop',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Kubernetes SRE Practices Workshop',
    date: '2026-03-08',
    time: '9:00 AM - 5:00 PM',
    location: 'T-Hub 2.0, Hyderabad',
    type: 'Workshop',
    status: 'upcoming',
  },
];

const EventHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Workshop', 'Meetup', 'Talk', 'Panel'];
  const filteredResources = eventResources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = filteredResources.filter(r => r.featured);
  const regularResources = filteredResources.filter(r => !r.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
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
            <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

          <div className="section-container relative">
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
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
              >
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Event Resources Hub</span>
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Event </span>
                <span className="gradient-text">Hub</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Access recordings, slides, code samples, and resources from all our past events.
                Learn from the best SRE minds in Hyderabad.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-2xl mx-auto mb-8"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-background/50 backdrop-blur-sm border-border"
                />
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'btn-primary' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tabs for Upcoming vs Past Events */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <Tabs defaultValue="recordings" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="recordings">Past Event Recordings</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              </TabsList>

              <TabsContent value="recordings" className="space-y-16">
                {/* Featured Recordings */}
                {featuredResources.length > 0 && (
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-8"
                    >
                      <PlayCircle className="w-6 h-6 text-primary" />
                      <h2 className="text-3xl font-bold text-foreground">Featured Recordings</h2>
                    </motion.div>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 gap-8"
                    >
                      {featuredResources.map((resource) => (
                        <motion.div
                          key={resource.id}
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          className="group"
                        >
                          <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Event Image */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={seminarImg}
                                alt={resource.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                              <div className="absolute top-3 left-3 flex gap-2">
                                <Badge className="bg-primary text-primary-foreground">
                                  Featured
                                </Badge>
                                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">{resource.category}</Badge>
                              </div>
                            </div>
                            <CardHeader className="relative">
                              <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-3">
                                {resource.title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {resource.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="relative space-y-4">
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{formatDate(resource.date)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{resource.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  <span>{resource.speakers.join(', ')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span>{resource.views.toLocaleString()} views</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                {resource.resources.map((res, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="group/resource"
                                  >
                                    {res.type === 'video' && <PlayCircle className="w-4 h-4 mr-2" />}
                                    {res.type === 'slides' && <FileText className="w-4 h-4 mr-2" />}
                                    {res.type === 'code' && <Download className="w-4 h-4 mr-2" />}
                                    {res.label}
                                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/resource:opacity-100 transition-opacity" />
                                  </Button>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* All Recordings */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-2">All Recordings</h2>
                    <p className="text-muted-foreground">
                      {filteredResources.length} recording{filteredResources.length !== 1 ? 's' : ''} available
                    </p>
                  </motion.div>

                  {regularResources.length > 0 ? (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {regularResources.map((resource) => (
                        <motion.div
                          key={resource.id}
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          className="group"
                        >
                          <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                            {/* Event Image */}
                            <div className="relative h-40 overflow-hidden">
                              <img
                                src={innovativeClassroomImg}
                                alt={resource.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                              <div className="absolute top-3 left-3">
                                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                                  {resource.category}
                                </Badge>
                              </div>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                                {resource.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
                                {resource.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{formatDate(resource.date)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{resource.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span>{resource.views.toLocaleString()} views</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {resource.resources.slice(0, 2).map((res, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs"
                                  >
                                    {res.type === 'video' && <PlayCircle className="w-3 h-3 mr-1" />}
                                    {res.type === 'slides' && <FileText className="w-3 h-3 mr-1" />}
                                    {res.label}
                                  </Button>
                                ))}
                              </div>
                              <Button variant="outline" className="w-full group/btn">
                                View Resources
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-16"
                    >
                      <p className="text-muted-foreground text-lg">
                        No recordings found matching your criteria.
                      </p>
                    </motion.div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
                  <p className="text-muted-foreground">
                    Register for our upcoming workshops, meetups, and talks
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {upcomingEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="h-full border-border hover:border-primary/30 transition-all duration-300">
                        <CardHeader>
                          <Badge className="bg-primary text-primary-foreground mb-3">
                            Upcoming
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                            {event.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="space-y-2 mt-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(event.date)}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Link to="/events">
                            <Button className="w-full btn-primary group/btn">
                              Register Now
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventHub;
