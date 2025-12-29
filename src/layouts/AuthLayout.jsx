import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex bg-brand-navy">
            {/* Left Side - Testimonials/Brand */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 z-0" />

                {/* Animated Shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl z-0"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-3xl z-0"
                />

                <div className="relative z-10 flex flex-col justify-center px-16 h-full text-brand-light">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
                            AnalystConnect
                        </h1>
                        <p className="text-xl text-brand-slate font-light">
                            Master the Data Ecosystem.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                        <p className="text-lg text-brand-slate italic mb-6">
                            "AnalystConnect helped me land my role at Deloitte. The practical SQL Gym scenarios were a game changer for my interview prep."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center font-bold text-white">
                                SJ
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-light">Sarah J.</h4>
                                <p className="text-sm text-brand-slate">Senior Data Analyst @ Deloitte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-brand-navy">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
