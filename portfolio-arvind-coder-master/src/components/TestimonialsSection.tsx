import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';
import type { Testimonial } from '../types/portfolio';

function getInitials(name: string) {
  return name
    .replace('// DUMMY:', '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card flex h-[250px] w-[290px] flex-shrink-0 flex-col justify-between rounded-[30px] border border-[#D7E2EA]/20 bg-[#111111] p-6 sm:h-[260px] sm:w-[340px] sm:rounded-[36px] sm:p-7">
      <p className="text-sm italic leading-relaxed text-[#D7E2EA]/80 sm:text-[15px]">
        “{testimonial.quote}”
      </p>

      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-black uppercase tracking-wider text-white"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold uppercase tracking-widest text-[#D7E2EA]">
            {testimonial.name}
          </p>
          <p className="truncate text-xs text-[#D7E2EA]/50">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const { testimonials = [] } = usePortfolio();
  const marqueeItems = [...testimonials, ...testimonials];

  if (!testimonials.length) return null;

  return (
    <section
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24 md:px-10 md:pt-52 md:pb-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <div className="relative mb-14 sm:mb-16 md:mb-20">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
              style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
            >
              What People Say
            </h2>
            <span className="testimonial-emoji absolute left-[4%] top-[-18%] rotate-[-14deg] text-3xl sm:text-5xl">
              🤩
            </span>
            <span className="testimonial-emoji testimonial-emoji-delay absolute right-[12%] top-[-10%] rotate-[10deg] text-2xl sm:text-4xl">
              💎
            </span>
            <span className="testimonial-emoji absolute bottom-[-14%] right-[4%] rotate-[-8deg] text-3xl sm:text-5xl">
              🚀
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="testimonial-marquee overflow-hidden">
        <div className="testimonial-track flex w-max gap-4 sm:gap-5">
          {marqueeItems.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
