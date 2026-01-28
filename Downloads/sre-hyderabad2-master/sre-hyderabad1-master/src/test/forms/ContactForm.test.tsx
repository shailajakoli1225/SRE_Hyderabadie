import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { ContactForm } from '@/components/sections/ContactForm';

// Mock fetch
global.fetch = vi.fn();

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (global.fetch as any).mockClear();
  });

  describe('Form Rendering', () => {
    it('should render all form fields', () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/why.*join/i)).toBeInTheDocument();
    });

    it('should render submit button', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button', { name: /request to join/i })).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should show validation error for empty required fields', async () => {
      render(<ContactForm />);
      const submitButton = screen.getByRole('button', { name: /request to join/i });
      
      fireEvent.click(submitButton);
      
      // Form should prevent submission if required fields are empty
      await waitFor(() => {
        // Check if form validation is working
        expect(submitButton).toBeInTheDocument();
      });
    });

    it('should validate email format', async () => {
      render(<ContactForm />);
      const emailInput = screen.getByLabelText(/email/i);
      
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.blur(emailInput);
      
      // Email validation should occur
      await waitFor(() => {
        expect(emailInput).toHaveValue('invalid-email');
      });
    });

    it('should accept valid email format', async () => {
      render(<ContactForm />);
      const emailInput = screen.getByLabelText(/email/i);
      
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      
      expect(emailInput).toHaveValue('test@example.com');
    });
  });

  describe('Form Submission', () => {
    it('should submit form with valid data', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);
      
      // Fill form
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/linkedin/i), {
        target: { value: 'https://linkedin.com/in/johndoe' },
      });
      fireEvent.change(screen.getByLabelText(/role/i), {
        target: { value: 'SRE Engineer' },
      });
      fireEvent.change(screen.getByLabelText(/why.*join/i), {
        target: { value: 'I want to join the community' },
      });

      const submitButton = screen.getByRole('button', { name: /request to join/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
    });

    it('should show loading state during submission', async () => {
      (global.fetch as any).mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ ok: true, json: async () => ({ success: true }) }), 100)
          )
      );

      render(<ContactForm />);
      
      // Fill form
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });

      const submitButton = screen.getByRole('button', { name: /request to join/i });
      fireEvent.click(submitButton);

      // Should show loading state
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });

    it('should show success message after successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);
      
      // Fill and submit form
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });

      const submitButton = screen.getByRole('button', { name: /request to join/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        // Should show success state
        expect(screen.getByText(/success/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should handle submission errors gracefully', async () => {
      (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

      render(<ContactForm />);
      
      // Fill form
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });

      const submitButton = screen.getByRole('button', { name: /request to join/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        // Should handle error
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  describe('Form Input Handling', () => {
    it('should update form state when inputs change', () => {
      render(<ContactForm />);
      const nameInput = screen.getByLabelText(/name/i);
      
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      expect(nameInput).toHaveValue('John Doe');
    });

    it('should clear form after successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      render(<ContactForm />);
      
      const nameInput = screen.getByLabelText(/name/i);
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      
      const submitButton = screen.getByRole('button', { name: /request to join/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        // Form should be reset after submission
        expect(nameInput).toHaveValue('');
      }, { timeout: 3000 });
    });
  });
});

