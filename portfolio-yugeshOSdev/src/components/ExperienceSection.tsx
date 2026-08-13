import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section
      id="experience"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center">
        {experience.map((role, i) => {
          const number = String(i + 1).padStart(2, '0');
          const highlights = role.highlights.slice(0, 3);

          return (
            <FadeIn
              key={`${role.company}-${role.period}`}
              delay={i * 0.1}
              y={30}
              className="flex flex-col items-center w-full max-w-5xl"
            >
              {i > 0 && (
                <div
                  className="w-full"
                  style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
                />
              )}
              <div className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 w-full">
                <span
                  className="hero-heading font-black uppercase leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {number}
                </span>

                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-1">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[#D7E2EA] font-medium uppercase"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {role.company} — {role.role}
                    </span>
                    <span className="w-fit rounded-full border border-[#D7E2EA]/20 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-[#D7E2EA]/60 sm:text-xs">
                      {role.period}
                    </span>
                  </div>

                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#D7E2EA]/70"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {role.summary}
                  </p>

                  <ul className="flex flex-col gap-2 pl-4 text-[#D7E2EA]/60">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="list-disc font-light leading-relaxed"
                        style={{ fontSize: 'clamp(0.78rem, 1.2vw, 1rem)' }}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
