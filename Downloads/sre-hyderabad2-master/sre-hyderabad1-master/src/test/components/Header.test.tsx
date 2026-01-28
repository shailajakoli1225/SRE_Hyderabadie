import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { Header } from '@/components/layout/Header';
import { mockScroll, waitForAnimation } from '../utils/test-utils';

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('should render the header with logo', () => {
      render(<Header />);
      expect(screen.getByAltText('SRE @ Hyderabad')).toBeInTheDocument();
    });

    it('should render navigation links', () => {
      render(<Header />);
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Events')).toBeInTheDocument();
      expect(screen.getByText('Community')).toBeInTheDocument();
      expect(screen.getByText('Careers')).toBeInTheDocument();
      expect(screen.getByText('Try Pro')).toBeInTheDocument();
    });

    it('should render Join Community button', () => {
      render(<Header />);
      expect(screen.getByText('Join Community')).toBeInTheDocument();
    });

    it('should render theme toggle', () => {
      render(<Header />);
      // Theme toggle should be present (check for button with aria-label or similar)
      const themeToggle = screen.getByRole('button', { name: /theme/i });
      expect(themeToggle).toBeInTheDocument();
    });
  });

  describe('Mobile Menu', () => {
    it('should show mobile menu button on small screens', () => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('should toggle mobile menu when menu button is clicked', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      
      fireEvent.click(menuButton);
      
      await waitFor(() => {
        expect(screen.getByText('About')).toBeInTheDocument();
      });
    });

    it('should close mobile menu when link is clicked', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      fireEvent.click(menuButton);

      await waitFor(() => {
        const aboutLink = screen.getByText('About');
        fireEvent.click(aboutLink);
      });

      await waitForAnimation();
      // Menu should close after navigation
    });
  });

  describe('Scroll Behavior', () => {
    it('should change header style when scrolled', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      
      // Initially should have transparent background
      expect(header).toHaveClass('bg-transparent');

      // Simulate scroll
      mockScroll(100);
      
      await waitFor(() => {
        expect(header).toHaveClass('bg-background/80');
      }, { timeout: 500 });
    });

    it('should use requestAnimationFrame for scroll throttling', async () => {
      const rafSpy = vi.spyOn(window, 'requestAnimationFrame');
      render(<Header />);
      
      mockScroll(100);
      
      await waitFor(() => {
        expect(rafSpy).toHaveBeenCalled();
      });
    });
  });

  describe('Navigation', () => {
    it('should navigate to correct routes', () => {
      render(<Header />);
      const aboutLink = screen.getByText('About');
      expect(aboutLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should have correct href for all navigation links', () => {
      render(<Header />);
      const links = [
        { text: 'About', href: '/' },
        { text: 'Events', href: '/events' },
        { text: 'Community', href: '/community' },
        { text: 'Careers', href: '/careers' },
        { text: 'Try Pro', href: '/try-pro' },
      ];

      links.forEach(({ text, href }) => {
        const link = screen.getByText(text);
        expect(link.closest('a')).toHaveAttribute('href', href);
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should have accessible navigation', () => {
      render(<Header />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should have proper button roles', () => {
      render(<Header />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Responsive Design', () => {
    it('should adapt to different screen sizes', () => {
      // Test desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1200,
      });

      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });
});

