import Image from 'next/image';

interface AvatarProps {
  name: string;
  src?: string | null;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_STYLES = {
  sm: 'h-7 w-7 text-[10px]',
  md: 'h-9 w-9 text-xs',
  lg: 'h-11 w-11 text-sm',
};

const AVATAR_COLORS = [
  'bg-blue-100 text-blue-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-violet-100 text-violet-700',
  'bg-rose-100 text-rose-700',
  'bg-cyan-100 text-cyan-700',
  'bg-orange-100 text-orange-700',
];

const getColorFromName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
};

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export const Avatar = ({ name, src, size = 'md', className = '' }: AvatarProps) => {
  if (src) {
    const pxSize = size === 'sm' ? 28 : size === 'md' ? 36 : 44;
    return (
      <Image
        src={src}
        alt={name}
        width={pxSize}
        height={pxSize}
        className={`
          ${SIZE_STYLES[size]} rounded-full object-cover
          ring-2 ring-[var(--surface)] ${className}
        `}
      />
    );
  }

  return (
    <div
      className={`
        ${SIZE_STYLES[size]} flex items-center justify-center
        rounded-full font-medium
        ${getColorFromName(name)} ${className}
      `}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
};
