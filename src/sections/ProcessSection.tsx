'use client';

import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/animations';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand business goals and pain points.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Identify highest ROI opportunities.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop and implement solutions.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Measure results and improve continuously.',
  },
];

function StepCard({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) {
  return (
    <div className="relative select-none">
      <div>
        <span className="text-6xl font-extralight tracking-tighter text-accent/20 font-heading block">
          {step.number}
        </span>
        <h3 className="text-xl font-bold mt-5 text-foreground tracking-tight">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2 font-sans">{step.description}</p>
      </div>

      {!isLast && (
        <div className="hidden md:block absolute top-6 left-full w-full h-px border-t border-dashed border-accent/15" />
      )}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <SectionContainer id="process" background="muted">
      <AnimatedHeading as="h2" align="center">
        Our Process
      </AnimatedHeading>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4">
        A proven methodology focused on delivering maximum ROI at every stage.
      </p>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {steps.map((step, index) => (
          <StaggerItem key={step.number}>
            <StepCard step={step} isLast={index === steps.length - 1} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionContainer>
  );
}
