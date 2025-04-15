import type React from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function PlaceholderImage({
  text = 'Placeholder Image',
  width = '100%',
  height = 300,
  className,
  ...props
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-zinc-200 text-zinc-500 overflow-hidden rounded-lg',
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    >
      {text}
    </div>
  );
}
