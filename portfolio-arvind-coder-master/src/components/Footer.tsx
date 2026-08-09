import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { usePortfolio } from '../hooks/usePortfolio';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (!profile.social.email) return;

    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-[#D7E2EA]/10 px-5 py-16 sm:px-8 md:px-10 md:py-24"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-10">
        <div className="flex flex-col gap-4">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
          >
            {profile.name}
          </h2>
          <p className="max-w-md text-base font-light leading-relaxed text-[#D7E2EA]/80 sm:text-lg">
            {profile.specialization}
          </p>
          <p className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/45">
            {profile.location}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D7E2EA]/45">
            Navigate
          </h3>
          <nav className="flex flex-col items-start gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D7E2EA]/45">
            Reach Out
          </h3>

          <div className="flex flex-col gap-3 text-[#D7E2EA]/75">
            <div className="flex items-center gap-2">
              <span className="break-all text-sm sm:text-base">{profile.social.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email"
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] transition duration-200 hover:scale-105 hover:bg-[#D7E2EA]/10"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <p className="text-sm sm:text-base">{profile.social.phone}</p>
          </div>

          <SocialLinks className="flex-wrap" />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-[#D7E2EA]/10 pt-6 md:mt-20">
        <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Arvind Singh. Crafted with care.</p>
          <p>Built with Next.js · Designed for the long run</p>
        </div>
      </div>
    </footer>
  );
}
