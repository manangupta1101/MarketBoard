'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Divider } from '@/components/ui/divider';
import { IconContainer } from '@/components/ui/icon-container';

type OnboardingStep = 'choose' | 'create-org' | 'join-success';

export default function AcceptInvitePage() {
  const [step, setStep] = useState<OnboardingStep>('choose');
  const [orgName, setOrgName] = useState('');

  if (step === 'create-org') {
    return (
      <Card className="mx-auto max-w-[400px]">
        <div className="mb-6 flex justify-center">
          <IconContainer>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </IconContainer>
        </div>

        <h1 className="text-center text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
          Create organization
        </h1>
        <p className="mt-1.5 mb-8 text-center text-sm text-[var(--text-secondary)]">
          Set up your marketing team workspace
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep('join-success');
          }}
          className="space-y-4"
        >
          <Input
            label="Organization name"
            placeholder="e.g., Acme Corp Marketing"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            required
          />
          <Button type="submit" fullWidth size="lg">
            Create organization
          </Button>
        </form>

        <button
          type="button"
          onClick={() => setStep('choose')}
          className="mt-3 w-full text-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Back
        </button>
      </Card>
    );
  }

  if (step === 'join-success') {
    return (
      <Card className="mx-auto max-w-[380px]">
        <div className="mb-4 flex justify-center">
          <IconContainer size="lg" variant="outlined">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </IconContainer>
        </div>
        <h2 className="mb-2 text-center text-lg font-semibold text-[var(--text-primary)]">
          You&apos;re all set!
        </h2>
        <p className="mb-6 text-center text-sm text-[var(--text-secondary)]">
          {orgName ? `"${orgName}" has been created.` : 'You\'ve joined the organization.'}{' '}
          Head to your dashboard to get started.
        </p>
        <Button
          onClick={() => { window.location.href = '/board'; }}
          fullWidth
        >
          Go to dashboard
        </Button>
      </Card>
    );
  }

  // Default: choose step
  return (
    <Card className="mx-auto max-w-[400px]">
      <div className="mb-6 flex justify-center">
        <IconContainer>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </IconContainer>
      </div>

      <h1 className="text-center text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
        Welcome to MarketBoard
      </h1>
      <p className="mt-1.5 mb-8 text-center text-sm text-[var(--text-secondary)]">
        How would you like to get started?
      </p>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setStep('create-org')}
          className="
            flex w-full items-center gap-4
            rounded-[var(--radius-lg)] border border-[var(--border)]
            p-4 text-left
            transition-all duration-[var(--transition-fast)]
            hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)]
          "
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">Create an organization</p>
            <p className="text-xs text-[var(--text-secondary)]">Start fresh with your own workspace</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setStep('join-success')}
          className="
            flex w-full items-center gap-4
            rounded-[var(--radius-lg)] border border-[var(--border)]
            p-4 text-left
            transition-all duration-[var(--transition-fast)]
            hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)]
          "
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] text-[var(--text-secondary)]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">Join with invitation</p>
            <p className="text-xs text-[var(--text-secondary)]">Use an invite link from your team</p>
          </div>
        </button>
      </div>

      <Divider />

      <p className="text-center text-sm text-[var(--text-secondary)]">
        Already have an account?{' '}
        <a href="/login" className="font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]">Sign in</a>
      </p>
    </Card>
  );
}
