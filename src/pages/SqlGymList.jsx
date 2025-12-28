import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { sqlProblems } from '../data/mockData';

const DifficultyBadge = ({ level }) => {
    const colors = {
        Easy: 'bg-green-500/10 text-green-500 border-green-500/20',
        Medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        Hard: 'bg-red-500/10 text-red-500 border-red-500/20',
    };
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${colors[level] || colors.Easy}`}>
            {level}
        </span>
    );
};

const SqlGymList = () => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Business Logic', 'Data Cleaning', 'Joins'];

    const filteredProblems = filter === 'All'
        ? sqlProblems
        : sqlProblems.filter(p => p.tags.includes(filter));

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-brand-light">The Gym</h2>
                    <p className="text-brand-slate mt-1">Practice SQL with real-world scenarios.</p>
                </div>

                <div className="flex items-center gap-3 bg-brand-navy border border-white/10 p-1.5 rounded-lg max-w-md w-full md:w-auto">
                    <Search className="w-5 h-5 text-brand-slate ml-2" />
                    <input
                        type="text"
                        placeholder="Search problems..."
                        className="bg-transparent border-none focus:ring-0 text-brand-light text-sm w-full placeholder:text-brand-slate/50"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f
                                ? 'bg-brand-blue text-brand-navy font-bold'
                                : 'bg-white/5 text-brand-slate hover:bg-white/10 hover:text-brand-light'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Problem List */}
            <div className="bg-brand-navy border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-xs font-semibold uppercase text-brand-slate tracking-wider">
                        <tr>
                            <th className="p-4 w-12 text-center">Status</th>
                            <th className="p-4">Title</th>
                            <th className="p-4">Difficulty</th>
                            <th className="p-4">Acceptance</th>
                            <th className="p-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-brand-light">
                        {filteredProblems.map((problem) => (
                            <tr key={problem.id} className="group hover:bg-white/5 transition-colors">
                                <td className="p-4 text-center">
                                    {problem.status === 'Solved' ? (
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                                    ) : (
                                        <Circle className="w-5 h-5 text-brand-slate/30 mx-auto group-hover:text-brand-slate transition-colors" />
                                    )}
                                </td>
                                <td className="p-4">
                                    <Link to={`/app/sql-gym/${problem.id}`} className="font-semibold hover:text-brand-blue transition-colors">
                                        {problem.title}
                                    </Link>
                                    <div className="flex gap-2 mt-1">
                                        {problem.tags.map(tag => (
                                            <span key={tag} className="text-[10px] text-brand-slate bg-white/5 px-1.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <DifficultyBadge level={problem.difficulty} />
                                </td>
                                <td className="p-4 text-brand-slate text-sm font-mono">
                                    {problem.acceptance}
                                </td>
                                <td className="p-4 text-right">
                                    <Link
                                        to={`/app/sql-gym/${problem.id}`}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue hover:text-brand-navy transition-all"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredProblems.length === 0 && (
                    <div className="p-12 text-center text-brand-slate">
                        <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>No problems found matching this filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SqlGymList;
