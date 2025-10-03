'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Clear any existing triggers
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];

    // Fade in sections
    const fadeElements = gsap.utils.toArray('.fade-in-section');
    fadeElements.forEach((element: any) => {
      gsap.set(element, { opacity: 0, y: 50 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Slide in from left
    const slideLeftElements = gsap.utils.toArray('.slide-in-left');
    slideLeftElements.forEach((element: any) => {
      gsap.set(element, { x: -100, opacity: 0 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Slide in from right
    const slideRightElements = gsap.utils.toArray('.slide-in-right');
    slideRightElements.forEach((element: any) => {
      gsap.set(element, { x: 100, opacity: 0 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Scale up animations
    const scaleElements = gsap.utils.toArray('.scale-in');
    scaleElements.forEach((element: any) => {
      gsap.set(element, { scale: 0.8, opacity: 0 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(element, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Stagger animations for children
    const staggerContainers = gsap.utils.toArray('.stagger-children');
    staggerContainers.forEach((container: any) => {
      const children = container.querySelectorAll('.stagger-item');
      gsap.set(children, { opacity: 0, y: 30 });
      
      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Parallax effect for images
    const parallaxImages = gsap.utils.toArray('.parallax-image');
    parallaxImages.forEach((image: any) => {
      const trigger = ScrollTrigger.create({
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(image, {
            yPercent: (self.progress - 0.5) * 20,
            ease: 'none'
          });
        }
      });
      triggersRef.current.push(trigger);
    });

    // Fade in text elements
    const fadeTextElements = gsap.utils.toArray('.fade-text');
    fadeTextElements.forEach((element: any) => {
      gsap.set(element, { opacity: 0, y: 20 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Fade in headings with slight delay
    const fadeHeadingElements = gsap.utils.toArray('.fade-heading');
    fadeHeadingElements.forEach((element: any) => {
      gsap.set(element, { opacity: 0, y: 30 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Split text reveal animation (word by word)
    const revealTextElements = gsap.utils.toArray('.reveal-text');
    revealTextElements.forEach((element: any) => {
      const words = element.textContent.split(' ');
      element.innerHTML = words.map((word: string) => 
        `<span class="word" style="display: inline-block; opacity: 0;">${word}&nbsp;</span>`
      ).join('');
      
      const wordElements = element.querySelectorAll('.word');
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(wordElements, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Fade up paragraphs
    const fadeParagraphs = gsap.utils.toArray('.fade-paragraph');
    fadeParagraphs.forEach((element: any) => {
      gsap.set(element, { opacity: 0, y: 25 });
      
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out'
          });
        },
        once: true,
      });
      triggersRef.current.push(trigger);
    });

    // Cleanup
    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);
};

