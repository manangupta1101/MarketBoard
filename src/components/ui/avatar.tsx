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
  'bg-blue-500 text-white',
  'bg-[var(--primary)] text-white',
  'bg-purple-500 text-white',
  'bg-amber-500 text-white',
  'bg-rose-500 text-white',
  'bg-cyan-500 text-white',
  'bg-orange-500 text-white',
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
          ${SIZE_STYLES[size]} rounded-full object-cover ${className}
        `}
      />
    );
  }

  return (
    <div
      className={`
        ${SIZE_STYLES[size]} flex items-center justify-center
        rounded-full font-bold
        ${getColorFromName(name)} ${className}
      `}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
};
