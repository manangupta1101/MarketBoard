'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { Divider } from '@/components/ui/divider';
import { IconContainer } from '@/components/ui/icon-container';
import { useAuthStore } from '@/stores/auth-store';

type PopupStep = 'none' | 'otp' | 'success';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popupStep, setPopupStep] = useState<PopupStep>('none');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendMessage, setResendMessage] = useState(false);

  const signup = useAuthStore((s) => s.signup);
  const [signupError, setSignupError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    const success = signup(fullName, email, password);
    if (success) {
      setPopupStep('otp');
    } else {
      setSignupError(useAuthStore.getState().error || 'Signup failed');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  const handleVerifyOtp = () => {
    setPopupStep('success');
  };

  const handleResendOtp = () => {
    setResendMessage(true);
    setTimeout(() => setResendMessage(false), 3000);
  };

  const handleClosePopup = () => {
    setPopupStep('none');
    setOtp(['', '', '', '', '', '']);
    setResendMessage(false);
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

          <Button type="submit" fullWidth size="lg">
            Create account
          </Button>
        </form>

        <p className="mt-3 text-center text-xs text-[var(--text-tertiary)]">
          New accounts are created with Member role by default.
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

      {/* OTP Modal */}
      <Modal open={popupStep === 'otp'} onClose={handleClosePopup}>
        <div className="mb-4 flex justify-center">
          <IconContainer>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-1 text-center text-lg font-semibold text-[var(--text-primary)]">
          Verify your email
        </h2>
        <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
          We sent a 6-digit code to{' '}
          <span className="font-medium text-[var(--text-primary)]">{email}</span>
        </p>
        <div className="mb-6 flex justify-center gap-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(i, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(i, e)}
              className="
                h-11 w-11 rounded-[var(--radius-md)]
                border border-[var(--border)] bg-[var(--surface)]
                text-center text-lg font-semibold text-[var(--text-primary)]
                outline-none transition-all
                focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10
              "
              aria-label={`Digit ${i + 1}`}
            />
          ))}
        </div>
        <Button
          onClick={handleVerifyOtp}
          disabled={otp.some((d) => !d)}
          fullWidth
        >
          Verify code
        </Button>
        {resendMessage ? (
          <p className="mt-4 text-center text-xs font-medium text-[var(--success)]">
            Code resent successfully!
          </p>
        ) : (
          <p className="mt-4 text-center text-sm text-[var(--text-secondary)]">
            Didn&apos;t receive a code?{' '}
            <button
              type="button"
              onClick={handleResendOtp}
              className="font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              Resend
            </button>
          </p>
        )}
      </Modal>

      {/* Success Modal */}
      <Modal open={popupStep === 'success'} onClose={handleClosePopup}>
        <div className="mb-4 flex justify-center">
          <IconContainer size="lg" variant="outlined">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-2 text-center text-lg font-semibold text-[var(--text-primary)]">
          Account created!
        </h2>
        <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
          Your account has been successfully created. Head to login to enter your dashboard.
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
      </Modal>
    </>
  );
}
