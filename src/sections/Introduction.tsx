"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Mapsily AI voice agent is an intelligent tool that understands and responds to voice commands. It helps automate tasks, manage conversations, and improve communication, making your work easier and more efficient without the complexity of traditional systems.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>About</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl text-center font-medium mt-10">
                        <span className="text-white/15">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500",
                                        index < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                    </div>
                </div>

                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
