import { motion } from 'framer-motion';
import {
  Crown,
  Check,
  Star,
  Users,
  Calendar,
  BookOpen,
  Award,
  Zap,
  Shield,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { Link } from 'react-router-dom';
import { Counter } from '@/components/ui/Counter';
import sreVideo1 from '@/assets/sre1.mp4';
import professionalTeamImg from '@/assets/portrait-professional-business-people-working-together.jpg';
import businessMeetingImg from '@/assets/people-meeting-seminar-office-concept.jpg';

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

const proFeatures = [
  {
    icon: Users,
    title: 'Exclusive Networking',
    description: 'Direct access to SRE leaders and hiring managers from top tech companies',
    premium: true,
  },
  {
    icon: Calendar,
    title: 'Priority Event Access',
    description: 'Early bird registration and VIP seating at all our events and workshops',
    premium: true,
  },
  {
    icon: BookOpen,
    title: 'Premium Content',
    description: 'Access to exclusive case studies, technical deep-dives, and recorded sessions',
    premium: true,
  },
  {
    icon: Award,
    title: 'Career Acceleration',
    description: 'Personalized mentorship sessions and resume reviews from industry experts',
    premium: true,
  },
  {
    icon: Zap,
    title: 'Fast-track Opportunities',
    description: 'Priority consideration for speaking opportunities and leadership roles',
    premium: true,
  },
  {
    icon: Shield,
    title: 'Job Board Priority',
    description: 'Your applications get priority review from our partner companies',
    premium: true,
  },
];

const pricingTiers = [
  {
    name: 'Pro Monthly',
    price: '₹2,999',
    period: 'month',
    description: 'Perfect for individual SRE professionals',
    features: [
      'All premium networking events',
      'Priority event registration',
      'Exclusive content library',
      'Monthly mentorship sessions',
      'Resume review (quarterly)',
      'Community Discord access',
    ],
    popular: false,
    cta: 'Start Pro Trial',
  },
  {
    name: 'Pro Annual',
    price: '₹29,999',
    period: 'year',
    description: 'Best value for serious SRE career growth',
    features: [
      'Everything in Pro Monthly',
      '2x mentorship sessions',
      'Priority job board access',
      'Speaking opportunity priority',
      'Annual career planning session',
      'Save ₹5,988 vs monthly',
    ],
    popular: true,
    cta: 'Go Pro Annual',
  },
  {
    name: 'Team Pro',
    price: '₹99,999',
    period: 'year',
    description: 'For organizations building SRE teams',
    features: [
      'Up to 10 team members',
      'Company-branded networking',
      'Dedicated recruitment support',
      'Custom workshops & training',
      'Priority hiring pipeline',
      'Executive mentorship access',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const TryPro = () => {
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
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Crown className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">SRE Pro Membership</span>
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span>Level Up Your </span>
                <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">SRE Career</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Unlock premium networking opportunities, exclusive content, and accelerated career growth
                with SRE Pro. Join Hyderabad's most ambitious SRE professionals on their journey to the top.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/try-pro">
                  <Button className="btn-secondary text-lg px-8 py-4">
                    View Pricing
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Users className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="500+" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Pro Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Award className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="95%" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Zap className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    <Counter value="14" duration={2} />
                  </div>
                  <div className="text-sm text-white/80">Day Free Trial</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Go Pro?
              </h2>
              <p className="text-muted-foreground text-lg">
                SRE Pro isn't just another subscription—it's your fast track to career excellence
                in one of tech's most demanding and rewarding fields.
              </p>
            </motion.div>

            {/* Pro Images Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden border border-border group">
                <img
                  src={professionalTeamImg}
                  alt="Professional SRE team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Exclusive Networking</h3>
                  <p className="text-sm text-muted-foreground">Connect with SRE leaders from top companies</p>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-border group">
                <img
                  src={businessMeetingImg}
                  alt="Business meeting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Premium Events</h3>
                  <p className="text-sm text-muted-foreground">Priority access to workshops and conferences</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {proFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardHeader className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Pro Plan
              </h2>
              <p className="text-muted-foreground text-lg">
                Start with a 14-day free trial. No credit card required.
                Cancel anytime with full refund within 30 days.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  variants={itemVariants}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <Card className={`h-full relative overflow-hidden ${
                    tier.popular
                      ? 'border-primary shadow-2xl shadow-primary/10'
                      : 'border-border hover:border-primary/30'
                  } transition-all duration-300`}>
                    {tier.popular && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                        <span className="text-muted-foreground">/{tier.period}</span>
                      </div>
                      <CardDescription className="mt-2">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </CardContent>

                    <CardFooter className="pt-6">
                      <Link to="/join" className="w-full">
                        <Button
                          className={`w-full ${
                            tier.popular
                              ? 'btn-primary'
                              : tier.name === 'Team Pro'
                                ? 'btn-secondary'
                                : 'btn-outline'
                          }`}
                          size="lg"
                        >
                          {tier.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials/Social Proof */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join <Counter value="500+" duration={2} className="inline" /> Pro Members
              </h2>
              <p className="text-muted-foreground text-lg">
                See how SRE Pro has transformed careers across Hyderabad's tech ecosystem
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "SRE Pro connected me with my dream role at Google. The mentorship and networking opportunities are unmatched.",
                  author: "Arun Kumar",
                  role: "Staff SRE, Google",
                  company: "Google",
                },
                {
                  quote: "The exclusive workshops and priority access to events helped me transition from DevOps to SRE leadership.",
                  author: "Priya Patel",
                  role: "SRE Manager",
                  company: "Microsoft",
                },
                {
                  quote: "Best investment I've made in my career. The community and resources are world-class.",
                  author: "Venkat Rao",
                  role: "Principal SRE",
                  company: "Amazon",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-primary">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Accelerate Your SRE Career?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join Hyderabad's premier SRE community and unlock your potential.
                Start your 14-day free trial today—no commitments, no strings attached.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/join">
                  <Button className="btn-secondary text-lg px-8 py-4">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                14-day free trial • Cancel anytime • No credit card required
              </p>
            </motion.div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default TryPro;
