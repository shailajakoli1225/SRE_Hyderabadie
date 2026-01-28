import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, User, MessageSquare, Building2, Sparkles, Zap, Check, Users, Calendar, Briefcase, BookOpen, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
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

    try {
      const submitFormData = new FormData();
      
      // Add access key (trimmed to remove any spaces)
      const accessKey = "79a94156-855e-41d3-8efe-b028fda8a1b7".trim();
      submitFormData.append("access_key", accessKey);
      
      // Add form fields from state
      submitFormData.append("name", formData.name || '');
      submitFormData.append("email", formData.email || '');
      submitFormData.append("linkedin", formData.linkedin || '');
      submitFormData.append("role", formData.role || '');
      
      // Combine role, linkedin, and reason into message field for Web3Forms
      const messageContent = `Current Role: ${formData.role}\n\nLinkedIn Profile: ${formData.linkedin}\n\nWhy do you want to join?\n${formData.reason}`;
      submitFormData.append("message", messageContent);
      
      // Add subject for better email organization
      submitFormData.append("subject", "New Join Request - SRE @ Hyderabad");
      
      // Add form name
      submitFormData.append("from_name", "SRE @ Hyderabad Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitFormData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: 'Request submitted successfully!',
          description: 'We\'ll review your request and get back to you soon.',
        });

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', linkedin: '', role: '', reason: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: 'Submission failed',
        description: error instanceof Error ? error.message : 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content & Motivation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Join Us
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
              >
                Become part of Hyderabad's{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  SRE network
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Join 500+ engineers who are learning, sharing, and growing together. Get access to exclusive events, job opportunities, and a community that understands your challenges.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 pt-4"
              >
                {[
                  { icon: Users, text: 'Access to private Slack community' },
                  { icon: Calendar, text: 'Priority registration for events' },
                  { icon: Briefcase, text: 'Exclusive job board access' },
                  { icon: BookOpen, text: 'Mentorship opportunities' },
                  { icon: Bell, text: 'Monthly newsletter with industry insights' },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Check className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Form Card */}
              <div className="relative rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
                <div className="relative p-6 sm:p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <h3 className="text-2xl font-semibold text-foreground mb-6">
                          Request to Join
                        </h3>

                        {/* Full Name Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </motion.div>

                        {/* LinkedIn Profile Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label htmlFor="linkedin" className="block text-sm font-medium text-foreground mb-2">
                            LinkedIn Profile <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            type="url"
                            required
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </motion.div>

                        {/* Current Role Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                            Current Role <span className="text-primary">*</span>
                          </label>
                          <Input
                            id="role"
                            name="role"
                            type="text"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g., Senior SRE at Google"
                            className="h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </motion.div>

                        {/* Why Join Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                            Why do you want to join? <span className="text-primary">*</span>
                          </label>
                          <Textarea
                            id="reason"
                            name="reason"
                            required
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Tell us what you're hoping to get from the community..."
                            rows={5}
                            className="bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                          />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="pt-2"
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg relative overflow-hidden group/btn shadow-lg hover:shadow-xl transition-all"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="w-5 h-5 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                  Request to Join
                                </>
                              )}
                            </span>
                          </Button>
                        </motion.div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
                        >
                          <CheckCircle className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-2xl font-bold text-foreground mb-3"
                        >
                          Request Submitted!
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-muted-foreground"
                        >
                          We'll review your request and get back to you soon.
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

