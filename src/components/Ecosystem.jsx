import React from 'react';
import { BookOpen, Dumbbell, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Ecosystem = () => {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 bg-brand-navy" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-light">The Complete Analyst Ecosystem</h2>
                    <p className="mt-4 text-brand-slate">Everything you need to go from beginner to hired.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Learn Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-blue/30 transition-all overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[60px] group-hover:bg-brand-blue/20 transition-all" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-3 block">Guided Paths</h3>
                            <p className="text-brand-slate text-sm leading-relaxed">
                                Master SQL, Python, and Tableau with context. No random tutorials—only what's used in the industry.
                            </p>
                        </div>
                    </motion.div>

                    {/* Practice Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-brand-teal/30 transition-all overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-[60px] group-hover:bg-brand-teal/20 transition-all" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-6 text-brand-teal">
                                <Dumbbell className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-3 block">The SQL Gym</h3>
                            <p className="text-brand-slate text-sm leading-relaxed">
                                LeetCode-style practice specifically for business logic. Solve challenges that actual analysts face daily.
                            </p>
                        </div>
                    </motion.div>

                    {/* Execute Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-2xl bg-brand-dark border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-3 block">Virtual Internships</h3>
                            <p className="text-brand-slate text-sm leading-relaxed">
                                Complete full-scale projects that look great on your CV. Get code reviews from senior mentors.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
