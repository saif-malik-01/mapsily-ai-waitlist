"use client";

import StyledWord from "@/components/StyledWord";
import Tag from "@/components/Tag";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "Is it going to hard to set up?",
        answer: "No. In fact, the setup could not be easier. All you need is one line to start a call via the API, or on any of our client libraries. For more advanced features like function calling, you have to set up a Server URL to accept and respond to messages.",
    },
    {
        question: "Could't I build this myself and save money?",
        answer: "You could, but there are good reasons for not doing so. The vast majority of the cost to use Vapi is provider fees which you would have to incur anyway. While we do add on a small base fee, this is more than offset by the fact that we support and maintain the whole system, and continue to reduce latency and improve the conversational experience. You even have the option of bringing your own Provider Keys, and only paying us for the value we provide. We specialize in Voice AI and it’s where we devote our time and resources, so we’ll always be leading the way. This lets you keep your focus on building exceptional products.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a free trial so you can explore the features and benefits before committing to a paid plan.",
    },
    {
        question: "How do I contact support?",
        answer: "You can reach out to our support team via email, live chat, or the contact form on our website. We’re here to help with any questions or technical issues.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleSelectedIndex = (index: number) => {
        if (index === selectedIndex) {
            return setSelectedIndex(null);
        }
        setSelectedIndex(index);
    };
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <StyledWord>answers</StyledWord>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto ">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 hover:cursor-pointer"
                            onClick={() => handleSelectedIndex(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === index && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
