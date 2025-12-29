import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { Loader2, ArrowLeft, Mail } from 'lucide-react';

const forgotPasswordSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
        }, 1500);
    };

    if (isSent) {
        return (
            <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                    <Mail className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-brand-light mb-2">Check your email</h2>
                <p className="text-brand-slate mb-8">
                    We've sent a password reset link to <br />
                    <span className="text-brand-light font-medium">your email address</span>.
                </p>

                <div className="space-y-4">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white font-bold rounded-lg shadow-lg shadow-brand-blue/20 transition-all">
                        Open email app
                    </button>
                    <Link to="/login" className="block text-brand-slate hover:text-brand-light transition-colors text-sm">
                        Skip, I'll confirm later
                    </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-sm text-brand-slate">
                    Did not receive the email? <button className="text-brand-blue hover:text-brand-teal font-medium">Click to resend</button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <Link to="/login" className="inline-flex items-center gap-2 text-brand-slate hover:text-brand-light mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to log in
            </Link>

            <div className="mb-8">
                <h2 className="text-3xl font-bold text-brand-light mb-2">Forgot password?</h2>
                <p className="text-brand-slate">No worries, we'll send you reset instructions.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white font-bold rounded-lg shadow-lg shadow-brand-blue/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? 'Sending link...' : 'Send reset link'}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
