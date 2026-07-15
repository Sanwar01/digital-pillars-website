import { motion, useReducedMotion, type Easing } from 'framer-motion';

export const EASE: Easing = [0.22, 1, 0.36, 1];

const revealMotionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  header: motion.header,
  footer: motion.footer,
} as const;

type RevealAs = keyof typeof revealMotionTags;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealAs;
};

type KineticHeadlineProps = {
  lines: string[];
  className?: string;
  delay?: number;
};
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = '',
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = revealMotionTags[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export function KineticHeadline({
  lines,
  className = '',
  delay = 0,
}: KineticHeadlineProps) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { y: '110%' }}
            animate={reduce ? { opacity: 1 } : { y: '0%' }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
