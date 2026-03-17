'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { IconContainer } from '@/components/ui/icon-container';

type ResetStep = 'form' | 'success';

export default function ResetPasswordPage() {
  const [step, setStep] = useState<ResetStep>('form');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [reConfirmPassword, setReConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (confirmPassword !== reConfirmPassword) {
      setError('Re-confirmed password does not match.');
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    // Sign out so they log in fresh with the new password
    await supabase.auth.signOut();
    setStep('success');
  };

  const handleGoToLogin = () => {
    window.location.href = '/login';
  };

  if (step === 'success') {
    return (
      <Card className="mx-auto max-w-[380px]">
        <div className="mb-4 flex justify-center">
          <IconContainer size="lg" variant="outlined">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-2 text-center text-lg font-semibold text-[var(--text-primary)]">
          Password updated
        </h2>
        <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
          Your password has been successfully reset. You can now log in with your new password.
        </p>
        <Button onClick={handleGoToLogin} fullWidth>
          Go to sign in
        </Button>
      </Card>
    );
  }

  return (
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
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
        </IconContainer>
      </div>

      <h1 className="text-center text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
        Set new password
      </h1>
      <p className="mt-1.5 mb-8 text-center text-sm text-[var(--text-secondary)]">
        Choose a strong password for your account
      </p>

      <form onSubmit={handleResetPassword} className="space-y-4">
        <Input
          label="New password"
          type="password"
          placeholder="Min. 6 characters"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength={6}
        />

        <Input
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={6}
        />

        <Input
          label="Re-confirm password"
          type="password"
          placeholder="One more time to be sure"
          value={reConfirmPassword}
          onChange={(e) => setReConfirmPassword(e.target.value)}
          required
          minLength={6}
        />

        {error && (
          <div className="rounded-[var(--radius-md)] bg-[var(--error-light)] px-4 py-2.5 text-center text-sm text-[var(--error)]">
            {error}
          </div>
        )}

        <Button type="submit" fullWidth size="lg" disabled={loading}>
          {loading ? 'Updating...' : 'Reset password'}
        </Button>
      </form>

      <Divider />

      <p className="text-center text-sm text-[var(--text-secondary)]">
        Remember your password?{' '}
        <button
          type="button"
          onClick={handleGoToLogin}
          className="font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
        >
          Back to sign in
        </button>
      </p>
    </Card>
  );
}
