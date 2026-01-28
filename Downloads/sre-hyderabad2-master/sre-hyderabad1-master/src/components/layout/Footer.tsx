import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, ExternalLink, Heart } from 'lucide-react';
import { socialLinks, partners } from '@/data/siteData';
import { Link } from 'react-router-dom';
import sreLogo from '@/assets/sre hyderabad.jpeg';
import telanganaImg from '@/assets/illustration-telangana-formation-day-celebration-with-iconic-landmarks.jpg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background via-slate-950/50 to-slate-900 border-t border-cyan-500/20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-15 mix-blend-overlay">
        <img
          src={telanganaImg}
          alt="Telangana Landmarks"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Gradient Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 section-container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/50 transition-all"
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
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mb-4 sm:mb-6 leading-relaxed">
              Hyderabad's home for Site Reliability Engineers. We practice reliability, 
              share failures openly, and build careers together in India's tech capital.
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
                  className="p-2 sm:p-2.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 hover:text-cyan-100 transition-colors border border-cyan-500/30 hover:border-cyan-400/50"
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
            <h4 className="font-semibold text-sm sm:text-base text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Events
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Community
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full" />
              Partners
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {partners.map((partner) => (
                <li key={partner}>
                  <span className="text-muted-foreground hover:text-cyan-300 transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {partner}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        {/* Bottom Bar with Enhanced Design */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
            <span>© {currentYear} SRE @ Hyderabad.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart size={14} className="text-cyan-400 fill-cyan-400 animate-pulse" />
            <span className="hidden sm:inline">in Hyderabad.</span>
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              All systems operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
