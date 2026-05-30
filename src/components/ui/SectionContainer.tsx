import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'muted';
}

export default function SectionContainer({
  children,
  className = '',
  id,
  background = 'white',
}: SectionContainerProps) {
  const bgStyle = background === 'muted' ? 'bg-muted' : 'bg-background';

  return (
    <section
      id={id}
      className={`${bgStyle} ${className} relative overflow-hidden`}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40">
        {children}
      </div>
    </section>
  );
}
