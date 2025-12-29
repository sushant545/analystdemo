import React from 'react';
import { Database, FileCode, Search, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    const steps = [
        {
            icon: Database,
            title: "Raw Data",
            desc: "Learn the basics of data structures and types.",
            color: "text-brand-slate",
            bg: "bg-brand-slate/10",
            border: "group-hover:border-brand-slate"
        },
        {
            icon: FileCode,
            title: "Data Cleaning",
            desc: "Master Python (Pandas) to clean messy datasets.",
            color: "text-brand-blue",
            bg: "bg-brand-blue/10",
            border: "group-hover:border-brand-blue"
        },
        {
            icon: Search,
            title: "Insight Generation",
            desc: "SQL Deep Dives to answer complex business questions.",
            color: "text-brand-teal",
            bg: "bg-brand-teal/10",
            border: "group-hover:border-brand-teal"
        },
        {
            icon: PieChart,
            title: "Executive Reporting",
            desc: "Build dashboards in Tableau/PowerBI for stakeholders.",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "group-hover:border-purple-400"
        }
    ];

    return (
        <section className="py-20 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-light to-brand-slate">
                        Your Path to Become Analyst
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-teal mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Animated Vertical Line */}
                    <div className="absolute left-[27px] md:left-[43px] top-0 bottom-0 w-0.5 bg-white/10" />
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[27px] md:left-[43px] top-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-teal to-purple-500 origin-top"
                    />

                    <div className="space-y-12 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="relative pl-20 md:pl-24 group"
                            >
                                {/* Animated Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 + (idx * 0.2), type: "spring" }}
                                    className="absolute left-[22px] md:left-[38px] top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brand-dark bg-brand-slate z-10 group-hover:bg-brand-light transition-colors duration-300"
                                >
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${step.color.replace('text-', 'bg-')}`} />
                                </motion.div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, translateX: 10 }}
                                    className={`relative flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${step.border} group-hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${step.bg} ${step.color} shadow-inner`}>
                                        <step.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className={`text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${step.color === 'text-purple-400' ? 'from-purple-400 to-pink-400' : 'from-brand-blue to-brand-teal'} transition-all`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-brand-slate leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
