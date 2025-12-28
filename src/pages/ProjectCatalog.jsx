import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Zap, Briefcase, Tag } from 'lucide-react';
import { projects } from '../data/mockProjects';

const ProjectCard = ({ project }) => (
    <div className="bg-brand-navy border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all group">
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${project.logoColor} flex items-center justify-center text-white font-bold text-lg`}>
                        {project.company.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-brand-slate uppercase tracking-wider">{project.role}</h3>
                        <p className="text-xs text-brand-slate/50">{project.company}</p>
                    </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-white/5 text-[10px] uppercase font-bold text-brand-slate border border-white/5">
                    {project.difficulty}
                </span>
            </div>

            <h2 className="text-xl font-bold text-brand-light mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h2>
            <p className="text-sm text-brand-slate line-clamp-2 mb-4">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                        <Tag className="w-3 h-3" /> {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-brand-slate">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {project.time}</span>
                    <span className="flex items-center gap-1 text-orange-400"><Zap className="w-3 h-3" /> {project.xp} XP</span>
                </div>

                <Link to={`/app/projects/${project.id}/work`} className="px-4 py-2 bg-brand-teal text-brand-navy text-xs font-bold rounded-lg hover:bg-brand-teal/90 transition-colors">
                    Start Project
                </Link>
            </div>
        </div>
    </div>
);

const ProjectCatalog = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Fintech', 'E-commerce', 'Healthcare', 'Logistics'];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-4">
                        <Briefcase className="w-3 h-3" /> Virtual Internships
                    </div>
                    <h1 className="text-3xl font-bold text-brand-light">Real World Projects</h1>
                    <p className="text-brand-slate mt-2 max-w-2xl">
                        Gain experience by solving actual business cases. These simulations are designed to mimic the workflow of a Data Analyst at top tech companies.
                    </p>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-6 border-b border-white/5">
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-brand-slate hover:bg-white/10 hover:text-brand-light transition-colors whitespace-nowrap"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 bg-brand-navy border border-white/10 p-2 rounded-lg w-full md:w-64">
                    <Search className="w-4 h-4 text-brand-slate ml-2" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="bg-transparent border-none focus:ring-0 text-sm text-brand-light placeholder:text-brand-slate/50 w-full"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectCatalog;
