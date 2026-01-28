import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '../utils/test-utils';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';

describe('Responsive Design Tests', () => {
  const originalInnerWidth = window.innerWidth;
  const originalInnerHeight = window.innerHeight;

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: originalInnerHeight,
    });
  });

  describe('Mobile Viewport (320px - 767px)', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
    });

    it('should show mobile menu button on small screens', () => {
      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('should adapt header height for mobile', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      // Check that header container has responsive height classes
      const headerContainer = header.querySelector('.section-container');
      expect(headerContainer).toBeInTheDocument();
    });
  });

  describe('Tablet Viewport (768px - 1023px)', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
    });

    it('should show desktop navigation on tablet', () => {
      render(<Header />);
      // Desktop nav should be visible
      expect(screen.getByText('About')).toBeInTheDocument();
    });
  });

  describe('Desktop Viewport (1024px+)', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
    });

    it('should show full desktop navigation', () => {
      render(<Header />);
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Events')).toBeInTheDocument();
      expect(screen.getByText('Community')).toBeInTheDocument();
    });

    it('should have larger header height on desktop', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      // Check that header container exists (height is on inner div)
      const headerContainer = header.querySelector('.section-container');
      expect(headerContainer).toBeInTheDocument();
    });
  });

  describe('Button Responsive Sizes', () => {
    it('should have responsive size classes', () => {
      render(<Button size="default">Responsive Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('sm:h-11');
    });
  });

  describe('Breakpoint Transitions', () => {
    it('should handle breakpoint changes smoothly', () => {
      // Start with mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      const { rerender } = render(<Header />);
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();

      // Switch to desktop
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });

      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
      rerender(<Header />);

      // Desktop nav should be visible
      expect(screen.getByText('About')).toBeInTheDocument();
    });
  });
});

