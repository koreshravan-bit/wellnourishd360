import { useEffect, useRef, useState } from 'react';
import { site } from '@/config/site';
import { PhotoPlaceholder } from '@/components/site';

export function DietitianPhoto({ className = '', avatar = false }: { className?: string; avatar?: boolean }) {
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) setFailed(true);
  }, []);
  const label = `${site.dietitian}, ${site.credentials}`;
  if (failed) {
    return <div className={`relative overflow-hidden ${className}`}>
      <PhotoPlaceholder caption={`${site.dietitian} headshot`} className="absolute inset-0 h-full w-full" />
      {avatar && <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-pale/80 font-display text-xl">{site.dietitian.split(/\s+/).map(part => part[0]).join('')}</span>}
    </div>;
  }
  return <img
    ref={imageRef}
    src={`${import.meta.env.BASE_URL}images/deepthi-harkar.webp`}
    alt={label}
    onError={() => setFailed(true)}
    className={`block object-cover object-[50%_20%] ${className}`}
  />;
}