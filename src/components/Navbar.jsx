import React, { useState } from 'react';
import { Database, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-brand-navy/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="p-2 bg-brand-blue/10 rounded-lg">
                        <Database className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="self-center text-xl font-bold whitespace-nowrap text-brand-light tracking-tight">
                        AnalystConnect
                    </span>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-brand-navy bg-brand-teal hover:bg-brand-teal/80 focus:ring-4 focus:outline-none focus:ring-brand-teal/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center hidden md:block transition-all transform hover:scale-105">
                        Start Your First Project
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brand-slate rounded-lg md:hidden hover:bg-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg bg-brand-dark/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="#" className="block py-2 px-3 text-brand-slate hover:text-brand-teal transition-colors md:p-0">Mentorship</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brand-slate hover:text-brand-teal transition-colors md:p-0">Real Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brand-slate hover:text-brand-teal transition-colors md:p-0">SQL Gym</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-brand-slate hover:text-brand-teal transition-colors md:p-0">For Business</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
