import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Loader2, AlertCircle } from 'lucide-react';

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError('');
        try {
            await signIn(data.email, data.password);
            navigate('/app/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-brand-light mb-2">Welcome back</h2>
                <p className="text-brand-slate">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="••••••••"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-brand-slate/20 bg-white/5 text-brand-blue focus:ring-brand-blue" />
                        <span className="text-sm text-brand-slate group-hover:text-brand-light transition-colors">Remember for 30 days</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm font-medium text-brand-blue hover:text-brand-teal transition-colors">
                        Forgot password?
                    </Link>
                </div>

                {/* Error logic */}
                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white font-bold rounded-lg shadow-lg shadow-brand-blue/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? 'Signing in...' : 'Sign in'}
                </button>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-brand-navy text-brand-slate">Or continue with</span>
                    </div>
                </div>

                {/* Google Button (Placeholder) */}
                <button
                    type="button"
                    className="w-full py-3 px-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Google
                </button>

                <p className="text-center text-sm text-brand-slate">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-brand-blue hover:text-brand-teal transition-colors">
                        Sign up for free
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
