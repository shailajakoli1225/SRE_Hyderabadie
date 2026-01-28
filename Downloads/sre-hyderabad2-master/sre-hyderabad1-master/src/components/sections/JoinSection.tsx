import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { socialLinks } from '@/data/siteData';
import sreVideo2 from '@/assets/sre2.mp4';
import communityImg from '@/assets/donation-community-service-volunteer-support.jpg';
import linkedinImg from '@/assets/people-holding-linkedin-logo.jpg';

export function JoinSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    role: '',
    reason: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Welcome to the community!',
      description: 'We\'ll be in touch soon with your community access.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="join" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src={sreVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-card/90" />
      </div>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Become part of Hyderabad's SRE network
            </h2>
            <p className="text-muted-foreground mb-6">
              Join 500+ engineers who are learning, sharing, and growing together. 
              Get access to exclusive events, job opportunities, and a community 
              that understands your challenges.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether you're a seasoned SRE, transitioning from DevOps, or just starting 
              your reliability journey, you'll find a supportive community ready to help 
              you succeed. Our members come from diverse backgrounds but share one goal: 
              building more reliable systems.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Access to private Slack community with 500+ active members',
                'Priority registration for all events and workshops',
                'Exclusive job board with 50+ companies actively hiring',
                'One-on-one mentorship with senior SREs',
                'Monthly newsletter with industry insights and job alerts',
                'Early access to community resources and recordings',
                'Networking opportunities with industry leaders',
                'Contribute to open-source SRE projects',
              ].map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Community Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden border border-border group">
                <img
                  src={communityImg}
                  alt="Community support"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden border border-border group">
                <img
                  src={linkedinImg}
                  alt="LinkedIn networking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-background border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Request to Join
                </h3>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-foreground mb-2">
                      LinkedIn Profile *
                    </label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      required
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                      Current Role *
                    </label>
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g., Senior SRE at Google"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                      Why do you want to join?
                    </label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Tell us what you're hoping to get from the community..."
                      rows={3}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request to Join
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-background border border-success/30 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  You're in! 🎉
                </h3>
                <p className="text-muted-foreground mb-6">
                  Welcome to SRE @ Hyderabad. Check your email for next steps 
                  and your Slack invite.
                </p>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Join LinkedIn Group
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
