import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import sreLogo from '@/assets/sre hyderabad.jpeg';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Community', href: '/community' },
  { label: 'Careers', href: '/careers' },
  { label: 'Try Pro', href: '/try-pro' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
            >
              <motion.img
                src={sreLogo}
                alt="SRE @ Hyderabad"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0 hsl(var(--primary) / 0)',
                    '0 0 15px 5px hsl(var(--primary) / 0.3)',
                    '0 0 0 0 hsl(var(--primary) / 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <div className="hidden xs:block">
              <motion.span
                className="font-semibold text-sm sm:text-base text-foreground"
                whileHover={{ color: 'hsl(var(--primary))' }}
              >
                SRE
              </motion.span>
              <span className="text-sm sm:text-base text-muted-foreground"> @ Hyderabad</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/#') || link.href.startsWith('http');
              const isRoute = !isExternal && link.href.startsWith('/');
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {isRoute ? (
                    <Link
                      to={link.href}
                      className="nav-link text-sm font-medium relative group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="nav-link text-sm font-medium relative group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  )}
                </motion.div>
              );
            })}
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="nav-link text-sm font-medium relative group flex items-center gap-1"
                >
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <Link to="/resources/blogs">
                  <DropdownMenuItem className="cursor-pointer">
                    Blogs
                  </DropdownMenuItem>
                </Link>
                <Link to="/resources/community-stories">
                  <DropdownMenuItem className="cursor-pointer">
                    Community Stories
                  </DropdownMenuItem>
                </Link>
                <Link to="/resources/event-hub">
                  <DropdownMenuItem className="cursor-pointer">
                    Event Hub
                  </DropdownMenuItem>
                </Link>
                <Link to="/resources/community-launch-guide">
                  <DropdownMenuItem className="cursor-pointer">
                    Community Launch Guide
                  </DropdownMenuItem>
                </Link>
                <Link to="/resources/discussions">
                  <DropdownMenuItem className="cursor-pointer">
                    Discussions
                  </DropdownMenuItem>
                </Link>
                <Link to="/events">
                  <DropdownMenuItem className="cursor-pointer">
                    Events
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA & Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Link to="/join" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-primary text-sm relative overflow-hidden group">
                  <span className="relative z-10">Join Community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            </Link>
            <motion.button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border relative z-40"
          >
            <nav className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith('/#') || link.href.startsWith('http');
                const isRoute = !isExternal && link.href.startsWith('/');
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {isRoute ? (
                      <Link
                        to={link.href}
                        className="block py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Resources Section in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <div className="text-sm font-semibold text-muted-foreground mb-2 px-1">Resources</div>
                <div className="flex flex-col gap-1 pl-4">
                  <Link
                    to="/resources/blogs"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/resources/community-stories"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Community Stories
                  </Link>
                  <Link
                    to="/resources/event-hub"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Event Hub
                  </Link>
                  <Link
                    to="/resources/community-launch-guide"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Community Launch Guide
                  </Link>
                  <Link
                    to="/resources/discussions"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Discussions
                  </Link>
                  <Link
                    to="/events"
                    className="block py-2 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="btn-primary w-full mt-4">
                    Join Community
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
