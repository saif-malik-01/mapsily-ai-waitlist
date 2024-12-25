import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Examples from "@/sections/Examples";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Introduction />
            <Features />
            <Examples />
            <Faqs />
            <CallToAction />
            <Footer />
        </main>
    );
}
