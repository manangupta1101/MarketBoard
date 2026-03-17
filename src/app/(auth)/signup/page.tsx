'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { Divider } from '@/components/ui/divider';
import { IconContainer } from '@/components/ui/icon-container';
import { useAuthStore } from '@/stores/auth-store';
import { createClient } from '@/lib/supabase/client';

type PopupStep = 'none' | 'blocked-otp' | 'check-email';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupStep, setPopupStep] = useState<PopupStep>('none');
  const [loading, setLoading] = useState(false);

  // Blocked email OTP
  const [blockedOtp, setBlockedOtp] = useState('');
  const [blockedOtpError, setBlockedOtpError] = useState('');

  const signup = useAuthStore((s) => s.signup);
  const [signupError, setSignupError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    setLoading(true);

    // Check if email is blocked (removed from team)
    const supabase = createClient();
    const { data: blocked } = await supabase
      .from('removed_emails')
      .select('email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (blocked) {
      setPopupStep('blocked-otp');
      setLoading(false);
      return;
    }

    const result = await signup(fullName, email, password);
    setLoading(false);

    if (result.success && result.needsVerification) {
      setPopupStep('check-email');
    } else if (!result.success) {
      setSignupError(useAuthStore.getState().error || 'Signup failed');
    }
  };

  const handleBlockedOtpVerify = async () => {
    setLoading(true);

    // Verify OTP against the removed_emails table via an API route
    const res = await fetch('/api/auth/verify-reregistration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.toLowerCase(), otp: blockedOtp.trim() }),
    });

    const data = await res.json();

    if (data.success) {
      // OTP verified — proceed with signup
      const result = await signup(fullName, email, password);
      setLoading(false);

      if (result.success) {
        setBlockedOtp('');
        setBlockedOtpError('');
        setPopupStep('check-email');
      } else {
        setSignupError(useAuthStore.getState().error || 'Signup failed');
        setPopupStep('none');
      }
    } else {
      setLoading(false);
      setBlockedOtpError('Invalid OTP. Contact your team owner for the correct code.');
    }
  };

  const handleClosePopup = () => {
    setPopupStep('none');
    setBlockedOtp('');
    setBlockedOtpError('');
  };

  return (
    <>
      <Card className="mx-auto max-w-[400px]">
        <div className="mb-6 flex justify-center">
          <IconContainer>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </IconContainer>
        </div>

        <h1 className="text-center text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
          Create your account
        </h1>
        <p className="mt-1.5 mb-8 text-center text-sm text-[var(--text-secondary)]">
          Get started with MarketBoard
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Min. 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          {signupError && (
            <div className="rounded-[var(--radius-md)] bg-[var(--error-light)] px-4 py-2.5">
              <p className="text-sm text-[var(--error)]">{signupError}</p>
            </div>
          )}

          <Button type="submit" fullWidth size="lg" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        <p className="mt-3 text-center text-xs text-[var(--text-tertiary)]">
          New accounts are created with Member role by default.
          A verification email will be sent to confirm your address.
        </p>

        <Divider />

        <p className="text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            Sign in
          </a>
        </p>
      </Card>

      {/* Blocked Email OTP Modal */}
      <Modal open={popupStep === 'blocked-otp'} onClose={handleClosePopup}>
        <div className="mb-4 flex justify-center">
          <IconContainer>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-1 text-center text-lg font-semibold text-[var(--text-primary)]">
          Account Previously Removed
        </h2>
        <p className="mb-2 text-center text-sm text-[var(--text-secondary)]">
          This email was removed from the team by an owner. Enter the OTP provided by your team owner to re-register.
        </p>
        <p className="mb-4 text-center text-xs text-[var(--text-tertiary)]">
          Contact your team owner to get the re-registration OTP.
        </p>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={blockedOtp}
          onChange={(e) => {
            setBlockedOtp(e.target.value.replace(/\D/g, ''));
            setBlockedOtpError('');
          }}
          placeholder="Enter 6-digit OTP"
          className="
            mb-4 w-full rounded-[var(--radius-md)]
            border border-[var(--border)] bg-[var(--surface)]
            px-3 py-2.5 text-center text-lg font-bold tracking-widest
            text-[var(--text-primary)] outline-none transition-all
            focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
          "
          aria-label="Enter re-registration OTP"
          autoFocus
        />

        {blockedOtpError && (
          <p className="mb-3 text-center text-xs font-medium text-[var(--error)]">{blockedOtpError}</p>
        )}

        <Button
          onClick={handleBlockedOtpVerify}
          disabled={blockedOtp.length !== 6 || loading}
          fullWidth
        >
          {loading ? 'Verifying...' : 'Verify & Re-register'}
        </Button>

        <button
          type="button"
          onClick={handleClosePopup}
          className="mt-3 w-full text-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Cancel
        </button>
      </Modal>

      {/* Check Email Modal (real email verification) */}
      <Modal open={popupStep === 'check-email'} onClose={handleClosePopup}>
        <div className="mb-4 flex justify-center">
          <IconContainer size="lg" variant="outlined">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-2 text-center text-lg font-semibold text-[var(--text-primary)]">
          Check your email
        </h2>
        <p className="mb-1 text-center text-sm text-[var(--text-secondary)]">
          We sent a verification link to
        </p>
        <p className="mb-6 text-center text-sm font-medium text-[var(--text-primary)]">
          {email}
        </p>
        <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
          Click the link in the email to verify your account, then come back and sign in.
        </p>
        <Button
          onClick={() => {
            handleClosePopup();
            window.location.href = '/login';
          }}
          fullWidth
        >
          Go to sign in
        </Button>
        <p className="mt-4 text-center text-xs text-[var(--text-tertiary)]">
          Didn&apos;t receive it? Check your spam folder.
        </p>
      </Modal>
    </>
  );
}
