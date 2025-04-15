import React from 'react';
import { cn } from '@/lib/utils';
import { PosterBackground } from './poster-background';
import { Button } from './button';
import Link from 'next/link';

interface PosterHeroProps {
  className?: string;
  title: string;
  subtitle?: string;
  contentItems?: {
    id?: string;
    title: string;
    description: string;
  }[];
  details?: {
    id?: string;
    label: string;
    value: string;
  }[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function PosterHero({
  className,
  title,
  subtitle,
  contentItems,
  details,
  primaryCta,
  secondaryCta,
}: PosterHeroProps) {
  return (
    <PosterBackground className={className}>
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          {/* 제목 */}
          <div className="text-center mb-10">
            <h1 className="poster-section-heading whitespace-pre-line">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mt-4 font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* 콘텐츠 아이템 */}
          {contentItems && contentItems.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentItems.map((item) => (
                  <div
                    key={item.id || `content-item-${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-white"
                  >
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 상세 정보 */}
          {details && details.length > 0 && (
            <div className="space-y-4 text-white mb-10">
              {details.map((detail) => (
                <div
                  key={detail.id || `detail-${detail.label.replace(/\s+/g, '-').toLowerCase()}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-2"
                >
                  <span className="font-bold sm:w-32">{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            {primaryCta && (
              <Link href={primaryCta.href}>
                <Button size="lg" className="poster-button-primary w-full sm:w-auto">
                  {primaryCta.text}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="lg" className="poster-button-secondary w-full sm:w-auto">
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </PosterBackground>
  );
}
