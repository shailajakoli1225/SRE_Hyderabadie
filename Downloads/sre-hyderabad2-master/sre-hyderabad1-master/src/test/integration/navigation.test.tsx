import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent, waitFor, render } from '../utils/test-utils';
import { Header } from '@/components/layout/Header';

// Note: Using MemoryRouter for navigation testing

describe('Navigation Integration Tests', () => {
  describe('Header Navigation', () => {
    it('should have correct href for About link', () => {
      render(<Header />);

      const aboutLink = screen.getByText('About');
      expect(aboutLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should have correct href for Events link', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const eventsLink = screen.getByText('Events');
      expect(eventsLink.closest('a')).toHaveAttribute('href', '/events');
    });

    it('should have correct href for Community link', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const communityLink = screen.getByText('Community');
      expect(communityLink.closest('a')).toHaveAttribute('href', '/community');
    });
  });

  describe('Logo Navigation', () => {
    it('should have correct href for logo link', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const logo = screen.getByAltText('SRE @ Hyderabad');
      expect(logo.closest('a')).toHaveAttribute('href', '/');
    });
  });

  describe('Mobile Menu Navigation', () => {
    it('should toggle mobile menu', async () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      // Open mobile menu
      const menuButton = screen.getByRole('button', { name: /menu/i });
      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText('About')).toBeInTheDocument();
      });
    });
  });
});

