import { ReactNode } from 'react';
import useReveal from '@/hooks/use-reveal';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
  surface?: boolean;
}

const Section = ({ id, eyebrow, title, lead, children, className = '', surface }: SectionProps) => {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>();

  return (
    <section
      id={id}
      className={`${surface ? 'bg-secondary/60' : ''} scroll-mt-[72px] border-t border-border ${className}`}
    >
      <div
        ref={ref}
        className={`${revealClass} mx-auto max-w-[1400px] px-6 py-24 md:px-12 lg:px-[120px] lg:py-[130px]`}
      >
        {(eyebrow || title || lead) && (
          <div className="max-w-[46em]">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-6 font-head text-[1.85rem] font-light leading-[1.14] tracking-[-0.02em] sm:text-[2.4rem]">
                {title}
              </h2>
            )}
            {lead && <p className="mt-6 max-w-[34em] leading-[1.65] text-muted-foreground">{lead}</p>}
          </div>
        )}
        <div className={eyebrow || title || lead ? 'mt-16 lg:mt-20' : ''}>{children}</div>
      </div>
    </section>
  );
};

export default Section;