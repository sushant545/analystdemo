import React from 'react';
import { Database, FileCode, Search, PieChart } from 'lucide-react';

const Roadmap = () => {
    const steps = [
        {
            icon: Database,
            title: "Raw Data",
            desc: "Learn the basics of data structures and types.",
            color: "text-brand-slate"
        },
        {
            icon: FileCode,
            title: "Data Cleaning",
            desc: "Master Python (Pandas) to clean messy datasets.",
            color: "text-brand-blue"
        },
        {
            icon: Search,
            title: "Insight Generation",
            desc: "SQL Deep Dives to answer complex business questions.",
            color: "text-brand-teal"
        },
        {
            icon: PieChart,
            title: "Executive Reporting",
            desc: "Build dashboards in Tableau/PowerBI for stakeholders.",
            color: "text-purple-400"
        }
    ];

    return (
        <section className="py-20 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-light">Your Path to Senior Analyst</h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12 group">
                                {/* Dot on timeline */}
                                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border border-brand-dark bg-brand-slate/50 group-hover:bg-brand-teal group-hover:scale-125 transition-all`} />

                                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                    <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${step.color}`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-brand-light">{step.title}</h4>
                                        <p className="text-brand-slate text-sm mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
