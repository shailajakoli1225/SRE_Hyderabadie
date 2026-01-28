import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { socialLinks, partners } from '@/data/siteData';
import { Link } from 'react-router-dom';
import sreLogo from '@/assets/sre hyderabad.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
              >
                <img
                  src={sreLogo}
                  alt="SRE @ Hyderabad"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <span className="font-semibold text-foreground">SRE</span>
                <span className="text-muted-foreground"> @ Hyderabad</span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mb-4 sm:mb-6">
              Hyderabad's home for Site Reliability Engineers. We practice reliability, 
              share failures openly, and build careers together.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {[
                { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: socialLinks.twitter, label: 'Twitter' },
                { icon: Github, href: socialLinks.github, label: 'GitHub' },
                { icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Ecosystem Partners</h4>
            <ul className="space-y-2 sm:space-y-3">
              {partners.map((partner) => (
                <li key={partner}>
                  <span className="text-muted-foreground flex items-center gap-2">
                    {partner}
                    <ExternalLink size={12} className="opacity-50" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} SRE @ Hyderabad. Built with reliability in mind.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              All systems operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
