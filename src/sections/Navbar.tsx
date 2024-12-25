import Image from "next/image";
import Button from "@/components/Button";
import MobileNavbar from "@/components/MobileNavbar";
import Link from "next/link";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Examples", href: "#examples" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <>
            <header className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-3xl md:rounded-full backdrop-blur">
                        <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-between p-2">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/mapsily-logo.png"
                                    width={50}
                                    height={50}
                                    alt="mapsily-logo"
                                />
                                <span className="text-white md:text-xl font-semibold">
                                    Mapsily AI
                                </span>
                            </div>
                            <nav className="lg:flex justify-center items-center hidden">
                                <ul className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Link
                                href=" https://tally.so/r/mR8A0p"
                                target="_blank"
                                className="hidden md:inline-flex items-center justify-self-end"
                            >
                                <Button variant="primary">Join Waitlist</Button>
                            </Link>

                            <MobileNavbar navLinks={navLinks} />
                        </div>
                    </div>
                </div>
            </header>
            <div className="pb-[46px]"></div>
        </>
    );
}
