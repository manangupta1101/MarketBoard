import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const PageHeader = ({ title, description, actions }: PageHeaderProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 py-8 lg:px-8 ${className}`}>
      <div className="flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
};

interface PageSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const PageSection = ({ title, description, children, className = '' }: PageSectionProps) => {
  return (
    <section className={className}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h2 className="text-lg font-extrabold text-[var(--text-primary)]">{title}</h2>
          )}
          {description && (
            <p className="mt-0.5 text-sm font-medium text-[var(--text-secondary)]">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
