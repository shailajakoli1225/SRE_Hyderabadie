import { motion } from 'framer-motion';
import {
  Rocket,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Target,
  Zap,
  BookOpen,
  Globe,
  Mail,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import sreVideo1 from '@/assets/sre1.mp4';
import teamCollaborationImg from '@/assets/creative-designers-team-working-project (1).jpg';
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

const launchSteps = [
  {
    step: 1,
    title: 'Define Your Mission & Vision',
    description: 'Establish clear goals and values for your community',
    details: [
      'Identify your target audience (SREs, DevOps engineers, platform engineers)',
      'Define what makes your community unique',
      'Create a mission statement that resonates with your audience',
      'Set measurable goals (e.g., 100 members in 3 months)',
    ],
    icon: Target,
    duration: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Build Your Core Team',
    description: 'Assemble passionate volunteers to drive the community',
    details: [
      'Recruit 3-5 founding members with complementary skills',
      'Define roles: organizer, content creator, community manager',
      'Establish communication channels (Slack, Discord, WhatsApp)',
      'Create a shared vision and decision-making process',
    ],
    icon: Users,
    duration: '2-3 weeks',
  },
  {
    step: 3,
    title: 'Choose Your Platforms',
    description: 'Select tools and platforms for community engagement',
    details: [
      'Website: Create a landing page with event calendar',
      'Social Media: LinkedIn, Twitter/X for announcements',
      'Communication: Slack or Discord for daily discussions',
      'Event Platform: Meetup.com, Eventbrite, or custom solution',
      'Content: Blog, YouTube channel for knowledge sharing',
    ],
    icon: Globe,
    duration: '1-2 weeks',
  },
  {
    step: 4,
    title: 'Plan Your First Event',
    description: 'Launch with a memorable inaugural meetup',
    details: [
      'Choose a compelling topic (e.g., "SRE Fundamentals" or "Incident Management")',
      'Secure a venue (co-working spaces, company offices, or virtual)',
      'Line up 1-2 speakers (can be from your core team initially)',
      'Set event date 4-6 weeks out to allow for promotion',
      'Create event page with clear agenda and registration',
    ],
    icon: Calendar,
    duration: '4-6 weeks',
  },
  {
    step: 5,
    title: 'Promote & Build Awareness',
    description: 'Get the word out to potential members',
    details: [
      'Post on LinkedIn, Twitter, and relevant tech communities',
      'Reach out to local tech companies and engineering teams',
      'Create engaging content: blog posts, social media updates',
      'Partner with other tech communities for cross-promotion',
      'Use hashtags: #SRE, #DevOps, #[YourCity]Tech',
    ],
    icon: Zap,
    duration: 'Ongoing',
  },
  {
    step: 6,
    title: 'Execute & Iterate',
    description: 'Run events and continuously improve',
    details: [
      'Collect feedback after each event (surveys, informal chats)',
      'Document what worked and what didn\'t',
      'Experiment with different formats: talks, workshops, panels',
      'Build relationships with speakers and sponsors',
      'Maintain consistent communication with members',
    ],
    icon: Rocket,
    duration: 'Ongoing',
  },
];

const bestPractices = [
  {
    title: 'Consistency is Key',
    description: 'Regular events build trust and engagement. Aim for monthly meetups at minimum.',
    icon: Calendar,
  },
  {
    title: 'Quality Over Quantity',
    description: 'Better to have 30 engaged members than 300 inactive ones. Focus on value.',
    icon: Target,
  },
  {
    title: 'Diversity & Inclusion',
    description: 'Actively promote diversity in speakers, topics, and membership. Make everyone feel welcome.',
    icon: Users,
  },
  {
    title: 'Community Over Content',
    description: 'While great talks matter, networking and relationships are equally important.',
    icon: MessageSquare,
  },
  {
    title: 'Document Everything',
    description: 'Keep notes, recordings, and resources. Future members will appreciate the history.',
    icon: FileText,
  },
  {
    title: 'Start Small, Scale Smart',
    description: 'Begin with intimate gatherings. Growth will come naturally with quality experiences.',
    icon: Zap,
  },
];

const resources = [
  {
    title: 'SRE Community Templates',
    description: 'Event planning checklists, speaker outreach templates, and feedback forms',
    type: 'Templates',
  },
  {
    title: 'Speaker Database',
    description: 'Curated list of SRE speakers willing to present at community events',
    type: 'Database',
  },
  {
    title: 'Venue Partners',
    description: 'List of co-working spaces and companies offering event venues',
    type: 'Directory',
  },
  {
    title: 'Marketing Materials',
    description: 'Social media templates, email templates, and promotional graphics',
    type: 'Assets',
  },
];

const CommunityLaunchGuide = () => {
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
              <source src={sreVideo1} type="video/mp4" />
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
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Community Building Guide</span>
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Community </span>
                <span className="gradient-text">Launch Guide</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know to start and grow your own SRE community.
                Learn from our experience building SRE @ Hyderabad from the ground up.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary text-lg px-8 py-4">
                  Download PDF Guide
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button className="btn-secondary text-lg px-8 py-4">
                  Get Templates
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Launch Steps */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your 6-Step Launch Plan
              </h2>
              <p className="text-muted-foreground text-lg">
                Follow these proven steps to launch a thriving SRE community in your city
              </p>
            </motion.div>

            {/* Community Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden border border-border group">
                <img
                  src={teamCollaborationImg}
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Build Together</h3>
                  <p className="text-sm text-muted-foreground">Collaborate with passionate SRE professionals</p>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-border group">
                <img
                  src={networkingImg}
                  alt="Networking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Connect & Grow</h3>
                  <p className="text-sm text-muted-foreground">Expand your network and knowledge base</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {launchSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardHeader className="relative">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge className="bg-primary text-primary-foreground">
                                Step {step.step}
                              </Badge>
                              <Badge variant="outline">{step.duration}</Badge>
                            </div>
                            <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                            <CardDescription className="text-base mb-4">
                              {step.description}
                            </CardDescription>
                            <ul className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Best Practices
              </h2>
              <p className="text-muted-foreground text-lg">
                Lessons learned from building successful SRE communities
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {bestPractices.map((practice, index) => {
                const IconComponent = practice.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-2">{practice.title}</CardTitle>
                        <CardDescription>{practice.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How many people do I need to start?</AccordionTrigger>
                  <AccordionContent>
                    You can start with as few as 3-5 committed organizers. Your first event might have 10-20 attendees, which is perfectly fine. Quality and consistency matter more than initial size.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need sponsors from day one?</AccordionTrigger>
                  <AccordionContent>
                    No, you can start without sponsors. Many communities begin with free venues (co-working spaces, company offices) and simple refreshments. Sponsors become valuable as you scale, but aren't required initially.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often should I host events?</AccordionTrigger>
                  <AccordionContent>
                    Monthly events are ideal for maintaining engagement. Some communities do bi-monthly or quarterly, but consistency is key. Start with what you can sustain long-term.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What if I can't find speakers?</AccordionTrigger>
                  <AccordionContent>
                    Start with your core team presenting. You can also invite local SREs from companies, reach out to remote speakers for virtual talks, or host panel discussions and workshops instead of traditional talks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Should I charge for events?</AccordionTrigger>
                  <AccordionContent>
                    Most SRE communities are free to attend. This removes barriers and encourages participation. If you need to cover costs, consider sponsorships or optional donations rather than mandatory fees.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resources & Templates
              </h2>
              <p className="text-muted-foreground text-lg">
                Get started faster with our ready-to-use templates and resources
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        <FileText className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group/btn">
                        Download
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
                Need Help Getting Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're here to help! Reach out if you need guidance, want to connect with other community leaders,
                or have questions about launching your own SRE community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
                <Button className="btn-secondary text-lg px-8 py-4">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Join Community Leaders Forum
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityLaunchGuide;
