import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

const DMSerifDisplay = DM_Serif_Display({
    weight: ["400"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mapsily AI",
    description:
        "Crafted with Next.js, TailwindCSS, and Framer Motion for smooth transitions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${DMSerifDisplay.className} font-sans antialiased bg-[#0d0d0d] text-white`}
            >
                {children}
            </body>
        </html>
    );
}
