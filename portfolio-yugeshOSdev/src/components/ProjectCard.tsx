import { motion, MotionValue, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  href: string;
  image: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const rangeStart = index / totalCards;
  const rangeEnd = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);
  const hasImage = Boolean(project.image);
  const imageHeights = ['clamp(130px, 16vw, 230px)', 'clamp(160px, 22vw, 340px)'];

  const renderPreview = (label: string, className: string, height?: string) => {
    if (hasImage) {
      return (
        <img
          src={project.image}
          alt={`${project.name} ${label}`}
          className={className}
          style={height ? { height } : undefined}
        />
      );
    }

    return (
      <div
        className={`${className} relative flex items-end overflow-hidden border border-[#D7E2EA]/20 bg-[#111111]`}
        style={height ? { height } : undefined}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,0,168,0.22),transparent_34%),linear-gradient(135deg,rgba(215,226,234,0.08),rgba(215,226,234,0.02))]" />
        <span className="relative p-5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base">
          {project.name}
        </span>
      </div>
    );
  };

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: '#0C0C0C',
        }}
        className="absolute w-full max-w-[1760px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 origin-top"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-light tracking-wide"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>

          {project.href ? <LiveProjectButton href={project.href} /> : null}
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full">
          <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[40%]">
            {renderPreview('preview 1', 'w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]', imageHeights[0])}
            {renderPreview('preview 2', 'w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[60px]', imageHeights[1])}
          </div>

          {renderPreview('main', 'w-full md:w-[60%] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[60px] md:h-auto self-stretch')}
        </div>
      </motion.div>
    </div>
  );
}
