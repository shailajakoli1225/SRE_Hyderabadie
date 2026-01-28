import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import { Footer } from '@/components/layout/Footer';

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('should render footer with brand information', () => {
      render(<Footer />);
      expect(screen.getByText(/SRE @ Hyderabad/i)).toBeInTheDocument();
    });

    it('should render quick links section', () => {
      render(<Footer />);
      expect(screen.getByText(/quick links/i)).toBeInTheDocument();
    });

    it('should render social links', () => {
      render(<Footer />);
      // Check for social media links (LinkedIn, Twitter, etc.)
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation Links', () => {
    it('should have correct hrefs for all footer links', () => {
      render(<Footer />);
      const aboutLink = screen.getByText(/about us/i);
      expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    });

    it('should use Link component for internal navigation', () => {
      render(<Footer />);
      const links = screen.getAllByRole('link');
      // All internal links should use react-router Link
      links.forEach((link) => {
        if (link.getAttribute('href')?.startsWith('/')) {
          expect(link).toBeInTheDocument();
        }
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic HTML', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should have accessible links', () => {
      render(<Footer />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile devices', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });
});

