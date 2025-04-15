import type React from 'react';
import { cn } from '@/lib/utils';

interface PosterCardProps {
  title?: string;
  titleClassName?: string;
  className?: string;
  children: React.ReactNode;
  color?: 'white' | 'blue' | 'purple';
}

export function PosterCard({
  title,
  titleClassName,
  className,
  children,
  color = 'white'
}: PosterCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-lg overflow-hidden",
        {
          "bg-white": color === 'white',
          "bg-blue-100": color === 'blue',
          "bg-purple-100": color === 'purple',
        },
        className
      )}
    >
      {title && (
        <div
          className={cn(
            "py-3 px-4 font-bold text-white text-lg",
            {
              "bg-blue-600": color === 'white' || color === 'blue',
              "bg-purple-500": color === 'purple',
            },
            titleClassName
          )}
        >
          {title}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
