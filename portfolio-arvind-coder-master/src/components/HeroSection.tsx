import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import arvindPortrait from '../assets/img/arvind_2.png';

export default function HeroSection() {
  return (
    <section id="home" className="h-screen scroll-mt-20 flex flex-col overflow-hidden relative">
      <div className="flex flex-col flex-1 px-5 sm:px-8 md:px-10 relative z-0">
        <FadeIn delay={0} y={-20}>
          <Navbar />
        </FadeIn>

        <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap w-full"
            style={{ fontSize: 'clamp(3rem, 14vw, 14.5rem)' }}
          >
            Hi, i&apos;m Arvind
          </h1>
        </FadeIn>

        <div className="flex-1" />

        <div className="relative flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Senior software engineer building AI-powered platforms, scalable backends, and the occasional web project for the people I love.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.5}
            y={20}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <SocialLinks />
          </FadeIn>
        </div>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={arvindPortrait}
            alt="Hero portrait"
            className="w-full h-auto object-contain"
          />
        </FadeIn>
      </Magnet>
    </section>
  );
}
