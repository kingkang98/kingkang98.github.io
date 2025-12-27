"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center mb-32 z-10 w-full">
            <div className="relative flex place-items-center z-[-1]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                        Next Level <br /> Creative
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        A futuristic blog template engineered for performance and aesthetics.
                    </p>

                    <Link href="#posts">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2 mx-auto"
                        >
                            Start Reading <ArrowRight size={20} />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
