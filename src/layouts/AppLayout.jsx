import React from 'react';
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Database,
    Briefcase,
    BookOpen,
    Settings,
    Flame,
    Bell,
    LogOut
} from 'lucide-react';
import { userProfile } from '../data/mockData';

const SidebarItem = ({ to, icon: Icon, label, disabled }) => {
    if (disabled) {
        return (
            <div className="flex items-center space-x-3 px-4 py-3 text-brand-slate/50 cursor-not-allowed">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
                <span className="text-[10px] uppercase bg-white/5 px-1.5 py-0.5 rounded ml-auto">Soon</span>
            </div>
        );
    }

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group ${isActive
                    ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20'
                    : 'text-brand-slate hover:bg-white/5 hover:text-brand-light'
                }`
            }
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </NavLink>
    );
};

const AppLayout = () => {
    const location = useLocation();

    // Simple title mapping
    const getPageTitle = () => {
        if (location.pathname.includes('dashboard')) return 'Dashboard';
        if (location.pathname.includes('sql-gym')) return 'SQL Gym';
        return 'AnalystConnect';
    };

    return (
        <div className="min-h-screen bg-brand-dark flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-brand-navy flex flex-col fixed h-full z-20">
                <Link to="/" className="p-6 flex items-center space-x-2 hover:bg-white/5 transition-colors">
                    <div className="p-1.5 bg-brand-blue/10 rounded-lg">
                        <Database className="w-5 h-5 text-brand-teal" />
                    </div>
                    <span className="font-bold text-lg text-brand-light tracking-tight">AnalystConnect</span>
                </Link>

                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <div className="mb-6">
                        <p className="px-4 text-xs font-semibold text-brand-slate/50 uppercase tracking-wider mb-2">Platform</p>
                        <SidebarItem to="/app/dashboard" icon={LayoutDashboard} label="Dashboard" />
                        <SidebarItem to="/app/sql-gym" icon={Database} label="SQL Gym" />
                        <SidebarItem to="/app/projects" icon={Briefcase} label="Real Projects" />
                        <SidebarItem to="#" icon={BookOpen} label="Learning Path" disabled />
                    </div>

                    <div>
                        <p className="px-4 text-xs font-semibold text-brand-slate/50 uppercase tracking-wider mb-2">Account</p>
                        <SidebarItem to="#" icon={Settings} label="Settings" />
                    </div>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link to="/" className="flex items-center space-x-3 text-brand-slate hover:text-red-400 text-sm font-medium w-full px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-64 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="h-16 border-b border-white/10 bg-brand-navy/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-brand-light">{getPageTitle()}</h1>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1.5 text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20">
                            <Flame className="w-4 h-4 fill-current" />
                            <span className="text-xs font-bold">{userProfile.streak} Day Streak</span>
                        </div>

                        <div className="flex items-center space-x-1.5 text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            <span className="text-xs font-bold">{userProfile.xp} XP</span>
                        </div>

                        <div className="h-6 w-px bg-white/10 mx-2" />

                        <button className="text-brand-slate hover:text-brand-light relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-brand-teal transform translate-x-1/2 -translate-y-1/2 ring-2 ring-brand-navy" />
                        </button>

                        <div className="flex items-center space-x-3 cursor-pointer group">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-purple-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-transparent group-hover:ring-brand-teal/50 transition-all">
                                {userProfile.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Outlet */}
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
