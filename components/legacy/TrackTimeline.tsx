"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export type TimelineSide = 'left' | 'right';

export interface TrackTimelineItem {
	year: number | string;
	title: string;
	body?: string;
	side?: TimelineSide;
	image?: string;
}

interface TrackTimelineProps {
	items: TrackTimelineItem[];
	trackSrc?: string;
	trainSrc?: string;
	/** fine-tune horizontal alignment of the train relative to the track (px, +right / -left) */
	trainXOffset?: number;
}

export default function TrackTimeline({
	items,
	trackSrc = '/legacytrack.svg',
	trainSrc = '/legacytrain.svg',
	trainXOffset = 0,
}: TrackTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

    // Dynamically compute the available travel height for the train in px
    const TRAIN_HEIGHT_PX = 192; // approx default train height (md breakpoint). Adjust with class if you change size
    const [travelPx, setTravelPx] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;
        const el = containerRef.current;
        const update = () => {
            const h = el.getBoundingClientRect().height;
            setTravelPx(Math.max(0, h - TRAIN_HEIGHT_PX));
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // Train translateY in px – from 0 to the computed travel height
    const trainY = useTransform(scrollYProgress, [0, 1], [0, travelPx]);
    // Overlay starts just beneath the train's bottom edge
    const overlayTopPx = useTransform(trainY, (v) => v + TRAIN_HEIGHT_PX);

	const normalizedItems = useMemo(() => {
		return items.map((it, idx) => ({ ...it, side: it.side ?? (idx % 2 === 0 ? 'left' : 'right') as TimelineSide }));
	}, [items]);

	return (
		<section ref={containerRef} className="relative bg-white py-24">
			<div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
				{/* Centered vertical track (background image), layered twice to avoid visible seams */}
				<div
					className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-56 md:w-72 pointer-events-none"
					style={{
						// Sleepers (horizontal ties): 18px spacing, 6px thickness
						backgroundImage:
							'repeating-linear-gradient(to bottom, transparent 0, transparent 12px, #e6e6e6 12px, #e6e6e6 18px), ' +
							// Rails (two vertical bars)
							'linear-gradient(to right, transparent 0, transparent 46%, #9e9e9e 46%, #6e6e6e 48%, transparent 48%, transparent 52%, #6e6e6e 52%, #9e9e9e 54%, transparent 54%, transparent 100%)',
						backgroundRepeat: 'no-repeat repeat, no-repeat',
						backgroundSize: '12% 18px, 100% 100%',
						backgroundPosition: 'center top, center',
					}}
				/>

				{/* Track unrevealed overlay (below the train). This makes the track appear revealed as train passes. */}
				<motion.div
					className="absolute left-1/2 -translate-x-1/2 w-56 md:w-72 bg-white pointer-events-none"
					style={{ top: overlayTopPx, bottom: 0 }}
				/>

                <motion.img
                    src={trainSrc}
                    alt="Train"
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-40 md:w-48 select-none"
                    style={{ y: trainY, x: trainXOffset }}
                />

				<ul className="relative space-y-24">
					{normalizedItems.map((item, index) => (
						<li key={`${item.year}-${index}`} className="relative">
							<div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${item.side === 'left' ? '' : ''}`}>
								{item.side === 'left' ? (
									<>
										<motion.div
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6 }}
											viewport={{ once: true, amount: 0.3 }}
											className="text-right"
										>
											<p className="text-4xl md:text-5xl font-extrabold text-[#8A393B]">{item.year}</p>
											<h4 className="text-2xl md:text-3xl font-semibold mt-2 text-[#8A393B]">{item.title}</h4>
											{item.body && <p className="text-lg text-gray-700 mt-3">{item.body}</p>}
										</motion.div>
										<div className="hidden md:block" />
									</>
								) : (
									<>
										<div className="hidden md:block" />
										<motion.div
											initial={{ opacity: 0, y: 40 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6 }}
											viewport={{ once: true, amount: 0.3 }}
										>
											<p className="text-4xl md:text-5xl font-extrabold text-[#8A393B]">{item.year}</p>
											<h4 className="text-2xl md:text-3xl font-semibold mt-2 text-[#8A393B]">{item.title}</h4>
											{item.body && <p className="text-lg text-gray-700 mt-3">{item.body}</p>}
										</motion.div>
									</>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}


