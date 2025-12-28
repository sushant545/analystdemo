import React from 'react';
import { Play, ArrowRight, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                            </span>
                            Now accepting beta users
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light tracking-tight mb-6"
                        >
                            Stop Watching Tutorials. <br className="hidden lg:block" />
                            <span className="text-gradient">Start Solving Real Business Problems.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            The only platform that bridges the gap between certification and employment through simulated work experience. Build a portfolio that gets you hired.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-teal text-brand-navy font-bold rounded-xl shadow-lg hover:shadow-brand-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                                Start For Free <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-brand-light border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Play className="w-5 h-5 fill-current" /> Watch Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center lg:items-start"
                        >
                            <p className="text-sm text-brand-slate mb-3">Trusted by aspiring analysts from</p>
                            <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                                {/* Simple text placeholders for logos for now */}
                                <span className="font-bold text-lg">Google</span>
                                <span className="font-bold text-lg">Meta</span>
                                <span className="font-bold text-lg">Amazon</span>
                                <span className="font-bold text-lg">Netflix</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual - Floating Code Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-brand-teal/20 blur-3xl rounded-full opacity-20 animate-pulse" />

                        {/* Code Window */}
                        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-brand-dark shadow-2xl animate-float">
                            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="ml-4 text-xs text-brand-slate font-mono">analysis.sql</div>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed">
                                <div className="text-pink-400">SELECT</div>
                                <div className="pl-4 text-brand-light">product_category,</div>
                                <div className="pl-4 text-brand-light">SUM(revenue) <span className="text-pink-400">AS</span> total_sales</div>
                                <div className="text-pink-400">FROM</div>
                                <div className="pl-4 text-brand-light">monthly_transactions</div>
                                <div className="text-pink-400">WHERE</div>
                                <div className="pl-4 text-brand-light">year = <span className="text-yellow-300">'2025'</span></div>
                                <div className="text-pink-400">GROUP BY</div>
                                <div className="pl-4 text-brand-light">product_category;</div>
                            </div>

                            {/* Result Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute bottom-6 right-6 left-6 bg-brand-navy/90 backdrop-blur border border-white/10 rounded-lg p-4"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-xs font-semibold text-brand-teal uppercase tracking-wider flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4" /> Query Result
                                    </div>
                                    <span className="text-[10px] text-brand-slate">0.04s execution</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-brand-light">Enterprise SaaS</span>
                                        <span className="text-brand-light font-mono">$1,240,500</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-1.5">
                                        <div className="bg-brand-blue h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>

                                    <div className="flex justify-between text-xs pt-1">
                                        <span className="text-brand-light">Consumer Apps</span>
                                        <span className="text-brand-light font-mono">$840,200</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-1.5">
                                        <div className="bg-brand-teal h-1.5 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
