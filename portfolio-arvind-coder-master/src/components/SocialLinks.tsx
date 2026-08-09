import { Github, Instagram, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

const buttonStyle = {
  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '1px solid rgba(227, 227, 227, 0.8)',
  outlineOffset: '-2px',
};

export default function SocialLinks({
  className = '',
  iconClassName = 'h-3.5 w-3.5 sm:h-4 sm:w-4',
  showLabels = false,
}: SocialLinksProps) {
  const { profile } = usePortfolio();
  const { social } = profile;

  const links: SocialLink[] = [
    { label: 'LinkedIn', href: social.linkedin, Icon: Linkedin },
    { label: 'GitHub', href: social.github, Icon: Github },
    { label: 'Instagram', href: social.instagram, Icon: Instagram },
    { label: 'Email', href: social.email ? `mailto:${social.email}` : '', Icon: Mail },
  ].filter((link) => link.href);

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          style={buttonStyle}
          className="inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-white transition duration-200 hover:scale-105 hover:shadow-[0_0_18px_rgba(182,0,168,0.45)] active:scale-100 sm:px-4 sm:py-2.5"
        >
          <Icon className={iconClassName} strokeWidth={2} />
          {showLabels ? (
            <span className="text-[0.65rem] font-medium uppercase tracking-widest sm:text-xs">
              {label}
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}
