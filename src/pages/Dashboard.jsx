import React from 'react';
import { ArrowRight, Trophy, Target, Globe } from 'lucide-react';
import { userProfile } from '../data/mockData';
import { Link } from 'react-router-dom';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-brand-navy border border-white/5 p-6 rounded-2xl">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <p className="text-brand-slate text-sm font-medium">{label}</p>
        <p className="text-2xl font-bold text-brand-light mt-1">{value}</p>
    </div>
);

const Dashboard = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
                <h2 className="text-3xl font-bold text-brand-light">Welcome back, {userProfile.name}.</h2>
                <p className="text-brand-slate mt-2">Ready to solve some real business problems today?</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={Target}
                    label="Problems Solved"
                    value={`${userProfile.solved}/${userProfile.total}`}
                    color="bg-brand-blue/10 text-brand-blue"
                />
                <StatCard
                    icon={Trophy}
                    label="Current Streak"
                    value={`${userProfile.streak} Days`}
                    color="bg-orange-500/10 text-orange-500"
                />
                <StatCard
                    icon={Globe}
                    label="Global Rank"
                    value={userProfile.rank}
                    color="bg-purple-500/10 text-purple-500"
                />
            </div>

            {/* Continue Learning */}
            <div className="bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 p-[1px] rounded-2xl">
                <div className="bg-brand-navy rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold mb-3 border border-yellow-500/20">
                                Resume Practice
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-2">Calculate Monthly Recurring Revenue</h3>
                            <p className="text-brand-slate max-w-xl">
                                You left off on this Medium difficulty problem. Review your aggregation logic to find the correct MRR.
                            </p>
                        </div>
                        <Link
                            to="/app/sql-gym/1"
                            className="flex items-center gap-2 px-6 py-3 bg-brand-teal text-brand-navy font-bold rounded-xl hover:bg-brand-teal/90 transition-transform hover:scale-105 shadow-lg shadow-brand-teal/10"
                        >
                            Continue Solving <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
