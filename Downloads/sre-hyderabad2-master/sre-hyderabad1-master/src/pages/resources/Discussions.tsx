import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  User,
  Clock,
  ArrowUp,
  ArrowDown,
  MessageCircle,
  TrendingUp,
  Search,
  Filter,
  ArrowRight,
  ArrowLeft,
  Tag,
  Bookmark,
  Share2,
  ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import sreVideo3 from '@/assets/sre3.mp4';
import businessMeetingImg from '@/assets/people-meeting-seminar-office-concept.jpg';
import networkingImg from '@/assets/people-business-connection-social-network-communication.jpg';

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

const discussionTopics = [
  {
    id: '1',
    title: 'How do you handle on-call rotations in a distributed team?',
    author: 'Aditya Reddy',
    authorRole: 'Staff SRE, Google',
    authorAvatar: '👤',
    category: 'On-Call',
    tags: ['on-call', 'distributed-teams', 'best-practices'],
    replies: 24,
    views: 342,
    upvotes: 89,
    lastActivity: '2 hours ago',
    pinned: true,
    excerpt: 'We\'re scaling our SRE team across multiple time zones. Looking for best practices on managing on-call rotations that ensure coverage while maintaining work-life balance...',
  },
  {
    id: '2',
    title: 'SLO Design: How granular should Service Level Objectives be?',
    author: 'Priya Sharma',
    authorRole: 'Senior SRE, Amazon',
    authorAvatar: '👤',
    category: 'SLOs',
    tags: ['slo', 'reliability', 'metrics'],
    replies: 18,
    views: 289,
    upvotes: 67,
    lastActivity: '5 hours ago',
    pinned: true,
    excerpt: 'Debating whether to have one SLO per service or break it down further. What\'s the community\'s experience with SLO granularity?',
  },
  {
    id: '3',
    title: 'Kubernetes: Prometheus vs Datadog for observability?',
    author: 'Vikram Desai',
    authorRole: 'Platform Engineer, Razorpay',
    authorAvatar: '👤',
    category: 'Observability',
    tags: ['kubernetes', 'prometheus', 'datadog', 'monitoring'],
    replies: 31,
    views: 456,
    upvotes: 102,
    lastActivity: '1 day ago',
    pinned: false,
    excerpt: 'Evaluating observability tools for our K8s clusters. Cost is a factor but so is ease of use. What are your experiences?',
  },
  {
    id: '4',
    title: 'Cost optimization: Reserved instances vs Spot instances for non-critical workloads?',
    author: 'Sneha Iyer',
    authorRole: 'SRE Manager, Microsoft',
    authorAvatar: '👤',
    category: 'Cost Management',
    tags: ['cost-optimization', 'aws', 'azure', 'cloud'],
    replies: 15,
    views: 234,
    upvotes: 54,
    lastActivity: '2 days ago',
    pinned: false,
    excerpt: 'Trying to optimize our cloud spend. For batch jobs and non-critical services, what\'s the best strategy?',
  },
  {
    id: '5',
    title: 'Incident Postmortem Templates: What do you include?',
    author: 'Rahul Menon',
    authorRole: 'DevOps Lead, Swiggy',
    authorAvatar: '👤',
    category: 'Incident Response',
    tags: ['postmortems', 'incidents', 'documentation'],
    replies: 22,
    views: 312,
    upvotes: 78,
    lastActivity: '3 days ago',
    pinned: false,
    excerpt: 'Looking to standardize our postmortem process. What sections do you find most valuable in postmortem documents?',
  },
  {
    id: '6',
    title: 'Chaos Engineering: How to get started without breaking production?',
    author: 'Kavya Nair',
    authorRole: 'SRE, Flipkart',
    authorAvatar: '👤',
    category: 'Resilience',
    tags: ['chaos-engineering', 'testing', 'resilience'],
    replies: 19,
    views: 267,
    upvotes: 61,
    lastActivity: '4 days ago',
    pinned: false,
    excerpt: 'Interested in implementing chaos engineering but worried about risks. What\'s a safe way to start?',
  },
  {
    id: '7',
    title: 'Database reliability: PostgreSQL replication strategies at scale',
    author: 'Arjun Krishnan',
    authorRole: 'Principal SRE, Uber',
    authorAvatar: '👤',
    category: 'Databases',
    tags: ['postgresql', 'databases', 'replication', 'high-availability'],
    replies: 27,
    views: 389,
    upvotes: 95,
    lastActivity: '5 days ago',
    pinned: false,
    excerpt: 'Scaling our PostgreSQL setup. What replication strategies have worked well for you at high scale?',
  },
  {
    id: '8',
    title: 'SRE Career: Transitioning from DevOps to SRE - what skills to focus on?',
    author: 'Meera Rao',
    authorRole: 'Cloud Engineer, Thoughtworks',
    authorAvatar: '👤',
    category: 'Career',
    tags: ['career', 'devops', 'skills', 'transition'],
    replies: 33,
    views: 521,
    upvotes: 124,
    lastActivity: '6 days ago',
    pinned: false,
    excerpt: 'Been in DevOps for 5 years. Want to transition to SRE. What are the key skills and mindset shifts I should focus on?',
  },
];

