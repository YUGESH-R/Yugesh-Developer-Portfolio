import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)));

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative scroll-mt-20 px-5 sm:px-8 md:px-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="flex flex-col items-center py-20 sm:py-24 md:py-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {orderedProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={{
            number: String(index + 1).padStart(2, '0'),
            category: project.subtitle,
            name: project.title,
            href: project.link && !project.link.startsWith('//') ? project.link : '',
            image: project.image,
          }}
          index={index}
          totalCards={orderedProjects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
