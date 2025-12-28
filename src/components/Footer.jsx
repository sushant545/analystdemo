import React from 'react';
import { Database, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center space-x-2 mb-4">
                            <Database className="w-5 h-5 text-brand-teal" />
                            <span className="text-xl font-bold text-brand-light tracking-tight">
                                AnalystConnect
                            </span>
                        </a>
                        <p className="text-brand-slate text-sm leading-relaxed">
                            Bridging the gap between certification and employment through simulated work experience.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-brand-light font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-brand-slate">
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Mentorship</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Real Projects</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">SQL Gym</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">For Business</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-light font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-brand-slate">
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Discord Community</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Daily SQL Challenge</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Instructor Apply</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Career Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-light font-bold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-brand-slate hover:text-brand-blue transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-brand-slate hover:text-brand-light transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-brand-slate hover:text-brand-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-slate text-sm">© 2025 AnalystConnect. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-brand-slate">
                        <a href="#" className="hover:text-brand-light">Privacy</a>
                        <a href="#" className="hover:text-brand-light">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
