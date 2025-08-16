'use client';

import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  lazy?: boolean;
  quality?: 'high' | 'medium' | 'low';
}

export default function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  lazy = true,
  quality = 'medium'
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(!lazy);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, [lazy, hasLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isIntersecting) return;

    const playVideo = async () => {
      try {
        if (autoPlay) {
          await video.play();
        }
      } catch (error) {
        console.error('Video play failed:', error);
      }
    };

    // Add a small delay to ensure the video is ready
    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, [isIntersecting, autoPlay]);

  const getVideoSrc = () => {
    if (quality === 'low') {
      return src.replace('.mp4', '_low.mp4');
    } else if (quality === 'high') {
      return src.replace('.mp4', '_high.mp4');
    }
    return src;
  };

  return (
    <video
      ref={videoRef}
      className={`${className} transform-gpu`}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={lazy ? 'none' : 'metadata'}
      poster={poster}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      {isIntersecting && (
        <source src={getVideoSrc()} type="video/mp4" />
      )}
      Your browser does not support the video tag.
    </video>
  );
}
