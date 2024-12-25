"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Link
                            href="https://tally.so/r/mR8A0p"
                            target="_blank"
                            key={i}
                            className="flex items-center gap-16"
                        >
                            <span className="text-primary text-7xl group-hover:text-white">
                                &#10038;
                            </span>
                            <span className="group-hover:text-primary">
                                Join waitlist now
                            </span>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
