"use client";

import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";

const StyledWord: React.FC<{
    className?: string;
    children: React.ReactChild;
}> = ({ className, children }) => {
    const [width, setWidth] = React.useState(0);
    const wordRef = React.useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        if (wordRef.current) {
            setWidth(wordRef.current.offsetWidth);
        }
    }, [wordRef.current]);

    return (
        <div className="w-fit inline-block">
            <p
                ref={wordRef}
                className={twMerge(
                    `w-fit font-display italic text-primary`,
                    className
                )}
            >
                {children}
            </p>
            <Image
                src="/patterns/pattern-line.png"
                alt="pattern-line"
                width={width}
                height={width}
                className="-mt-1"
            />
        </div>
    );
};

export default StyledWord;
