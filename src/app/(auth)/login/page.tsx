'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { Divider } from '@/components/ui/divider';
import { IconContainer } from '@/components/ui/icon-container';
import { useAuthStore } from '@/stores/auth-store';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState('manangupta1101@gmail.com');
  const [password, setPassword] = useState('owner123');
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(email, password);
    if (success) {
      router.push('/board');
    } else {
      setError(useAuthStore.getState().error || 'Login failed');
    }
    setLoading(false);
  };

  const handleSendResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(forgotEmail, {
      redirectTo: `${window.location.origin}/auth/callback?next=/board`,
    });

    setForgotLoading(false);

    if (resetError) {
      // Still show success to not leak whether email exists
      console.error('Reset error:', resetError.message);
    }

    setForgotSent(true);
  };

  const handleCloseForgot = () => {
    setForgotOpen(false);
    setForgotEmail('');
    setForgotSent(false);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
        {/* Demo Credentials — Left side */}
        <div className="w-full max-w-[320px] shrink-0 rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--border)] bg-[var(--surface-secondary)] p-4 lg:order-1">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
            Demo Credentials
          </p>
          <div className="space-y-2">
            {[
              { role: 'Owner', email: 'manangupta1101@gmail.com', pass: 'owner123', color: 'var(--primary)' },
              { role: 'Admin', email: 'manangupta5055@gmail.com', pass: 'admin123', color: 'var(--warning, #f59e0b)' },
              { role: 'Editor', email: 'manangupta228@gmail.com', pass: 'editor123', color: 'var(--success, #22c55e)' },
            ].map((cred) => (
              <button
                key={cred.role}
                type="button"
                onClick={() => {
                  setEmail(cred.email);
                  setPassword(cred.pass);
                }}
                className="group w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-left transition-all hover:border-[var(--primary)] hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: cred.color }}
                  >
                    {cred.role}
                  </span>
                  <span className="text-[11px] text-[var(--text-tertiary)] opacity-0 transition-opacity group-hover:opacity-100">
                    Click to use
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
                  {cred.email}
                </p>
                <p className="text-xs text-[var(--text-tertiary)]">
                  Password: {cred.pass}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Login Card — Right side */}
        <Card className="w-full max-w-[380px] lg:order-2">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
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

          <h1 className="text-center text-xl font-semibold tracking-tight text-[var(--text-primary)]">
            Welcome back
          </h1>
          <p className="mt-1 mb-5 text-center text-sm text-[var(--text-secondary)]">
            Sign in to your MarketBoard account
          </p>

          <form onSubmit={handleLogin} className="space-y-3">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />

            {error && (
              <div className="rounded-[var(--radius-md)] bg-[var(--error-light)] px-3 py-2">
                <p className="text-sm text-[var(--error)]">{error}</p>
              </div>
            )}

            <Button type="submit" fullWidth size="lg" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <button
            type="button"
            onClick={() => {
              setForgotEmail(email);
              setForgotOpen(true);
            }}
            className="mt-2.5 w-full text-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Forgot your password?
          </button>

          <Divider />

          <p className="text-center text-sm text-[var(--text-secondary)]">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              className="font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
            >
              Sign up
            </a>
          </p>
        </Card>
      </div>

      {/* Forgot Password Modal */}
      <Modal open={forgotOpen} onClose={handleCloseForgot}>
        {!forgotSent ? (
          <>
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
              Reset password
            </h2>
            <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
              Enter your email and we&apos;ll send you a reset link.
            </p>
            <form onSubmit={handleSendResetLink} className="space-y-4">
              <Input
                type="email"
                placeholder="you@company.com"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
                autoFocus
              />
              <Button type="submit" fullWidth disabled={forgotLoading}>
                {forgotLoading ? 'Sending...' : 'Send reset link'}
              </Button>
            </form>
            <button
              type="button"
              onClick={handleCloseForgot}
              className="mt-3 w-full text-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Back to sign in
            </button>
          </>
        ) : (
          <>
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
              We sent a password reset link to
            </p>
            <p className="mb-6 text-center text-sm font-medium text-[var(--text-primary)]">
              {forgotEmail}
            </p>
            <Button onClick={handleCloseForgot} fullWidth>
              Back to sign in
            </Button>
            <p className="mt-4 text-center text-xs text-[var(--text-tertiary)]">
              Didn&apos;t receive it? Check your spam folder.
            </p>
          </>
        )}
      </Modal>
    </>
  );
}
