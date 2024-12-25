"use client";
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import india from "@/assets/images/india.png";
import england from "@/assets/images/england.png";
import china from "@/assets/images/china.png";
import french from "@/assets/images/french.png";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import StyledWord from "@/components/StyledWord";
import {
    AudioWaveform,
    Calendar,
    Phone,
    Settings,
    Settings2,
    Speech,
    VolumeX,
} from "lucide-react";

const features = [
    { title: "Privacy Backbone", Icon: <Settings /> },
    { title: "Function calling", Icon: <Calendar /> },
    { title: "1M+ concurrency", Icon: <Phone /> },
    { title: "Interruptions", Icon: <VolumeX /> },
    { title: "Proprietary endpointing", Icon: <Settings2 /> },
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-5xl md:text-7xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where speed meets <br/> <StyledWord>scaling</StyledWord>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Multilingual support"
                        description="Create voice agents in your users’ tongues–English, Spanish, German, Hindi, Portuguese, and 100+ others."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={india}
                                    alt="avatar1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={england}
                                    alt="avatar2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={china}
                                    alt="avatar3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                        src={french}
                                        alt="avatar4"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Turbo latency optimizations"
                        description="Optimized GPU inference, intelligent caching, low-latency audio streaming."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 text-center transition duration-500">
                                Incredible low <br />
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>latency</span>
                                </span>
                                <br />
                                at your hand.
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="WebRTC streaming"
                        description="Same protocol used by Google Meets and Microsoft Teams for the lowest latency and highest fault tolerance."
                        className="md:col-span-2 group md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                                <Speech />
                            </Key>
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                                Mapsily
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                                <AudioWaveform />
                            </Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="h-10 w-10 bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                {feature.Icon}
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
