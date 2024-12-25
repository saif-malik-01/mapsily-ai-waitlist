import Button from "@/components/Button";
import cursorYou from "@/assets/images/cursor-you.svg";
import StyledWord from "@/components/StyledWord";
import Link from "next/link";

export default function Hero() {
    // const [rightPointerScope, rightPointerAnimate] = useAnimate();

    // useEffect(() => {
    //     rightPointerAnimate([
    //         [
    //             rightPointerScope.current,
    //             { opacity: 1 },
    //             { duration: 0.5, delay: 1.5 },
    //         ],
    //         [rightPointerScope.current, { x: 177, y: 0 }, { duration: 0.5 }],
    //         [
    //             rightPointerScope.current,
    //             { x: 0, y: [0, 20, 0] },
    //             { duration: 0.5 },
    //         ],
    //     ]);
    // }, []);

    return (
        <section
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${cursorYou.src}), auto`,
            }}
        >
            <div className="container relative">
                {/* <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-5 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div> */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Your Conversations <br /> <StyledWord>Voice</StyledWord>
                </h1>
                <p className="text-center text-xl text-white/50 mt-4 max-w-2xl mx-auto">
                    Simplify conversations and automate tasks with an AI voice
                    agent designed for efficiency and precision.
                </p>
                <div className="mt-4 flex justify-center">
                    <Link href=" https://tally.so/r/mR8A0p" target="_blank">
                        <Button
                            type="submit"
                            variant="primary"
                            className="whitespace-nowrap"
                            size="sm"
                        >
                            Join Waitlist
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
