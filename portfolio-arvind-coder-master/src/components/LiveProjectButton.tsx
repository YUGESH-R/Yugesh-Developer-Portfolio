interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  onClick,
  className = '',
}: LiveProjectButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA]
    px-8 py-3 sm:px-10 sm:py-3.5
    text-[#D7E2EA] font-medium uppercase tracking-widest
    text-sm sm:text-base
    transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20
    whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
}
