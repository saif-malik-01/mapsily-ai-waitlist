"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";

interface NavLink {
    label: string;
    href: string;
}

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden justify-self-end"
                onClick={() => setIsOpen(!isOpen)}
            >
                <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                        "origin-left transition",
                        isOpen && "rotate-45 -translate-y-1"
                    )}
                ></line>
                <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                ></line>
                <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                        "origin-left transition",
                        isOpen && "-rotate-45 translate-y-1"
                    )}
                ></line>
            </svg>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden col-span-3 w-full"
                    >
                        <div className="flex flex-col items-center gap-4 py-4">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                            <Link
                                href=" https://tally.so/r/mR8A0p"
                                target="_blank"
                            >
                                <Button variant="primary">Join Waitlist</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
