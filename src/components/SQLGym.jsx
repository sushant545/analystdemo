import React, { useState } from 'react';
import { Play, Database, RotateCcw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SQLGym = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleRun = () => {
        setIsRunning(true);
        setShowResults(false);

        // Simulate API delay
        setTimeout(() => {
            setIsRunning(false);
            setShowResults(true);
        }, 1500);
    };

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-4">
                        The <span className="text-gradient">SQL Gym</span>
                    </h2>
                    <p className="text-brand-slate max-w-2xl mx-auto">
                        Don't just watch videos. Practice with real business logic.
                        Run queries against live databases and see instant visualizations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-brand-navy">
                    {/* Left Pane: Code Editor */}
                    <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 min-h-[400px]">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                            <div className="flex items-center space-x-2">
                                <Database className="w-4 h-4 text-brand-blue" />
                                <span className="text-xs font-mono text-brand-slate">revenue_db.sql</span>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleRun}
                                    disabled={isRunning}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-brand-teal text-brand-navy text-xs font-bold rounded-md hover:bg-brand-teal/90 transition-colors disabled:opacity-50 disabled:cursor-wait"
                                >
                                    <Play className="w-3 h-3 fill-current" /> {isRunning ? 'Running...' : 'Run Query'}
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 p-6 bg-brand-navy/50 font-mono text-sm relative group">
                            <div className="absolute left-0 top-6 bottom-0 w-12 text-right pr-4 text-brand-slate/30 select-none">
                                1<br />2<br />3<br />4
                            </div>
                            <div className="pl-8 text-brand-light">
                                <span className="text-pink-400">SELECT</span> * <br />
                                <span className="text-pink-400">FROM</span> monthly_revenue <br />
                                <span className="text-pink-400">WHERE</span> year = <span className="text-yellow-300">'2025'</span> <br />
                                <span className="text-pink-400">AND</span> status = <span className="text-yellow-300">'confirmed'</span>;
                            </div>

                            {/* Syntax Highlight/Cursor Mock */}
                            <div className="ml-8 mt-1 w-2 h-4 bg-brand-teal/50 animate-pulse inline-block"></div>
                        </div>
                    </div>

                    {/* Right Pane: Visualization */}
                    <div className="flex flex-col bg-brand-dark/50 min-h-[400px]">
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                            <span className="text-xs font-semibold text-brand-slate uppercase tracking-wider">Result Output</span>
                            <button
                                onClick={() => setShowResults(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors text-brand-slate"
                                title="Reset"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <div className="flex-1 p-6 relative flex items-center justify-center">

                            {!showResults && !isRunning && (
                                <div className="text-center text-brand-slate/50">
                                    <Database className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                    <p className="text-sm">Run the query to view results</p>
                                </div>
                            )}

                            {isRunning && (
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mb-3"></div>
                                    <p className="text-xs text-brand-teal animate-pulse">Fetching 24,050 records...</p>
                                </div>
                            )}

                            {showResults && !isRunning && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full h-full flex flex-col"
                                >
                                    {/* Simulated Table */}
                                    <div className="flex items-center gap-2 mb-4 text-xs text-green-400">
                                        <CheckCircle2 className="w-4 h-4" /> Query executed successfully in 0.24s
                                    </div>

                                    <div className="overflow-hidden rounded-lg border border-white/10">
                                        <table className="w-full text-left text-xs">
                                            <thead className="bg-white/5 text-brand-slate">
                                                <tr>
                                                    <th className="p-3 font-medium">Month</th>
                                                    <th className="p-3 font-medium">Region</th>
                                                    <th className="p-3 font-medium text-right">Revenue</th>
                                                    <th className="p-3 font-medium text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 text-brand-light">
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="p-3">Jan 2025</td>
                                                    <td className="p-3">North America</td>
                                                    <td className="p-3 text-right font-mono text-brand-teal">$124,500</td>
                                                    <td className="p-3 text-center"><span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]">Confirmed</span></td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="p-3">Feb 2025</td>
                                                    <td className="p-3">Europe</td>
                                                    <td className="p-3 text-right font-mono text-brand-teal">$98,200</td>
                                                    <td className="p-3 text-center"><span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]">Confirmed</span></td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="p-3">Mar 2025</td>
                                                    <td className="p-3">Asia Pacific</td>
                                                    <td className="p-3 text-right font-mono text-brand-teal">$145,100</td>
                                                    <td className="p-3 text-center"><span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]">Confirmed</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SQLGym;
