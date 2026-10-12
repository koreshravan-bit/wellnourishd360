import { useEffect, useRef, useState } from 'react';
import { site } from '@/config/site';
import { PhotoPlaceholder } from '@/components/site';

/** `priority` marks the page's main hero photo (loaded eagerly at high priority); everything else lazy-loads. */
export function DietitianPhoto({ className = '', avatar = false, priority = false }: { className?: string; avatar?: boolean; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) setFailed(true);
  }, []);
  const label = `${site.dietitian}, ${site.credentials}`;
  if (failed) {
    return <div className={`relative overflow-hidden ${className}`}>
      <PhotoPlaceholder className="absolute inset-0 h-full w-full" />
      {avatar && <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-pale/80 font-display text-xl">{site.dietitian.split(/\s+/).map(part => part[0]).join('')}</span>}
    </div>;
  }
  return <img
    ref={imageRef}
    src={`${import.meta.env.BASE_URL}images/${avatar ? 'deepthi-harkar-avatar.webp' : 'deepthi-harkar.webp'}`}
    alt={label}
    width={avatar ? 160 : 520}
    height={avatar ? 160 : 923}
    {...(priority ? { fetchPriority: 'high' as const, loading: 'eager' as const } : { loading: 'lazy' as const, decoding: 'async' as const })}
    onError={() => setFailed(true)}
    className={`block object-cover ${avatar ? '' : 'object-[50%_20%]'} ${className}`}
  />;
}
