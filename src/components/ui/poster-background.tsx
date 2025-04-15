import type React from 'react';
import { MusicNoteIcon, FilmIcon, PencilIcon, GuitarIcon, KeyboardIcon, CameraIcon, PaletteIcon } from '@/components/icons/art-icons';
import { cn } from '@/lib/utils';

interface PosterBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function PosterBackground({ className, children }: PosterBackgroundProps) {
  return (
    <div className={cn("poster-gradient-bg relative overflow-hidden min-h-screen", className)}>
      {/* 음표 아이콘 - 왼쪽 상단 */}
      <MusicNoteIcon className="art-icon-decoration text-white/20 top-20 left-10" size={48} />
      <MusicNoteIcon className="art-icon-decoration text-white/20 bottom-40 left-20" size={32} />
      <MusicNoteIcon className="art-icon-decoration text-white/20 bottom-80 right-10" size={40} />

      {/* 필름 아이콘 - 오른쪽 상단 */}
      <FilmIcon className="art-icon-decoration text-white/20 top-40 right-20" size={56} />

      {/* 연필 아이콘 - 왼쪽 중간 */}
      <PencilIcon className="art-icon-decoration text-white/20 top-1/2 left-10 -rotate-45" size={48} />

      {/* 키보드 아이콘 - 오른쪽 하단 */}
      <KeyboardIcon className="art-icon-decoration text-white/20 bottom-20 right-10" size={64} />

      {/* 기타 아이콘 - 오른쪽 하단 */}
      <GuitarIcon className="art-icon-decoration text-white/20 bottom-40 right-40" size={48} />

      {/* 카메라 아이콘 - 왼쪽 하단 */}
      <CameraIcon className="art-icon-decoration text-white/20 bottom-20 left-40" size={48} />

      {/* 팔레트 아이콘 - 왼쪽 하단 */}
      <PaletteIcon className="art-icon-decoration text-white/20 bottom-60 left-56" size={36} />

      {/* 실제 콘텐츠 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
