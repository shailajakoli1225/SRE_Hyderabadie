import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Tag,
  Clock,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import sreVideo2 from '@/assets/sre2.mp4';
import personTabletImg from '@/assets/person-using-tablet.jpg';
import teamCollaborationImg from '@/assets/3d-flat-vector-as-marketing-team-collaborating-product-launch-concept-as-vector-illustration.jpg';

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

const blogPosts = [
  {
    id: '1',
    title: 'SLOs, SLIs, and Error Budgets: A Practical Guide for SRE Teams',
    excerpt: 'Learn how to define meaningful Service Level Objectives, implement accurate Service Level Indicators, and effectively manage error budgets to balance reliability and innovation.',
    author: 'Priya Sharma',
    authorRole: 'Senior SRE, Amazon',
    date: '2026-01-20',
    readTime: '12 min read',
    category: 'Reliability',
    tags: ['SLOs', 'SLIs', 'Error Budgets', 'Best Practices'],
    featured: true,
    views: 2847,
  },
  {
    id: '2',
    title: 'Incident Management at Scale: Lessons from Managing 10,000+ Services',
    excerpt: 'Discover proven strategies for incident response, on-call rotations, and postmortem culture that scale across large engineering organizations.',
    author: 'Arjun Krishnan',
    authorRole: 'Principal SRE, Uber',
    date: '2026-01-15',
    readTime: '15 min read',
    category: 'Incident Response',
    tags: ['Incidents', 'On-Call', 'Postmortems', 'Scale'],
    featured: true,
    views: 3124,
  },
  {
    id: '3',
    title: 'Kubernetes Observability: Building a Complete Monitoring Stack',
    excerpt: 'A comprehensive guide to implementing observability in Kubernetes using Prometheus, Grafana, and OpenTelemetry with real-world examples.',
    author: 'Aditya Reddy',
    authorRole: 'Staff SRE, Google',
    date: '2026-01-10',
    readTime: '18 min read',
    category: 'Observability',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry'],
    featured: false,
    views: 2156,
  },
  {
    id: '4',
    title: 'Chaos Engineering: Testing Resilience in Production',
    excerpt: 'How to safely introduce controlled failures into your systems to build confidence in your infrastructure\'s ability to withstand turbulent conditions.',
    author: 'Vikram Desai',
    authorRole: 'Platform Engineer, Razorpay',
    date: '2026-01-05',
    readTime: '14 min read',
    category: 'Resilience',
    tags: ['Chaos Engineering', 'Resilience', 'Testing', 'Production'],
    featured: false,
    views: 1892,
  },
  {
    id: '5',
    title: 'Cost Optimization in Cloud Infrastructure: SRE Perspective',
    excerpt: 'Practical strategies for reducing cloud costs while maintaining reliability and performance, including rightsizing, reserved instances, and spot instances.',
    author: 'Sneha Iyer',
    authorRole: 'SRE Manager, Microsoft',
    date: '2025-12-28',
    readTime: '10 min read',
    category: 'Cost Management',
    tags: ['Cost Optimization', 'Cloud', 'AWS', 'Azure'],
    featured: false,
    views: 1654,
  },
  {
    id: '6',
    title: 'Building Internal Developer Platforms: The SRE Way',
    excerpt: 'Learn how to create self-service platforms that empower developers while maintaining reliability and security standards.',
    author: 'Meera Rao',
    authorRole: 'Cloud Engineer, Thoughtworks',
    date: '2025-12-22',
    readTime: '16 min read',
    category: 'Platform Engineering',
    tags: ['Platform Engineering', 'Developer Experience', 'Self-Service'],
    featured: false,
    views: 2034,
  },
  {
    id: '7',
    title: 'Database Reliability: Managing Stateful Services at Scale',
    excerpt: 'Best practices for database operations, replication, backups, and disaster recovery in distributed systems.',
    author: 'Rahul Menon',
    authorRole: 'DevOps Lead, Swiggy',
    date: '2025-12-15',
    readTime: '13 min read',
    category: 'Databases',
    tags: ['Databases', 'PostgreSQL', 'MySQL', 'Backups'],
    featured: false,
    views: 1789,
  },
  {
    id: '8',
    title: 'SRE Career Path: From Engineer to Principal',
    excerpt: 'A comprehensive guide to advancing your SRE career, including skills to develop, certifications to pursue, and leadership opportunities.',
    author: 'Kavya Nair',
    authorRole: 'SRE, Flipkart',
    date: '2025-12-10',
    readTime: '11 min read',
    category: 'Career',
    tags: ['Career', 'Leadership', 'Skills', 'Growth'],
    featured: false,
    views: 2456,
  },
];

const categories = ['All', 'Reliability', 'Incident Response', 'Observability', 'Resilience', 'Cost Management', 'Platform Engineering', 'Databases', 'Career'];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">SRE Knowledge Hub</span>
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">SRE </span>
                <span className="gradient-text">Blogs & Articles</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Deep dives, best practices, and real-world insights from Hyderabad's SRE community.
                Learn from practitioners who've been there, done that.
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
                  placeholder="Search articles, topics, or tags..."
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-12"
              >
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {featuredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Blog Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={personTabletImg}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">{post.category}</Badge>
                        </div>
                      </div>
                      <CardHeader className="relative">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-3">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>{post.views.toLocaleString()} views</span>
                          </div>
                        </div>
                        <Button className="mt-4 w-full btn-primary group/btn">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </motion.div>

            {regularPosts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {regularPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      {/* Blog Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={teamCollaborationImg}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-3">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="outline" className="w-full group/btn">
                          Read More
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
                  No articles found matching your criteria. Try adjusting your filters.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to Contribute?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Share your SRE knowledge and experiences with the community. We're always looking
                for insightful articles from practitioners.
              </p>
              <Button className="btn-primary text-lg px-8 py-4">
                Submit an Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
