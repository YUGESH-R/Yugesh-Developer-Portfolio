import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  scrollOffset?: ScrollOffset;
}

export default function AnimatedText({
  text,
  className = '',
  style,
  scrollOffset = ['start 0.8', 'end 0.2'],
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: scrollOffset,
  });

  const words = text.match(/\S+\s*/g) ?? [];
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const index = charIndex;
            charIndex += 1;

            return (
              <AnimatedLetter
                key={index}
                char={char}
                scrollYProgress={scrollYProgress}
                index={index}
                total={totalChars}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}

interface AnimatedLetterProps {
  char: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  index: number;
  total: number;
}

function AnimatedLetter({
  char,
  scrollYProgress,
  index,
  total,
}: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible font-medium">
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 font-medium text-[#D7E2EA]"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}
