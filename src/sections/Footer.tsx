import StyledWord from "@/components/StyledWord";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/mapsily-logo.png"
                            width={50}
                            height={50}
                            alt="mapsily-logo"
                        />
                        <span className="text-white text-xl font-semibold">
                            Mapsily AI
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>
                            A product by{" "}
                            <Link href="https://mapsily.com" target="_blank">
                                <StyledWord>Mapsily</StyledWord>
                            </Link>
                        </span>
                        <Link href="#navbar">
                            <span className="h-12 w-12 flex items-center justify-center bg-primary rounded-full">
                                <ArrowUp
                                    className="text-[#0d0d0d]"
                                    strokeWidth={3}
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
