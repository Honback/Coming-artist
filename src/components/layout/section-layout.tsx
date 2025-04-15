import type React from 'react';
import { cn } from '@/lib/utils';

interface SectionLayoutProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray';
}

export function SectionLayout({
  id,
  title,
  subtitle,
  children,
  className,
  bgColor = 'white',
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        {
          'bg-white': bgColor === 'white',
          'bg-zinc-50': bgColor === 'gray',
        },
        className
      )}
    >
      <div className="container-custom">
        <h2 className="section-heading">{title}</h2>
        {subtitle && <p className="section-subheading">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