const categories = ['All', 'On-Call', 'SLOs', 'Observability', 'Cost Management', 'Incident Response', 'Resilience', 'Databases', 'Career'];

const Discussions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'trending'>('trending');

  const filteredTopics = discussionTopics.filter(topic => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
    } else if (sortBy === 'popular') {
      return b.upvotes - a.upvotes;
    } else {
      // trending: combination of upvotes and recent activity
      return (b.upvotes + b.replies) - (a.upvotes + a.replies);
    }
  });

  const pinnedTopics = sortedTopics.filter(t => t.pinned);
  const regularTopics = sortedTopics.filter(t => !t.pinned);

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
              <source src={sreVideo3} type="video/mp4" />
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
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Community Discussions</span>
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">SRE </span>
                <span className="gradient-text">Discussions</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Join the conversation. Ask questions, share experiences, and learn from
                Hyderabad's SRE community.
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
                  placeholder="Search discussions, topics, or tags..."
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
                className="flex flex-wrap justify-center gap-3 mb-6"
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

              {/* Sort Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-3"
              >
                <Button
                  variant={sortBy === 'trending' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('trending')}
                  className={sortBy === 'trending' ? 'btn-primary' : ''}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </Button>
                <Button
                  variant={sortBy === 'popular' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('popular')}
                  className={sortBy === 'popular' ? 'btn-primary' : ''}
                >
                  Popular
                </Button>
                <Button
                  variant={sortBy === 'recent' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('recent')}
                  className={sortBy === 'recent' ? 'btn-primary' : ''}
                >
                  Recent
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Discussions List */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Discussions</h2>
                <p className="text-muted-foreground">
                  {filteredTopics.length} discussion{filteredTopics.length !== 1 ? 's' : ''} found
                </p>
              </div>
              <Button className="btn-primary">
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Discussion
              </Button>
            </div>

            {/* Pinned Topics */}
            {pinnedTopics.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Pinned Discussions
                </h3>
                <div className="space-y-4">
                  {pinnedTopics.map((topic) => (
                    <motion.div
                      key={topic.id}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="group"
                    >
                      <Card className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                        {/* Discussion Image */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={businessMeetingImg}
                            alt={topic.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                          <div className="absolute top-2 left-2 flex gap-2">
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Pinned
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                              {topic.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            {/* Voting */}
                            <div className="flex flex-col items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ArrowUp className="w-4 h-4" />
                              </Button>
                              <span className="text-sm font-semibold text-foreground">{topic.upvotes}</span>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ArrowDown className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                    {topic.title}
                                  </h3>
                                  <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {topic.excerpt}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                                      {topic.authorAvatar}
                                    </div>
                                    <span>{topic.author}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{topic.replies} replies</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{topic.lastActivity}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm">
                                    <Bookmark className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mt-3">
                                {topic.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Regular Topics */}
            {regularTopics.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {regularTopics.map((topic) => (
                  <motion.div
                    key={topic.id}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      {/* Discussion Image */}
                      <div className="relative h-24 overflow-hidden">
                        <img
                          src={networkingImg}
                          alt={topic.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                        <div className="absolute top-2 left-2">
                          <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                            {topic.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          {/* Voting */}
                          <div className="flex flex-col items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ArrowUp className="w-4 h-4" />
                            </Button>
                            <span className="text-sm font-semibold text-foreground">{topic.upvotes}</span>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ArrowDown className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                  {topic.title}
                                </h3>
                                <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                                  {topic.excerpt}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                                    {topic.authorAvatar}
                                  </div>
                                  <span>{topic.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MessageCircle className="w-3 h-3" />
                                  <span>{topic.replies}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-3 h-3" />
                                  <span>{topic.lastActivity}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Bookmark className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                              {topic.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
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
                  No discussions found matching your criteria. Start a new discussion!
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Discussions;
